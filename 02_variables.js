//variable
// Variables are used to store the data.
// Ex. string, number, boolean, objects...
// we define the variables using "var", "const", "let"
//let and const keyword introduced in ES6.

//variable should conain a-z, A_Z , 0-9 , $ , _
//variables should not start with digits.

//Syntax.

//var // let//const variable = value;

//string
//group of characters is called string.
//w ewill repreent string in " " quotes. , single quotes and back tick operator.
//backtick operator introduced in ES6.
// backtick `` also called as tenplate literal.

var sub = "FullStack UI";
var wish = `Welcome to ${sub}`;

console.log(wish);

var sub_one = `ReactJs`;
var sub_two = `NodeJS`;
var sub_three = `MongoDB`;

var mern = `MERN Stack : ${sub_one } <=> ${sub_two} <=> ${sub_three}`
console.log(mern);

var tbl_name = `employees`;
var uname = `admin`;
var upwd = `admin1`;

var login_query = `select *  from ${tbl_name } where ${uname}`;
console.log(login_query);


//numbers
// 1. decimal . 2. double 3. hexadecimal 4. octal 5.binary
//hexadecimal number should prefix with "0x"
//octal number should prefix with "0o"
//binary numbr should prefix with "0b".

var decimalNum = 100;
var doubleNum = 100.12345;
var hexadecimal = 0xABC123;
var octalNum = 0o123;
var binaryNum = 0b1010;

console.log(decimalNum,doubleNum, hexadecimal,octalNum,binaryNum);


//boolean datatype
//true or false
var flag = true;
console.log(flag);

//bigint
//2^63 to -2^63 -1

//bigint datatype will represent with "n" (suffix)
var my$number = 12324354657576465757564546576563465577453535454n;
console.log(my$number);

//Symbol
//security to data
var my_data = Symbol("ReactJS");
console.log(my_data);

//undefined ^ null

// == (value) ===(value^data type)

console.log(10 == "10");
//both are same and give ans true.

console.log(10 === "10");
//both are dif , as "10" is string and return false.

console.log(undefined == undefined);
console.log(undefined === undefined);
console.log(null == null);
console.log(null === null);
console.log(undefined == null);