class Animal {
  isAnimal() {
    return true;
  }
}

class Bird extends Animal {
  fly() {
    return "파닥파닥";
  }
  isBird() {
    return true;
  }
}

console.log(new Animal().isAnimal()); // true
console.log(new Bird().fly()); // 파닥파닥

class Penguin extends Bird {
  override fly() {
    throw new Error("펭귄은 못날아.");
  }
}
