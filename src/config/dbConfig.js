import mongoose from "mongoose";
const connect = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.mongo_uri}`, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export{
    connect,
    mongoose
}