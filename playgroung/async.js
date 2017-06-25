console.log('starting app');
setTimeout(()=>{
  console.log('this is afte the timeout ');
},2000);
setTimeout(()=>{
  console.log('timeout');
},0);

console.log('finnishing');
