global.responses = require('require-all')({
    dirname: __dirname + '/../responses',
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
    map: (name) => {
        return name + "Response";
    }
});
