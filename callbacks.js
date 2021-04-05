//Paassing one function to another function as an argument called as callback.


//Callbacks Ex.

/* function fun_one(function fun_two(){

 })

 {

};

*/

/*
function fun_one(arg1){

console.log(arg1() );
};

fun_one(function fun_two(){
    return "Hello";
});

*/
/*


function mean(param1,param2,param3){

    console.log(param1(),
                param2(),
                param3() );
};

mean(function frontEnd(){
    return "Angular";
}, function backEnd(){
    return "NodJS";
}, function dbFun(){
    return "MongoDb";
});
*/

/*

function mern(arg1){

    console.log(arg1() );
};

mern(()=>{return "Hello" } );
*/


/*
function fun_one(arg1){

    return arg1("Hllo",false);
   
};

//2 argument function arrow..
//ntire below func is stored in arg1
fun_one((res,err)=> {
   
    if(!err){
        console.log(res);
    }
});
*/

/*
function fun_one(param1, param2, param3){

    return param1("Hello_1")+ ` `+param2("hello_2")+ ` `+param2("hello_3") ;
    param1();
};

//pasing from donwn to top and top to up
fun_one((arg1)=>{console.log(arg1) },
        (arg1)=>{console.log(arg1)},
         (arg1)=>{console.log(arg1)});

         */
/*

         function add(num,callback){
             return callback(num+5,false);
         };

         function sub(num,callback){
             return callback(num-3,false);

         };
         
         //5 is stored in num , these are user defined variables.
         //(addRes,eror)=>{} is stored in callback.
         add(5,(addRes,error)=>{
             if(!error)
             {
                 sub(addRes,(subRes,error)=>{
                     if(!error){
                         console.log(subRes);                   
                          }
                 });
               //  console.log(addRes);     
              }
         });

*/

         //callback hell--->tightly coupled code ...> 2nd is dependandt on 1 and vice versa..
         //Inreal time we prefer loosely coupled code, so we use Promises.



         function add(num){
             return new Promise((resolve,reject)=>{
                 resolve(num+5);
             });
         };

         function sub(num){
            return new Promise((resolve,reject)=>{
                resolve(num-3);
            });
        };

        function mul(num){
            return new Promise((resolve,reject)=>{
                resolve(num*2);
            });
        };

        function div(num){
            return new Promise((resolve,reject)=>{
                resolve((num/2)-2);
            });
        };

        function add(num){
            return new Promise((resolve,reject)=>{
                resolve(num+5);  });
        };


        //consume all promises.

        async function consume(){
          let addRes =   await add(5);
          let subres = await sub(addRes);
          let mulRes = await mul(subRes);
          let final_res = await div(mulRes);
          console.log(final_res);
        };

     consume();
