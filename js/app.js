import { getCityData, getCityWeather } from "./weather.js";

let longitude = '';
let latitude = '';

const clima = document.querySelector('#clima');
let heroContent = document.querySelector('.hero-content')

const fetchCityWeatherInfo = async () => {
    // if(!latitude && !longitude){
    //     alert('disponibilize sua localização para a aplicação funcionar corretamente');
    //     return;
    // }
    const {Key} = await getCityData(latitude, longitude);
    const [{Temperature, WeatherText, WeatherIcon}] = await getCityWeather(Key)
    
    return {Temperature, WeatherText, WeatherIcon};
}

const injectHtml = async () => {
    const {Temperature, WeatherText, WeatherIcon} = await fetchCityWeatherInfo();
    if(heroContent){
        heroContent.remove();
    }

    if(Temperature && WeatherText&& WeatherIcon){

        
        heroContent = document.createElement('div');
        heroContent.classList.add('hero-content');
    
        const heroTemperatureGroup = document.createElement('div');
        heroTemperatureGroup.classList.add('hero-temperature-grup');
    
        const heroIcon = document.createElement('img');
        heroIcon.classList.add('hero-icon');
        heroIcon.setAttribute('src', `assets/icons/${WeatherIcon}.svg`); //${WeatherIcon}
    
        const heroTemperature = document.createElement('h2');
        heroTemperature.classList.add('hero-temperature');
        heroTemperature.innerText = Temperature.Metric.Value; //Temperature.Metric.Value
     
        const statusClimate = document.createElement('p');
        statusClimate.classList.add('status-climate');
        statusClimate.innerText = WeatherText; //WeatherText
    
        clima.appendChild(heroContent);
        heroContent.appendChild(heroTemperatureGroup);
        heroTemperatureGroup.appendChild(heroIcon);
        heroTemperatureGroup.appendChild(heroTemperature);
        heroContent.appendChild(statusClimate);
    }
    // location.reload()
}

/*
        <div class="hero-content">
            <div class="hero-temperature-grup">
                <img class="hero-icon" src="assets/icons/1.svg" alt="">
                <h2 class="hero-temperature">25º</h2>
            </div>
            <p class="status-climate">parcialmente dublado</p>
        </div>
*/

export const weatherApp = () => {
    latitude = localStorage.getItem('latitude');
    longitude = localStorage.getItem('longitude');
    injectHtml();
}
