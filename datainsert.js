var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Student:Bro45ther@cluster0.kdbuphw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Maju");
  var myobj = { name: "Asharib", address: "sp22bscs0074" };
  dbo.collection("Student").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("data inserted");
    db.close();
  });
})