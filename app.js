//Uppgift 1
class Car {
  constructor(mark, model, year) {
    this.mark = mark;
    this.model = model;
    this.year = year;
  }
  getCarInfo() {
    console.log(`This is ${this.mark}, ${this.model}, from ${this.year}`);
  }
  startEngine() {
    console.log("Engine started!");
  }
}

const car1 = new Car("Toyota", "Corolla", 1995);

// car1.getCarInfo();
// car1.startEngine();

// ### 2. **Bankkonto (BankAccount)**
// Skapa en klass `BankAccount` med egenskaperna `accountNumber`, `balance`, och metoder för att sätta in pengar (`deposit`) och ta ut pengar (`withdraw`). Metoderna ska uppdatera balansen korrekt. -
// **Bonus:** Lägg till en metod som kontrollerar om det finns tillräckligt med pengar innan ett uttag.

class Bankkonto {
  constructor(accountNumber, balance = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`${amount} sek har satts in, Saldo ${this.balance}`);
    }
  }
  withdraw(amount) {
    if (this.balance != 0 && amount < this.balance) {
      this.balance -= amount;
      console.log(`${this.balance}`);
    } else {
      console.log("Not enough money");
    }
  }
}

const myAccount = new Bankkonto(123456, 5000);

// myAccount.deposit(300);
// myAccount.withdraw(6000);
// console.log(myAccount.balance);

// ### 3. **Skapa en klass för bokhantering (Book)**

// - **Uppgift:** Skapa en klass `Book` med egenskaperna `title`, `author`, och `year`. Lägg till en metod `getSummary` som returnerar en sammanfattning av boken (t.ex., "Book Title by Author (Year)").
// - **Bonus:** Skapa en underklass `EBook` som ärver från `Book`, och lägg till en egenskap för filstorlek (`fileSize`).

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    console.log(`Book ${this.title} by ${this.author} (${this.year})`);
  }
}

class Ebook extends Book {
  constructor(title, author, year, fileSize) {
    super(title, author, year);
    this.fileSize = fileSize;
  }
}

const book1 = new Book("Harry Potter", "Johanna Rowling", 1997);
const book2 = new Ebook("The lord of the rings", "Peter Jackson", 2000, 23423);

// book1.getSummary();
// book2.getSummary();

//### 4. **Hantera en lista med uppgifter (TaskManager)**
// - **Uppgift:** Skapa en klass `TaskManager` som hanterar en lista av uppgifter. Varje uppgift ska ha en titel och ett status (komplett eller ej). Lägg till metoder för att lägga till en ny uppgift och markera en uppgift som komplett.
// - **Bonus:** Lägg till en metod som visar alla uppgifter i konsolen, och om de är kompletta eller inte.

class TaskManager {
  constructor() {
    this.tasks = [];
  }
  addTask(title, status) {
    this.tasks.push({
      title,
      status,
    });
  }
}

const myToDoList = new TaskManager();
// myToDoList.addTask("asdfasf", "done");
// console.log(myToDoList);

//### 5. **Skapa ett spel (GameCharacter)**
// - **Uppgift:** Skapa en klass `GameCharacter` med egenskaperna `name`, `health`, och `strength`. Lägg till en metod `attack` som minskar en annan karaktärs hälsa baserat på den attackerande karaktärens styrka.
// - **Bonus:** Skapa en subklass `Mage` som har en extra egenskap för magisk kraft, och som kan utföra en magisk attack.

class GameCharacter {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  attack(enemy) {
    enemy.health -= this.strength;
    console.log(
      `${this.name} attacks ${enemy.name}, he has ${enemy.health} hp`
    );
  }
}

class Mage extends GameCharacter {
  constructor(name, health, strength, magicAttack) {
    super(name, health, strength);
    this.magicAttack = magicAttack;
  }
  magicPower(enemy) {
    enemy.health -= this.magicPower;
    console.log(`${enemy} was attacked with frozen attack!`);
  }
}

const John = new GameCharacter("John", 100, 6);
const Ivan = new GameCharacter("Ivan", 100, 14);
const Mark = new GameCharacter("Mark", 100, 54);
const Keltalas = new Mage("Keltalas", 200, 23, 40);

// Keltalas.magicPower(Mark);
// Keltalas.attack(Mark);

// Mark.attack(John);
// Ivan.attack(Mark);
// Ivan.attack(John);
// John.attack(Ivan);

// ### 6. **Geometriska former (Shape)**
// - **Uppgift:** Skapa en basklass `Shape` med en metod `getArea` som returnerar area (men låter den vara `null` i basklassen). Skapa underklasser för `Circle`, `Square`, och `Rectangle`, där varje klass implementerar sin egen `getArea` metod.
// - **Bonus:** Lägg till en metod `getPerimeter` för varje form.

class Shape {
  getArea() {
    return null;
  }
  getPerimeter() {
    return null;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }
  getArea() {
    return this.sideLength * this.sideLength; //Area of square
  }
  getPerimeter() {
    return 4 * this.sideLength;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const circle1 = new Circle(25);
const square1 = new Square(65);
const rectangle1 = new Rectangle(23, 45);

// console.log(circle1.getArea());
// console.log(square1.getPerimeter());
// console.log(rectangle1.getPerimeter());

// ### 7. **Bygga en anställdeskatalog (Employee)**

// - **Uppgift:** Skapa en klass `Employee` med egenskaperna `name`, `position`, och `salary`. Lägg till en metod `getDetails` som returnerar en sträng med anställdas namn, position, och lön.
// - **Bonus:** Skapa en metod som räknar ut årlig bonus baserat på lönen.

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  getDetails() {
    return `Hey, my name is ${this.name} and I work on position ${this.position}. My salary is ${this.salary} Sek.`;
  }
  getBonus() {
    //5% of salary is bonus in year
    return "My bonus for the year is " + this.salary * 0.05 * 12 + " Sek";
  }
}

const mark = new Employee("Mark", "Fullstack developer", 30000);
console.log(mark.getDetails());
console.log(mark.getBonus());

const container = document.createElement("div");
const person = document.createElement("h3");
const salary = document.createElement("p");
person.textContent = mark.getDetails();
salary.textContent = mark.getBonus();
container.appendChild(person);
container.appendChild(salary);
document.body.appendChild(container);

// ### . **Hantering av skolklass (Classroom)**

// - **Uppgift:** Skapa en klass `Classroom` som innehåller en lista av studenter. Lägg till metoder för att lägga till en student, ta bort en student, och visa alla studenter i klassen.
// - **Bonus:** Lägg till en metod för att söka efter en student baserat på deras namn.

class Classroom {
  constructor(...students) {
    this.list = students;
  }
  addStudent(student) {
    this.list.push(student);
  }
  removeStudent(student) {
    //
    const index = this.list.indexOf(student);
    if (index > -1) {
      console.log(`You removerd ${this.list.splice(index, 1)} from the class!`);
    }
  }
  showStudents() {
    this.list.forEach((student) => {
      console.log(student);
    });
  }
}

const webb24 = new Classroom("Mark", "Hasso", "Asia", "Kevin");

webb24.addStudent("Ilia");
webb24.removeStudent("Mark");
webb24.showStudents();

//### 9. **Skapa en shoppingkorg (ShoppingCart)**

// - **Uppgift:** Skapa en klass `ShoppingCart` som hanterar en lista av objekt med namn och pris. Lägg till metoder för att lägga till objekt till korgen och räkna ut den totala summan.
// - **Bonus:** Lägg till en metod som räknar ut rabatter.

class ShoppingCart {
  constructor() {
    this.list = [];
  }
  addItem(name, price) {
    const item = { name, price };
    this.list.push(item);
  }
  getSum() {
    return this.list.reduce((total, item) => total + item.price, 0);
  }
}

const cart = new ShoppingCart();
cart.addItem("Stekpanna", 435);
cart.addItem("Gurka", 15);
cart.addItem("Laptop", 1342);
console.log(cart);

console.log(cart.getSum());
