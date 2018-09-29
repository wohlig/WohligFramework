module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "no-undef": 1,
        "no-unused-vars": 1,
        "indent": [
            "error", 4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ]
    },
    "globals": {
        "Router": true,
        "global": true,
        "app": true,
        "ajv": true,
        "_": true,
        "ValidateRequest": true,
        "StudentModel": true,
        "mongoose": true,
        "Schema": true
    }
};
