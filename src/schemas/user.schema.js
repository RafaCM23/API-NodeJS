import mongoose from "mongoose";
const {Schema, Model} = mongoose;

const userSchema = new Schema({

    id:{ type:Number, require:true, unique:true},
    name:{ type:String, require:true, minlenght:2, maxlenght:20 },
    surname:{ type:String, require:true, minlenght:2, maxlenght:20 },
    nick:{ type:String, require:true, minlenght:5, maxlenght:20 },
    password:{ type:String, require:true}, //Guardado en Hash
    email:{ type:String, require:true, minlenght:5, maxlenght:25 },
    age:{ type:Number, require:false, minlenght:1, maxlenght:2 },
    
})

const userModel = model("User", userSchema);
export default userModel;