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


//reduc()   S6
//used to find sum of array elements.
//*****************************************/

console.log(
    [1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
)
