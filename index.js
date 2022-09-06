const express = require('express')
const bodyParser = require('body-parser'); 
const userRoutes = require('./routes/users') 



const app = express(); 
const PORT = 3000; //fe =3000 be = 5000


app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.send('hom e pg')
})

app.use('/users', userRoutes); 

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})