const express=require('express');
const bodyParser=require('body-parser');
const controller=require('./controller');
const app=express();
const massive = require('massive');
require('dotenv').config();

app.use(bodyParser.json());

const port = 4000;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.get('/api/houses', controller.read);
app.post('/api/house', controller.create);