require('dotenv').config()
const app = require('./src/app')
const connectToDB = require('./src/db/db')
const cors = require('cors');
connectToDB()

app.use(cors)

app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000!");
})