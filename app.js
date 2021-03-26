const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*lugar.getLugarLatiudLog(argv.direccion)
    .then(console.log)
    .catch(console.log);
  
clima.getClima(40.750000, -73.00000)
    .then(console.log)
    .catch(console.log);  */

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatiudLog(direeccion);
        const temp = await clima.getClima(coords.lat, coordS.log);
        return 'paso';
    } catch (E) {
        return 'NO NO NO'
    }
}



getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)