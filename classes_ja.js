//////  1  /////////////

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  ageOneYear() {
    return this.age++;
  }
  eatin() {
    return `I ${this.name} Pahh, dah, paah pah pahhh, I'm lovin' it....`;
  }
}

let pancho = new Human("Panchito", 35);

console.log(pancho.age);
pancho.ageOneYear();
console.log(pancho.age);
console.log(pancho.eatin());
///////  2   ////////////////
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(vec) {
    let newx = this.x + vec.x,
      newy = this.y + vec.y;
    return [newx, newy];
  }
  minus(vec) {
    let newx = this.x - vec.x,
      newy = this.y - vec.y;
    return [newx, newy];
  }
  getLength(vec) {
    let newx = this.x,
      newy = this.y;
    let distance = Math.sqrt(Math.pow(newx, 2) + Math.pow(newy, 2));
    return distance;
  }
}
var v1 = new Vector(1, 2);
var v2 = new Vector(2, 3);
var v3 = new Vector(3, 4);
console.log(v1.add(v2));
console.log(v1.minus(v2));
console.log(v3.getLength());
