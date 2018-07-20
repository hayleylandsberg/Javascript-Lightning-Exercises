// Exercise:
// 1. Create a variable to hold the value of the day of the week.

const dayOfTheWeek = 6;

switch (dayOfTheWeek) {
    case 1: 
        console.log("It's Sunday, time to relax!")
        break;
    case 2: 
        console.log("Happy Monday!")
        break;
    case 3:
        console.log("It's Tuesday. You got this!")
        break;
    case 4:
        console.log("Hump day already!")
        break;
    case 5:
        console.log("Just one more day 'til the weekend!")
        break;
    case 6:
        console.log("Happy Friday!")
        break;
    case 7: 
        console.log("Have a wonderful Saturday!")
        break;
    default:
        console.log("Please specify a day of the week.")
        break;
}


// Advanced Challenge:
// Change the switch statement so that for all weekdays, it console logs "Weekday" and for Saturday and Sunday, it console.logs "Weekend"
const day = 1

switch (day) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("Weekday");
    break;
  case 7:
  case 1:
    console.log("Weekend");
    break;
  default:
  console.log("Please specify a day of the week.");
    break;
}