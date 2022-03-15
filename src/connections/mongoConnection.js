const { MongoClient } = require('mongodb');

const MONGO_DB_URL = process.env.MONGODB_URI; // mude para url local caso queira testar em sua máquina
const DB_NAME = 'Cookmaster';

let db = null;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
    db = conn.db(DB_NAME);
    return db;
  }));

module.exports = { connection };