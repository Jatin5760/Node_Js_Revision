import express from "express";
import path from "path";

const app = express();

app.get('/', (req, res)=>{
    res.render('index.ejs');
})

// app.use : this is used to serve static files
// path.join : this is used to join the path
// path.resolve() : this is used to resolve the path


// Why index.jss didnt work?
// because we are using ejs as a template engine 
// This is called server side rendering
app.use(express.static(path.join(path.resolve(), 'public')));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
