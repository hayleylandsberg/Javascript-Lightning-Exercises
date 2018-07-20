// Use Object.create() in the following function
const CarFactory = (make, model, year) => {
    return Object.create({}, {
        make: {
            value: make,
            writable: true,
            enumerable: true
        },
        model: {
            value: model,
            writable: true,
            enumerable: true
        },
        year: {
            value: year,
            writable: true,
            enumerable: true
        }
    })
}

const malibu = CarFactory("Chevy", "Malibu", 1987)
console.log(malibu)

/*
This should be the output in your console

{
    make: "Chevy",
    model: "Malibu",
    yearManufactured: 1987
}
*/

//Factory function - a function that returns an object
