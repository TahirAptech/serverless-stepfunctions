exports.handler = async (event) => {
    // Code to send the data to an external service
    console.log("sendDataFunction running..");
    console.log("event", event);
    const result = await sendDataToExternalService();

    return result;
};

async function sendDataToExternalService() {
    return { result: `Data has been send to external service!` };
}
