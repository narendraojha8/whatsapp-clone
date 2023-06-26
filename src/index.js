import express from "express"
import dotenv from "dotenv"

//dotenv config
dotenv.config();
const app = express();
//env variables
const PORT = process.env.PORT||8000
app.post("/test",(req,res)=>{
    res.send("hello from server");
})
console.log("welcome")
app.listen(PORT,()=>{
    console.log(`server is listening on port $PORT`)
})

export default app;