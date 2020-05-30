class Sheep {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  // create a copy of Sheep
  clone() {
    return new Sheep(this.name, this.weight);
  }
}

export default Sheep;