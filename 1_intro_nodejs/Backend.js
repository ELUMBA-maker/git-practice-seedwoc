import express from "express"
import {port,NODE_ENV} from "./config/env.js"
import { hostname } from "node:os";

const app = express();
const PORT = process.env.PORT || 3000;
app.get('/',(req,send)=>{

    res.send('Hello World')
});
app.listen(PORT, () => {
    console.log(`Backend is running on port http://localhost:${PORT}`)
})
export default app;