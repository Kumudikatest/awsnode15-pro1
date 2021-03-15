const AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();


exports.handler = async (event) => {
    debugger;
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: "us-east-1_mcdTV1jKi",
            Limit: 2
        }).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
        try {
            let data = await rekognition.compareFaces({
                SourceImage: {
                    S3Object: {
                        Bucket: "ea",
                        Name: "ds"
                    }
                },
                TargetImage: {
                    S3Object: {
                        Bucket: "sd",
                        Name: "sds"
                    }
                }
            }).promise();

        } catch (err) {
            // error handling goes here
        };
    };

    return { "message": "Successfully executed" };
};