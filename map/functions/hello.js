const AWS = require('aws-sdk');
const stepFunctions = new AWS.StepFunctions();
// AWS.config.update({ region: 'us-east-1' }); 

exports.handler = async (event) => {
    // ARN of state machine
    const stateMachineArn = 'arn:aws:states:us-east-1:300205417350:stateMachine:MyStateMachineStepFunctionsStateMachine-Y89IZlgXfIek';

    // Provide input data for the first state here
    console.log("event", event);

    const params = {
        stateMachineArn,
        input: JSON.stringify({
            "inputArray": [
                "item1",
                "item2",
                "item3"
            ],
            message: "Going to ProcessData State.."
        }),
    };

    try {
        const result = await stepFunctions.startExecution(params).promise();
        console.log('Step Functions execution started:', result);
    } catch (error) {
        console.error('Error starting Step Functions execution:', error);
    }
}
