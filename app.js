const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const layouts = require('express-ejs-layouts');
const controller = require('./Controllers/homeController');
//global object
let addDates = require('./dates');
/*express object*/
let app = express();
/*configure app*/
app.set('appName', 'Astronomy App');
/*define port*/
app.set('port', process.env.PORT || 8124);
/*absolute path for the folder template*/
app.set('views', path.join(__dirname, 'views'));
/*file extension for the template files*/
app.set('view engine', 'ejs');
app.use(layouts);
/*render*/
app.use(morgan('dev'));
app.get("/contacto/", controller.respondWithContact);
app.use(express.static(__dirname + '/public'));

app.all('*', (req, res) => {
    res.render('index', {title:"Aprende Astronomia GT"});
});
/*http create server*/
http.createServer(app).listen(app.get('port'), () => {
    console.log(`The app is listening on ${app.get('port')}`);
});