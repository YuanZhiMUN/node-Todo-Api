//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
      return  console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b8f2ef5c4a001ff9e10b5f5')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5b8f281575813314d497ee72')  
   }, {
       $set: {
         name: 'Waye',
         age: 38  
       }
   },{
       returnOriginal: false
   }).then((result) => {
       console.log(result);
   });
});