let obj = {}

const sucess = position => {

    const coords = position.coords;

    obj.coordsValues = {
        latitude : coords.latitude,
        logintude : coords.longitude
    }
}

const error = err => {
    console.log(err);
}


export const getGeolocation = () => {
    navigator.geolocation.watchPosition(sucess, error);
    return obj;
}