global.policies = require('require-all')({
    dirname: __dirname + '/../policies',
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
    map: function (name) {
        return name + "Policy";
    }
});
