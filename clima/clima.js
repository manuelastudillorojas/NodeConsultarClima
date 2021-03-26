const axios = require('axios');

const getClima = async(lat, log) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=fd896e445d284869fe9781f8018cf06c&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}