const AWS = require('aws-sdk');
const sns = new AWS.SNS();
const rekognition = new AWS.Rekognition();

exports.handler = async (event) => {
    try {
        let data = await rekognition.compareFaces({
            SourceImage: {
                S3Object: {
                    Bucket: "sd",
                    Name: "sd"
                }
            },
            TargetImage: {
                S3Object: {
                    Bucket: "sd",
                    Name: "sd"
                }
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    try {
        let data = await sns.publish({
            Message: `ds`,
            TopicArn: "arn:aws:sns:us-east-1:318300609668:Notifications",
            MessageStructure: "String",
            MessageAttributes: {}
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};