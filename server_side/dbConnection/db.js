const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);

        console.log('db is connected');
    } catch (error) {
        console.log(error.message);
        // exit procces with failure
        process.exit(1)
    }
}

module.exports = connectDB;