const AWS = require('aws-sdk');
const stepFunctions = new AWS.StepFunctions();
// AWS.config.update({ region: 'us-east-1' }); 

exports.handler = async (event) => {
    // ARN of state machine
    const stateMachineArn = 'arn:aws:states:us-east-1:032751846634:stateMachine:MyStateMachineStepFunctionsStateMachine-O31dxd3TYwRd';

    // Provide input data for the first state here
    const input = {
        data: "Extracted data from the database!",
        name: "Tahir Mahmood Hashmi",
        address: "Shadman Town"
    };

    const params = {
        stateMachineArn,
        input: JSON.stringify(input),
    };

    try {
        const result = await stepFunctions.startExecution(params).promise();
        console.log('Step Functions execution started:', result);
    } catch (error) {
        console.error('Error starting Step Functions execution:', error);
    }
}
