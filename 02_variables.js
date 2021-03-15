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
// mobile not working = not working return true.
console.log(undefined === null);
// not working = not wokring
// mobile = not mpbile //mismatch so return false.

//array
//collection of indexed and hetrogenous elements is called array.
//[] 
// How to iterate arry.
//forEach() use in (ES6).

var arr1 = [10,20,30,40,50];
var arr2 = [60,70,80,90,100];

arr1.forEach((element,index)=>{

    console.log(element, arr2[index]);
} );


var f_subs = [`Angular`, `reactJs`, `VueJS`];
var b_subs = [`NodeJs`, `Deno`, `SpringBoot`];

f_subs.forEach((element, index)=>{
console.log(element, b_subs[index]);
});


// JSON
//JavaScript Object Notation
//Json, used to transfer the data over the internet/
//Json is light weight
//Json is easy to parse.

//Objects....> {} arrays--> []  data----> key^value pair,
//keys^valyes separated by ":", pairs separated by using ",".


var obj = {
    sub_one: "react",
    sub_two: "Nodejs",
    sub_three: "MongoDB"

};

console.log(obj.sub_one,obj.sub_two,obj.sub_three);


for(var i=0;i<5;i++)
{
    console.log(i);
}

console.log(i);//var:5


//use let in place of var

//var keyword breaks the scope rule.
//let keword follows the scope rule.

//global variable
// var data = 100;
// console.log(data);

// //block
// {
//     //local variable
//     var data  = 200;
//     console.log(data);
// }

// console.log(data);
//let : 100, //var:200
//use let to reduce bug..in place of var.


let data1 = 100;
console.log(data1);

//block
{
    //local variable
    let data1  = 200;
    console.log(data1);
}

console.log(data1);


//Var vs let

var data = 100;
var data = 200;
console.log(data); // But var : 200 
//To overcome this debug we will use let
// let data1 = 100;
// let data1 = 200;
//Error// let:200

// var allows duplicate variable and let not allow duplicate variable.

//declaration and initialization.
//access the variable 

var data2 = 100; 
console.log(data);

// gives 100.

// But 
console.log(data);
var data2 = 100; // gives undefined.---> var:undefined---->this error is called variable hoisting

//we can overcome variable hoisting by let keyword.
//accessing the variables with undefined value, bfore its declaration and initialixation called as variable hoisting.



for(var i=0; i<5; i++)
{
    setTimeout(()=> {
        console.log(i);
    },5000);
}; // output: 5 5 5 5 5

// How to overcome this error..by using let keyword.
//use "let " keyword.



/**************************************************************************** 
      Var                                               let
  Var Keyword introduced in ES1                        let keyword introduced in ES6
  duplicate Variable allowed.                          wont allow duplicate variable.
  global polluting issue raised,                      we can overcome global polluting issue.
  variable hoisting issue raised.                    we can overcome variable hoisting issue.
  scope rule break by var keyword.                    scope rule obey by let keyword.

/*******************************************************************************/


//const 
//we cant modify the data (const).
//ES6 
const data = 100;
console.log(data);//100
data=200; //not possible coz const data=100;


// const obj1 = {wish:"ReactJS"};
// console.log(obj1); //  
// obj1 = {}; // Assignment to constant variable.

// // complete change is not posible , internal object we can change.

// obj1.wish = "Welcome to Es11";
// console.log(obj1);


const arr = [10,20,30,40,50];
console.log(arr); // 10,20,30....
//arr[];  TyprError

//arr = [100,200,300,400,500]; Error 

arr[0] = 100;
arr[1] = 200;
arr[2] = 300;
arr[3] = 400;
arr[4] = 500;

console.log(arr);

//direct change of values not possible, but we can change independdently.

