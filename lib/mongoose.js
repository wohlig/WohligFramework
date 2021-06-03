global.Schema = mongoose.Schema;
mongoose.connect(global.env["MONGODB_URL"], {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongodb Connection Error:"));
db.once("open", function () {
  console.log("MongoDB Connected");
});

global.mongooseModel = require("require-all")({
  dirname: pwd + "/mongooseModel",
  excludeDirs: /^\.(git|svn)$/,
  recursive: true,
  map: (name) => {
    return name;
  },
  resolve: (obj) => {
    return obj.default;
  },
});

_.each(global.mongooseModel, (n, key) => {
  global[key] = n;
});
