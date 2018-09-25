var Schema = mongoose.Schema;
var schema = new Schema(global.Chintan);
module.exports = mongoose.model('Chintan', schema);
var model = {};
module.exports = _.assign(module.exports, model);