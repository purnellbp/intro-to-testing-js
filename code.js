// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!";
    } else if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}


//input === "Alex", then we return "Hello, Alex!" else return "Hello, Jane!".