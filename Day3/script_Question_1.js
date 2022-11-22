// Q1. For the given JSON iterate over all for loops (for, for in, for of, forEach)

const motorcycles = ["Yamaha", "KTM", "TVS", "Hero", "Honda"];

// For Loop
console.log("For Loop Data:");
for(let i=0; i< motorcycles.length; i++) {
    console.log(motorcycles[i]);
}

const person = {firstName:"John", lastName:"Doe", age:25, gender: "Male"}; 

// For in Loop
console.log("\nFor in Loop Data:");
for(let j in person){
    console.log(person[j]);
}


const cars = ["Maruti", "Volvo", "BMW", "Audi", "Tata"]

// For of Loop
console.log("\nFor of Loop Data:");
for(let k of cars){
    console.log(k);
}


const fruits = ["Apple", "Mango", "Banana", "Kiwi", "Orange"];

// For Each Loop
console.log("\nFor Each Loop Data:");
fruits.forEach((element) => {
    console.log(element);
});