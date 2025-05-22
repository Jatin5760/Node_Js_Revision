// What is tempelate engine
// Template engines are used to generate HTML dynamically by combining templates with data.
// They allow developers to create reusable HTML structures and insert dynamic content into them.

// What is EJS
// EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript.

import express from 'express';
const app = express();


let products = [
    {name: "iphone 13", price: 100},
    {name: "iphone 14", price: 200},
    {name: "iphone 15", price: 300},
]


app.get('/', (req, res)=>{
    // if ejs file is there then render it
    let name = "Jatin";
    let age = 21;

    res.render('index.ejs', {name, age, products});
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


