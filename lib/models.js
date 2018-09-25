global.models = require('require-all')({
    dirname: __dirname + '/../models',
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
    map: function (name) {
        return name;
    }
});

console.log(global.models);
