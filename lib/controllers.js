global.controllers = require('require-all')({
    dirname: __dirname + '/../controllers',
    filter: /(.+Controller)\.js$/,
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
});

_.each(global.controllers, function (n, key) {
    var name = _.chain(key).replace("Controller", "").camelCase().value()
    app.use("/" + name, n.default)
});