//communication between producer and consumer called as promises.
//promises are "special javascript objects".
//we will create the promises by using "Promise" class.
//consumer will consume the Promises by using "then()" function.
//Promises have following states.
// success @resolve
//failure @reject
//pending 


//Creating the promises.
// let promise1 = new Promise((resolve,reject)=>{
//     resolve("Tomorrow I will discuss async ^ await keyword");

// });

// //Consuming the promises.
// promise1.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });



// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//          resolve("Hello");

//     },5000);
//    });

//    promise1.then((posRes)=>{
//        console.log(posRes);
//    },(errRes)=>{
//        console.log(errRes);
// //    });



// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise1");
//     },0);
// });

// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         //resolve("Promise2");
//       //**************************** */
//       //Out of 3, if one is failed, then other 2 will also not xecute.  
//         reject("Error");
//     },5000);
// });

// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise3");
//     },10000);
// });

// promise1.then((posRes)=>{
//     console.log(posRes);
// },(erRes)=>{
//     console.log(errRes);
// });

// promise2.then((posRes)=>{
//     console.log(posRes);
// },(erRes)=>{
//     console.log(errRes);
// });

// promise3.then((posRes)=>{
//     console.log(posRes);
// },(erRes)=>{
//     console.log(errRes);
// });

//Promise.all() it consumes all the promise all together.
//****************************************************** */

// Promise.all([promise1, promise2, promise3]).then((posRes)=>
// {
// console.log(posRes[0]);
// },(errRes)=> {
 
//     console.log(errRes);
// });

//allSettles*********************************************//
// Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=> {

//      console.log(errRes);
// });


//Which promise will run first, we can check using race
// Promise.race([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errorRes)=>{
//     console.log(errRes);
// });



//then() function use arrow function, as it causes trouble . We want to eradicate this.

/* then we have concept , Async and await keyword
//-----------------------------------------------

  - we will consume promises in 2 ways.

  1. then()
  2. aync & await.

  - then() function usage created the confusion beacause of callbacks.
  - recommended to use async and await to consume promises.
 - async & await keywords introduced in ES6.
*/

/*
let promise1 = new Promise((resolve,reject)=>{

     resolve("hello, welcometo async and await keyword");
});

//latest approach
async function my_fun(){

     const res = await promise1;
     console.log(res);
};

my_fun();

*/

/*

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise....!");
    },0);
});


let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise....2!");
    },5000);
});


let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise....3!");
    },10000);
});


async function my_func()
{
    const data1 = await promise1;
    const data2 = await promise2;
    const data3 = await promise3;

    console.log(data1,data2,data3);
};

my_func();

*/

//************************************************* */
/* What is Synchronous communication and Asynchronous communication
 
 - What is Synchronous Communication.
   ------------------------------------
    -Lets say there is a server and there are five clients(browsers).
    - Fist client will submit request and after request gets success ful for 
       1st client then only second client will only be able to send reqest and soo on,
     - For eg. In movie Ticket , he checks each ticket before entering into theatre.

    
   - what is Asynchronous Communication.
   ------------------------------------- 
     No rules and regulation ..
    - client 1, 2,3,4 entering into server at time parallery...
    - client 1 request will not impact client2 request and so on.

    for eg - movie finished, all will come out together parallrelly.
 

    what is recommend ?
     Always recommed - Asynchronous Communication.

    - In Javascript...
    ------------------
    1. jQuery(library)
     we use ajax() function
     
     In react...
     ----------------
     we use axios


     => Async

     => jQuery

     => JSON Server

     => GET

     => POST


     http://localhost:3000/prducts =---> Consume this url using async comm.
*/