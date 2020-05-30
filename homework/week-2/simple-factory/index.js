const StarterVillage = function (role) {
  function Adventurer(info) {
    this.type = info.type;
  }

  switch (role) {
    case "warrior":
      return new Adventurer({
        type: "Warrior",
      });
      break;
    case "archer":
      return new Adventurer({
        type: "Archer",
      });
      break;
    case "mage":
      return new Adventurer({
        type: "Mage",
      });
      break;
    // Add more Adventurer here
    default:
      break;
  }
};

export default StarterVillage;
