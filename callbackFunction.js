/*function parentFunction(name, callback){
    callback();
    console.log("Hey "+name);
}
function randomFunction(){
    console.log("Hey I am callback function");
}
parentFunction("Random String", randomFunction);*/

// Asynchronous callback function

const parentFunction = (name,callback) => {
    setTimeout(callback, 1000);
    console.log("Hey "+name);
}
parentFunction ("Random String", function(){
    console.log("Hey I am callback function");
});