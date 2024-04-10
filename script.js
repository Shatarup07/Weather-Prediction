var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description'); // Fixed variable name
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "d61f3e61fb10db8aa8f5e86e184d6791";

function convertion(val) {
  return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
  var cityname = inputvalue.value;
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apik}`)
  .then(res => res.json())
  .then(data => {
      var nameval = data['name'];
      var descripVal = data['weather'][0]['description']; // Fixed variable name
      var temperature = data['main']['temp'];
      var windspeed = data['wind']['speed'];

      city.innerHTML = `Weather of <span>${nameval}</span>`;
      temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`; // Fixed closing span tag
      description.innerHTML = `Sky Conditions: <span>${descripVal}</span>`; // Used correct variable name
      wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
    })
  .catch(err => alert('You entered the wrong city name'));
});
