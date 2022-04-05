const swaggerAutogen = require('swagger-autogen')();

const express = require("express");
const app = express();
//Other code

const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: 'localhost:3000',
    schemes: ['http'],

    components: {
        securitySchemes: {
            jwt: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                in: 'header'
            }
        }
    },
    security: [{
        jwt: []
    }]
};


const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];



swaggerAutogen(outputFile, endpointsFiles, doc);