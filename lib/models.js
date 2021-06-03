global.models = require('require-all')({
    dirname: pwd + "/models",
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