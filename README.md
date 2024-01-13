
# JerryChat

JerryChat is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details(sensetive) in encrypted format in Mongo DB Database.


## Technolgoy Stack

**Client:** React JS.

**Server:** Node JS, Express JS.

**Database:** Mongo DB.

## Demo

https://jerrychat.onrender.com/




## Screenshots

![ScreenShot](https://raw.github.com/piyush-eon/mern-chat-app/master/screenshots/mainscreen.PNG)





## Run Locally

Clone the project

```bash
    git clone https://github.com/NitinVadadoriyaa/JerryChat
```

Go to the project directory

```bash
    cd ChatApp
```

Install dependencies

```bash
    npm install
```
```bash
    cd frontend/
    npm install
  ```

Start the server

```bash
    npm run start
```
Start the client

```bash
    //open new terminal
    cd frontend
    npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=5000`

`MONGO_URI = 'Your mongodb api'`


`JWT_SECRET = "your secret name"`


`NODE_ENV = production`

## Note
``Before runing app make some change.

1. backend / server.js 
REPLACE : origin: "https://jerrychat.onrender.com/" To origin: "http://localhost:3000"

2. backend / server.js
REMOVE THIS CODE 

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

3. /frontend/src/components/SingleChat.js
REPLACE: ENDPOINT = "https://jerrychat.onrender.com/" TO ENDPOINT = "http://localhost:5000"
## Features

- Authenticaton
![ScreenShot](https://raw.github.com/piyush-eon/mern-chat-app/master/screenshots/login.PNG)

- Real Time Chatting with Typing indicators
![ScreenShot](https://raw.github.com/piyush-eon/mern-chat-app/master/screenshots/real-time.PNG)

- One to One chat
![ScreenShot](https://raw.github.com/piyush-eon/mern-chat-app/master/screenshots/mainscreen.PNG)

- Search Users
![ScreenShot](https://raw.github.com/piyush-eon/mern-chat-app/master/screenshots/search.PNG)

- Create Group Chats
![ScreenShot](https://raw.github.com/NitinVadadoriyaa/JerryChat/master/screenshorts/newgrp.PNG)

- Notifications
![ScreenShot](https://raw.github.com/NitinVadadoriyaa/JerryChat/master/screenshorts/group_notif.PNG)

- Add or Remove users from group
![ScreenShot](https://raw.github.com/NitinVadadoriyaa/JerryChat/master/screenshorts/addrem.PNG)

- View Other user Profile
![ScreenShot](https://raw.github.com/piyush-eon/mern-chat-app/master/screenshots/profile.PNG)




## Made By
NitinVadadoriya
