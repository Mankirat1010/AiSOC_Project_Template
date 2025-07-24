const mongoose = require("mongoose");

async function connectToMongoDB(url) {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected (from connect.js)");
    } catch (err) {
        console.error("❌ MongoDB connection error (from connect.js):", err);
        throw err;
    }
}

module.exports = {
    connectToMongoDB,
};
