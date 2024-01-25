console.log("hello-world");

let student = {
  name: "khan",
  age: 23,
  feild: "computerScience",
  printAge: function (college) {
    console.log(this.age + college);
  },
};

let newStudent = {
  name: "cummins",
  age: 34,
};

// JS object is a collection of properties and methods in the format of key:value pairs,
// whenever the object is created a special property called prototype is created.
newStudent.__proto__ = student; //  __proto__ is used to create the prototype

// Example for protoype for calculation employee salary

const TaxRate = {
  calcTax(salary) {
    console.log("20% is a TAX RATE for " + salary);
  },
};

const employee = {
  salary: 50000,
};
const employee2 = {
  salary: 70000,
};
const employee3 = {
  salary: 80000,
};
employee.__proto__ = TaxRate;
employee2.__proto__ = TaxRate;
employee3.__proto__ = TaxRate;

// Classes and Objects

// class is program-code template or blueprint template for creating objects
// those objects will have some state and behaviour inside it
//  syntax of class
// Constructor is a special method inside JavaScript class automatically invoked by new keyword
// class Daily {
//     constructor(breakfast,quantity){
//         this.meals = breakfast;
//         this.quantity = quantity;
//         console.log('created new obj ' + this.meals + this.quantity)
//     }
//   mrng() {
//     console.log("good Mrng");
//   }
//   noon(){
//     console.log('good noon');
//   }
// }
// let Obj= new Daily('Roti',4);
// let Obj2 = new Daily;
// let Obj2 = new Daily;
// let Obj3 = new Daily;
// let Obj4 = new Daily;
// let Obj5 = new Daily;

// inheritance : refers to passing down the properties and methods from parent class to child class
class Parent {
  hello() {
    console.log("parent class");
  }
}
let p1 = new Parent();
class Child extends Parent {
  welcome() {
    console.log("child class");
  }
  hello() {
    console.log("From child class");
  }
}
let c1 = new Child();
let c2 = new Child();


// if Parent & child class has same Method then child method will be used

let DATA = 'Secret info';
class User{
  constructor(name,email){
    this.name = name;
    this.email = email;
  }
  viewData(){
    console.log('data = ',DATA)
  }
}

let stu1 = new User('hussain','hussain55@gmail.com');
let stu2 = new User;

class Admin extends User{
  editData(){
    console.log(DATA);
    DATA = 'editedDATA';
    console.log(DATA) 
  }
}
let admin = new Admin('admin','admin@college.com');
