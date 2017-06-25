const request = require('request');
var getUser=(id,callback)=>{
 var user={
   id:id,
   name: ' avinash '
 };
 setTimeout(()=>{
    callback(user);
 },3000);


};
getUser(31,(userobj)=>{
  console.log(userobj);
});
