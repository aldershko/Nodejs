const   mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db;
const mongoConnect = (callback) =>
{

    MongoClient.connect('mongodb+srv://iamalengeorge7:Aldershko@cluster0.zckplq2.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
    .then( client =>{
        _db = client.db()
        callback()
       
    }).catch( err => {
        console.log( err )
        throw err;
    })
}

const getDb = () =>{
    if(_db){
        return _db;
    }
    throw err;
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb