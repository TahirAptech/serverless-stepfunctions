exports.handler = async ({inputForBranch1}) => {
    // Code to extract data from the database
    console.log("first state's lambda event:", inputForBranch1);

    return inputForBranch1;
};

