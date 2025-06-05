// todo 1. Double the number
// const nums = [1, 2, 3, 4, 5, 6];
// const double = nums.map(x => x * 2);
// console.log(double);

// todo 2. Capitalize Each Word

// const words = ['john', 'doe'];
// const capitalizedWord = words.map(x => x.toUpperCase());
// console.log(capitalizedWord);

// todo 3.Extract Names from User Objects
// const users = [
//     {name : 'Alice', age : 39},
//     {name : 'Bob', age : 49}
// ];
// const usersName = users.map(u => u.name);
// console.log(usersName);

// todo 4. Add Index to Each Element

// const chars = ['a', 'b', 'c', 'd'];
// const elemWithIndex = chars.map((x, i)=> x+i);
// console.log(elemWithIndex);

// todo 5. Convert Celsius to Fahrenheit

// const temperatures = [0, 10, 20];
// const tempInFahrenheit = temperatures.map(x => ((9*x)/5) + 32);
// console.log(tempInFahrenheit);

// todo 6. Mask Credit Card Number

// const creditCards = ['123456781234578', '9876543210987654'];
// const maskCreditCards = creditCards.map(card => {
//     return '*'.repeat(card.length-4) + card.slice(card.length-4);
// });

// console.log(maskCreditCards);

// todo 7. Convert Numbers to String with Currency Format

// const money = [100, 200, 300];
// const currencyFormat = money.map(n => '$'+ n);
// console.log(currencyFormat);

// todo 8. Flatten a 2D Array Using map()

// const twoDArray = [[1], [2, 3], [4]];
// const flattenArr = twoDArray
// .map(arr => arr.join(','))
// .join(',')
// .split(',')
// .map(Number);
// console.log(flattenArr);

// todo 9. Transform Object Array to ID Map

// const data = [
//     {id : 1, value : 'a'},
//     {id : 2, value : 'b'},
// ];

// console.log(data);
// const idMap = Object.fromEntries(data.map(d => [d.id, d.value]));
// console.log(idMap);

// todo 10. Build a Full Name List

// const users = [
//     {firstName : 'John', lastName : 'Doe'},
//     {firstName : 'Jane', lastName : 'Smith'},
// ];

// const usersFullName = users.map(user => `${user.firstName} ${user.lastName}`);
// console.log(usersFullName);

// todo 11. Highlight Words

// const words = ['hello', 'world'];
// const highlightedWord = words.map(word => `<b>${word}</b>`);
// console.log(highlightedWord);

// todo 12. Doubles only the Even Numbers

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const doubleEven = nums.map(n => n % 2 ? n : n*2);
// console.log(doubleEven);

