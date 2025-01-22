const mongoose = require("mongoose");
//schema import kiya gya hai mongoose se
const Schema = mongoose.Schema;
//objectid import ki gyi hai schema se
const ObjectId = Schema.ObjectId;

//ek nya schema bnaya gya hai ye hai uska syntax
// User is a new schema with four fields: title, description, completed, and createdAt
//schemas means structure of the data
const User = new Schema({
  name: String,
  email:  {type: String, unique: true},
  password: String,
});

const Todo = new Schema({
  userId: ObjectId, 
  title: String,
  done: Boolean,
});

//mongoose.model: This function from the Mongoose library defines a model.

//'todos': This is the name of the collection in your MongoDB database. If the collection does not exist, Mongoose will create it for you.

//Todo: This is the schema definition for the model. The schema outlines the structure of the documents within the collection.
//models means hm mongodb me kha store krege
const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

//.exports is used for export here object export hua hai isliye{ }
module.exports = {
  UserModel,
  TodoModel,
};
