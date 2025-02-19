import mongoose,{model,Schema} from "mongoose";

mongoose.connect("mongodb+srv://rajputsny2:ond1rGQZUbhgLloI@cluster0.cbcsh.mongodb.net/brainlyapp");

//designing a schema for user collection
//each user will have a unique username and password

const userSchema=new Schema({
    username:{type:String,required:true,unique:true},//unique username to avoid duplicate usernames
    password:{type:String,required:true},
})

//creating a model for user collection enabling interaction with the database
export const UserModel=model("User",userSchema);

// Defining a schema for the 'Content' collection
// Each content will have a 'title', a 'Link', an array of 'tags', and a reference to a 'userId'
const contentSchema=new Schema({
    title:{type:String,required:true},
    link:{type:String,required:true},
    tags:[{type:mongoose.Types.ObjectId,ref:"tag"}], // Array of tag IDs, referencing the 'tag' collection
    userId:{type:mongoose.Types.ObjectId,ref:"User",required:true}, // The 'userId' field is mandatory to link content to a user
})

//craeting a model for the 'Content' collection to interracyt with the database
export const ContentModel=model("Content",contentSchema);

// Importing the Schema and model from Mongoose
// Mongoose is a library that provides a schema-based solution for modeling application data
const LinkSchema = new Schema({
    // 'hash' is a string that represents the shortened or hashed version of a link
    hash: String,

    // 'userId' is a reference to the 'User' collection in the database.
    // It uses Mongoose's ObjectId type for relational data.
    // The 'ref' property specifies the referenced collection name ('User').
    // The 'required' property ensures this field must be provided when creating a document.
    // The 'unique' property enforces that each 'userId' in this collection is unique.
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
});

// Exporting the LinkModel based on the LinkSchema
// The model represents the 'Links' collection in the database
export const LinkModel = model("Links", LinkSchema);