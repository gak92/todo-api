// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    
    if (err) {
       return console.log('unable to connect to mongo db server');
    }
    
    console.log('connected to MongoDB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c213f2f3b0a260f5c032233')
    // }).toArray().then((docs) => {
    //     console.log('Todos: ');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch document', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log('unable to fetch document', err);
    });

    db.collection('Users').find({
        name: 'Andrew'
    }).count().then((count) => {
        console.log(`Andrew name Count: ${count}`);
    }, (err) => {
        console.log('unable to fetch document', err);
    });

    db.collection('Users').find({
        name: 'Andrew'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch document', err);
    });

    // client.close();
});
