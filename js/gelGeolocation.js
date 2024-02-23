import { weatherApp } from "./app.js"

let watchID = '';

const sucess = async position => {

    const coords = position.coords;

    localStorage.setItem('latitude', coords.latitude);
    localStorage.setItem('longitude', coords.longitude);
    // location.reload()
    weatherApp()
}

const error = err => {
    // location.reload()
    console.log(err);
}

const clearID = watchID => {
    if (watchID){
        navigator.geolocation.clearWatch(watchID)
        return
    }
    return 
}

export const getGeolocation = () => {
    // clearID(watchID);

    watchID = navigator.geolocation.watchPosition(sucess, error);
    // location.reload()
    return
}