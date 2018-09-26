global.mongoose = require('mongoose');
global.Schema = mongoose.Schema;

global.mongooseModel = require('require-all')({
    dirname: __dirname + '/../mongooseModel',
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
    map: function (name) {
        return name;
    },
    resolve: function (obj) {
        return obj.default;
    }
});


_.each(global.mongooseModel, function (n, key) {
    global[key] = n;
});
