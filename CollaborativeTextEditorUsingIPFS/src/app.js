const IPFS = require("ipfs");

const ipfs = new IPFS({
  repo: repo(),
  EXPERIMENTAL: {
    pubsub: true,
  },
});

ipfs.once("ready", () =>
  ipfs.id((err, info) => {
    if (err) {
      throw err;
    }
    console.log("IPFS node ready with address " + info.id);
  })
);

function repo() {
  return "ipfs/demo/" + Math.random();
}
