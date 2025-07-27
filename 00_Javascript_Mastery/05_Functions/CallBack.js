// Defining a call back function
const print1 = () => {
    console.log("Hello, I am a callback function 1");
}

const print2 = () => {
    console.log("Hello, I am a callback function 2");
}

const test = (name, callback1, callback2) => {
    console.log("I am a test function", name);
    callback1(); // Calling the callback function
    callback2();
}

test('Jatin',print1, print2); // Passing the print function as a callback