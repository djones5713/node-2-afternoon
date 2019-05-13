const express = require("express");
const messagesController = require("./controller/messages_controller");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/buid'));

const messageURL = "/api/messages";

app.post(messageURL, messagesController.create);

app.get(messageURL, messagesController.read);

app.put(`${messageURL}/:id`, messagesController.update);

app.delete(`${messageURL}/:id`, messagesController.delete);

const port = 3001;

app.listen(port, () => {
    console.log(`Sever listen on port ${port}`);
})

