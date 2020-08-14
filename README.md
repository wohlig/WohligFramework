# Wohlig Framework

### Index

1. [Introduction](#introduction)

2. [Get Started](#get-started)

3. Documentation

4. Submit Issue

### 1. [Introduction] {#introduction}

Wohlig Framework can use used as Git Template for Projects related to microservices.

This is an Opinionated Framework which uses the following Technologies for the Microservices

1. [NodeJS](https://nodejs.org) - _12.0.0 or Above_

2. [MongoDB](www.mongodb.com/try/download/community) - _4.2.2 or Above_

3. [CodeFresh](https://codefresh.io) as CI CD Pipeline

### 2. [Get Started] {#get-started}

1. Create Git Repository using Wohlig Framework as the Template. [Read More](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

2. Make sure you have MongoDB _4.2.2 or above_ installed on your local machine. [Read More](https://docs.mongodb.com/manual/installation/)

3. Make Sure you have NodeJS _12.0.0 or above_ installed on your local machine. [Read More](https://nodejs.org/en/)

4. Make Sure the Yarn _1.0.0 or above_ installed on your computer. [Read More ](https://yarnpkg.com)

5. Clone the Repository in your local machine. [Read More](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

6. Create .env file in your local Repository and add the following details content in the file. [Read More](https://www.npmjs.com/package/dotenv)

```shell
APP_ID=Wohlig Framework
PORT=3000
MONGODB_URL=mongodb://localhost:27017/wohlig-framework?readPreference=primary
LOG_LEVEL=debug

```

5. Install the Dependencies for the framework using yarn

```shell
yarn install
```

6. Change the project name in the following files

    1. production.yml - Change the Value name with Title Case.

    2. package.json - Change the name and description with name in Kebab Case.

    3. .env - Change APP_ID with the project Name in Title Case.

7. Run the Application with Yarn

```shell
yarn start
```

Now your application will start

If Application Starts Properly you will find the following response

```shell
Server Started at Port 3000
MongoDB Connected
```

In Case you find issues please following the steps provided above or contact the core team of Wohlig Transformation.

### 3. Documentation

1. Web Framework: [Express](https://expressjs.com)

2. ORM: [Mongoose](https://mongoosejs.com)

3. Schema Validation: [Ajv](https://ajv.js.org)

4. Templating HTML: [EJS](https://ejs.co)

5. Date Time Manipulate: [moment.js](https://momentjs.com)

6. Utility: [Lodash](https://lodash.com), [async](https://caolan.github.io/async/v3/)

### Submit Issue

Submit us on [Github Repository](https://github.com/wohlig/wohligFramework/issues)
