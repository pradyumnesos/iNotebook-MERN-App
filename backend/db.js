const mongoose = require('mongoose');

const mongoURI="mongodb+srv://pradyumnaojha856:g0pbNXndYNGBWciN@cluster0.xhwnq1c.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = ()=>{
  return mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
module.exports = connectToMongo;  