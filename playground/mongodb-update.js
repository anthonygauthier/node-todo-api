// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // findOneAndUpdate()
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId("5a637a540fe5511499a5afda")}, {
    //     $set: {
    //         completed: true
    //     }, 
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log(err);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("5a637be80fe5511499a5b054")}, {
        $set: {
            name: 'Anthony'
        },
        $inc: {
            age: 1
        } 
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    });

    //db.close();
});