// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');
const chatWindow = document.querySelector('.chat-window');
const button = document.querySelector('.btn');

 rooms.querySelector('#general').style.color = 'black';

//scorrling the page to the latest chat
chatWindow.scrollTop = chatWindow.scrollHeight;

// Add a new chat
newChatForm.addEventListener('submit' , e =>
{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
      .then( () => newChatForm.reset())
      .catch(err => console.log(err));
})

// Update username
newNameForm.addEventListener('submit' , e =>
{
    e.preventDefault();
    // update name via chatroom class
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();
    // show then hide the update message
    updateMessage.innerText = `Your name is updated to ${newName}` ;
    setTimeout( ()=>
    {
        updateMessage.innerText = "";
    },2500)
})

// Update the chat room
rooms.addEventListener('click' , e =>
{
   if(e.target.tagName === 'BUTTON')
   {
       chatUI.clear();
      // rooms.querySelector(`#${this.chatroom.room}`).style.color = 'white';  //.getAttribute("style"); //.style.color = 'white';
       console.log(e.target.style.color = 'black');
       chatroom.updateRoom(e.target.getAttribute('id'));
       chatroom.getChats( (data)=> chatUI.render(data));
   };
});


// Check local storage for name
const username = localStorage.username ? localStorage.username : 'Anonymous';
// Class Instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming' , username);



// Get the chats and render
chatroom.getChats( (data)=> chatUI.render(data));