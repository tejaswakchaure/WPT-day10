
// remotly executed for that i have remote addres
//network call
//network address
//http://localhost:4000/

import express from "express";
const app = express();

function main(req, res) {
  // return "some message";
  res.send("some message...!")
}
function first(req, res){
    res.send("Success");
}
// http://localhost:4000/main
app.get("/main", main);

// http://localhost:4000/first
app.get("first", first);

//http://localhost:4000
app.listen(4000);