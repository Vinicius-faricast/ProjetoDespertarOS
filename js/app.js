import { getCityData, getCityWeather } from "./weather.js";

let longitude = '';
let latitude = '';

const clima = document.querySelector('#clima');
let heroContent = document.querySelector('.hero-content')

const fetchCityWeatherInfo = async () => {
    const {Key} = await getCityData(latitude, longitude);
    const [{Temperature, WeatherText, WeatherIcon}] = await getCityWeather(Key)
    
    return {Temperature, WeatherText, WeatherIcon};
}

const createHtml = (Temperature, WeatherText, WeatherIcon) => {

    heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');

    const heroTemperatureGroup = document.createElement('div');
    heroTemperatureGroup.classList.add('hero-temperature-grup');

    const heroIcon = document.createElement('img');
    heroIcon.classList.add('hero-icon');
    heroIcon.setAttribute('src', `assets/icons/${WeatherIcon}.svg`);

    const heroTemperature = document.createElement('h2');
    heroTemperature.classList.add('hero-temperature');
    heroTemperature.innerText = Temperature.Metric.Value;
 
    const statusClimate = document.createElement('p');
    statusClimate.classList.add('status-climate');
    statusClimate.innerText = WeatherText;

    clima.appendChild(heroContent);
    heroContent.appendChild(heroTemperatureGroup);
    heroTemperatureGroup.appendChild(heroIcon);
    heroTemperatureGroup.appendChild(heroTemperature);
    heroContent.appendChild(statusClimate);
}

const injectHtml = async () => {
    const {Temperature, WeatherText, WeatherIcon} = await fetchCityWeatherInfo();
    if(heroContent){
        heroContent.remove();
    }

    if(Temperature && WeatherText&& WeatherIcon){

        createHtml(Temperature, WeatherText, WeatherIcon);

    }
}

export const weatherApp = () => {
    latitude = localStorage.getItem('latitude');
    longitude = localStorage.getItem('longitude');
    injectHtml();
}
