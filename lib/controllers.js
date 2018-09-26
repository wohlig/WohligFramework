global.controllers = require('require-all')({
    dirname: __dirname + '/../controllers',
    filter: /(.+Controller)\.js$/,
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
});
