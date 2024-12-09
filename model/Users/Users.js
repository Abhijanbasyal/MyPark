import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: String,
        enum: ['USER', 'STAFF', 'ADMIN'], 
        default: 'USER', 
    },

}, {
    timestamps: true
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;