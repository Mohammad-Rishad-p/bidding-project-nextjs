// models/users.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    email: string;
    phoneNumber: number;
    aadhar: number;
    pan: string;
}

const UserSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    aadhar: { type: Number, required: true },
    pan: { type: String, required: true }, // Ensure `pan` is required
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema,'users');
