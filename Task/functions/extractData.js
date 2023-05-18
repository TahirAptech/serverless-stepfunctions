exports.handler = async (event) => {
    // Code to extract data from the database
    console.log("my first state lambda event:", event);

    return event;
};

