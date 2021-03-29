// function fun_one(arg1?:string,arg2?:string,arg3?:string):void{
// console.log(arg1,arg2,arg3);   
//  };
// // fun_one();
//  //fun_one("Angular","NodeJs","MongoDB");
//  //fun_one("ReactJs");
//  fun_one(undefined,"Deno");
//  fun_one(undefined, undefined, undefined);
//  fun_one(null,null,null);
//optional with regular
//in combination of optional with normal paramter should be in last position.
// function fun_one(arg2?:string,arg1?:string):void{
//     console.log(arg1,arg2);
// };
// //fun_one(); //Expectd 1-2 arguments, but got 
// fun_one("Hello_1"); //Hello_1 undefined.
// fun_one("Hello_1","Hello_2"); // Hello_1 , Hello_2
// //argument 1 is mandatory..
//********************************************************* */
//normal, optional paramter, default paramter and rest paramter.
//rest paramter always should be at last..
//first - nomraml or default
//second - optional
// function fun_one(arg1, arg2, arg3) {
//     if (arg2 === void 0) { arg2 = "Hello_2"; }
//     var arg4 = [];
//     for (var _i = 3; _i < arguments.length; _i++) {
//         arg4[_i - 3] = arguments[_i];
//     }
//     console.log(arg1, arg2, arg3, arg4);
// }
// ;
// fun_one();
//fun_one("Hello_1");
//fun_one("Hello",undefined,"Hello_3","Hello_4");
//fun_one(undefined,undefined,undefined,undefined);
// bacuse of undefined arg2 will not change..
//fun_one(null,null,null,null);
//because of null at arg2 , hello_2 will become null.
