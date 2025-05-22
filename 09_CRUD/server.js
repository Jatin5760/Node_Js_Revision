import express from 'express';
// C - Create => POST(method)
// R - Read => GET(method)
// U - Update => PUT(method)
// D - Delete => DELETE(method)

const app = express();


app.get('/', (req, res) =>{
    app.send('This is response');
})

app.post('/create', (req, res) => {
    app.post('This is a POST request');
});

app.put('/update', (req, res) => {
    app.put('This is a PUT request');
});

app.delete('/delete', (req, res) => {
    app.delete('This is a DELETE request');
});

app.get('/read', (req, res) => {
    app.get('This is a GET request');
});


const port = 3000;  
app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
});