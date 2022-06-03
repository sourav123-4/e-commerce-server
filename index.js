
const express = require("express");
const mongoose  = require("mongoose");
const app = express();
const cors = require("cors")
const port=process.env.PORT || 5000;
const url = require("./connection/conn");

mongoose.connect(url,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
    },()=>{
        console.log("db connected")
    }
)
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahh")
  })

mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

app.use(express.json())
app.use(cors())
app.use(require("./Routers/userRouter"))
app.use(require("./Routers/productRouter"))
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
})