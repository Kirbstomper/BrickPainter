const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.json());


//Link angular files to express to serve
var angularDir = __dirname+"/dist/BrickPaint";
app.use(express.static(angularDir));


app.listen(8080,()=> {
    console.log('server started!')
});
