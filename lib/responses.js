global.responses = require('require-all')({
    dirname: __dirname + '/../responses',
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
    map: function (name) {
        return name + "Response";
    }
});
