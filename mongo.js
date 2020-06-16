const mongoose = require("mongoose");


mongoose.Promise = global.Promise;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://abesh:abesh@cluster0-duuve.mongodb.net/registration?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
