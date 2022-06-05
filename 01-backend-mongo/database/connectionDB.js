const mongoose = require('mongoose');

// connect to mongodb
const connectionDB = mongoose.connect(process.env.MONGODB_URI, 
    { useNewUrlParser: true }, () => {
    console.log('MongoDB connected!');
});

module.exports = connectionDB;
