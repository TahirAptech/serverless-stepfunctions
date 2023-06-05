export const handler = async (event) => {
    // Code to send the data to an external service
    console.log("sendDataFunction running..");
    console.log("event", event);
    const result = await sendDataToExternalService(event);

    return result;
};

async function sendDataToExternalService(event: any) {
    return { result: `Finally dynamodb data has been send to external service!`, data: event.data};
}
