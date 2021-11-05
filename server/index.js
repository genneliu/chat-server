const express = require('express')
//require controller
const controller = require.apply('./controllers/messages_controller
')

const app = express();

//parse json from body
app.use(express.json())

const messagesBaseURL = "/api/messages";

app.post(messagesBaseURL, controller.create);
app.get(messagesBaseURL, controller.read);
app.put(`${messagesBaseURL}/:id`, controller.update)
app.delete(`${messagesBaseURL}/:id`, mc.delete)


const port = 3001;
app.listen(port, ()=> {
    console.log(`Chat project running on ${port}`)
})


