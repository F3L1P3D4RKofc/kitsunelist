const express = require('express'),
    app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/pages');
app.use(express.static(__dirname + '/pages/static'));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
require('./handlers/routes')(app);

app.listen(80, () => console.log('site online'));