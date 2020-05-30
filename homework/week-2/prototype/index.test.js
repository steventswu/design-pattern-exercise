import Sheep from "./index";

describe("Prototype Test", () => {
  const stevenSheep = new Sheep("Steven", 10);
  const tommySheep = stevenSheep.clone();
  tommySheep.weight = 20;

  test("Tommy Sheep's name equals to Steven Sheep's name", () => {
    expect(tommySheep.name).toEqual(stevenSheep.name);
  });

  test("Tommy Sheep's weight has changed to 20", () => {
    expect(tommySheep.weight).toEqual(20);
  });

  test("Steven Sheep's weight is still the same (10)", () => {
    expect(stevenSheep.weight).toEqual(10);
  });

  test("Tommy Sheep is an instance of Sheep", () => {
    expect(tommySheep).toBeInstanceOf(Sheep);
  });

  test("Tommy Sheep doesn't equal Steven Sheep", () => {
    expect(tommySheep === stevenSheep).toBe(false);
  });
});
