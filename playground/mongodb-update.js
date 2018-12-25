// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    
    if (err) {
       return console.log('unable to connect to mongo db server');
    }
    
    console.log('connected to MongoDB Server');
    const db = client.db('TodoApp');

    // update a document
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c21f616b037a87c0bfd4e6a')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c21f162cb74cf2178775fee')
    }, {
        $set: {
            name: 'GA'
        },
        $inc: {
            age: 8
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    });

    // client.close();
});
