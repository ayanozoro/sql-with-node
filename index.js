const mongoose = require("mongoose");
const express = require("express");
const index = express();
main()
.then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

const User = mongoose.model("User" , userSchema);

const user1 = new User({name : "John" , email : "john@example.com" , password : "13456"});
const user2 = new User({name : "Jane" , email : "jane@example.com" , password : "1456"});
const user3 = new User({name : "Jim" , email : "jim@example.com" , password : "12346"});

index.listen(3000 , ()=>{
    console.log("Server is running on port 3000");
});
