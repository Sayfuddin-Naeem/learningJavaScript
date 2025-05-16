//todo 1. Basic Variable Assignment:

// const fruits = ["mango", "jackfruit", "lichi"];
// const [first, second, third] = fruits;

// console.log(`First fruit in Barishal: ${first}`);
// console.log(`Second fruit: ${second}`);
// console.log(`Third fruit: ${third}`);

// todo 2. Skipping Elements:

// const weather = ["sunny", 32, "humid", "windy"];
// const [condition, , humidity] = weather; // Skip the temperature

// console.log(`Today's condition in Barishal: ${condition}`); 
// console.log(`Humidity level: ${humidity}`);

// todo 3. Rest Parameter (...) for Remaining Elements:

// const rivers = ["Meghna", "Padma", "Jamuna", "Buriganga"];
// const [majorRiver, ...otherRivers] = rivers;

// console.log(`Major river in Bangladesh: ${majorRiver}`);
// console.log(`Other rivers: ${otherRivers}`);

// todo 4. Default Values:

// const colors = ["red"];
// const [primaryColor, secondaryColor = "yellow"] = colors;

// console.log(`Primary color: ${primaryColor}`);
// console.log(`Secondary color: ${secondaryColor}`);
// const emptyArray = [undefined, "green"];
// const [firstValue = "default", secondValue] = emptyArray;
// console.log(`First value: ${firstValue}`);
// console.log(`Second value: ${secondValue}`);

// todo 5. Destructuring in Function Parameters:

// function displayCoordinates([latitude, longitude]) {
//   console.log(`Latitude in Barishal: ${latitude}, Longitude: ${longitude}`);
// }

// const barishalCoordinates = [22.70, 90.38];
// displayCoordinates(barishalCoordinates);

// function getFirstTwo([first, second]) {
//   return [first, second];
// }

// const numbers = [10, 20, 30, 40];
// const [firstTwoNumbers] = getFirstTwo(numbers); // Incorrect - getFirstTwo returns an array
// const firstTwo = getFirstTwo(numbers);
// console.log(`First two numbers: ${firstTwo}`); // Output: First two numbers: [ 10, 20 ]

// todo 6. Nested Array Destructuring:

// const nestedArray = [1, [2, 3], 4];
// const [one, [two, three], four] = nestedArray;

// console.log(one);   // Output: 1
// console.log(two);   // Output: 2
// console.log(three); // Output: 3
// console.log(four);  // Output: 4

// todo 7. Swapping Variables:

// let a = 5;
// let b = 10;
// [a, b] = [b, a];

// console.log(`a: ${a}`); // Output: a: 10
// console.log(`b: ${b}`); // Output: b: 5

// todo 8. Returning Multiple Values from a Function:

// function getFullName() {
//   return ["Abul", "Kalam"];
// }

// const [firstName, lastName] = getFullName();
// console.log(`Full name in Barishal: ${firstName} ${lastName}`);