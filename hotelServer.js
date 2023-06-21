const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const url = "mongodb+srv://rushikeshandhale1010:QiNHtSkrR7ZG4Qm0@rushi.fvpculu.mongodb.net/";
const database = "Food_Menu";
const client = new MongoClient(url);

app.get("/Non-veg", async (req, res) => {
  try {
    await client.connect(); // Connect to the database
    const db = client.db(database);
    const collection = db.collection("Non-Veg");
    const response = await collection.find().toArray();
    res.header("Access-Control-Allow-Origin",'*');
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Render the response in an HTML template
    res.send(response);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  } finally {
    await client.close(); // Close the database connection
  }
});
app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });




