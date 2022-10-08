// practice
function createEmployeeRecord(employeeInfo) {
    const employee = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(employeeInfo) {
    return employeeInfo.map(createEmployeeRecord)
}

function createTimeInEvent(employeeInfo, dateStamp) {
   let timeCard = dateStamp.split(" ")
   const tIn = {
    type: "TimeIn",
    hour: parseInt(timeCard[1]),
    date: timeCard[0]
   }
   employeeInfo.timeInEvents.push(tIn)
   return employeeInfo
};

function createTimeOutEvent(employeeInfo, dateStamp) {
    let timeCard = dateStamp.split(" ")
    const tOut = {
     type: "TimeOut",
     hour: parseInt(timeCard[1]),
     date: timeCard[0]
    }
    employeeInfo.timeOutEvents.push(tOut)
    return employeeInfo
}

function hoursWorkedOnDate(employeeInfo, dateWeAreLookingFor) {
    const tOutEvent = employeeInfo.timeOutEvents.find(obj => obj.date === dateWeAreLookingFor)
    const tInEvent = employeeInfo.timeInEvents.find(obj => obj.date === dateWeAreLookingFor)
    return (tOutEvent.hour - tInEvent.hour) / 100
}

function wagesEarnedOnDate(employeeInfo, date) {
    return hoursWorkedOnDate(employeeInfo, date) * employeeInfo.payPerHour
}

function allWagesFor(employeeInfo) {
    const allWages = employeeInfo.timeInEvents.map(obj => wagesEarnedOnDate(employeeInfo, obj.date))
    let initialValue = 0
    return allWages.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
}

function calculatePayroll(employeeRecords) {
    const employeeTotal = employeeRecords.map(obj => allWagesFor(obj))
    let initialValue = 0
    return employeeTotal.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
}

















// Your code here
// function createEmployeeRecord(x) {
//     const employeeRecord = {
//         firstName: x[0],
//         familyName: x[1],
//         title: x[2],
//         payPerHour: x[3],
//         timeInEvents: [],
//         timeOutEvents: []
//     }
//     return employeeRecord
// }

// function createEmployeeRecords(x) {
//     let employeeRecords = {}
//     return x.map(createEmployeeRecord)
// }

// function createTimeInEvent(obj, dateStamp) {
//     const timeStamp = dateStamp.split(" ")
//     const tIn = {
//         type: "TimeIn",
//         hour: parseInt(timeStamp[1]),
//         date: timeStamp[0]
//     }
//     obj.timeInEvents.push(tIn)
//     return obj
// }

// function createTimeOutEvent(obj, dateStamp) {
//     const timeStamp = dateStamp.split(" ")
//     const tOut = {
//         type: "TimeOut",
//         hour: parseInt(timeStamp[1]),
//         date: timeStamp[0]
//     }
//     obj.timeOutEvents.push(tOut)
//     return obj
// }

// function hoursWorkedOnDate(empObj, dateWeAreLookingFor) {
//     const tOutEvent = empObj.timeOutEvents.find(obj => obj.date === dateWeAreLookingFor);
//     const tInEvent = empObj.timeInEvents.find(obj => obj.date === dateWeAreLookingFor);
//     return (tOutEvent.hour - tInEvent.hour) / 100
//     }
// // ^^^
// // My explanation: tOutEvent is being set equal to an object of timeOutEvents that includes, by using .find(),
// // the hour that was logged when clocking out, same idea for tInEvent

// function wagesEarnedOnDate(empObj, dateWeAreLookingFor) {
//     return hoursWorkedOnDate(empObj, dateWeAreLookingFor) * empObj.payPerHour;
// }


// function allWagesFor(empObj) {
//     const allWages = empObj.timeInEvents.map(obj => wagesEarnedOnDate(empObj, obj.date))
//     let initialValue = 0;
//     return allWages.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
// }

// function calculatePayroll(employeeRecord) {
//     const employeeTotal = employeeRecord.map(obj => allWagesFor(obj))
//     let initialValue = 0
//     return employeeTotal.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
// }