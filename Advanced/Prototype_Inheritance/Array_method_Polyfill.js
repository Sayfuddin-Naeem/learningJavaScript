// todo 1. Add Polyfill for Array.prototype.myMap()
//* Problem:
//* Implement your own version of Array.prototype.map() using prototype.

// Array.prototype.myMap = function(callback, thisArg) {
//   if(this == null){
//     throw new TypeError('Array.prototype.myMap is called on null or undefine');
//   }

//   if(typeof callback !== 'function'){
//     throw new TypeError(callback + ' is not a function');
//   }

//   const O = Object(this);
//   const len = O.length >>> 0;
//   const result = new Array(len);

//   for(let i = 0; i < len; i++){
//     if(i in O){
//         result[i] = callback.call(thisArg, O[i], i, O);
//     }
//   }

//   return result;
// };

// const arr = [1, 2, 3].myMap(x => x ** 10); // [10, 20, 30]
// console.log(arr);

// todo 2. Add polyfill for Array.prototype.myForEach

// Array.prototype.myForEach = function (callback, thisArg){
//     if(this == null){
//         throw new TypeError('Array.prototype.myForEach is called on null or undefine');
//     }
//     if(typeof callback !== 'function'){
//         throw new TypeError(callback + ' is not a function');
//     }

//     const O = Object(this);
//     const len = O.length >>> 0;

//     for(let i = 0; i < len; i++){
//         if(i in O){
//             callback.call(thisArg, O[i], i, O);
//         }
//     }

// }

// const nums = [2, 3, 4, 5, 6];

// nums.myForEach((elem)=>{console.log(elem ** 2)});

// todo 3. Add polyfill for Array.prototype.myFilter

// Array.prototype.myFilter = function(callback, thisArg){
//     if(this == null){
//         throw new TypeError('Array.prototype.myFilter is called on null or undefined.');
//     }
//     if(typeof callback !== 'function'){
//         throw new TypeError(callback + ' is not a function');
//     }

//     const O = Object(this);
//     const len = O.length >>> 0;
//     const res = [];

//     for(let i = 0; i < len; i++){
//         if(i in O){
//             const val = O[i];
//             if(callback.call(thisArg, val, i, O))
//                 res.push(val);
//         }
//     }

//     return res;
// }

// const nums = [4, 7889, 561, 4755, 887, 233, 45];
// console.log(nums.myFilter(x => x % 3 === 0));

// todo 4. Add polyfill for Array.prototype.myReduce

// Array.prototype.myReduce = function(callback, initialValue){
//     if(this == null){
//         throw new TypeError('Array.prototype.myReduce is called on null or undefined.');
//     }
//     if(typeof callback !== 'function'){
//         throw new TypeError(callback + ' is not a function');
//     }

//     const O = Object(this);
//     const len = O.length >>> 0;
//     let k = 0;
//     let accumulator;

//     if(arguments.length >= 2){
//         accumulator = initialValue;
//     }
//     else{
//         while(k < len && !(k in O)){
//             k++;
//         }
//         if(k >= len){
//             throw new TypeError('Reduce of empty array with no initial value');
//         }

//         accumulator = O[k++];
//     }

//     while(k < len){
//         if(k in O){
//             accumulator = callback(accumulator, O[k], k, O);
//         }
//         k++;
//     }
//     return accumulator;
// }

// const sumEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myReduce((acc, v) =>{
//     return v % 2 ? acc+v : acc;
// }, 0);

// console.log(sumEven);

// todo 5. Add polyfill for Array.prototype.myEvery

// Array.prototype.myEvery = function(callback, thisArg){
//     if(this == null){
//         throw new TypeError('Array.prototype.myEvery is called on null or undefined');
//     }
//     if(typeof callback !== 'function'){
//         throw new TypeError(callback + ' is not a function');
//     };

//     const O = Object(this);
//     const len = O.length >>> 0;

//     for(let i = 0; i < len; i++){
//         if(i in O){
//             if(!callback.call(thisArg, O[i], i, O))
//                 return false;
//         }
//     }

//     return true;
// }

// const nums = [2, 4, 6, 5];

// const allEven = nums.myEvery(n => n % 2 === 0);

// console.log(allEven); // true

// todo 6. Add polyfill for Array.prototype.mySome

// Array.prototype.mySome = function(callback, thisArg){
//     if(this == null){
//         throw new TypeError('Array.prototype.myEvery is called on null or undefined');
//     }
//     if(typeof callback !== 'function'){
//         throw new TypeError(callback + ' is not a function');
//     };

//     const O = Object(this);
//     const len = O.length >>> 0;

//     for(let i = 0; i < len; i++){
//         if(i in O){
//             if(callback.call(thisArg, O[i], i, O))
//                 return true;
//         }
//     }

//     return false;
// }

// const nums = [2, 4, 6, 0];

// const hasOdd = nums.mySome(n => n % 2);

// console.log(hasOdd); // true

// todo 7. Add polyfill for Array.prototype.myFind

// Array.prototype.myFind = function(callback, thisArg){
//     if(this == null){
//         throw new TypeError('Array.prototype.myEvery is called on null or undefined');
//     }
//     if(typeof callback !== 'function'){
//         throw new TypeError(callback + ' is not a function');
//     };

//     const O = Object(this);
//     const len = O.length >>> 0;

//     for(let i = 0; i < len; i++){
//         if(i in O){
//             const value = O[i];
//             if(callback.call(thisArg, value, i, O))
//                 return value;
//         }
//     }

//     return undefined;
// }

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Alice' },
//   { id: 3, name: 'Bob' }
// ];

// const user = users.myFind(u => u.name === 'Alice');

// console.log(user); // { id: 2, name: 'Alice' }

// todo 8. Add polyfill for Array.prototype.myFindIndex

// Array.prototype.myFindIndex = function(callback, thisArg){
//     if(this == null){
//         throw new TypeError('Array.prototype.myEvery is called on null or undefined');
//     }
//     if(typeof callback !== 'function'){
//         throw new TypeError(callback + ' is not a function');
//     };

//     const O = Object(this);
//     const len = O.length >>> 0;

//     for(let i = 0; i < len; i++){
//         if(i in O){
//             if(callback.call(thisArg, O[i], i, O))
//                 return i;
//         }
//     }

//     return -1;
// }

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Alice' },
//   { id: 3, name: 'Bob' }
// ];

// const user = users.myFindIndex(u => u.name === 'Alice');

// console.log(user); // { id: 2, name: 'Alice' }

// todo 9. Add polyfill for Array.prototype.myFlatMap

// Array.prototype.myFlatMap = function(callback, thisArg){
//     if(this == null){
//         throw new TypeError('Array.prototype.myFlatt is called on null or undefined');
//     }
//     if(typeof callback !== 'function'){
//         throw new TypeError(callback + ' is not a function');
//     }

//     const arr = Object(this);
//     const len = arr.length >>> 0;
//     let result = [];

//     for(let i = 0; i < len; i++){
//         if(i in arr){
//             const mapped = callback.call(thisArg, arr[i], i, arr);
//             if(Array.isArray(mapped)){
//                 result = result.concat(mapped);
//             }
//             else result.push(mapped);
//         }
//     }

//     return result;
// }

// const arr = [1, 2, 3];

// const result = arr.myFlatMap(x => [x, x * 2]);

// console.log(result); // [1, 2, 2, 4, 3, 6]

// todo 10. Add polyfill for Array.prototype.myFlat

// Array.prototype.myFlat = function(depth = 1){
//     if(this == null){
//         throw new TypeError('Array.prototype.myFlat is called on null or undefined');
//     }

//     const flatten = (arr, depth)=>{
//         return depth > 0
//             ? arr.reduce((acc, val)=>{
//                 return acc.concat(Array.isArray(val) ? flatten(arr, depth-1) : val);
//             }, [])
//         : arr.slice();
//     };

//     return flatten(this, depth);

// }

// todo 11. Add Polyfill for Array.prototype.myPush

// Array.prototype.myPush = function(...items){
//     let length = this.length;

//     for(let i = 0; i < items.length; i++){
//         this[length] = items[i];
//         length++;
//     }
//     return length;
// }

// let arr = [1, 2];
// console.log(arr.myPush(5, 3, 22, 55), arr); // 2

// todo 12. Add Polyfill for Array.prototype.myPop

// Array.prototype.myPop = function(){
//     if(this.length === 0){
//         return undefined;
//     }
//     const lastIndex = this.length-1;
//     const lastElement = this[lastIndex];

//     this.length = lastIndex;

//     return lastElement;
// }

// let nums = [1, 2, 3];

// console.log(nums.pop()); // 3
// console.log(nums);       // [1, 2]

// todo 13. Add Polyfill for Array.prototype.myUnshift

// Array.prototype.myUnshift = function(...items){
//     const originalLength = this.length;
//     const itemsLength = items.length;

//     for(let i = originalLength-1; i >= 0; i--){
//         this[i+itemsLength] = this[i];
//     }
//     for(let j = 0; j < itemsLength; j++){
//         this[j] = items[j];
//     }

//     return this.length;
// }

// const arr = [3, 4];

// const newLength = arr.myUnshift(1, 2);

// console.log(arr);       // [1, 2, 3, 4]
// console.log(newLength); // 4

// todo 14. Add Polyfill for Array.prototype.myShift

// Array.prototype.myShift = function(){
//     if(this.length === 0){
//         return undefined;
//     }
//     const first = this[0];

//     for(let i = 1; i < this.length; i++){
//         this[i-1] = this[i];
//     }
//     this.length--;

//     return first;
// }

// const arr = [100, 200, 300];

// const shifted = arr.myShift();

// console.log(shifted); // 100
// console.log(arr);     // [200, 300]

// todo 15. Add Polyfill for Array.prototype.mySplice

// Array.prototype.mySplice = function(start, deleteCount, ...items){
//     const res = [];
//     const len = this.length;

//     start = start < 0 ? Math.max((start + len), 0) : Math.min(start, len);
    
//     deleteCount = Math.min(Math.max(deleteCount, 0), len-start);

//     for(let i = 0; i < deleteCount; i++){
//         res.push(this[start + i]);
//     }

//     const tail = this.slice(start+deleteCount);
//     this.length = start;

//     for(let i = 0; i < items.length; i++){
//         this.push(items[i]);
//     }

//     for(let i = 0; i < tail.length; i++){
//         this.push(tail[i]);
//     }

//     return res;
// }

// let fruits = ['apple', 'banana', 'cherry', 'date'];
// console.log(fruits);

// let deleted = fruits.mySplice(1, 2, 'blueberry', 'blackberry');

// console.log(fruits);  // ['apple', 'blueberry', 'blackberry', 'date']
// console.log(deleted); // ['banana', 'cherry']

// todo 16. Add Polyfill for Array.prototype.myConcat

// Array.prototype.myConcat = function(...args){
//     const res = [];

//     for(let i = 0; i < this.length; i++){
//         res.push(this[i]);
//     }

//     for(let i = 0; i < args.length; i++){
//         const item = args[i];

//         if(Array.isArray(item)){
//             for(let j = 0; j < item.length; j++){
//                 res.push(item[i]);
//             }
//         }
//         else res.push(item);
//     }

//     return res;
// }

// const x = [1, 2];
// const y = [3, 4];
// const z = 5;

// console.log(x.myConcat(y, z)); // [1, 2, 3, 4, 5]

// todo 17. Add Polyfill for Array.prototype.mySlice

// Array.prototype.mySlice = function(start, end){
//     const res = [];
//     const len = this.length;

//     start = start ?? 0;
//     start = start < 0 ? Math.max(start + len, 0) : Math.min(start, len);

//     end = end ?? 0;
//     end = end < 0 ? Math.max(end + len, 0) : Math.min(end, len);

//     for(let i = start; i < end; i++){
//         res.push(this[i]);
//     }

//     return res;
// }

// let data = ['a', 'b', 'c', 'd', 'e'];

// console.log(data.mySlice(1, 4));  // ['b', 'c', 'd']
// console.log(data.mySlice(-3, -1)); // ['c', 'd']

// todo 18. Add Polyfill for Array.prototype.myIncludes

Array.prototype.myIncludes = function(searchElem, fromIndex = 0){
    const len = this.length;
    if(len === 0)return false;

    const start = fromIndex >= 0 ? fromIndex : Math.max(fromIndex + len, 0);

    for(let i = start; i < len; i++){
        if(i in this){
            const current = this[i];

            if(searchElem === current || (typeof current === 'number' && typeof searchElem === 'number' && isNaN(current) && isNaN(searchElem)))
                return true;
        }
    }

    return false;
}

const data = ['apple', 'banana', NaN];

console.log(data.myIncludes('banana'));  // true
console.log(data.myIncludes('grape'));   // false
console.log(data.myIncludes(NaN));       // true
