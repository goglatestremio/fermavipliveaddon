const express = require('express');
const { addonInterface } = require('./index');  // Assuming the addonInterface is in index.js
const app = express();

// You may still want to add the manifest route (if needed)
app.get('/manifest.json', (req, res) => {
  res.json(addonInterface.manifest);
});

// Bind to the dynamic port provided by Render
const port = process.env.PORT || 10000;  // Port from Render or fallback to 10000
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${port}/manifest.json);
});
