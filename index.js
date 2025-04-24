const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
  id: "org.mytvchannel.live",
  version: "1.0.0",
  name: "My Live TV Channel",
  description: "Live stream from M3U8 link",
  types: ["tv"],
  catalogs: [],
  resources: ["stream"],
  idPrefixes: ["livechannel"],
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(({ type, id }) => {
  if (type === "tv" && id === "livechannel1") {
    return Promise.resolve({
      streams: [
        {
          title: "Live Channel",
          url: "http://a1.lion.wine:80/live/x9Kw7670/8cxU9044/1225472.m3u8",
          behaviorHints: {
            notWebReady: true
          }
        }
      ]
    });
  }
  return Promise.resolve({ streams: [] });
});

module.exports = builder.getInterface();
