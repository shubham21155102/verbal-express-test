const express=require("express")
const fs=require("fs")
const app=express();
const port=process.env.PORT || 3000;
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.get("/hello",(req,res)=>{
    res.send("Hello World");
})
app.get('/quiz',(req,res)=>{
    const filePath = "questions.json";
    fs.promises.readFile(filePath, 'utf-8').then((data) => {
        const parsedData = JSON.parse(data);
        res.json(parsedData); // Use res.json() here
    }).catch((error) => {
        console.error("Error reading JSON file:", error);
        res.status(500).send("Internal Server Error");
    });
})
app.listen(port,()=>{
    console.log("Server is running on port 3000");
})