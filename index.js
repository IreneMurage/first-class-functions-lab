// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));


const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};
console.log (returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
console.log (selectingDrivers);


function createFareMultiplier(y){
  return function(fare){
    return fare * y;
  }

}

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler());

const fareTripler = createFareMultiplier(3);
console.log (fareTripler());



function selectDifferentDrivers(drivers, driverSelectorFunction) {
  return driverSelectorFunction(drivers);
}
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 
