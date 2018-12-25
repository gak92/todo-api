// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// Get object id
// let obj = new ObjectID();
// console.log(obj);

// Destructuring Example
// let user = { name: 'Andrew', age: 25 };
// let {name, age} = user;
// console.log(name, age);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    
    if (err) {
       return console.log('unable to connect to mongo db server');
    }
    
    console.log('connected to MongoDB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Andrew',
    //     age: 25,
    //     location: 'Philadelphia'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('unable to inseert into Users', err);
    //     }
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    client.close();
});
