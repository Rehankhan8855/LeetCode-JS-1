// //#LeetCode Problem Solve
//1>To Be Or Not To Be:
// function expect(val){
//   obj={
//      toBe:function(val1){
//       if(val===val1){
//         return true
//       }else{
//         throw Error("not equal")
//       }
//      },
//      notToBe:function(val1){
//       if(val!==val1){
//         return true
//       }else{
//         throw Error("equal")
//       }
//      }
//   }
//   return obj
// }



// //2>Counter2.

// var createCounter = function (init){
//     let n = init

//     let obj = {
//         increment(){
//             return init +=1
//         },
//         decrement(){
//             return init -=1
//         },
//         reset(){
//             return init = n
//         }
// const result = map([1,2,3],(num)=> num +1);
// console.log(result)



// //3>Apply Transform Over Each Element in Array.
// // var map = function(arr,fn){
// //     const newarr=[];
// //     for(let i=0;i<arr.length;i++){
// //         newarr[i]=fn(arr[i],i);
// //     }
// //    return newarr
// // }function strFactorial(str,init){



// //4>Filter Elements from Array.
// // var filter = function(arr,fn){
// //     const newarr= [];

// //     for(let i=0;i<arr.length;i++){
// //         if(fn(arr[i],i)){
// //             newarr.push(arr[i])
// //         }
// //     }
// //     return newarr
// // }
// // const result = filter([0,10,20,30],(num)=>num>10);
// // console.log(result)

// //2.eg>
// // function filter (arr,fn){
// //     const newarr = [];
// //     for(let i=0;i<arr.length;i++){
// //         if(fn(arr[i],i)){
// //             newarr.push(arr[i])
// //         }
// //     }
// //     return newarr
// // }
// // const result = filter([1,2,34,5,6,7,8,10],(num)=>num %2==0);
// // console.log(result)


// //5>Array Reduce Transformation.
// // var reduce = function (nums, fn, init){
// //     let total = init;

// //     for(let i=0;i<nums.length;i++){
// //         total = fn(total , nums[i])
// //     }
// //     return total
// // }
// // const result = reduce([1,2,3,4],(total,num) => total+num,0);
// // console.log(result)



// //6>Function Composition
// // var compose = function(functions){
// //     return function(x){
// //         for(let i=functions.length -1;i>=0;i--){
// //             x = functions[i](x)
// //         }
// //         return x
// //     }
// // }

// // let add2 = function(x){
// //     return x+2;
// // };

// // let multiply3 = function (x){
// //     return x*3;
// // };
// // const composedFunction = compose([add2 , multiply3]);
// // console.log(composedFunction(8))


// //7>Return length of arguments passed.
// // var argumentsLength = function(...args){
// //     return args.length;
// // }
// // const result = argumentsLength(5);
// // console.log(result)

// //8>Allow one Function called.
// // var once = function(fn){
// //     let called =false;
// //     return function(...args){
// //         if(called){
// //             return undefined
// //         }
// //         called=true;
// //         return fn(...args)
// //     }
// // }
// // let onLog=once(function(massage){
// //     console.log(massage)
// // })
// // console.log(onLog("hello world"))
// // console.log(onLog("hello rehan"))


//9>Add Two Promises:

// var addTwoPromises = async function(promise1,promise2){
//   const [val1,val2]= await Promise.all([promise1,promise2])
//   return val1+val2
// }


//10>Sleep
// async function sleep(millis){
//   return new Promise(resolve =>setTimeout(resolve,millis))
// }


//11>Sort By:
// var sortBy = function(arr,fn){
//   return arr.sort((a,b)=>{
//       return fn(a)-fn(b) 
//   })
// }