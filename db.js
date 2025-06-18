const mongoose=require('mongoose');


const mongoURL='mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongoDb server');
    
})

db.on('error',(e)=>{
    console.log('mongoDb connection error',e);
    
})

db.on('disconnected',()=>{
    console.log('disconnected to mongoDb server');
    
})
// export db 
module.export=db;