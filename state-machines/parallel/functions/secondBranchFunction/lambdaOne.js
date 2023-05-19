exports.handler = async (event) => {
    console.log("event", event);
    let result = event.inputForBranch2.reduce((p, n) => p + n)
    return { result, description: "State `lambdaOneExecute` executed successfully!, now going to lambdaTwo.." };
};

