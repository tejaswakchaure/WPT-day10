import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://127.0.0.1:27017";
  // open the connection
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const messageCollection = db.collection("message");

 let inputDoc = {message : "Hello"};
  await messageCollection.insertOne(inputDoc);
  console.log("Record Added Successfully");

  // close the connection
  await client.close();
  
}

main();