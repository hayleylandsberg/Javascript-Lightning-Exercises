const _1948 = [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6]
const _1949 = [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7]
const _1950 = [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0]
const _1951 = [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1]
const _1952 = [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]

const RainfallDatabase = [_1948, _1949, _1950, _1951, _1952]


// Find out how much total rain has fallen over last 10 years
const allRainfall = RainfallDatabase.reduce(
    //.reduce combineds the arrays and ppushes the first two values of the array into the below arguments (obstraction - data is obstrated away from us)
    function(currentSet, nextSet) {
      return currentSet.concat(nextSet)
    }
  ).reduce(
    function(total, monthlyRainfall) {
      return total + monthlyRainfall
    }
  )
  
  console.log(allRainfall)

  //.reduce takes two things and puts them together. 




//To get year 1951, turn arrays into an object
const RainfallDatabase = {
    "1948" : [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6],
    "1949" : [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7],
    "1950" : [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0],
    "1951" : [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1],
    "1952" : [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]
  }
//get year 1951. Normally variables can't start with a number.... way around it, put in quotes. Put a functions in the .reduce.
const totalRainfall = RainfallDatabase["1951"].reduce((first, second) => {
    return first + second 
})
console.log(totalRainfall)


//Want to see in 1949 what months it rained more than 6" 
//.filter takes a callback function
//. functions are called methods on an array
const monthsGreaterThan6 = RainfallDatabase["1949"].filter(
    rainfall => {
        if (rainfall >= 6.0) {
            return true
        }
    }
)
console.log(monthsGreaterThan6) //returns a new array with the numbers: 6.1, 6.2, 6.7

//or could write it:
const monthsGreaterThan6 = RainfallDatabase["1949"].filter(r => r >= 6.0)
console.log(monthsGreaterThan6)

//Find the avergae rainfall for 1950
const averageRainfall = RainfallDatabase["1950"].reduce(
    (total, thisMonth) => total + thisMonth
) / RainfallDatabase["1950"].length

console.log(parseFloat(averageRainfall.toFixed(2))); //operation on an object turns into a string. Use parseFloat to turn it back into an integer

//Like saving in a storage shed:
localStorage.setItem("rainfall", JSON.stringify(RainfallDatabase))
//stringify takes an object and turns it into a string
//local storage can be found in dev tools under application tab
//Even if you comment the script out, it stays in local storage on your browser
//use .getItem to get item out of localStorage. Have to turn back into an object using .parse:
const Rainfall = localStorage.getItem("rainfall", JSON.parse(RainfallDatabase))

//to delete item - .removeItem
localStorage.removeItem("rainfall")