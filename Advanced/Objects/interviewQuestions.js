//* =====================================
//* Interview Question - Objects
//* ======================================

//! 1: What will be the output?
// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// const mergedObject = Object.assign({}, target, source);
// console.log(mergedObject);

//! Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

// const addSubAndGrade = (obj, sub, grade)=>{
//     if(!Object.hasOwn(obj, "grades"))
//         obj.grades = {};
//     if(!Object.hasOwn(obj.grades, sub))
//         obj.grades[sub] = grade;
// };

// let student = {
//   name: "Bob",
//   age: 20,
//   grades: {
//     math: 90,
//     science: 85,
//     history: 88,
//   },
// };

// addSubAndGrade(student, "english", 95);
// console.log(student);

//! Problem: Write a function that compares two objects to determine if they have the same properties and values.

// const areObjectsEqual = (obj1, obj2)=>{
//     const oj1 = Object.values(obj1).length;
//     const oj2 = Object.values(obj2).length;

//     if(oj1 !== oj2)return false;
    
//     for(const key in obj1){
//         if(obj1[key] !== obj2[key])
//             return false;
//     }
//     return true;
// };


// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// console.log(areObjectsEqual(objA, objB)); // Should return true
// console.log(areObjectsEqual(objA, objC)); // Should return false


//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.

// const arrayToObj = (arr)=>{
//     const obj = {};
//     for(let elem of arr){
//         obj[elem.id] = elem;
//     }

//     return obj;
// };

// let inputArray = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// console.log(arrayToObj(inputArray));