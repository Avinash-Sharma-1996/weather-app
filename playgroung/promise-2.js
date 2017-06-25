const request = require('request');
var geoCode=(address)=>{
   return  new Promise((resolve,reject)=>{
  var compurl=encodeURIComponent(address);
  request({
    url:  `https://maps.googleapis.com/maps/api/geocode/json?address=${compurl}+CA&key=AIzaSyAsRf2MrH97waGb0lM0EVZL2b6hlGaitqw`,
    json:true
  },(error,response,body)=>{
    if(error){
      reject('sorry bro this dosent work');
    }
    else if (body.status==='OK'){
      resolve({
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng});
    }else {
      reject('sorry bro this dosent work');
    }
  })
});
};
geoCode('1092').then((res)=>{
  console.log(JSON.stringify(res,undefined,2));
},(errorMessage)=>{
  console.log(errorMessage);
});
