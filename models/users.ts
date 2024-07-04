import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    email: string,
    phoneNumber: number,
    aadhar: number,
    pan: number,
};

const userSchema: Schema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    aadhar: {
        type: Number,
        required: true
    },
    pan: {
        type: Number,
        required: true
    },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema,'users');

export default User;