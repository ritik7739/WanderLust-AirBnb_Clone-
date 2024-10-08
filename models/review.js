const mongoose=require("mongoose");
const {Schema}=require("mongoose");

const reviewSchemas=new Schema({
    comment:String,
    rating:{
        type:String,
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
});

module.exports=mongoose.model("Review",reviewSchemas);