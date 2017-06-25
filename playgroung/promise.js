var asyncAdd=(a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof a=='number'&& typeof b==='number'){
        resolve(a+b);
      }else {
        reject('arguments must be number');
      }
    },1500);
  });
};
asyncAdd(5,'7').then((res)=>{
  console.log(res);
  return asyncAdd(res,33);
}).then((res)=>{
  console.log(res);
}).catch((errorMessage)=>{
  console.log(errorMessage);
})


//
// var somePromise =new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//   // resolve('hi  it worked');
//   reject('unable to fulfill the promise ')
// },2500);
// });
// somePromise.then((message)=>{
//   console.log('sucess:',message);
// },(errorMessage)=>{
//   console.log('unsucessful',errorMessage);
// })
