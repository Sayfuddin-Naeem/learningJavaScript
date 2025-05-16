//todo 1.First and Last: Write a function getFirstAndLast(arr) that takes an array as input and returns a new array containing only the first and last elements of the input array, using array destructuring.

function getFirstAndLast(arr) {
  const [first, ...rest, last] = arr;
  return [first, last];
}

const barishalDistricts = ["Barishal Sadar", "Bakerganj", "Mehendiganj", "Muladi", "Agailjhara"];
console.log(getFirstAndLast(barishalDistricts));

// todo 2.Extracting Specific Elements: Write a function getSecondAndFourth(arr) that takes an array and returns an object containing the second and fourth elements of the array with keys second and fourth, respectively, using destructuring.

// function getSecondAndFourth(arr) {
//   const [, second, , fourth] = arr;
//   return {second, fourth};
// }

// const riverNames = [" কীর্তনখোলা", "আড়িয়াল খাঁ", "পায়রা", "তেতুলিয়া", "সুরমা"];
// console.log(getSecondAndFourth(riverNames)); // Expected output: { second: "আড়িয়াল খাঁ", fourth: "তেতুলিয়া" }

// todo 3.Head and Tail: Write a function getHeadAndTail(arr) that takes an array and returns an object with two properties: head (the first element) and tail (an array containing the rest of the elements), using destructuring and the rest parameter.

// function getHeadAndTail(arr) {
//   const [head, ...tail] = arr;
//   return {head, tail};
// }

// const famousFoods = ["ইলিশ", "চিংড়ি", "নারিকেল", "সর্ষে"];
// console.log(getHeadAndTail(famousFoods)); // Expected output: { head: "ইলিশ", tail: ["চিংড়ি", "নারিকেল", "সর্ষে"] }

// todo 4. Swapping Variables in a Function: Write a function swapFirstTwo(arr) that takes an array and returns a new array where the first two elements have been swapped, using array destructuring within the function.

// function swapFirstTwo(arr) {
//   [arr[0], arr[1]] = [arr[1], arr[0]];
//   return arr;
// }

// const numbers = [10, 20, 30, 40];
// console.log(swapFirstTwo(numbers)); // Expected output: [20, 10, 30, 40]

// todo 5.Extracting from Nested Arrays: Write a function getInnerValues(arr) that takes an array containing a nested array and extracts the first and second elements from the inner array, returning them as a new array. Use nested destructuring.

// function getInnerValues(arr) {
//   const [, [first, second]] = arr;
//   return [first, second];
// }

// const nestedData = [1, [true, false, "yes"], 3];
// console.log(getInnerValues(nestedData)); // Expected output: [true, false]

// todo 6.Function Arguments with Default Values: Write a function formatLocation([city = "Barishal", district = "Barishal"]) that takes an array representing a location (city and district) and returns a formatted string. Use default values in the destructuring for cases where the array might have fewer than two elements.

// function formatLocation([city = "Barishal", district = "Barishal"]) {
//   return `City: ${city}, District: ${district}`;
// }

// console.log(formatLocation(["Bhola", "Bhola"]));       // Expected output: City: Bhola, District: Bhola
// console.log(formatLocation(["Patuakhali"]));          // Expected output: City: Patuakhali, District: Barishal
// console.log(formatLocation([]));                    // Expected output: City: Barishal, District: Barishal

// todo 7.Processing Array of Objects: You have an array of objects, where each object has a coordinates property which is an array of [latitude, longitude]. Write a function extractLatitudes(arr) that extracts all the latitudes from these objects and returns them in a new array, using destructuring within the loop or array methods.

// function extractLatitudes(arr) {
//   return arr.map((elem)=>{
//     const {coordinates : [latitude]} = elem;
//     return latitude;
//   });
// }

// const places = [
//   { name: "Kuakata", coordinates: [21.8459, 90.1212] },
//   { name: " সুন্দরবন", coordinates: [21.9450, 89.1833] },
//   { name: "চর কুকরি মুকরি", coordinates: [22.1933, 90.8272] },
// ];
// console.log(extractLatitudes(places)); // Expected output: [21.8459, 21.9450, 22.1933]

// todo 8.Conditional Destructuring: Write a function processWeatherData(data) that takes an array. If the array has at least three elements, it extracts the temperature, humidity, and wind speed. If it has fewer, it returns a default message. Use destructuring with a conditional check.

// function processWeatherData(data) {
//   if(data.length >= 3){
//     const [temperature, humidity, windSpeed] = data;
//     return {temperature, humidity, windSpeed};
//   }

//   return "Insufficient weather data.";
// }

// const currentWeather = ["30°C", "75%", "15 km/h", "Sunny"];
// const minimalData = ["28°C", "80%"];

// console.log(processWeatherData(currentWeather)); // Expected output: { temperature: "30°C", humidity: "75%", windSpeed: "15 km/h" }
// console.log(processWeatherData(minimalData));   // Expected output: "Insufficient weather data."

// todo 9.Reversing an Array (Partially) with Destructuring: Write a function reverseFirstTwo(arr) that takes an array and returns a new array where only the first two elements are reversed in order, using array destructuring.

// function reverseFirstTwo(arr) {
//   [arr[0], arr[1]] = [arr[1], arr[0]];
//   return arr;
// }

// const items = ["apple", "banana", "cherry", "date"];
// console.log(reverseFirstTwo(items)); // Expected output: ["banana", "apple", "cherry", "date"]