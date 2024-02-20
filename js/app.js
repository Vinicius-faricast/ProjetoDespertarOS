import { getCityData, getCityWeather } from "./weather.js";

const latitude = localStorage.getItem('latitude');
const longitude = localStorage.getItem('longitude');


const fetchCityWeatherInfo = async () => {
    const {Key} = await getCityData(latitude, latitude);
    const [{Temperature, WeatherText, WeatherIcon}] = await getCityWeather(Key)
    const obj = await getCityWeather(Key)
    console.log(obj);
    return;
}

export const weatherApp = () => {
    fetchCityWeatherInfo(latitude, longitude);
    // const obj = await getCityData(latitude, longitude);
    // console.log(obj)
}
