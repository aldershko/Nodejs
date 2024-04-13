const   mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoConnect = (callback) =>
{

    MongoClient.connect('mongodb+srv://iamalengeorge7:Aldershko@cluster0.zckplq2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then( client =>{
        callback(client)
        console.log(client)
    }).catch( err => console.log( err ))
}

module.exports = mongoConnect