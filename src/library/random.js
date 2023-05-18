const adjectives = ["happy", "sad", "intelligent", "beautiful", "funny"];
const nouns = ["dog", "cat", "tree", "book", "table"];

export function getRandomName() {
  const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
  const nounIndex = Math.floor(Math.random() * nouns.length);

  return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}
