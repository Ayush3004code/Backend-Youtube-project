import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    console.log('Connecting to:', `${process.env.MONGODB_URI}/${DB_NAME}`);

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected!!! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
};

export default connectDB;