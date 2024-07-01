import mongoose from 'mongoose';

const connection: { isConnected?: number } = {};

async function dbConnect() {
    if (connection.isConnected) {
        console.log('Already connected to the database.');
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI!, {
            connectTimeoutMS: 30000, // 30 seconds connection timeout
            serverSelectionTimeoutMS: 30000, // 30 seconds server selection timeout
        });

        connection.isConnected = db.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log('Successfully connected to the database.');
        } else {
            console.log('Failed to connect to the database.');
        }
    } catch (error) {
        console.error('Database connection error:', error);
        throw error; // Rethrow to handle it in fetchProducts
    }
}

export default dbConnect;
