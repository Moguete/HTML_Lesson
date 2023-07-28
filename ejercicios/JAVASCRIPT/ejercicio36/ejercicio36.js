let sport = "";
let personName = "";

function canPlay() {
  this.sport = " Football";

  if (true) {
    personName = "Cosimo";
  }

  console.log(personName + this.sport);
}

canPlay();
