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
//    });



let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1");
    },0);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve("Promise2");
      //**************************** */
      //Out of 3, if one is failed, then other 2 will also not xecute.  
        reject("Error");
    },5000);
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise3");
    },10000);
});

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
Promise.race([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errorRes)=>{
    console.log(errRes);
});