// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log('UnableObjectID to delete', err);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log('Unable to delete', err);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
    //     console.log(doc.value.text);
    // }, (err) => {
    //     console.log('Unable to findOneAndDelete', err);
    // });

    //----- Challenge

    // deleteMany
    // db.collection('Users').deleteMany({name: 'Anthony'}).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log('Unable to delete many users', err);
    // });

    // findOneAndDelete by Id
    db.collection('Users').findOneAndDelete({_id: new ObjectId("5a636dadc346600dbb247693")}).then((res) => {
        console.log(`Successfully deleted ${res.value.name}`)
    }, (err) => {
        console.log('Unable to delete specific user');
    });

    //db.close();
});