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

// console.log(person.name);
// console.log(car2);

const smartPhone1 = {
    name: "iphone - 17",
    price: 80000,
    camera: "48MP",
    battery: "4000 MAh",
    ram: "4GB",
    rom: "128GB",
};


// Object Destructuring
const {name,price,ram,rom} = smartPhone1
console.log(name,price,rom);




