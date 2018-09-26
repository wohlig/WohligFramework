global.models = require('require-all')({
    dirname: __dirname + '/../models',
    excludeDirs: /^\.(git|svn)$/,
    filter: /(.+Model)\.js$/,
    recursive: true,
    resolve: function (obj) {
        return obj.default;
    }
});


_.each(global.models, function (n, key) {
    global[key] = n;
});
