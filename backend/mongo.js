const { MongoClient, objectId } =  require ("mongodb");
const connectionURL = 'mongodb+srv://DORYN:lakehub@cluster0.wp6cokr.mongodb.net/palour-api'
const databaseName = 'palour'
MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log('unable to connect to database')
    }
    // const db = client.db(databaseName);
    // db.collection("users").find({name: jane}).toArray((error, users) => {
    //     console.log(users);
    });
    // });