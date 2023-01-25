// Useful String Properties and Methods
let userName = "Snoop Dogg";
let phoneNumber = "123-456-7890"

console.log(userName.length); // Length Of String
console.log(userName.charAt(0)); // Character At Index
console.log(userName.indexOf("o")); // First Occuring Index With Character
console.log(userName.lastIndexOf("o")); // Last Occuring Index With Character
userName = userName.trim(); // Gets Rid of Space Before and After The Characters
userName = userName.toUpperCase(); // UpperCase
userName = userName.toLowerCase(); // UpperCase

phoneNumber = phoneNumber.replaceAll("-", "/"); // First arg is what to replace, second arg is what to replace with
console.log(phoneNumber);

// String Slicing
let fullName = "Snoop Dogg";
let firstName; 
let lastName;

firstName = fullName.slice(0, 3);
lastName = fullName.slice(4); // Only uses characters at and after the index
// Or
lastName = fullName.slice(fullName.indexOf(" ")+1);
firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);
console.log(lastName);

// Method Chaining = calling one method after another in one continuous line of code
let name1 = "michael";
let letter = name1.charAt(0).toUpperCase().trim();
console.log(letter);
