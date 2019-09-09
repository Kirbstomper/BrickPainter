const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const request = require('request');



const db_url = process.env.MONGODB_CONNECTION ||"mongodb://localhost:27017/sample";            // Set to your MongoDB url
const API_KEY = process.env.REBRICKABLE_API || "7782c76c8e367386bf510998fad6fe50"; //Set to your API key for Rebrickable 



const app = express();
app.use(bodyParser.json());


//Link angular files to express to serve
var angularDir = __dirname+"/dist/BrickPaint";
app.use(express.static(angularDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(db_url, function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

app.listen(process.env.PORT || 8080,()=> {
    console.log('server started!');
});

});


// Rest API

//Get colours for part
app.post("/api/getColorsForPart",function(req,res){

    //Check if there is a record in the database
    db.collection("parts").find({"part":req.body.part}).toArray(function(err,docs){
        if(err || docs.length == 0){ // make actual API call, cache and return it
            
            request.get("https://rebrickable.com/api/v3/lego/parts/"+
                                    req.body.part+
                                    "/colors/?key="+API_KEY,function(error, response, body){
                                        db.collection("parts").insertOne({"part":req.body.part,"response":body})
                                        res.send(body)
                                    })
        }else{// return the cached result
            res.status(200).json(JSON.parse(docs[0].response));
        }
    });

});

//Get parts list for a set
app.post("/api/getPartsListForSet",function(req,res){
    //Check if there is a record in the database
    db.collection("sets").find({"set":req.body.set}).toArray(function(err,docs){
        if(err || docs.length == 0){ // make actual API call, cache and return it
            
            request.get("https://rebrickable.com/api/v3/lego/sets/"
                        +req.body.set
                        +"/parts/?page_size=10000&key="+API_KEY,function(error, response, body){
                                        db.collection("sets").insertOne({"set":req.body.set,"response":body})
                                        res.send(body)
                                    })
        }else{// return the cached result
            res.status(200).json(JSON.parse(docs[0].response));
        }
    });

});



