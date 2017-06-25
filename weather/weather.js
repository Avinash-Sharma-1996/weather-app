const request = require('request');

var getWeather =(lat,lng,callback)=>{
request({
  url: `https://api.darksky.net/forecast/0a8b61089da53f63abc8ee2ef204115e/${lat},${lng}`,
  json:true
},(error,response, body)=>{
  if(!error,response.statusCode== 200){
  callback(undefined,{
    temperature:body.currently.temperature,
    apprentTemp:body.currently.apparentTemperature
  });
  }else {
    callback('unable to featch the weather')
  }

});
}
module.exports={
  getWeather
};


// 30.334993,76.383238
