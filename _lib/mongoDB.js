import mongoose from "mongoose";

const connection = {};

async function connect() {
    // Check if already connected
    if (connection.isConnected) {
        return;
    }

    // Check if there are any existing connections
    if (mongoose.connection.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            return;
        }
        await mongoose.disconnect();
    }

    // Log MONGO_URL to debug if it's undefined
    console.log('MONGO_URL:', process.env.MONGO_URL);

    if (!process.env.MONGO_URL) {
        throw new Error('MONGO_URL is not defined');
    }

    // Connect to the MongoDB database
    const db = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // 30 seconds timeout
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("DB is connected");
}

async function disconnect() {
    // Disconnect if already connected
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect();
            connection.isConnected = false;
            console.log("DB is disconnected");
        }
    }
}

const db = { connect, disconnect };
export default db;
