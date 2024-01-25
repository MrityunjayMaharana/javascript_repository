const delayedFunction = () => {
    console.log("Dealyed function executed!");
};
// executes after 2 seconds
setTimeout(delayedFunction, 2000);

const repeatedFunction = () => {
    console.log("Repeated function executed");
};
const intervalId = setInterval(repeatedFunction, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
}, 5000); 