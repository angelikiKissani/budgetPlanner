import mongoose from "mongoose";
const { Schema } = mongoose;
const transactionSchema = new Schema(
{
    user_id:{
        type: String,
        trim: true,
        required: true,
        unique:true
    },
    card_id:{
        type: String,
        trim: true,
        required: true,
        unique:true
    },
    category_id:{
        type: String,
        trim: true
    },
    amount:{
        type: Float32Array,
        trim: true
    },
    date:{type: Date},
    description:{
        type: String,
        trim: true
    }

});

export default mongoose.model("Transaction",transactionSchema);