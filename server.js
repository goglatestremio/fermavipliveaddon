const { serveHTTP } = require("stremio-addon-sdk");
const addonInterface = require("./index");

// Only set the port dynamically from the environment (Render will use the correct interface)
serveHTTP(addonInterface, { 
  port: process.env.PORT || 10000  // Render will provide the correct dynamic port
});
