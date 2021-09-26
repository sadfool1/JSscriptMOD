'use strict';
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // this.calcAge = function () {
//   //   console.log(2017 - this.birthYear); //never do this !!
//   // };
// };

// const james = new Person('james', 1991); // So this new operator here, is actually a very special operator because what it does is to call this function here.
// // console.log(james);
// // 1. New {} is created
// // 2. function is called , this = {}
// // 3. {} linked to prototype
// // 4. function automatically returns {}
//
// const matilda = new Person('Matilda', 2019);
// const jack = new Person('jack', 1994);

// console.log(matilda, jack);
//
// console.log(james instanceof Person);

// prototype

// console.log(Person.prototype);
//
// Person.prototype.calcAge = function () {
//   console.log(2017 - this.birthYear);
// };
//
// james.calcAge(); // Output: 26 because of prototypal inherited
//
// Person.prototype.species = 'homo Sapies';
//
// console.log(james.__proto__ === Person.prototype);
// console.log(Person.prototype);
// // console.log(james.hasOwnProperty('firstName'));
//
// const arr = [3, 23, 1, 4, 123, 41, 1, 4];
// console.log(arr.__proto__); //there will be methods found in the __proto__
//
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// // creating a method
//
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
//
// console.log(arr.unique());
//
// const h1 = document.querySelector('h1');
// console.dir(
//   h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__

// const Car = function (speed) {
//   this.speed = speed;
// };
//
// const BMW = new Car(120);
// const Mercedes = new Car(95);
//
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
//
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };
//
// BMW.accelerate();
// BMW.accelerate();
//
// Mercedes.brake();
//
// // Classes in ES 6
// // This is a class declaration
// //class expression
// // const PersonCl = class {};
//
// // class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//
//   // methods will be added to .prototype property
//
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }
//
// console.log(jessica);
// jessica.calcAge();
//
// console.log(jessica.__proto__ === PersonCl.prototype); //true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
//
// jessica.greet();

// 1. Classes are not hoisted, hoisted (which means we can use them before they are declared in the code.)
// 2. Classes are first class citizens
// 3. Classes are executed in strict mode

// ===========================================================================================
// Getters and setters are basically functions
// that get and set a value so just as the name says,
// but on the outside they still look like regular properties.
// const account = {
//   owner: 'James',
//   movements: [300, 200, 100, 4000, 100],
//
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
//
// console.log(account.latest); //write it like a property
// account.latest = 50;
// console.log(account.movements); // Output: [300, 200, 100, 4000, 100, 50] 50 is added
//
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2036 - this.birthYear;
//   }
//
//   // set a property that already exist. Remember to use another callback variable
//
//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${this.name} is not a full name`); // callstack error an error
//     }
//   }
//
//   get fullName() {
//     return this._fullName;
//   }
// }
//
// const jessica = new PersonCl('Jessica', 1996);
//
// console.log(jessica.fullName);

// .from using querySelectorAll is attach to the prototype of Array Structure
// However this does not work for [3,1,1].from()

/*
Person.hey = function () {
  console.log('Hey Person');
  console.log(this); // the entire Person constructor
};

Person.hey();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2036 - this.birthYear;
  }

  // set a property that already exist. Remember to use another callback variable

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${this.name} is not a full name`); // callstack error an error
    }
  }

  get fullName() {
    return this._fullName;
  }

  // statics
  static hey() {
    console.log('Hello');
  }
}

PersonCl.hey();
*/

// Object.create
//
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
//
// const steven = Object.create(PersonProto); // creating a prototype
//
// console.log(steven);
//
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
//
// console.log(steven.__proto__ === PersonProto); // true
//
// const sarah = Object.create(PersonProto);
//
// sarah.init('Sarah', 1979);
// sarah.calcAge();
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new Car('Ford', 120);
// console.log(ford.speedUS);
// console.log(ford.speedUS);
//
// ford.speedUS = 50;
// console.log(ford);
//
// ford.brake();
// console.log(ford);

// Inheritance Between "Classes": Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
//
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
//
// const Student = function (firstName, birthYear, course) {
//   // cannot use Person(...,...) because the this keyword is undefined here
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   // USE CALL!
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
//
// // Linking prototypes
//
// // to connect student and Person, need to use Object.create.
// // We want to make the student class to be the child of Person
// // want to put this before the methods we made
// Student.prototype = Object.create(Person.prototype);
//
// // Note: cannot use student.prototype = Person.prototype
// // Because we want the student class to inherit from Person, not equate to it
//
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
//
// const mike = new Student('Mike', 2020, 'Comp sci');
//
// console.log(mike);
// mike.introduce();
// mike.calcAge(); // this is a method look-up
//
// console.log(mike.__proto__.__proto__);
//
// console.log(mike instanceof Student); // true
// console.log(mike instanceof Person); // true because we linked them together
//
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor); // points to person

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
//
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
//
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
//
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
//
// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);
//
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
//
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };
//
// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();
//
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//
//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//
//   get age() {
//     return 2037 - this.birthYear;
//   }
//
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//
//   get fullName() {
//     return this._fullName;
//   }
//
//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }
//
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // do not need to use Person.call
//     // So here now all we do is to pass in
//     // the arguments for the constructor of the parent class.
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//
//   introduce() {
//     console.log(
//       `My name is ${this.firstName} and I study ${
//         this.course ? this.course : 'nothing'
//       }`
//     );
//   }
// const martha = new StudentCl('Martha Jones', 2012);
// const jones = new StudentCl('Jones ok', 2012, 'COmScip');
// martha.introduce();
// jones.introduce();

// PROTOTYPE CHAIn
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
//
// const steven = Object.create(PersonProto);
//
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
//
// StudentProto.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and I study ${
//       this.course ? this.course : 'nothing'
//     }`
//   );
// };
//
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2020, 'Phy');
// jay.introduce();
// jay.calcAge();

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

// class Account {
//   // 1) public field
//   locale = navigator.language;
//
//   // 2) private fields
//   #movements = []; // must use # to make it private
//   #pin;
//
//   // 3) Public Methods
//   // pretty much the methods below this class
//
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;
//
//     console.log(`Thanks for opening an accounr, ${owner}`);
//   }
//
//   getMovements() {
//     return this.#movements;
//   }
//   // public interface
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
//
//   // 4) private Methods
//   // #approveLoan(val) { not implemented on the browsers yet
//   _approveLoan(val) {
//     return true;
//   }
//
//   static helper() {
//     console.log('Helper');
//   }
//
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan Approved`);
//       return this;
//     }
//   }
// }
//
// const acc1 = new Account('James', 'EUR', 1111);
// console.log(acc1);
//
// acc1.deposit(350);
// acc1.withdraw(140);
// acc1.requestLoan(11000);
// acc1._approveLoan(11000);
//
// console.log(acc1.pin);
//
// // Need privacy token
// // data privacy requred
//
// console.log(acc1.getMovements());
//
// console.log(acc1._approveLoan(100));
// Account.helper();
//
// // got error, so need to use return on all the methods
// acc1.deposit(300).deposit(300).withdraw(34).requestLoan(400).withdraw(300);
//
// console.log(acc1.getMovements());

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 10;
    console.log(
      `${this.make} is moving at ${this.speed} with a charge of ${this.#charge}`
    );
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(
      `${this.make} is moving at ${this.speed} with a charge of ${this.#charge}`
    );
    return this;
  }

  chargeBattery(charge) {
    this.#charge += charge;
    console.log(
      `${this.make} is moving at ${this.speed} with a charge of ${this.#charge}`
    );
    return this;
  }

  getCharge() {
    console.log(
      `${this.make} is moving at ${this.speed} with a charge of ${this.#charge}`
    );
    return this.#charge;
  }
}

const rivian = new EVCl('Rivian', 120, 0.23);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(0.4)
  .chargeBattery(0.4)
  .getCharge();

console.log(rivian.speedUS);
