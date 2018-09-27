global.express = require('express')
global.app = express()
global.port = 3000
global.Router = express.Router;
// Define Here
import bodyParser from 'body-parser'
app.use(bodyParser.json())
