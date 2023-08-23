import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    lastName:{
        type:String,
        default:'last_name'
    },
    location:{
        type:String,
        default:'my city',
    },
    role:{
        type:String,
        enum:['user', 'admin'],
        default:'user',
    }
});

// Setting up user w/o password when getting the current user
UserSchema.methods.toJSON = function(){
    let obj = this.toObject();
    delete obj.password;
    return obj;
}

export default mongoose.model('User',UserSchema);
