// Importing the required modules
import express from 'express';

// Creating an instance of express
const app = express();


// Syntax? // app.get(path, callback)
app.get('/', (req, res) => {
    res.send('You are requested for Home Route');
});


// What is in callback? // req = request, res = response
app.get('/about', (req, res) => {
    res.send('You are requested for About Route');
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
