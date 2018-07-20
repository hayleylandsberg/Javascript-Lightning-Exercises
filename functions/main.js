// Challenge 1: Create a function called 'go' that takes 2 arguments: direction (forwards, backwards, etc.) and speed (mph). The function, when invoked, will print out the following in your console (for example): "The car is moving forward, at 25 mph."

const go = (direction, speed) => {
    console.log(`The car is moving ${direction}, at ${speed}`)
};

go("forward", 70);
// Challenge 2: Instead of the function printing to the console, print to the DOM
function move(direction, speed) {
    const element = document.getElementById("car")
    element.innerHTML += `The car is moving ${direction} at ${speed} mph`
}

move("backward", 80);


//Example of const and let

let testNum = 9027482347289;
const colors = ["red", "blue"];

for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    console.log(element);

    let x = 4;
}