const  express = require('express');
const app = express();
const port = 5001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/estimate-db");

const db = mongoose.connection;
let EstimateModel = null;
db.on('error', console.log.bind(console, 'connection error'));

db.once('open', function(){
    EstimateModel = require('../server/database/estimateSchema');
    console.log('Connection open!!');
});

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, userName: "Noopur"},
        {id: 2, userName: "Pankaj"}
    ];

    res.json(users);

});

app.post('/api/save', (req, res) => {
    debugger;
    console.log(req.body);
    const model = new EstimateModel(req.body);
    
    model.save()
    .then(()=> res.json(model))
    .catch((err)=> next(err));
    
});

app.get('/', (req, res) => {

    res.send("<h1> Welcome to my world </h1>");

});

app.listen(port, () => console.log(`Server started on port : ${port}`));
