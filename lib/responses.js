global.responses = require('require-all')({
    dirname: pwd + "/responses",
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
        n.res = res;
        n.req = req;
        res[key] = n(req, res);
    });
    next()
})
app.use('/', router)