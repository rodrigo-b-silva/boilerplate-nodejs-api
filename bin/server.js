const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = require('../src/app');

app.listen(PORT, () => {
    console.log('\x1b[32m%s\x1b[0m', `\nListening on PORT: ${PORT} and Env: ${NODE_ENV}\n`);
});