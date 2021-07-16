const express=require('express');
const app = express();
const ejs=require('ejs');
const path=require('path');
const expressLayout=require('express-ejs-layouts');
const PORT = process.env.PORT || 3000;

//Assets
app.use(express.static('public'));

//set Template engine
app.use(expressLayout);
//setting views path
app.set('views', path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render("home");
})

app.get('/cart', function(req,res){
    res.render("Customers/cart");
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT} `);
})