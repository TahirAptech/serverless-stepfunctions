const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    const params = {
        TableName: event.item,
        IndexName: 'ByOrgId',
        KeyConditionExpression: "org_id = :orgId",
        ExpressionAttributeValues: {
            ":orgId": event.resources
        }
    };
    let { Items } = await dynamoDb.query(params).promise();
    //return {data: Items};
};
