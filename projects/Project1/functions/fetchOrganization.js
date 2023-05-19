const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
exports.handler = async () => {
    const { Items } = await dynamoDb
        .scan({
            TableName: "OrganizationTable",
        })
        .promise();
    console.log("Organizations Length = " + Items.length, Items);
    return {
        data: Items.map(a => a.org_id), resourcesToSync: [
            "ProductTable",
            "OrderTable",
            "CollectionTable"
        ]
    };
};
