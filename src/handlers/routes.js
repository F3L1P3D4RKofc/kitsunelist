const fs = require('fs')

module.exports = (app) => {
    let path = fs.readdirSync('./src/routes/').filter(x => x.endsWith('.js'));

    for (let file of path) {
        const route = require('../routes/' + file),
        routePath = file === 'index.js' ? '/' : `/${file.slice(0, -3)}`;

        app.use(routePath, route);
    }
}