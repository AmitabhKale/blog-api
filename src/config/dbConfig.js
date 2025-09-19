const { mongoose } = require("mongoose");

const connectDB = async () => {
  const connectionString = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(connectionString);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Connection Error", error);
  }
};

module.exports = connectDB;
