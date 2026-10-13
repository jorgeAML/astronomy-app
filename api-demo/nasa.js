// Demo de consumo de API publica de la NASA (APOD - Astronomy Picture of the Day)
// Objetivo: conectarse a una API y mostrar el resultado en consola.
// DEMO_KEY funciona sin registro para pruebas. Puedes reemplazarla por tu propia
// api_key gratuita obtenida en https://api.nasa.gov
const https = require('https');

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

console.log('Conectando con la API de la NASA...');

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => (data += chunk));
  res.on('end', () => {
    try {
      const apod = JSON.parse(data);
      console.log('===== NASA Astronomy Picture of the Day =====');
      console.log('Titulo :', apod.title);
      console.log('Fecha  :', apod.date);
      console.log('Tipo   :', apod.media_type);
      console.log('URL    :', apod.url);
      console.log('---------------------------------------------');
      console.log('Explicacion:', apod.explanation);
    } catch (e) {
      console.error('No se pudo interpretar la respuesta:', e.message);
      console.error('Respuesta recibida:', data);
    }
  });
}).on('error', (err) => {
  console.error('Error al conectar con la API:', err.message);
});
