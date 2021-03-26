const axios = require('axios');

const getLugarLatiudLog = async(dir) => {
    const encodeUlr = encodeURI(dir);
    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?',
        headers: {
            "x-rapidapi-key": "0526c11d6bmsh8e9e1206d108f57p1bec45jsn6140bdf71d6a",
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "useQueryString": true
        },
        params: {
            location: encodeUlr
        }

    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para esta ciudad ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;




    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatiudLog
};