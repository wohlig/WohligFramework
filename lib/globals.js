//Global Variables
global.express = require("express")
global.cron = require("node-cron")
global.ejs = require("ejs")
global._ = require("lodash")
global.path = require("path")
global.fs = require("fs")
global.mongoose = require("mongoose")
global.Schema = mongoose.Schema
global.ObjectId = mongoose.Types.ObjectId

global.moment = require("moment")
global.async = require("async")

//Validator
const Ajv = require("ajv")
global.ajv = new Ajv()

ajv.addFormat("objectId", {
    type: "string",
    validate: (data) => {
        return ObjectId.isValid(data)
    }
})
ajv.addFormat("integer", {
    type: "string",
    validate: (data) => {
        const reg = /^\d+$/
        return reg.test(data)
    }
})
ajv.addFormat("number", {
    type: "string",
    validate: (data) => {
        const reg = /^[+-]?\d+(\.\d+)?$/
        return reg.test(data)
    }
})
