// // // 1. to install express => npm install express => in terminal 

// // const express = require("express");

// // const app = express();

// // app.get("/" , (req , res) => {
// //     res.send("welcome to server ");
// // });


// // // to define a port number => listen function 


// // app.listen(5000 , () => {
// //     console.log("server running on 5000");
// // })



// // // 2.  phele server chalAne ke liye => node server.js

// // //  3.  on browser => localhost:5000

// // // 4.  to auto save the server => npm install -g nodemon  => in terminal 

// // // go to package .json  => script =>  "start" : "nodemon server.js"

// // /// finall => server chalane le liye => npm start 


// // // app.get("/user" , (req, res) => {
// // //     res.json({name : "suman" , age : "21"});
// // // });


// // app.use(express.json());

// // // app.post("/mode" , (req , res)  => {
// // //     res.json(req.body);
// // // });


// // let products = [];

// // app.post("/product" , (req,res) => {
// //     products.push(req.body);
// //     res.json(products);
// // });


// // app.get("/product" , (req , res) => {
// //     res.json(products);
// // });



// // app.post("/api" , (req , res) => {
// //     console.log(req.body);

// //     res.json({
// //         message : "data received",
// //         data : req.body
// //     });
// // });







// ///////////////////////////////////////////////////////////////



// /// cors 


// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const User = require("./models/User1");

// const app = express();

// app.use(cors());
// app.use(express.json());


// mongoose.connect("mongodb+srv://suman920112_db_user:sumanWebsite@first.vcrepzq.mongodb.net/")
// .then (() => console.log("mongodb connected "))
// .catch (err => console.log(err));

// app.get("/", (req, res) => {
//   res.send("welcome to server");
// });

// // // ✅ correct variable
// // let users = [];

// // // ✅ correct route
// // app.get("/users", (req, res) => {
// //   res.json(users);
// // });

// // // ✅ correct route
// // app.post("/users", (req, res) => {
// //   const newUser = req.body;
// //   users.push(newUser);
// //   res.json(users);
// // });

// app.listen(3000, () => {
//   console.log("server running on 3000 port");
// });

// app.post("/User1" , async(req , res) => {
//   const newUser = new User (req.body);
//   await newUser.save();
//   res.json(newUser);
// });


// app.get("/User1" , async (req , res) => {
//   const User1 = await User.find();
//   res.json(User1);
// })






const express = require("express");
const {MongoClient}= require("mongodb");

const app = express();
app.use(express.json());

app.get("/" , (req , res) => {
    res.send("server starting on 3000");
})


const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function startServer() {

    await client.connect();
    console.log("mongodb connected ");

    const db  = client.db("firstServer");
    console.log("database connected ");

    const usercollection  = db.collection("firstcolc");
    console.log("collection created");



    // app.post("/add" , async(req , res) => {
    //     await usercollection.insertOne({
    //         name :req.body.name,
    //         age : req.body.age
    //     });

    //     res.send("data inserted ");
    // });



    // app.get("/take" , async(req , res) => {
    //     const data = await usercollection.find().toArray();
    //     res.json(data);
    // });


    // to add the single in collection => insertOne 
    // to add the multiple data in collection => insertMany 


//    await usercollection.insertOne({
//     name :"himani",
//     age : 22
//    });







// data  read => get data 

// find() => all data find , fetch 
// toArray() => multiple data 





await usercollection.insertMany([
    {name : "pooja" , age : 25},
    {name : "ritu" , age:24}
])


// const data = await 
// usercollection.find().toArray();

// console.log(data);


// const data1 = await usercollection.find({
//     name : "ritu"
// }).toArray();

// console.log(data1)


// const user  = await 
// usercollection.findOne({
//     name: "pooja"
// });


// console.log(user);


//////////////////////// update the data 


await usercollection.updateOne(
    {name : "ritu"},
    {$set : {age : 30}}
);



// delete the data 

await usercollection.deleteOne({
    name:"pooja"
});



















   

  
    app.listen(3000 , (req , res) => {
    console.log("server starting");
});

}


startServer();
















