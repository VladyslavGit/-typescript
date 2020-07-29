class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4
//
//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

class Car {
  readonly numberOfWheels: number = 4; // readonly только для чтения
  constructor(readonly model: string) {}
}

// ====МОДИФИКАТОРЫ====
class Animal {
  protected voice: string = ""; // protected доступно классу Animal и для всех которые будут наследоваться
  public color: string = "black"; // публичная переменная (по-умолчанию все public)

  constructor() {
    this.go();
  }

  private go() {
    // private только в классе в котором был определен этот метод
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice("test");
console.log(cat.color);
// cat.voice

// Абстрактные классы/методы для наследования

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render");
  }

  info(): string {
    return "This is info";
  }
}
