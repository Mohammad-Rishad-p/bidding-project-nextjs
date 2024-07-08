import dbConnect from "@/libs/dbConnect";
import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
    productName: string;
    imageSrc: string;
    descriptionOfImage: string;
    bidResetTime: number;
    minimumIncrease: number;
    auctionType: string;
    auctionDate: Date;
    startingPrice: number;
    productDescription: string; // Added startingPrice field,
    currentBid: number;
    bidWinner: string;
    delivery: string;
};

const productSchema: Schema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
        required: true,
    },
    descriptionOfImage: {
        type: String,
        required: true,
    },
    bidResetTime: {
        type: Number,
    },
    minimumIncrease: {
        type: Number
    },
    auctionType: {
        type: String,
        required: true,
    },
    auctionDate: {
        type: Date,
        default: () => Date.now(),
        required: true,
    },
    startingPrice: { // Added startingPrice field
        type: Number,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    currentBid: {
        type: Number,
        default: 0,
        required: true
    },
    bidWinner:{
        type: String,
        default: " ",
        required: true
    },
    delivery:{
        type: String,
        required: true
    }
});

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema, 'products');

export default Product;
