global.Schema = mongoose.Schema;

global.mongooseModel = require('require-all')({
    dirname: __dirname + '/../mongooseModel',
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
    map: (name) => {
        return name;
    },
    resolve: (obj) => {
        return obj.default;
    }
});

_.each(global.mongooseModel, (n, key) => {
    global[key] = n;
});
