global.responses = require('require-all')({
    dirname: __dirname + '/../responses',
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
    map: (name) => {
        return name + "Response";
    },
    resolve: (obj) => {
        return obj.default;
    }
});

const router = Router()
router.use(function (req, res, next) {
    _.each(responses, function (n, key) {
        res[key] = n;
    });
})
app.use('/', router)
