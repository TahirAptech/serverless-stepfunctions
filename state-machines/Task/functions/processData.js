const AWS = require('aws-sdk');
const { unmarshall } = AWS.DynamoDB.Converter;
exports.handler = async (event) => {
    const processedData = await processData(unmarshall(event.myDynamodbRecord.Item));
    console.log("Process running..");
    console.log("event", event);

    return processedData;
};

async function processData(obj) {
    return { data: obj, message: `Processed dynamodb data successfully..` };
}
