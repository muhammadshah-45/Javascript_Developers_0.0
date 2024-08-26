console.log("running");


// CHAPTER NO. 04 :- Variable Names Legal and Illegal

         //=======Rules for Variable Names========// 

//  1 => A variable name can't contain any spaces 
//Like an Example Below:
//var   = "shah"; // Syntax Error : Unexpected token '='

// 2 => A variable name can contain only letters, numbers, dollar signs, and underscores.
//Like an Example Below:

//variable name declare with only letters
var abc = "shah";
console.log(abc); //Output: 'shah'

//variable name with numbers
var shah34 ="shah"; 
console.log(shah34);//Output: 'shah'

//with dollar sign($)
var $name = "shah";
console.log($name);//Output: "shah"

//with underscores( _ )
var _name = "Shah";
console.log(_name); //Output: "Shah"
var first_name = "Muhammad";
console.log(first_name); //Output: "Muhammad"

// 3 => Capital letters are fine, but be careful. Variable names are CASE SENSITIVE. A rose is not a
//Rose.
//Like an Example Below:

var Rose = "red rose";
var rose = "white rose";
console.log(Rose); // Output: "red rose"
console.log(rose); //Output: "white rose"

// 4 => In JavaScript, use camelCase for variable names declaration.
// A camelCase name begins in lower case.
// Like an Example below:
// var userName = "it's a camelCase variable name";
// console.log(userName); // Output: "it's a camelCase variable name"

// var myResponseData = "Data is response now";
// var userValidCnicName = "Muhammad Shah";



