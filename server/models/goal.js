import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema(
{
    name: {
        type: String,
        trim: true,
        required: true,
    },
    user_id:{
        type:Object,
        required:true
    },
    
    progress: {
        type: Number,
        required: true,
        default:0
    },
    goal_money: {
        type: Number,
        required:true
    },
    start_date: {
        type:String,
        required:true,
    },
    finish_date: {
        type:String,
        required:true,
    },
    money_per_month: {
        type:String,
 
    },
    saved_this_month: {
        type:Number,
        required: true,
        default:0
        
        
    },
    icon_family:{
        type:String,
        required:true,
    },
    icon_name:{
        type:String,
        required:true,
        
    }
    
    },
    { timestamps: true }
);
export default mongoose.model("Goal", userSchema);