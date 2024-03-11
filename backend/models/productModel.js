const mongoose = require("mongoose");

const productScheme =  new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"]
    },
    description:{
        type:String,
        required:[true,"pleaseenter product description"]
    },
    price:{
        type:Number,
        required:[true,"please enetr product price"],
        maxLength:[8,"price cannot exceed 8 characters"]
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true 
        }
    }
],
    category:{
        type:String,
        required:[true,"please enter product category"],
    },
    stock:{
        type:Number,
        rquired:[true,"please enter product stock"],
        maxLength:[4,"stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
                required:true 
            },
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
                default:0
            },
            comment:{
                type:String,
                required:true,
                default:null
            }
        }
    ],

    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true 
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("product",productScheme);
