import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async(req, res) => {
    res.status(200).json({
        message: "This is ChatGPT AI App"
    });
})

app.post("/", async (req, res) => {
    try {
        
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
})

app.listen('4000', "localhost", (err) => {
    if (err) {
        console.log("Error Listening to PORT 4000: ", err);
    } else {
        console.log("Server is listening at PORT 4000");
        console.log("Press CTRL+C to end the server");
    }
})