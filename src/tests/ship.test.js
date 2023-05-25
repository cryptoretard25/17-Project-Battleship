import Ship from "../modules/ship";
const { log } = console;

describe("testing Ship class", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(4);
  });
  it("Ship should have size prop of 4", () => {
    expect(ship.getSize()).toBe(4);
  });
  it("Ship should be filled with false", () => {
    expect(ship.getHits()).toEqual([0, 1, 2, 3]);
  });
  it("Ship must be hitted properly", () => {
    ship.hit(0);
    expect(ship.getHits()).toEqual(["hit", 1, 2, 3]);
  });
  it("Ship sinked must return false", () => {
    ship.hit(0);
    ship.hit(1);
    expect(ship.sink).not.toBeTruthy();
  });
  it("Ship sinked must return true", () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    ship.hit(3);
    expect(ship.sink).toBeTruthy();
  });
  it("Change ship direction to horizontal", () => {
    ship.changeDirection();
    expect(ship.direction).toMatch("h");
  });
});