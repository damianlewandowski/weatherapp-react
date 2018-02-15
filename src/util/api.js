import axios from 'axios';

const apiKey = "5ca569f958081bf33ad70ad616e40bd9";

function getWeather(cityCountry) {
  const uri = `https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${cityCountry}&appid=${apiKey}`;
  console.log(uri);
  const encodedURI = window.encodeURI(uri);
  
  return axios.get(encodedURI)
}

export {getWeather};