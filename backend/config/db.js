// DATABASE CONNECTION FILE TO MON GO
const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        // takes in Mongo URI-- in my ENV FILE-- colorz package allows the color cyan to display error in cyan
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch(error){
        console.log(`Error: ${error.message}`.red.underline.bold);
        // exit w/failure
        process.exit(1)
    }
}

// Export the connectDB function
module.exports = connectDB