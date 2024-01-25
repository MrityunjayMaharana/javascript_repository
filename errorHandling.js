try {
    // code that may throw error
    throw new Error("An error");
} catch (error) {
    // code to handle the error
    console.log(error.message);
} finally {
    // code that will run regardless of whatever an error occured or not
    console.log("cleanup code");
}