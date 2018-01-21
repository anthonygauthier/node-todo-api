var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Todoapp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Do something',
    completed: true,
    completeAt: 1827398
});

newTodo.save().then((doc)=> {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo');
});