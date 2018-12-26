let express = require('express');
let bodyParser = require('body-parser');

let { mongoose } = require('../db/mongoose');
let { Todo } = require('../models/todo');
let { Users } = require('../models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000...')
});

module.exports = {
    app
}



// let newTodo = new Todo({
//     text: 'edit this videos'
// });

// newTodo.save().then((res) => {
//     console.log('save to doc', res);
// }, (err) => {
//     console.log('unable to save todo', err);
// });



// let newUser = new Users({
//     email: 'abcd@gmail.com   '
// });

// newUser.save().then((res) => {
//     console.log('User saved: ', res);
// }, (err) => {
//     console.log('unable to save user', err);
// });

