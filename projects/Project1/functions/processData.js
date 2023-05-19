const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    // const params = {
    //     TableName: "ProductTable",
    //     IndexName: 'ByOrgId',
    //     KeyConditionExpression: "org_id = :orgId",
    //     ExpressionAttributeValues: {
    //         ":orgId": event
    //     }
    // };
    // let { Items } = await dynamoDb.query(params).promise();
    // return Items;
    return event;
};
