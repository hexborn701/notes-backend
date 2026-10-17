const dns = require("node:dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose= require("mongoose");

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(` db connect succefully`);
}

module.exports=connectDB

