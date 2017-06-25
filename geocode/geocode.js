const request = require('request');

var geocodeAdd =(address,callback)=>{
  const compurl = encodeURIComponent(address);


   request({
     url : `https://maps.googleapis.com/maps/api/geocode/json?address=${compurl}+CA&key=AIzaSyAsRf2MrH97waGb0lM0EVZL2b6hlGaitqw`,
     json:true
   },(error,response,body)=>{
      if (error){

       callback('unable to reache the google servers ');
       }
       else if (body.status==='ZERO_RESULTS'){
         callback('zero results found');
       }
     else if(body.status==='OK') {
      callback(undefined,{
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng});

   }
   });
 }
module.exports={
  geocodeAdd
}




















//
// const compurl = encodeURIComponent(argv.address);
//
//
// request({
//   url : `https://maps.googleapis.com/maps/api/geocode/json?address=${compurl}+CA&key=AIzaSyAsRf2MrH97waGb0lM0EVZL2b6hlGaitqw`,
//   json:true
// },(error,response,body)=>{
//   if (error){
//     console.log('unable to reache the google servers ');
//     }
//     else if (body.status==='ZERO_RESULTS'){
//       console.log('zero results found');
//     }
//   else if(body.status==='OK') {
//    console.log(`ADDRESS: ${body.results[0].formatted_address}`);
//    console.log(`Lat: ${body.results[0].geometry.location.lat}   Lng: ${body.results[0].geometry.location.lng}  `);
// }
// });
