global.schemas = require('require-all')({
    dirname: __dirname + '/../schemas',
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
    map: function (name) {
        return name + "Schema";
    }
});
