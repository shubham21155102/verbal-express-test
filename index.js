import fs from "fs";
import express from "express"; 
import cors from "cors";
import env from "dotenv"; 
import {Configuration,OpenAIApi} from "openai"
env.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    const filePath = "questions.json";
    fs.promises.readFile(filePath, 'utf-8').then((data) => {
        const parsedData = JSON.parse(data);
        res.json(parsedData); // Use res.json() here
    }).catch((error) => {
        console.error("Error reading JSON file:", error);
        res.status(500).send("Internal Server Error");
    });
});

const port = process.env.PORT || 3000; // Set the port correctly
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});