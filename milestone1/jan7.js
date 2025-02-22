/**
 * 1. Person Class
 *  - Create a Person class that takes a name and age in the constructor
 *  - Add a method called introduce() that returns a string; detailing the name and the age
 *  - Create multiple instances of Person, with different values, and log the method call
 */

// class Person {
//   name
//   age

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     return `My name is ${this.name}, I am ${this.age} years old`
//   }
// }

/**
 * 2. Rectangle class
 *  - Create a Rectangle class with width and height (make them private)
 *  - Add a method getArea() that calculates and returns the area
 *  - Add a method getPerimeter() that calculates and returns the perimeter
 *  - Create some instances, and console log
 */

// class Rectangle {
//   // Private fields
//   #width
//   #height

//   // Constructor
//   constructor(width, height) {
//     this.#width = width;
//     this.#height = height;
//   }

//   // Methods
//   getArea() {
//     return this.#width * this.#height
//   }

//   getPerimeter() {
//     return 2 * (this.#height + this.#width)
//   }
// }

/**
 * TODO: Book Class
 * - Create a Book class that has private fields: title, author, pages
 * - In the constructor, initialize these with values passed in as arguments
 * - Add a method, get Summary() that returns a string summarizing the details of the title, author, and #pages
 * - Add setters and getters for all the private fields (returns specific values and option to modify)
 */

// class Book {
//   // Fields
//   #title
//   #author
//   #pages

//   // Constructor
//   constructor(title, author, pages) {
//     this.#title = title
//     this.#author = author
//     this.#pages = pages
//   }

//   // Getters
//   getTitle() {
//     return this.#title
//   }

//   getAuthor() {
//     return this.#author
//   }

//   getPages() {
//     return this.#pages;
//   }

//   // Methods
//   summary() {
//     return `${this.#title} is written by ${this.#author}, and has ${this.#pages} pages.`
//   }
// }


/**
 * Person & Employee
 * - Create a Person class with a constructor that takes name and age (# private)
 * - Add some methods, such as getName, changeName, getAge, birthday, greet (Person)
 * - Create an Employee class that extends the Person, make use of super keyword
 * - Create an instance of Employee, and confirm that you can call the methods that are in Person
 */

class Person {
  // Fields
  #name
  #age

  // Constructor
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  
  // Getters
  getName() {
    return this.#name;
  }
  
  getAge() {
    return this.#age;
  }

  // Setters
  changeName(newName) {
    this.#name = newName;
  }

  birthday() {
    this.#age = this.#age + 1;
  }

  // Methods
  greet() {
    return `My name is ${this.#name}, I am ${this.#age} years old.`
  }
}

// Subclass inherits Parent methods/fields
class Employee extends Person {
  // Constructor
  constructor(name, age) {
    super(name ,age)
  }
}

/**
 * Vehicle & Car
 * - Create a Vehicle class with properties for make and model 
 * - Create a Car class that extends Vehicle, with one extra property, numberOfDoors
 * - Call super() constructor to initialize parent fields in Car, but also initialize what we need to initialize in Car
 * - Create an instance, and test
 */

class Vehicle {
  // Fields
  make
  model

  // Constructor
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Car extends Vehicle {
  // Fields
  numberOfDoors
  
  // Constructor
  constructor(make, model, numberOfDoors) {
    super(make, model);
    this.numberOfDoors = numberOfDoors;
  }
}

/**
 * Media Superclass / Book & Movie Subclass
 *  - We have a base media class, that has a title string field, a creator string field, and a getInfo() method returning a summary string
 *  - We will create two subclasses, Book & Movie that return more detailed output in the getInfo()
 *  Book:
 *  - Has an additional property pageCount
 *  - Overrides getInfo() to include how many pages the book has
 *  - Hint: You can call super.methodName() to avoid repeating code
 *  Movie:
 *  - Has an additional property runtimeInMinutes
 *  - Overrides getInfo() to include how many pages the book has
 *  - Hint: You can call super.methodName() to avoid repeating code
 */

class Media {
  // Fields
  title
  creator

  // Constructor
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
  }

  // Methods
  getInfo() {
    return `${this.title} was authored by ${this.creator}`
  }
}

class Book extends Media {
  // Fields
  pageCount

  // Constructor
  constructor(title, creator, pageCount) {
    super(title, creator)
    this.pageCount = pageCount
  }

  // Methods
  getInfo() {
    return `${super.getInfo()} and is a book with ${this.pageCount} pages.`
  }
}

class Movie extends Media {
  // Fields
  runtimeInMinutes

  // Constructor
  constructor(title, creator, runtimeInMinutes) {
    super(title, creator)
    this.runtimeInMinutes = runtimeInMinutes
  }

  // Methods
  getInfo() {
    return `${super.getInfo()} and is a movie with a runtime of ${this.runtimeInMinutes} minutes.`
  }
}

/**
 * Shape Superclass / Rectangle & Circle Subclass
 * - We have a base class Shape that keeps track of a color property
 * - Has an abstract getArea() method that by default returns 0
 * - Also include a describe() method that describes the colour of the shape
 * Rectangle
 *  - Has extra fields: width and height
 *  - Overrides getArea()
 *  - Override describe() to give more details, but make use of super
 * Circle
 *  - Has extra field: radius
 *  - Overrides getArea() -> pi * radius * radius (3.14)
 *  - Keep the describe() method as it is
 */

class Shape {
  // Fields
  color
  // Constructor
  constructor(color) {
    this.color = color;
  }
  // Methods
  getArea() {
    return 0;
  }
  describe() {
    return `The shape's colour is ${this.color}`
  }
}

class Rectangle extends Shape {
  // Fields
  width
  height
  // Constructor
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }
  // Methods
  getArea() {
    return this.width * this.height
  }
  describe() {
    return `${super.describe()} and the shape has an area of ${this.getArea()} units.`
  }
}

class Circle extends Shape {
  // Fields
  radius
  // Constructor
  constructor(radius, color) {
    super(color);
    this.radius = radius
  }
  // Methods
  getArea() {
    return 3.14 * this.radius * this.radius
  }
}

const square = new Rectangle(5, 5, "green")
console.log(square.describe())
const circle = new Circle(5, "orange")
console.log(circle.describe())