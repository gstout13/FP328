// Import the 'app' module from the './src/app' file

let corsOptions = {
  origin: ['https://127.0.0.1:5500', 'https://www.github.io', 'https://jakobzhao.github.io'],
  optionsSuccessStatus: 200
  }
const app = require('./src/app');

// Set the port for the server to listen on, defaulting to 3000 if not provided
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log('application running on', port);
});