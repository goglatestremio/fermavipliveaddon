const { serveHTTP } = require("stremio-addon-sdk");
const addonInterface = require("./index");

serveHTTP(addonInterface, { 
  port: process.env.PORT || 10000,  // Ensure Render's dynamic port is used
  host: '0.0.0.0'  // Change this line to make it accessible to the public
});
