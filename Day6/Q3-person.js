class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    introduceSelf() {
        console.log(`My name is ${this.firstName} ${this.lastName} and my age is ${age}`);
    }
}