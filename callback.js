console.log("javaScript is Synchronous Programming language");
//Synchronous refers to the  code is executed in step by step process or line by line in a sequence Order.
// example
// console.log("one");
// console.log("two");

// function hello() {
//   console.log("hyy whats up");
// }
// hello();
// setTimeout(hello, 2000);
// setTimeout(() => {
//   console.log("setTimeOut");
// }, 4000);
// console.log("three");

/* Due to Synchronous programming some important instructions delayed, 
because previous instructions  are still  not completed its execution.there will be delay in UI.
So to resolve this we use Asynchronous programming: which allows execute 
 next instructions code immediately without blocking the code flow or main thread */

// function getData(id, callback) {
//   setTimeout(() => {
//     console.log("data", id);
//     if(callback){
//       callback();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

const getInfo = (rollNo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("this is your info", rollNo);
      resolve("resolved");
    }, 4000);
  });
};
//example for  Promise chaining:

// let promise = getInfo(123);
// promise.then((res) => {
//   console.log("Successfully", res);
//   getInfo(456).then(() => {
//     console.log("second Promise", res);
//     getInfo(789).then(() => {
//       console.log("third PRomise ", res);
//     });
//   });
// });

async function information() {
  await getInfo(1234);
  await getInfo(5678);
  await getInfo(9090);
}
information();

//the above is example of callback hell which difficult to understand and manage

/*to resolve the issue of callback-hell & inversion of control in callbacks we use promises
Promise is an object in javaScript, it represents eventual completion of task or Async programming
Promise consist of two properties which are PromiseState & PromiseResult
to create promise we "new Promise(function(resolve,reject){
})"*/

// let promise = new Promise((resolve, reject) => {
//   console.log("this a  promise");
//   resolve("success");
// });
// promise;

// a front-end developers we are not creating promises it is done by backEnd dev's but we are making use of promise which is return through API's.
// function getData(id, callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", id);
//       callback;
//       resolve('succes')
//     }, 5000);
//   });
// }

// we handle promises by the help of .then() and .catch() functions

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("this a promise");
//       resolve("successful ");
//       // reject("error");
//     }, 5000);
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise resolved", res);
// });
// promise.catch((err) => {
//   console.error("promise has error", err);
// });
