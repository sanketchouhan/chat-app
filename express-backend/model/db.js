const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ChatAppDB", { useNewUrlParser: true }, (err) => {
   // mongodb://sanketChapAppDb:<password>@chatappdb-shard-00-00-qxx9t.gcp.mongodb.net:27017,chatappdb-shard-00-01-qxx9t.gcp.mongodb.net:27017,chatappdb-shard-00-02-qxx9t.gcp.mongodb.net:27017/test?ssl=true&replicaSet=ChatAppDB-shard-0&authSource=admin&retryWrites=true&w=majority
    // mongoose.connect("mongodb://sanketChapAppDb:sanket12345@chatappdb-shard-00-00-qxx9t.gcp.mongodb.net:27017,chatappdb-shard-00-01-qxx9t.gcp.mongodb.net:27017,chatappdb-shard-00-02-qxx9t.gcp.mongodb.net:27017/ChatAppDB?ssl=true&replicaSet=ChatAppDB-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log("DB connection successful");
    } else {
        console.log("DB connection error " + err);
    }
});
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://sanketChapAppDb:sanket12345@chatappdb-qxx9t.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });