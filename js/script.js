const API_KEY = `bd9af946dfba173d71c145ba85b00064`;
const searchTemperature = () => {
  const city = document.getElementById('city-name').value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  console.log(url);
  
  fetch(url)
  .then(res => res.json())
  .then(data => displayTemperature(data))
}  
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('country', temperature.sys.country);
    setInnerText('condition', temperature.main.temp);
    setInnerText('wether-helth', temperature.weather[0].main);
    console.log(temperature);
    // Set weather Icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}