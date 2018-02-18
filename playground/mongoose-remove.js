const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res)
// });

// Todo.findOneAndRemove().then(() => {
// });

Todo.findOneAndRemove({_id: '5a8761268c5ac9c1d5a62973'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('5a8761268c5ac9c1d5a62973').then((todo) => {
//     console.log(todo);
// });