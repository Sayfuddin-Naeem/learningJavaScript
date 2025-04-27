//! 1: Write a function to add a specified number of days to a given date.

// const addDaysToDate = (date, extraDay)=>{
//     return new Date(date.setDate(date.getDate() + extraDay));
// };

// const addDaysToDate = (date, extraDay)=>{
//     const dayInMillisecond = extraDay * 24 * 60 * 60 * 1000;
//     //console.log(date.getTime());
//     return new Date(date.getTime() + dayInMillisecond);
// };

// const date = new Date();
// let extraDay = 15;
// console.log(addDaysToDate(date, extraDay));

//! Question: Write a function to calculate the difference in days between two given dates.

const getDaysDifference = (d1, d2)=>{
    const oneDay = 24 * 60 * 60 * 1000;
    let dayDiff = Math.abs(d1 - d2);
    return (Math.round(dayDiff / oneDay));
};

const date1  = new Date("2024-02-19");
const date2 = new Date("2024-03-01");
console.log(getDaysDifference(date1, date2));