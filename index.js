// Code your solution in this file!
function returnFirstTwoDrivers(){
   const divers=["Antonia","Nuru","Amari","Mo"]
const newDivers= divers.slice(0,2)
return newDivers
}
console.log(returnFirstTwoDrivers())

function returnLastTwoDrivers(){
    const divers=["Antonia","Nuru","Amari","Mo"] 
    const lastTwoDiver= divers.slice(-2)
    return lastTwoDiver
}
console.log(returnLastTwoDrivers())

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]


console.log(selectingDrivers[0])
console.log(selectingDrivers[1])


function createFareMultiplier(num){
    return function(value){
return num*value
    }

}
createFareMultiplier(5)

function fareDoubler(fare){
    return fare*2
}
fareDoubler()

function fareTripler (fare){
    return fare*3
}
fareTripler()

// function selectDifferentDrivers(divers,returnFirstTwoDrivers,returnLastTwoDrivers){


//     returnFirstTwoDrivers()
//     returnLastTwoDrivers()
// }
function selectDifferentDrivers(driverArray, driverFunction) {
    return driverFunction(driverArray);
}
selectDifferentDrivers()