import express, { Router } from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

const PORT = 8000;
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWROD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWROD);
app.use(cors());
//using body parsers we handle the incomming requests without it we get undefined
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
DefaultData();
