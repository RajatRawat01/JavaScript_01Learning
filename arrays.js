//ARRAy
//collection of indexed element is called an array..
//[]
//we wil acces aray elements by using "indexes".

//map()  ES6

//we want to manipulate each and every element.

/*
let arr1 = [1,2,3,4,5] ;

let arr2 = arr1.map((element,index)=>{
  
     return element*10;

});


console.log(arr1);
console.log(arr2);


console.log(
    [10,20,30,40,50].map((element,index)=>{
        return "$ "+element;  
    })
);

*/

//filter()   //ES6
/*****************************************/
//used to create new aray based on the conditions.

/*
[100,20,30,50,40,70] => new arry contains less than 50

[20,30,40]---> new array now

*/

/*
console.log(
 [10,20,30,4,50].filter((element,index)=>{
   return element<=30;
 })
);


console.log(
    [1,2,3,4,5,6,7,8,9,10].map((element,index)=> {
        return element*10;
    }).filter((element,index)=>{
        return element>=50;
    })
);


*/


//reduce()   S6
//used to find sum of array elements.
//*****************************************/

/*
console.log(
    [1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);

console.log(
    [1,2,3,4,5].map((element,index)=>{
   return element;
    }).filter((element,index)=>{

    }).reduce((firstElement,nextElement)=>{

          return firstElement + nextElement;
    })
);
*/

/*
reducright()
-usd to perform the summation from right to left..
*/

/*
console.log(
    ["ReactJS","To","Welcome"].reduceRight((firstElemetn,nextElement)=>{
        return firstElement+ " "+nextElement;
    })
)
*/

let arr1 = ["ReactJS"];
let arr2 = ["NodeJs"];
let arr3 = ["MongoDb"];
let arr4 = arr1.concat(arr2,arr3);
console.log(arr4);

//ES6 
//...spread operator--> we can perform same operation like concat.
/*
let arr5 = [...arr1,...arr2,...arr3];
console.log(arr5);//['Reactjs','Nodejs','mongoDb']
*/

//We need to find particular element..

//find()
//used to perform the search operation..

/*
console.log(
    [1,2,3,4,5].find((element,index)=>{
    return element ===50;
    })
); //5  //undefined

*/

//some()
//if atleast one element satisfies the condition then it will return
//true otherwise false..

/*
console.log(
    [1,2,3,4,5].some((element, index)=>{
        return element<1;
    })
); //true
*/

//every()
//if all the elements satisfy the conditions..
//it will true or else false..

/*
console.log(

    [10,20,30,40,50].every((element,index)=>{

        return element<=50;
    })
);  //true
*/


//push()
/************* */
//ad the element at end

//pop()
/*********** */
//remove the last element

//unshift()
/************* */
//add the lement at beginning

//shift()
/******** */


// let arr = [20,30,40];
// console.log(arr);
// arr.push(50);
// arr.unshift(10);
// arr.pop(50);

//middlee element manipulation ...
//splice()---> used to remove/add element at any index of array..

let arr = [10,20,40,30,50,60,70,80,90,100];
console.log(arr);


//we are not getting original arr this is called mutabilit.

//arr.splice(4,2);
//console.log(arr);

//remove 40
arr.splice(3,1);
console.log(arr);

//remove 100

//[20,30,70]
//I want to add 40 after 30
arr.splice(1,1,30,40,50,60);
console.log(arr);

arr.splice(0,0,10);
console.log(arr);
//Sourabh Gupta ---> Printer Repairing..
9811215121

