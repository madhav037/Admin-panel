const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbName = "netflixAdminPannel";
const client = new MongoClient(url);

async function checkDataWithDb(emailNumber, password) {
  try {
    await client.connect();
    console.log("connected to database for insert");

    const db = client.db(dbName);

    const collection = db.collection("userDetails");

    let ans = await collection.findOne({ emailNumber: { $eq: emailNumber } });
    if (ans) {
      if (ans.password === password) {
        console.log("valid");
        return true;
      } else {
        console.log("wrong email or password");
      }
    } else {
      console.log("incorrect email");
    }
    return false;
  } catch (error) {
    console.log("Error : ", error);
  } finally {
    await client.close();
    console.log("connection closed");
  }
}

module.exports = {
  checkDataWithDb,
};
