exports.handler = async (event) => {

    return {result: event.result * 2, description: "State `lambdaTwoExecute` executed successfully!"};
};

