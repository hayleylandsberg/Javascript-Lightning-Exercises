//1. Create a function that logs the result of adding two numbers that were passed in as arguments.
//2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
//3. Invoke each function a couple times with different argument values.

const add = (num1, num2) => {
    console.log(num1 + num2)
}

const subtract = (num1, num2) => console.log(num1 - num2)

add(7, 8)
subtract(1902, 389)

//Create another function called `calculate` that takes three arguments: two numbers and a function

const calculate = (num1, num2, operation) => {
    operation(num1, num2)
} 

calculate(500, 500, add)
calculate(40, 30, subtract)