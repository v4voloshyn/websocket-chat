// const socket = new WebSocket('ws://localhost:8080/');
const socket = new WebSocket('wss://simple-websocket-chat-v4v.herokuapp.com');


let userName = '';

socket.onopen = () => {
   userName = prompt('What is yout nickname?') || 'Anonymous';

   console.log(`${userName} successfully connected!`);
}

socket.onerror = () => {
   console.log(`There something wrong with WebSocket connection...`);
}

socket.onmessage = (e) => {
   const chat = document.getElementById('chat');
   const {userName, message} = JSON.parse(e.data);

   document.querySelector('ul').insertAdjacentHTML('beforeend', renderMessage(userName, message, true))
   chat.scrollTop = chat.scrollHeight;
}// When you RECIVE message

document.querySelector('form').addEventListener('submit', (e) => {
   e.preventDefault();
   const chat = document.getElementById('chat');
   let message = document.querySelector('textarea').value;

   if(message) {
      socket.send(JSON.stringify({ userName, message }));
      document.querySelector('ul').insertAdjacentHTML('beforeend', renderMessage(userName, message, false))
      chat.scrollTop = chat.scrollHeight;
      document.querySelector('textarea').value = '';
   }
})//When you SEND message

const renderMessage = (username, message, isReceiver) => {
   const date = new Date();

   return `
   <li class=${isReceiver ? 'recive' : 'send'}>
      ${isReceiver ? `<p class="user">${username}</p>` : ''}
      <span class=${isReceiver ? 'recive-s' : 'send-s'}>${message}
         <span class="time">${date.toLocaleTimeString()}</span>
      </span>
   </li>
   `
}