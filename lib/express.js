global.app = express()
global.Router = express.Router
// Define Here
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(function (req, res, next) {
    if (req.headers["x-amz-sns-message-type"]) {
        req.headers["content-type"] = "application/json;charset=UTF-8"
    }
    next()
})
app.use(bodyParser.json())
app.use(cors())

global.ValidateRequest = (validationObj) => {
    return (req, res, next) => {
        const errorData = {}
        _.each(validationObj, (schema, key) => {
            const validate = ajv.compile(schema)
            const dataToValidate = req[key]
            var valid = validate(dataToValidate)
            if (!valid) {
                errorData[key] = validate.errors
            }
        })
        if (!_.isEmpty(errorData)) {
            res.status(400).json(errorData)
        } else {
            next()
        }
    }
}
