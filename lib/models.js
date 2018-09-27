global.models = require('require-all')({
    dirname: __dirname + '/../models',
    excludeDirs: /^\.(git|svn)$/,
    filter: /(.+Model)\.js$/,
    recursive: true,
    resolve: (obj) => {
        return obj.default;
    }
});


_.each(global.models, (n, key) => {
    global[key] = n;
});
