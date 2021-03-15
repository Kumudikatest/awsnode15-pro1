const AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
const haikunator = require('haikunator');

exports.handler = async (event) => {
    const h = new haikunator();
    const response = {
        statusCode: 200,
        body: h.haikunate({
            tokenLength: 0,
            delimiter: '-'
        })
    };
    console.log(response.body)
    return response;
};