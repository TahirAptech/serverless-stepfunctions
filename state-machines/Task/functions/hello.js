const AWS = require('aws-sdk');
const stepFunctions = new AWS.StepFunctions();
// AWS.config.update({ region: 'us-east-1' }); 

exports.handler = async (event) => {
    // ARN of state machine
    const stateMachineArn = 'arn:aws:states:us-east-1:300205417350:stateMachine:MyStateMachineStepFunctionsStateMachine-7aszf0HVbx7y';
    const params = {
        stateMachineArn,
        input: JSON.stringify(event),
    };

    try {
        const result = await stepFunctions.startExecution(params).promise();
        console.log('Step Functions execution started:', result);
    } catch (error) {
        console.error('Error starting Step Functions execution:', error);
    }
}
