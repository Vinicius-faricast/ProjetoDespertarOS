import { getCityData, getCityWeather } from "./weather.js";

const temperature = document.querySelector('.hero-temperature');
const statusClimate = document.querySelector('.status-climate');
const timeIcon = document.querySelector('.hero-icon');


const latitude = localStorage.getItem('latitude');
const longitude = localStorage.getItem('longitude');

const fetchCityWeatherInfo = async () => {
    if(!latitude && !longitude){
        alert('disponibilize sua localização para a aplicação funcionar corretamente');
        return;
    }
    const {Key} = await getCityData(latitude, longitude);
    const [{Temperature, WeatherText, WeatherIcon}] = await getCityWeather(Key)
    
    return {Temperature, WeatherText, WeatherIcon};
}

const injectHtml = async () => {
    const {Temperature, WeatherText, WeatherIcon} = await fetchCityWeatherInfo();
    temperature.innerText = Temperature.Metric.Value;
    statusClimate.innerText = WeatherText;
    timeIcon.setAttribute('src', `assets/icons/${WeatherIcon}.svg`);
}

export const weatherApp = () => {
    // fetchCityWeatherInfo();
    // const obj = await getCityData(latitude, longitude);
    // console.log(obj)
    injectHtml();
}
