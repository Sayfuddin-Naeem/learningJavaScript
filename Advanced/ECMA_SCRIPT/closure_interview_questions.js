//!Task 1:
//todo Write a function createCounter that returns a function. Every time the returned function is called, it should increase and return a count.

// const createCounter = ()=>{
//     let count = 0;
//     return () => ++count;
// };

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

//! Task 2:
//todo: Extend the previous idea. Write a function createCounterWithReset that returns an object with:

//* increment() method to increase the count

//* reset() method to reset the count to 0

//* value() method to get the current count

// const createCounterWithReset = ()=>{
//     let count = 0;
//     return {
//         increment   : ()=> ++count,
//         reset       : ()=> count = 0,
//         value       : ()=> count,
//     }
// };

// const counter2 = createCounterWithReset();
// // counter2.increment();
// counter2.increment();
// counter2.increment();
// console.log(counter2.value());
// counter2.reset();
// console.log(counter2.value());

//! Task 3:
//todo Create a function once(fn) that takes a function fn and returns a new function that can only be called once. The result should be cached and reused for every subsequent call.

// const add = (a,b)=> a+b;
// const once = (fn)=>{
//     let called = false;
//     let result;

//     return (a,b)=>{
//         if(!called)result = fn(a, b), called = true;
//         return result;
//     };
// };

// const onceAdd = once(add);
// console.log(onceAdd(88, 18));
// console.log(onceAdd(555, 18));

//! Task 4:
//todo Create a function that prints numbers 1 to 5 with a delay of 1 second between each print using setTimeout and closures (no let, use var).

//? ❗Hint:
//* Use an IIFE (Immediately Invoked Function Expression) inside the loop.

const printNum = ()=>{
    for(var i = 1; i<=5; i++){
        ((val)=>{
            setTimeout(() => {
                console.log(val);
            }, val * 1000);
        })(i);
    }
};

printNum();