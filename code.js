// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if ((isNaN(input)) && (input !== undefined)){
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!";
    }
}


//input === "Alex", then we return "Hello, Alex!" else return "Hello, Jane!".