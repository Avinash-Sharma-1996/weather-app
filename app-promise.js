const yargs = require('yargs');
const axios = require('axios');
const fs = require('fs');

const argv= yargs .options({
    a:{

      alias:'address',
      describe:'address for the weather ',
      string:true
    }
    })
    .help()
    .alias('help','h')
    .argv;
  if (argv.address==undefined){
        var  purl= fs.readFileSync('default.json');
        var  cmpurl=JSON.parse(purl);
        var compurl=encodeURIComponent(cmpurl);
        }else{  const compurl = encodeURIComponent(argv.address);
    }
  var geocodeUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${compurl}+CA&key=AIzaSyAsRf2MrH97waGb0lM0EVZL2b6hlGaitqw`;

  axios.get(geocodeUrl).then((response)=>{
    if(response.data.status==='ZERO_RESULTS'){
      throw new Error('HI we got an error there can not find the palce you r looking for ');
    }
    var lat=response.data.results[0].geometry.location.lat;
    var lng=response.data.results[0].geometry.location.lng;
    var weatherUrl= `https://api.darksky.net/forecast/0a8b61089da53f63abc8ee2ef204115e/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    axios.get(weatherUrl).then((response)=>{
        console.log(`it is currently${response.data.currently.temperature} but it must be feeling like ${response.data.currently.apparentTemperature}`);
    }).catch((e)=>{
      console.log(e);
    });
  }).catch((e)=>{
    if(e.code==='ENOTFOUND'){
      console.log('unable to connect to the servers')
    }else {
      console.log(e.message);
    }

  });
