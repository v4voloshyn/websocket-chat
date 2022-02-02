# Websocket-chat
Simple chat on WebSocket

### To run and view this project:
- Clone this repo;
- Run the WebSocket server from root folder of this repo via command: **npm run start**
- Run Live Server or http-server with index.html file;
- That's all! 
- Open two or more tabs in one or few browsers, enter your UserName (The name what will be shown in chat) and start to talk :)
  ## OR
  You can just open **[This Link](https://v4voloshyn.github.io/websocket-chat/)** in a new tab and just do the last step of the list above ;)


#### Task requiers:
1) Run the WebSocket server from root folder of this repo via command: npm run start
After that server will be available on ws://localhost:8080
2) The task is to implement the chat that can broadcast messages between 2 or 
more different windows as it is shown on the screenshot bellow.
3) Message should contain username, time and text content.

** Notes:
- Pay attention that you will not receive your own messages from server, you should 
connect at least 2 different browser windows to it, so that way one will send message 
and the other will receive it (and vice versa).
- You can use prompt() to ask user for his name when opening the chat.
