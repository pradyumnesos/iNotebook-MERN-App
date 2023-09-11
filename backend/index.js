const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
const app = express();
const port = 5000;
app.use(cors())
app.use(express.json());
//Availables Routes
app.use('/api/auth',require('./Routes/auth'));
app.use('/api/notes',require('./Routes/notes'));
const start = async () =>{
  try{
    await connectToMongo();
    app.listen(port, () => { 
      console.log(`iNotebook app listening on port ${port}`)
    })
    
  }catch(error){
    console.log(error);
  }
}
start();
