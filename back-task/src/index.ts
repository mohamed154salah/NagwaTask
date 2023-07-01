import app from "./server"
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT ;

app.listen(port,()=>{
console.log(`server listen on http://localhost:${port}`)
})
