require("./config/globals");
var routes = require("./config/routes");

function requireFolder(folderName, modelPostfix, callback) {
    console.log("FolderName", folderName, modelPostfix);
    const directoryPath = path.join(__dirname, folderName);
    console.log("dir Path", directoryPath);
    fs.readdir(directoryPath, (err, files) => {
        //handling error
        if (err) {
            callback(`Unable to scan directory ${folderName}: ` + err);
        }
        //listing all files using forEach
        _.each(files, (file) => {
            console.log("file", file);
            var modelName = _.chain(file).replace(".js", "").value();
            console.log("ModelName", modelName);
            global[modelName] = require(`${directoryPath}/${modelName}`);
            console.log("global[modelName + modelPostfix]", global[modelName + modelPostfix]);
        });
        callback();
    });
}
requireFolder("models", "", function () {});
requireFolder("controllers", "", function () {});
var database = "Dummy"
mongoose.connect('mongodb://localhost:27017/' + database, (err, data) => {
    if (err) {
        console.log(err);
    } else {

        console.log("Database Connected");
    }
});