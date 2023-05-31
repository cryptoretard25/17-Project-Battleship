import Computer from "../modules/ai";

const ship = {
  attacks: new Set(),
  attackedShip: null,
};

Object.getOwnPropertyNames(Computer.prototype).forEach((method) => {
  const descriptor = Object.getOwnPropertyDescriptor(
    Computer.prototype,
    method
  );
  Object.defineProperty(ship, method, descriptor);
});

describe("Testing computer ai bot", () => {
  test("AI should identify enemy sinked ship direction", () => {
    ship.attackedShip = [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ];
    expect(ship._getAttackedShipDir()).toBe("horisontal");
  });
  test("AI should add cells arond sinked horisontal ship properly", () => {
    ship.attackedShip = [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ];
   
    ship.attacks = new Set()
    ship._addBlockedCells();

    expect(Array.from(ship.attacks)).toEqual(
      expect.arrayContaining([
        [1, 0],
        [1, 1],
        [1, 2],
        [0, 4],
        [1, 4],
        [1, 3],
      ])
    );
  });
  test("AI should identify enemy vertical sinked ship direction", () => {
    ship.attackedShip = [
      [0, 1],
      [1, 1],
      [2, 1],
    ];
    expect(ship._getAttackedShipDir()).toBe("vertical");
  });
  test("AI should add cells arond sinked vertical ship properly", () => {
    ship.attackedShip = [
      [0, 1],
      [1, 1],
      [2, 1],
    ];
    ship._addBlockedCells();
    expect(Array.from(ship.attacks)).toEqual(
      expect.arrayContaining([
        [0, 0],
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 0],
        [2, 2],
        [3, 0],
        [3, 1],
        [3, 2],
      ])
    );
  });
  test("AI should add cells arond 1 deck ship properly", () => {
    ship.attackedShip = [[1, 1]];
    ship.attacks = new Set();
    ship._addBlockedCells();
    expect(Array.from(ship.attacks)).toEqual(
      expect.arrayContaining([
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ])
    );
  });
});
