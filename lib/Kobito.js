var util = require('util');

var sqliteClient = require('node-sqlite-purejs');

var Kobito = function (dbPath) {
    this.dbPath = dbPath || util.format('%s/Library/Kobito/Kobito.db', process.env.HOME);
};

Kobito.prototype.execSQL = function (sql, callback) {
    if (!sql) {
        return callback(new Error('no sql string.'));
    }

    callback = callback || function () {};

    var dbPath = this.dbPath;

    sqliteClient.open(dbPath, {}, function (err, db) {
        if (err) {
            return callback(err);
        }

        db.exec(sql, function (err, results) {
            if (err) {
                return callback(err);
            }
            return callback(null, results);
        });
    });

};


module.exports = Kobito;
