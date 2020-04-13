// Render chat templated to the DOM
// clear the lsit of chats (when the room changes)




class ChatUI 
{
    constructor(list)
    {
        this.list = list;
    }

    clear()
    {
        this.list.innerHTML = "";
        // Removing style from non selected chatroom
        rooms.querySelectorAll('.btn').forEach ( element =>
            {
                element.style.color = 'white'
            });
    }

    render(data)
    {
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix :  true}
        );
        const html = `
        <li class="list-group-item">
          <span class="username">${data.username}</span>
          <span class="message">${data.message}</span>
          <div class="time">${when}</div>
        </li>
        `;

        this.list.innerHTML += html;
        
        // Scrolling the chatlist to the bottom
       chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}