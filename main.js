// COMMENTS //
//Comments start with a // for single line, or
/*
for multiline. Similar to Java, C++, C, and many other languages. Different from Python
*/

/*
// VARIABLES //
var a = 5 //creates a variable "a", with the number value 5
b = 7 //you don't need the var keyword to declare a new variable, similar to Python.
myString = "Hello world!" //declare strings like so.
arr = [] //declares an empty array
arr2 = [1, 2, 3, 4] //creates an array with a few numbers as elements.
*/
/*
// HELLO WORLD //
console.log(myString) //prints out "Hello world!". console.log takes in pretty much any arguements and prints it out.
*/

// CONTROL FLOW //
if(a == 5){ //simple if statement
	//do something
} else if(b==5){ //simple else if
	//will not be run
}
for (var i = arr2.length - 1; i >= 0; i--) { //this is a C style for loop, iterates through every element
	arr2[i]
}
//It starts at the end of the array, however. If you were to print this out, it would go "4 3 2 1".

for (var i = 0; i < arr.length; i++) { //more standard for loop, iterates through in order
	arr[i]
}

for each (item in arr2) {
  console.log(item)
}
