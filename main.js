// COMMENTS //
//Comments start with a // for single line, or
/*
for multiline. Similar to Java, C++, C, and many other languages. Different from Python
*/


// VARIABLES //
var a = 5 //creates a variable "a", with the number value 5
b = 7 //you don't need the var keyword to declare a new variable, similar to Python.
myString = "Hello world!" //declare strings like so.
arr = [] //declares an empty array
arr2 = [1, 2, 3, 4] //creates an array with a few numbers as elements.
fun = true //simple booleans


// HELLO WORLD //
console.log(myString) //prints out "Hello world!". console.log takes in pretty much any arguements and prints it out.


// CONTROL FLOW //
if(a == 5){ //simple if statement
	//do something
} else if(b==5){ //simple else if
	//will not be run
}

for(var i = 0; i < arr2.length; i++) { //this is a C style for loop, iterates through every element
	console.log(arr2[i])
}

for(var i = arr2.length - 1; i >= 0; i--) { //this is a C style for loop, iterates through every element
	console.log(arr2[i])
}
//It starts at the end of the array, however. If you were to print this out, it would go "4 3 2 1".

for(item of arr2) { //this iterates over each item in an array, similar to Python
  console.log(item)
}

i = 0
while(i < arr2.length){ //you can always use a while loop to do the same thing
	console.log(arr2[i])
	i++
}

// FUNCTIONS INTRO //
//why is this intro? JS functions are whack. They do everything and it sometimes will trigger people
//let's create a simple add function
function add(a, b){
	return //your code here
}

console.log(add(5,4)) //should print out 9

//Javascript also supports passing in functions as arguments. It is confusing, but can be useful
times = function(func, x){ //we want this function to execute "func" x number of times
	//try doing this with a while loop!
}
//notice how we assigned a variable to be a function. 
//JS has functions be actual types, so assigning it does the same thing as above with "add"

times(function(){console.log("this is confusing")}, 3) //should print out that string 3 times.

// JavaScript Objects //
//most of you have probably seen or used a .json file.
//JSON stands for Java Script Object Notation. These are quite similar to Python dictionaries.
obj = {
	key: "value",
	age: 21,
	"canDrink": true, //why does this have quotes?
	"is lit": false
}
//you use the "." to access properties of an object
console.log(obj.key) //prints out value
console.log(obj.age) //prints out 21
console.log(obj["key"]) //also prints out value. Hmmm
console.log(obj.canDrink) //prints out true
//console.log(obj.is lit) //WON'T WORK
console.log(obj["is lit"]) //prints out false
//we can use a string as a "key" to have special chars in our keys, like spaces.
obj["newKey"] = 5 //creates a new key and assigns a value
obj.newKey = 6
console.log(obj.newKey) //what will this print out?

// OBJECT ORIENTATION //
//oh boy, classes. One of the most confusing things about JS.
//let's make a todo class
function todo(name){
	//this references whatever object is created with todo. Little confusing
	this.name = name //we take the name passed in to the function, and assign it to the new object's name property
	this.isDone = false
	this.checkOff = function(){ //just as before, you can assign a function to a variable.
		//implement this 
	}
	this.print = function(){ //checkOff and print are examples of methods
		console.log(this)
	}
}
todo1 = new todo("something") //the new keyword is what makes this "function" into an object
todo1.print()
//todo1 is an object now, just like the objects we created before.
//but wait, JS gets weirder

//what if we wanted to extend this class and add a description field?
todo.prototype.addDesc = function(desc){
	this.desc = desc
}
//the prototype object is something that is part of every class, and it allows you to modify the underlying object
//so, we can use it to add new fields and functions
todo2 = new todo("wait what")
todo2.addDesc("why is this a thing, JS?")
todo2.print()
//on one hand, this is confusing. On the other hand, it saves some typing, and might make it easier to do things
//there are also ways to make private and public variables in classes, but I am not going to cover that in this Intro

// ARRAYS //
arr2.push(5) //use push to add on to the end of an array
console.log(arr2)
arr2.pop() //removes from the end of an array
arr2.splice(1,3) //removes index 1, 2, and 3
console.log(arr2)
//arrays can hold multiple types, such as objects
arr2.push({obj: true})
console.log(arr2)