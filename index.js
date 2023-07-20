
MONGO_DB=mongodb://127.0.0.1:27017
DATABASE=test_db


// ============================
// ============================


const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_DB);

module.exports =  async(collection)=> {
    try {
      const database = await client.db(process.env.DATABASE);
      return await database.collection(collection);
    }catch(err){
        console.log('Connection error:', err);
    }
}

// =========================================
// =========================================

const dbConnect = require('./db/db');

const movies = await dbConnect('movies');
movies.insertOne({name:'sourov pal', email:'admin@gmail.com', age:21});
const movie = await movies.findOne({});











