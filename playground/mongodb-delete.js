// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    
    if (err) {
       return console.log('unable to connect to mongo db server');
    }
    
    console.log('connected to MongoDB Server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });
    
    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteOne({
    //     name: 'Mike'
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({
    //     name: 'Andrew'
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').deleteMany({
        name: 'Andrew'
    }).then((res) => { 
        console.log(res);
    });

    // client.close();
});
