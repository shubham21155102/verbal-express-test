const express = require('express');
const fs = require('fs').promises;
const data=require("./questions")
const app = express();
const cors=require("cors")
app.use(cors)
app.get('/quiz', (req, res) => {
    res.json(data);
    // const filePath = "questions.json";
    // fs.readFile(filePath, 'utf-8')
    //     .then((data) => {
    //         try {
    //             const parsedData = JSON.parse(data);
    //             res.json(parsedData);
    //         } catch (parseError) {
    //             console.error("Error parsing JSON:", parseError);
    //             res.status(500).send("Internal Server Error");
    //         }
    //     })
    //     .catch((readError) => {
    //         console.error("Error reading JSON file:", readError);
    //         res.status(500).send("Internal Server Error");
    //     });
});

// Default route for other requests
app.get('*', (req, res) => {
    res.send("Hello, this is your default route.");
});

module.exports = app;
// app.listen(3000)
