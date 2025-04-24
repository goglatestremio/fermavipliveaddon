const { serveHTTP } = require("stremio-addon-sdk");
const addonInterface = require("./index");

serveHTTP(addonInterface, { 
  port: process.env.PORT || 7000,  // Set the port dynamically from Render's environment
  host: '0.0.0.0'  // Listen on all network interfaces (not just localhost)
});
