interface User {
  name: string;
  age: number;
  email?: string;
}

let user: User = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};

// ----------------------------------------------------------------

function fnc(a: number, b: number): number {
  return a + b;
}

console.log(fnc(1, 2));

// ----------------------------------------------------------------

enum Week {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}

console.log(Week.monday);

// ----------------------------------------------------------------

function getArrayLength<T>(arr: T[]): number {
  return arr.length;
}

console.log(getArrayLength([10, 20, 30]));
console.log(getArrayLength(["a", "b"]));

// ----------------------------------------------------------------

type status = "start" | "stop";

let status1: status = "start";

console.log(status1);

// ----------------------------------------------------------------

interface Dog {
  bark: boolean;
}

interface Cat {
  meow: boolean;
}

type Pet = Dog & Cat;

let pet: Pet = { bark: true, meow: false };

console.log(pet.bark);
console.log(pet.meow);

// ----------------------------------------------------------------

function guard(a: string | number): string | number {
  if (typeof a === "string") {
    return a.toUpperCase();
  } else {
    return a ** 2;
  }
}

console.log(guard("guard"));
console.log(guard(5));

// ----------------------------------------------------------------

class Car {
  brand: string;
  year: number;
  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }
}

let car: Car = new Car("Mercedes-Benz", 2020);

console.log(car);

// ----------------------------------------------------------------

interface Product {
  name: string;
  price?: number;
  readonly id: number;
}

let product: Product = {
  name: "Product 1",
  id: 1,
};

console.log(product);

// ----------------------------------------------------------------

let userInfo: [number, string] = [12, "readonly"];

console.log(userInfo);

// ----------------------------------------------------------------

{
  // Inheritance
  class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    getInfo(): string {
      return `${this.name} is ${this.age}`;
    }
  }

  class Student extends User {
    group: string;
    constructor(name: string, age: number, group: string) {
      super(name, age);
      this.group = group;
    }
  }

  const student = new Student("John", 32, "N12");
  console.log(student.getInfo());
  console.log(student.group);
}

{
  // Encapsulation
  class Car {
    private id: number;
    public title: string;
    constructor(id: number, title: string) {
      this.id = id;
      this.title = title;
    }
  }

  let car = new Car(1, "Lamborghini");

  // car.id = 2 ;// xato
  // console.log(car.id); // xato
  console.log(car);
}

{
  // Abstraction
  abstract class Shape {
    abstract getPerimeter(): number;
    getInfo(n: string): string {
      return `This is ${n}`;
    }
  }

  class Circle extends Shape {
    r: number;
    constructor(r: number) {
      super();
      this.r = r;
    }
    getPerimeter(): number {
      return 2 * this.r * Math.PI;
    }
  }

  let circle: Circle = new Circle(5);
  console.log(circle.getPerimeter());
  console.log(circle.getInfo("Elon Musk"));
}

{
  // Polymorphism
  class Payment {
    pay(amount: number): string {
      return `Payment of ${amount} USD`;
    }
  }

  class CashPayment extends Payment {
    pay(amount: number): string {
      return `Cash payment of ${amount} USD`;
    }
  }

  class CardPayment extends Payment {
    pay(amount: number): string {
      return `Card payment of ${amount} USD`;
    }
  }

  let cash: CashPayment = new CashPayment();
  let card: CardPayment = new CardPayment();
  console.log(cash.pay(500));
  console.log(card.pay(1000));
}
