const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();
const { initDb } = require('./data/db');
const routes = require('./routes');

(async () => {
    await initDb(config.databaseUrl);
})();

require('./config/express')(app);

app.use(routes);

app.listen(config.port, console.log(`Listening on port ${config.port}!`));
