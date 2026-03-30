const dns = require("dns");
const mongoose = require("mongoose");

// Use public DNS so SRV lookup works (fixes querySrv ECONNREFUSED on some networks)
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://shreya:Shreya2004@complete-backend.2bhtjhs.mongodb.net/post-app";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      family: 4, // Prefer IPv4; often fixes ECONNREFUSED on Windows
    });
    console.log("Database Connected");
  } catch (error) {
    console.log("DB Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;