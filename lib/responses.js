global.responses = require('require-all')({
    dirname: __dirname + '/../responses',
    excludeDirs: /^\.(git|svn)$/,
    recursive: true,
    map: (name) => {
        return name;
    },
    resolve: (obj) => {
        return obj.default;
    }
});
const router = Router();
router.use((req, res, next) => {
    _.each(global.responses, (n, key) => {
        res[key] = n;
    });
    next()
})
app.use('/', router)
