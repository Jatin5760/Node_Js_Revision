// console.log("Learning Objects");

const person = {
    name: 'Jatin',
    age: 501,
    phone: 'Samsumg Galaxy s23',
    income: "$230 B",
};

const car1 = {
    name: "BMW",
    color: "Blue",
    price: "80L",
};


// Spread Operator : Ye jab use hota hai jab hame ek object se ya ek array se object copy karna ho dusre object mai.
const car2 = {...car1, name: "Fortuner"};

console.log(person.name);
console.log(car2);



