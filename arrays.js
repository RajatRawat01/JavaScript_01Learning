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



*/
//findIndex()
//to know index of particular element

/*
    let arr = [10,20,30,40,50];
    console.log(
        arr.findIndex((element,index)=>{
            return element === 30;
        })
    );     //2
    console.log(
        arr.findIndex((element,index)=>{
            return element === 50;
        })
    );     //4
    arr.splice(arr.findIndex((element,index)=>{
        return element === 20;
    }),1);
    console.log(arr);    //[ 10, 30, 40, 50 ]
    arr.splice(arr.findIndex((element,index)=>{
        return element === 40;
    }),1);
    console.log(arr);    //[ 10, 30, 50 ]
let arr = [{"p_id":111,"p_name":"p_one","p_cost":10000},
            {"p_id":222,"p_name":"p_two","p_cost":20000},
            {"p_id":333,"p_name":"p_three","p_cost":30000},
            {"p_id":444,"p_name":"p_four","p_cost":40000},
            {"p_id":555,"p_name":"p_five","p_cost":50000}];
arr.splice(arr.findIndex((element,index)=>{
    return element.p_id === 333;
}),1);            
console.log(arr);
*/

/*
    //slice() - I need selected items....get the selectd items.
    let arr = [10,20,30,40,50,60,70,80,90,100];          //immutable
    console.log( arr.slice(4,7) );    //[ 50, 60, 70 ]
    console.log( arr.slice(6,9) );     //[ 70, 80, 90 ]
    console.log( arr.slice(1) );       //[20,30,40,50,60,70,80,90,100]

    console.log([...arr.slice(7,10),...arr.slice(0,3)]);[80,90,100,10,20,30]

  let arr2 = [0,1,2,3,4,5,6,7,8,9];

  let a1 = arr2.slice(5);
  let a2 = arr2.slice(0,5);
  let a3 = a2.concat(a1);
  console.log(a3);

lt arr3 = [100,200,300,400,500,600,700,800,900,1000];

console.log(arr3.slice(-6,-4) );

want to print200,300,400
console.log(arr3.slice(-9,-6)); //200,300,400
console.log(arr3.slice(-10,-9)); //100
    */

// Interview Questions...
  // What is diff between splice() and slic()

/*
    //copyWithin()---> Shifting of elements
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    arr1.copyWithin(2);
    console.log(arr1);   //[10,20,10,20,30,40,50,60,70,80]
    let arr2 = [10,20,30,40,50,60,70,80,90,100];
    arr2.copyWithin(5);
    console.log(arr2);  //[10,20,30,40,50,10,20,30,40,50]
    let arr3 = [10,20,30,40,50,60,70,80,90,100];
    arr3.copyWithin(0);
    console.log(arr3);   //[10,20,30,40,50,60,70,80,90,100]
    let arr4 = [10,20,30,40,50,60,70,80,90,100];
    arr4.copyWithin(2,5);
    console.log(arr4);    //[10,20,60,70,80,90,100,80,90,100]
    let arr5 = [10,20,30,40,50,60,70,80,90,100];
    arr5.copyWithin(3,8);
    console.log(arr5);   //[10,20,30,90,100,60,70,80,90,100]
    let arr6 = [10,20,30,40,50,60,70,80,90,100];
    arr6.copyWithin(2,-4);
    console.log(arr6);    //[10,20,70,80,90,100,70,80,90,100]
    let arr7 = [10,20,30,40,50,60,70,80,90,100];
    arr7.copyWithin(2,4,7);
    console.log(arr7);    //[10,20,50,60,70,60,70,80,90,100]
*/

/*
    //includes()
    //it is used to search particular element present in array
    //this function is boolean function
    let arr = [10,20,30,40,50];
    console.log(
        arr.includes(30)
    );   //true
    console.log(
        arr.includes(1)
    );   //false
    console.log(
        ["Angular","NodeJS","ReactJS"].includes("NodeJS")
    );   //true
*/


/*
    //sort()
    //it is used to sort the elements either ascending order or decending order
    let arr1 = [10,50,20,40,30];
    console.log(
        arr1.sort((num1,num2)=>{
            return num1-num2;
        })
    );     //[ 10, 20, 30, 40, 50 ]
    console.log(
        arr1.sort((num1,num2)=>{
            return num2-num1;
        })
    );    //[ 50, 40, 30, 20, 10 ]
    //num1-num2   (ascending order)
    //num2-num1   (decending order)
    console.log(
        [9,-1,2,6,2].sort((num1,num2)=>{
            return num1-num2;
        })[2]
    );  
    //[-1,2,2,6,9]
    console.log(
        [9,-1,2,6,2].sort((num1,num2)=>{
            return num2-num1;
        })[1]
    );  //6
*/

/*
    //indexOf()
    //won't create indexes to repeated elements
    let arr = [10,20,10,30,10,20];
    arr.forEach((element,index)=>{
        console.log(arr.indexOf(element));
    });   //0 1 0 3 0 1
    let arr2 = [10,100,1000,10,1000,55,10,100,55,40,10,1000];
    arr2.forEach((element,index)=>{
        console.log( arr2.indexOf(element) );
    });  //0 1 0 1 2 0 2 5 0 1 5 9 0 2
*/


/*
    let arr = [10,20,30,10,20,30];
    console.log(
        arr.filter((element,index)=>{
            return arr.indexOf(element) === index;
        })
    );    //[ 10, 20, 30 ]
    let arr1 = [-1,10,-1,16,20,16,28];
    console.log(
        arr1.filter((element,index)=>{
            return arr1.indexOf(element) == index;
        })
    );   //[ -1, 10, 16, 20, 28 ]
*/

/*
//repeat()
console.log("10".repeat(2));
console.log("Hello".repeat(5));
*/


/*
 lastIndexOf() 
let arr = [10,20,30,40,50,10,20,30,40,50];
console.log(arr.lastIndexOf(10)); //5
console.log(arr.lastIndexOf(20)); //6
console.log(arr.lastIndexOf(60)); //-1
*/

//converting string to array.
/*
console.log(
    Array.from("Hello")
    );
 
    console.log(
        Array.from("Hello").reverse().toString()
        );    

        //to remove commas.


        console.log(
            Array.from("Hello").reverse().join("")
            );    
    
*/

/*
console.log("Hello".length);  //7
console.log("Hllo".trim().length); //5 
//trim() ---> remove wide spaces

console.log(" Hello ".trimStart().length ); //6
console.log(" Hello ".trimend().length ); //6
*/


//console.log("Hello".padStart(10,"*"));   //****Hello
//console.log("Hello".padStart(20,"ReactJs")); 

/*

console.log(
    "Hello  Hello".split(" ")
); //['Hello', 'Hello' ]

console.log(
    "He,l,l,o"
);

console.log(
    "He,l,/,l,o".replace(/,/g,"").replace("/","").split()
);
*/

/*
console.log(
    "Welcome to ReactJs".substr(0,7)
); // Welcome

console.log(
    "Welcome to ReactJs".substr(8,2)
); // to

console.log(
    "Welcome to ReactJs".substr(11,7)
); // ReactJs

console.log(
 "Hello Welcome to Angular11".substring(0,5),
 "Hello Welcome to Angular11".substring(6,13)
);
*/

// INTERVIEW QUESTIONS*************

//DIFFERENCE B/W SUBSTR() & SUBSTRING() 


//for...in
//it used to iterate only json objects.
/*let obj = {"key1":"Hello_1",
             "key2":"Hello_2",
             "key3": "Hello_3"};

             for(let key in obj){
                 console.log(key);
                 console.log(obj [ key ]);
             };
*/

for (let x of [10,20,30,40,50]){
    console.log(x);
};