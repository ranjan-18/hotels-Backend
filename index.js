// console.log("server is running");

// function add(a,b){
//     return a+b;
// }
// let add=function(a,b){
//     return a+b;
// }

// let add=(a,b)=>{
//     return a+b;
// }
// let result =add(2,9);
// console.log(result)



// // callback
// function callback(){
//     console.log("addition is done successfully"); 
// }

// let add1=(a,b,callback)=>{
//     console.log("addition is ",a+b);
//     callback();
    
// }

// add1(9,9,callback);



const express=require('express');
const app=express();
const db=require('./db'); 

const bodyParser=require('body-parser');
app.use(bodyParser.json()); // take the json data from client server convert it into object
                            // and store it in req.body




// import royer file
const personRoutes=require('./routes/personRotes');

// use the routes
app.use('/person',personRoutes);


const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);


app.get('/',(req,res)=>{
    res.send("hello");
})







const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('server is listening');
    
});