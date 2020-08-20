const ADJECTIVES = [
  "mad",
  "crazy",
  "electric",
  "eccentric",
  "undpredictable",
  "funny",
  "strong",
  "amazing",
];

const INSTRUMENTS = [
  "guitar",
  "piccolo",
  "alto",
  "tenor",
  "viola",
  "violin",
  "drums",
];

function genRandomUsername() {
  const randomAdj = ADJECTIVES[Math.floor(Math.random() * 7)];
  const randomInst = INSTRUMENTS[Math.floor(Math.random() * 7)];
  return `${randomAdj}-${randomInst}`;
}

module.exports = {
  genRandomUsername,
};
