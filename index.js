let mySentence = "this is my test sentence in javascript";
console.log(mySentence.charAt(10));



// arrays that store methods=>function inside an object

// Correct declaration:
let arrayName = [value1, value2, value3];

// types of arrays: they are various types of arrays in JavaScript
// 1. Single-dimensional arrays: these are the most common type of arrays, which store a list 
//    of items in a single row or column.
//    Example: let fruits = ["apple", "banana", "orange"];
// 2. Multi-dimensional arrays: these are arrays that contain other arrays, allowing for a grid-like structure.
//    Example: let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// How do you declare an empty array:
let emptyArray = [];

// Using the Array constructor:
let valueArray = new Array("value1", "value2", "value3");

// Arrays are zero indexed elements =>they start counting from zero
/* To access elements in an array, you use the index of the element you want to access. */
let students = ["John", "Hope", "Brian", "Ngetich", "Martin", "Gerald", "Crispin", ["hello", "world"], 100, true];

console.log(students[7][0]); // Output: hello

// JavaScript arrays have built-in methods that allow you to manipulate and work with the data they contain.
// Some common array methods include:
// 1. push(): Adds one or more elements to the end of an array.
students.push("New Student");
console.log(students); // Output: ["John", "Hope", "Brian", "Ngetich", "Martin", "Gerald", "Crispin", ["hello", "world"], 100, true, "New Student"]     
// 2. pop(): Removes the last element from an array and returns that element.
let lastStudent = students.pop();
console.log(lastStudent); // Output: New Student
console.log(students); // Output: ["John", "Hope", "Brian", "Ngetich", "Martin", "Gerald", "Crispin", ["hello", "world"], 100, true]
// 3. shift(): Removes the first element from an array and returns that element.
let firstStudent = students.shift();
console.log(firstStudent); // Output: John
console.log(students); // Output: ["Hope", "Brian", "Ngetich", "Martin", "Gerald", "Crispin", ["hello", "world"], 100, true]
// 4. unshift(): Adds one or more elements to the beginning of an array.    
students.unshift("New First Student");
console.log(students); // Output: ["New First Student", "Hope", "Brian", "Ngetich", "Martin", "Gerald", "Crispin", ["hello", "world"], 100, true]
// 5. splice(): Adds or removes elements from an array at a specified index.    
students.splice(2, 1, "New Student at Index 2");
console.log(students); // Output: ["New First Student", "Hope", "New Student at Index 2", "Ngetich", "Martin", "Gerald", "Crispin", ["hello", "world"], 100, true]
// 6. slice(): Returns a shallow copy of a portion of an array into a new array.
let slicedStudents = students.slice(1, 4);
console.log(slicedStudents); // Output: ["Hope", "New Student at Index 2", "Ngetich"]
// 7. indexOf(): Returns the first index at which a given element can be found  in the array, or -1 if it is not present.
let index = students.indexOf("Martin");    
console.log(index); // Output: 4
// 8. includes(): Determines whether an array includes a certain value among its entries, returning 
//    true or false as appropriate.
let hasCrispin = students.includes("Crispin");
console.log(hasCrispin); // Output: true
// 9. forEach(): Executes a provided function once for each array element.
students.forEach((student, index) => {
    console.log(`Student at index ${index}: ${student}`);
});
// 10. map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
let upperCaseStudents = students.map(student => {
    if (typeof student === 'string') {
        return student.toUpperCase();
    }
    return student;
});
console.log(upperCaseStudents); // Output: ["NEW FIRST STUDENT", "HOPE", "NEW STUDENT AT INDEX 2", "NGETICH", "MARTIN", "GERALD", "CRISPIN", ["hello", "world"], 100, true]
// 11. filter(): Creates a new array with all elements that pass the test implemented by the provided function.
let filteredStudents = students.filter(student => typeof student === 'string' && student.includes("New"));
console.log(filteredStudents); // Output: ["New First Student", "New Student at Index 2"]
// 12. find(): Returns the value of the first element in the array that satisfies the provided testing function.
let foundStudent = students.find(student => typeof student === 'string' && student.startsWith("Cris"));
console.log(foundStudent); // Output: Crispin   
// 13. findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
let foundIndex = students.findIndex(student => typeof student === 'string' && student.startsWith("Cris"));
console.log(foundIndex); // Output: 6   
// 14. sort(): Sorts the elements of an array in place and returns the sorted array.
let sortedStudents = students.slice().sort(); // Using slice to avoid mutating the original array       

