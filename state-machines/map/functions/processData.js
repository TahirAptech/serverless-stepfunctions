exports.handler = async (event) => {
    const processedData = await processData(event);
    console.log("processDataFunction running..");
    console.log("event", event);

    return processedData;
};

async function processData(obj) {
    return { ...obj, data: `Processed data: ${obj.data}` };
}
