const http = require("http");
const mongodb=require('mongodb').MongoClient
const url="mongodb://localhost:27017/";

let connectDb=async()=>{
    let connection = await mongodb.connect(url);  // to connect with our mongodb 
    console.log('Database Connected !!'); 
    let databse = await connection.db('Node');  // to create our db
    console.log('Database Created !!');
    let collection = await databse.createCollection('Node');  // to create collection
    console.log('Collection Created !!');
    // collection.insertOne({ name:'Bhargav', age: 20, contact: 7203913274 });  // to insert one data
    // console.log('Data Inserted !!');
    // collection.insertMany([ { name:'Ronak', age: 25, contact: 7203913274 }, { name:'Ashish', age: 27, contact: 7203913274 }, { name:'Parth', age: 20, contact: 8000923231 } ]);
    // console.log('Many Data Inserted !!');  // to insert many data
    // let data = await fetch('http://localhost:8000/Admin');
    // let json = await data.json();
    // collection.insertMany(json);  // to insert api data into db

    // let findData = await collection.findOne();  // print only one data from the db

    // let findData = await collection.findOne({ email: 'bhargav@gmail.com' });  // print perticular data using passing the condition

    // let findData = await collection.find().toArray();  // print all data in console use toArray()
    // console.log(findData);

    // let updatedata=await collection.updateOne({name:'abc'},{$set:{name:'nodejs'}})  // update only one data from the db
    // console.log("data updated")

    // let updatedata=await collection.updateMany({name:'abc'},{$set:{name:'nodejs'}})  // update many data from the db
    // console.log("data updated")

    // let delete1 = await collection.deleteOne({name:'nodejs'})// delete only one data from the db
    // console.log("data deleted")

    // let delete1 = await collection.deleteMany({})  // delete many data from the db
    // console.log("data deleted")

}
connectDb()
// const server=http.createServer((req,res)=>{

// })
// const port = 5000;
// server.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`server running on port ${port}`);
// });