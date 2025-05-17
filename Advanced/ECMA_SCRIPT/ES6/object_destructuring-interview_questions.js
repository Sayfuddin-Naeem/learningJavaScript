// todo 1.Extracting Basic Properties: Write a function extractNameAndAge(obj) that takes an object with name and age properties and returns an object containing these properties with the same keys, using object destructuring.

// function extractNameAndAge(obj) {
//   const {name, age} = obj;
//   return {name, age};
// }

// const person = { name: "Fatema", age: 22, city: "Barishal" };
// console.log(extractNameAndAge(person)); // Expected output: { name: "Fatema", age: 22 }

// todo 2.Renaming Properties: Write a function formatProduct(obj) that takes an object with title and price properties and returns an object with keys productName and productPrice respectively, using object destructuring with renaming.

// function formatProduct(obj) {
//     const {title : productName, price : productPrice} = obj;
//     return {productName, productPrice};
// }

// const product = { title: "Shitol Pati", price: 250 };
// console.log(formatProduct(product)); // Expected output: { productName: "Shitol Pati", productPrice: 250 }

// todo 3.Using Default Values: Write a function getItemDetails(obj) that takes an object which might have name and an optional quantity. Return an object with itemName and itemQuantity. If quantity is not present, default itemQuantity to 1.

// function getItemDetails(obj) {
//   const {name : itemName, quantity : itemQuantity = 1} = obj;
//   return {itemName, itemQuantity};
// }

// const item1 = { name: "Coconut" };
// const item2 = { name: "Fish", quantity: 2 };
// console.log(getItemDetails(item1)); // Expected output: { itemName: "Coconut", itemQuantity: 1 }
// console.log(getItemDetails(item2)); // Expected output: { itemName: "Fish", itemQuantity: 2 }

// todo 4.Extracting from Nested Objects: Write a function getAddressCity(obj) that takes an object with a nested address object containing a city property. Return the value of the city property using nested object destructuring.

// function getAddressCity(obj) {
//   const {address : {city}} = obj;
//   return city;
// }

// const resident = { name: "Aminul", age: 35, address: { street: "College Road", city: "Barishal" } };
// console.log(getAddressCity(resident)); // Expected output: "Barishal"

// todo 5.Combining Rest Properties: Write a function extractImportantInfo(obj) that takes an object with id, name, and potentially other properties. Return a new object containing only name and the rest of the properties (excluding id) under a key called details, using object destructuring and the rest parameter.

// function extractImportantInfo(obj) {
//   const {name, id, ...details} = obj;
//   return {name, details};
// }

// const personInfo = { id: 101, name: "Lipa", age: 29, occupation: "Teacher" };
// console.log(extractImportantInfo(personInfo));
// Expected output: { name: "Lipa", details: { age: 29, occupation: "Teacher" } }

// todo 6.Destructuring in Function Parameters: Write a function describeLocation({ name, coordinates: [lat, lon] }) that takes an object with a name property and a coordinates property (which is an array). The function should log a description of the location using the provided name and coordinates.

// function describeLocation({ name, coordinates: [lat, lon] }) {
//   console.log(`${name} is located at latitude ${lat}, longitude ${lon}`);
// }

// const barishalLocation = { name: "Barishal City", coordinates: [22.70, 90.38] };
// describeLocation(barishalLocation); // Expected output (console log): Barishal City is located at latitude 22.7, longitude 90.38

// todo 7.Conditional Property Extraction: Write a function processConfig(config) that takes a configuration object. If the object has a theme property, extract it. If it has background and color properties, extract them into a single style object. Return the extracted properties.

// function processConfig(config) {
//   if(Object.hasOwn(config, "theme")){
//     const {theme} = config;
//     return {theme};
//   }
//   if(Object.hasOwn(config, "background", "color")){
//     const {background, color} = config;
//     return {style : {background, color}};
//   }
//   return {};
// }

// const config1 = { theme: "dark", fontSize: "16px" };
// const config2 = { background: "white", color: "black", fontWeight: "bold" };
// const config3 = { fontSize: "12px" };

// console.log(processConfig(config1)); // Expected output: { theme: "dark" }
// console.log(processConfig(config2)); // Expected output: { style: { background: "white", color: "black" } }
// console.log(processConfig(config3)); // Expected output: {}

// todo 8.Dynamic Key Extraction: Write a function extractValueByKey(obj, key) that takes an object and a key (string). Use dynamic property name destructuring to extract the value associated with the given key.

// function extractValueByKey(obj, key) {
//   return obj[key];
// }

// const data = { id: 5, value: "important", type: "primary" };
// console.log(extractValueByKey(data, "value")); // Expected output: "important"
// console.log(extractValueByKey(data, "id"));    // Expected output: 5

// todo 9.Deeply Nested Object Destructuring with Renaming and Defaults: Consider an object representing user profile information with a deeply nested settings object. Write a function getUserDisplaySettings(profile) that extracts the theme from profile.settings, renaming it to uiTheme and providing a default value of "light" if it's not present. Also, extract the fontSize from profile.settings as userFontSize.

// function getUserDisplaySettings(profile) {
//   const {theme : uiTheme = "light", fontSize : userFontSize} = profile.settings || {};
//   return {uiTheme, userFontSize};
// }

// const user1 = { username: "joy", settings: { theme: "dark", fontSize: "18px" } };
// const user2 = { username: "sima", settings: { fontSize: "14px" } };
// const user3 = { username: "robi" };

// console.log(getUserDisplaySettings(user1)); // Expected output: { uiTheme: "dark", userFontSize: "18px" }
// console.log(getUserDisplaySettings(user2)); // Expected output: { uiTheme: "light", userFontSize: "14px" }
// console.log(getUserDisplaySettings(user3)); // Expected output: { uiTheme: "light", userFontSize: undefined }