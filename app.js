require("./config/globals");

function requireFolder(folderName, modelPostfix, callback) {
    const directoryPath = path.join(__dirname, folderName);
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            callback(`Unable to scan directory ${folderName}: ` + err);
        }
        //listing all files using forEach
        _.each(files, function (file) {
            var modelName = _.chain(file).replace(".js", "").startCase().value();
            global[modelName + modelPostfix] = require(`${directoryPath}/${modelName}`);
        });
        callback();
    });
}
requireFolder("models", "", function () {});
requireFolder("controllers", "Controller", function () {});