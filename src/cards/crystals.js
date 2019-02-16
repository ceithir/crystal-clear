const cards = [
  {
    id: 'light-1',
    name: `A tiny bit of light`,
    text: `Grant +1 light energy.`,
    flavor: `It’s not much, but it’s the spark of hope.`
  },
  {
    id: 'dark-1',
    name: `Darkness`,
    text: `You must destroy all of those to purify the crystal.`,
    flavor: `Minor flaws turned into gulfs of despair through years of neglect.`,
    theme: `dark`
  }
];

export const loadCrystalCards = ids =>
  ids.map(id => cards.find(card => card.id === id));
