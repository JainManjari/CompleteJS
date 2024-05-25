console.log("operation started");

function sleep(milliseconds) {

    setTimeout(() => {
        console.log("operation completed");
    }, milliseconds);


}

sleep(2000);

console.log("operation parent completed");






