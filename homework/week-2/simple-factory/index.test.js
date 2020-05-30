import StarterVillage from './index';

describe('Simple Factory Test', () => {
  const archerAdventurer = StarterVillage('archer');
  const mageAdventurer = StarterVillage('mage');

  test("Determine Archer type", () => {
    expect(archerAdventurer.type).toEqual("Archer");
  });

  test("Determine Mage type", () => {
    expect(mageAdventurer.type).toEqual("Mage");
  });
})