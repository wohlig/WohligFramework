/**
 * Define Global Variables Here
 * global._ = require("lodash")
 */

// ajv.addKeyword("range", {
//     type: "string",
//     compile: (data, parentSchema) => {

//     }
// })
const ObjectId = mongoose.Types.ObjectId
ajv.addFormat("objectId", {
    type: "string",
    validate: (data) => {
        return ObjectId.isValid(data)
    }
})
