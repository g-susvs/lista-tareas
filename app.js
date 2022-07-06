require('dotenv').config();
const express = require('express');


const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');

app.use(express.static('public'))


app.get('/crear-tarea', (req, res) => {
    res.render('crear-tarea');
})
app.get('/pendiente', (req, res) => {
    res.render('pendiente');
})
app.get('/completado', (req, res) => {
    res.render('completado');
})

app.get('/completar', (req, res) => {
    res.render('completar')
})
app.get('/eliminar', (req, res) => {
    res.render('eliminar');
})
app.get('/*',(req,res)=>{
    res.send('404 not FOUND')
})
app.listen(port, () => {
    console.log(`Server corriendo en el puerto http://localhost:${port}`);
});