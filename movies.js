var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error, db) {
    if (error) {
        console.log(error);
        process.exit(1);
    }

    var doc = {
        title: 'Jaws',
        year: 1975,
        director: 'Steven Spielberg',
        rating: 'PG-13'
        /* rantings: {
            critics: 80,
            audience: 97
        };*/
    };

    db.collection('movies').insert(doc, function(error, result) {
        if (error) {
            console.log(error);
            process.exit(1);
        }

        // var query = { year: 1975, rating: 'PG' };
        // If I add 'query' into the find() method, it will find all
        // movies in the collection 'movies' that have a year 1975
        db.collection('movies').find().toArray(function(error, docs) {
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