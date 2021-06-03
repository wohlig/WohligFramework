global.controllers = require('require-all')({
    dirname: pwd + "/controllers",
    filter: /(.+Controller)\.js$/,
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
    resolve: (obj) => {
        return obj.default;
    }
});

_.each(global.controllers, (n, key) => {
    var name = _.chain(key).replace("Controller", "").camelCase().value()
    app.use("/" + name, n)
});

const indexRoute = require(pwd + "/config/routes").default;
app.use("/", indexRoute)