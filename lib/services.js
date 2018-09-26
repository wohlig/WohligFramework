global.services = require('require-all')({
    dirname: __dirname + '/../services',
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
    map: function (name) {
        return name + "Service";
    }
});
