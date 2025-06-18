const mongoose=require('mongoose');

const MenuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['Sweets','Spicy','Sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    sales:{
        type:Number,
        default:0
    }
})

const Menu=mongoose.model('Menu',MenuSchema);
module.exports=Menu;