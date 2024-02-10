import express from express;
import bodyParser from "body-parser";
import dotenv from "dotenv";
import {dbconnect} from "./dbconfig/dbconfig"

dotenv.config();
const app=express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbconnect().then(()=>{
    app.listen(PORT, () => console.log(`Server Port:${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));

