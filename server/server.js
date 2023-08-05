const express = require('express');
const PORT = 5000;
const cors = require('cors');
const connectDB = require('./config/db')
const app = express();
 
connectDB()

// for commit

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use("/form",require('./routes/formDataRoutes'))


app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})