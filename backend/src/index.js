const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
//  const Client = require('./models/client')
const cors = require("cors");

const app = express()
const port = process.env.PORT || 8080;

app.use(express.json())

app.use(cors());
app.post('/client', (req, res) => {
    const client = new Client(req.body);
    client.save().then(() => {
        res.send(Client)

    }).catch((e) => {
        res.status(400).send(e)
    });
});
app.get("/client", (req, res) => {
    Client.find({})
    .then((Client) => {
        res.json(Client);
})
.catch((error) => {
    res.status(500).send(error);
});
});
app.listen(port, () => {
    console.log('Server is up on port ' + port)
});