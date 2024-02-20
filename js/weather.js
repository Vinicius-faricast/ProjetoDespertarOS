const apiKey = 	'wS5MlACg0meVSYkGaTvumU3H3eYlZxEV';
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = (lat, long) =>
 `${baseUrl}locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat}%2C${long}&language=pt-br`;

const getCityWeatherUrl = cityKey =>
`${baseUrl}currentconditions/v1/${cityKey}?apikey=${apiKey}&language=pt-br`


//http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=wS5MlACg0meVSYkGaTvumU3H3eYlZxEV&q=-23.494656%2C-47.5136&language=pt-br

const fetchData = async url => {
    try {
        
        const response = await fetch(url);
        
        if(!response.ok){
            throw new Error('Não foi possivel obter os dados')
        }

        return response.json();
    } catch ({name, message}) {
        alert(`${name}: ${message} `)
    }
}


export const getCityData = (latitude, longitude) => fetchData(getCityUrl(latitude, longitude));

export const getCityWeather = cityKey => fetchData(getCityWeatherUrl(cityKey));

// export const testApp = async () => {
//     getCityData().then(value => {
//         getCityWeather(value.Key).then(
//             value => console.log(value)
//         )
//     });  
// }