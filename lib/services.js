global.services = require('require-all')({
    dirname: __dirname + '/../services',
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
    map: (name) => {
        return name + "Service";
    }
});
