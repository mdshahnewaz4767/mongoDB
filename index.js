const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://organicUser:NewazZ@1010*@cluster0.mkcgo.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.get('/', (req, res) => {
    res.send('I am working');
})

client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  // perform actions on the collection object
  console.log('database connected');
  client.close();
});

app.listen(3001);