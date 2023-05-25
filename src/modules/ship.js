export default class S {
  constructor(size) {
    this.size = size;
    this.hits = [...Array(size).keys()];
    this.decks = []
    this.sink = false;
    //[0,1,2,3]
    this.direction = "v";
  }

  getSize() {
    return this.size;
  }

  getHits() {
    return this.hits;
  }

  getDirection() {
    return this.direction;
  }

  changeDirection() {
    this.direction === "v" ? (this.direction = "h") : (this.direction = "v");
  }

  setDirection(dir) {
    this.direction = dir;
  }

  hit(pos) {
    if (this.hits[pos] === "hit" || this.hits[pos] === "sink") return;
    this.hits[pos] = "hit";
    if (this.isSink()) {
      this.hits = this.hits.map((hit) => (hit = "sink"));
      this.sink = true;
    }
  }

  isSink() {
    return this.hits.every((hit) => hit === "hit");
  }
}
