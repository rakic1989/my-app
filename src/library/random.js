const adjectives = ['lijep', 'zgodan', 'pametan'];
const nouns = ['domagoj', 'domba', 'predavač'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}
