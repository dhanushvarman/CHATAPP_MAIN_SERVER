var mongoose = require('mongoose');

const connectMongoose = async(req,res,next)=>{
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.DB);
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Error in Connecting Mongoose"})
    }
}

const url = {
    api : "https://chatapp-react-weld.vercel.app"
}

module.exports = {connectMongoose ,url };