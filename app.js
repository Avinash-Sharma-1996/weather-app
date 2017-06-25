const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather.js');

const argv= yargs .options({
    a:{
      demand:true,
      alias:'address',
      describe:'address for the weather ',
      string:true
    }
    })
    .help()
    .alias('help','h')
    .argv;


geocode.geocodeAdd(argv.a , (errorMessage,result)=>{
  if(errorMessage){
    console.log(errorMessage);
  }
  else {
    console.log(result.address);
    weather.getWeather(result.lat,result.lng,(errorMessage,result)=>{
      if(errorMessage){
        console.log(errorMessage);
      }else{
        console.log(`It is Currently ${result.temperature} but it feels like ${result.apprentTemp}`);
      }
    });

  }
});
