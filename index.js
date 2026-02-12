const express = require ('express');
const { read } = require('fs');
const app =express ();  
const path = require('path'); 


app.use(express.static(path.join(__dirname,'views/planetas')));
app.set('view engine','ejs');

app.get('/',(req,res) => {
     res.render('planetas/planetas');   
     
       console.log('pagina abierta ');
});


// Este es un comentario de prueba

app.get('/mercurio',(req,res) => {
     res.render('planetas/mercurio');   
     
       console.log('Pagina mercurio cargada');
});
app.get('/venus',(req,res) => {
     res.render('planetas/venus');   
     
       console.log('Pagina venus cargada');
});
app.get('/tierra',(req,res) => {
     res.render('planetas/tierra');   
     
       console.log('Pagina tierra cargada');
});
app.get('/marte',(req,res) => {
     res.render('planetas/marte');   
     
       console.log('Pagina marte cargada');
});
app.get('/jupiter',(req,res) => {
     res.render('planetas/jupiter');   
     
       console.log('Pagina jupiter cargada');
});
app.get('/saturno',(req,res) => {
     res.render('planetas/saturno');   
     
       console.log('Pagina saturno cargada');
});
app.get('/urano',(req,res) => {
     res.render('planetas/urano');   
     
       console.log('Pagina urano cargada');
});
app.get('/neptuno',(req,res) => {
     res.render('planetas/neptuno');   
     
       console.log('Pagina neptuno cargada');
});









const server = app.listen(4000, function() {
    console.log('listening to port 4000')
    console.log('Hola mundo ')
});


