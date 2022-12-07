class Person {
    constructor(firstName, lastName, age, email, distance, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.distance = distance;
        this.eyeColor = eyeColor;
    }

    introduceSelf() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and my age is ${this.age}`);
    }

    walk() {
        console.log(`I walk about ${this.distance}km as a daily routine.`);
    }
}

// Instantiation
let person1 = new Person("Dwarakanath", "Akkala", 25, "dwaruu3.0@gmail.com", 3, "brown");

person1.introduceSelf();

// Output
// My name is Dwarakanath Akkala and my age is 25

person1.walk();

// Output
// I walk about 3km as a daily routine.