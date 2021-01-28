let chats = [{
    'image': 'pics/alex.jpeg',
    'name': 'Alex',
    'status': 'pics/StatusAlex.jpeg',
    'messages':['Hey du 😎!']
},
{
    'image': 'pics/jakob.jpeg',
    'user': 'Jakob',
    'status': 'pics/StatusJakob.jpeg',
    'messages':['Und liegt bei euch heute auch so viel Schnee?❄☃']
},
{
    'image': 'pics/marie.jpeg',
    'user': 'Marie',
    'status': 'pics/StatusMarie.jpeg',
    'messages':['Schaffst du es heute pünktlich?', 'Es ist wichtig! Gib mir dann bitte bescheid!']
},
{
    'image': 'pics/nadine.jpeg',
    'user': 'Nadine',
    'status': 'pics/StatusNadine.jpeg',
    'messages':['Guten Morgen :) Gut geschlafen?😴']
},
{
    'image': 'pics/peter.jpeg',
    'user': 'Peter',
    'status': 'pics/StatusPeter.jpeg',
    'messages':['Hab ich mein Handy bei euch liegen lassen?']
},
{
    'image': 'pics/papa.jpeg',
    'user': 'Papa',
    'status': 'pics/StatusPapa.jpeg',
    'messages':['Alles Gute zum Geburtstag!!🎉🎈']
},
{
    'image': 'pics/tanja.jpeg',
    'user': 'Tanja',
    'status': 'pics/StatusTanja.jpeg',
    'messages':['Ich bin in 10 Min. fertig!', 'Fährst du schonmal vor?🚗']
}
];

/**
 * Open Status of contacts
 */
function showStatus(index) {
    document.getElementById('overlay').classList.remove('d-none');
    document.getElementById('overlay').classList.add('Overlay');
    document.getElementById('mypicture').src = chats[index]['status'];
}


/** 
*close Status of contacts
*/
function closeStatus() {
    document.getElementById('overlay').classList.remove('Overlay');
    document.getElementById('overlay').classList.add('d-none');
}

let currentChat;

/**
 * Show the contactlist
 */
function updateHTML() {
    content.innerHTML = '';
    for (let index = 0; index < chats.length; index++) {
        let chat = chats[index];
        content.innerHTML += `<div class="contactcontainer">
                <img src="${chat['image']}" class="contactpic">"
                <h2 class="contactname" onclick="openChat(${index})">${chat['user']}</h2>
                <img src="icons/status.png" class="status" onclick="showStatus(${index})">
        </div>
        `
    }
    /**
     * show the current chat
     */
    currentChatContainer.innerHTML = '';
    if (currentChat == undefined) {
        currentChatContainer.innerHTML += ` <div class="chat-section">
        <h1 class="h1">Deine Quatschecke</h1>
        </div>
        `;
    } else {
        let chat = chats[currentChat];
        currentChatContainer.innerHTML += `<div class="h3"><h3>Chatverlauf mit ${chat['user']}</h3></div>`;
        for (let index = 0; index < chat['messages'].length; index++) {
            const message = chat['messages'][index];
            currentChatContainer.innerHTML += `<div class="message">${message}</div>`;
        }
    }
}

/**
 * Open the picked Chat 
 */
function openChat(i) {
    currentChat = i; 
    updateHTML();
}

/**
 * Sending a Message
 */
function addMessage() {
    let myChatMessage = document.getElementById('myChatMessage');
    chats[currentChat]['messages'].push(myChatMessage.value);

    document.getElementById('myChatMessage').value ='';

    updateHTML();
}

/**
 * Push Message with "Enter"
 */
function init() {
    document.addEventListener("keydown", function (u) {
        if (u.keyCode == 13) {  //checks whether the pressed key is "Enter"
        addMessage();
    }
    });
}

/**
 * Open and Close Smiley menu
 */
function showSmileys() {
    document.getElementById('smileys').classList.remove('d-none');
    document.getElementById('smileys').classList.add('smiley-menu');
}

function closeSmileys() {
    document.getElementById('smileys').classList.remove('smiley-menu');
    document.getElementById('smileys').classList.add('d-none');

}


/**
 * Push smiley into inputfield
 */
function pushSmiley(e) {
    myChatMessage.value += e;
}
