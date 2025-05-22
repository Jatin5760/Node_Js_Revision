import express from "express";
import path from 'path';
const app = express();


app.use(express.static(path.join(path.resolve(), 'public')));


// This is route to render the index.ejs file
app.get('/', (req, res)=>{
    res.render('index.ejs');
})



// This is a route to handle form submission
app.post('/form-submit', (req, res) => {
    res.json({
        message: "Form submitted successfully",
        success: true,
    })
});




// How to hide url during form submission?
// We can do this by using express.urlencoded() middleware
// This middleware is used to parse the urlencoded data


app.use(express.urlencoded({ extended: true }));



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
