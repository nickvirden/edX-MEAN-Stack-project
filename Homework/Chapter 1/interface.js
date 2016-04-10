/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
    db.collection('movies').insert(doc, function(error, result) {
        if (error) {
            console.log(error);
            process.exit(1);
        }

        console.log('Movie added: ' + JSON.stringify(doc));
    
    });

    callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {

    var queryDirectors = { director: director };

    db.collection('movies').find(queryDirectors).sort({ 'title': 1 }).toArray( function(error, result) {
        if(error) {
            console.log(error);
            process.exit(1);
        }

        console.log(result)

        callback(null, result);

    });
};

/*
    var queryDirectors = { director: JSON.stringify(director)};

    db.collection('movies').find(queryDirectors).toArray(function(error, result) {
        if (error) {
            console.log(error);
            process.exit(1);
        }

        console.log('Found a director: ' + JSON.stringify(director));
    });

    db.collection('movies').find().sort({ title: }).toArray(function(error, result) {
        if (error) {
            console.log(error);
            process.exit(1);
        }

        console.log('Found a director: ' + JSON.stringify(doc));
    });    
    
    callback(null, []);*/