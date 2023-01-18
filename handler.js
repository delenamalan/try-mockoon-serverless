const mockoon = require("@mockoon/serverless");

// Load the Mockoon Environment object
const mockEnv = require('./data.json');

const mockoonServerless = new mockoon.MockoonServerless(mockEnv);

module.exports.handler = mockoonServerless.awsHandler();