// Simple Test Function to Test Underscore

// var _ = require('underscore');

// _.each([1,2,3], function(v) {
//    console.log(v);
// });

// Callback Function to add a sample to MongoDB and return that document
// A callback is a function that you provide to a NodeJS driver to
// specify what to do when an operation completes
var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error, db) {
    if (error) {
        console.log(error);
        process.exit(1);
    }

    db.collection('sample').insert({ x: 1 }, function(error, result) {
        if (error) {
            console.log(error);
            process.exit(1);
        }

        db.collection('sample').find().toArray(function(error, docs) {
            if (error) {
                console.log(error);
                process.exit(1);
            }

            console.log('Found docs:');
            docs.forEach(function(doc) {
                console.log(JSON.stringify(doc));
            });

            process.exit(0);
        });
    });
});