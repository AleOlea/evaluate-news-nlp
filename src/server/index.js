const dotenv = require("dotenv");
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

var path = require("path");
const express = require("express");
const cors = require("cors");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(express.static("dist"));

app.use(cors());
console.log(__dirname);
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
// });

app.get("/", function(req, res) {
    res.sendFile(path.resolve("src/client/views/index.html")); //MATEO
    // res.sendFile("dist/index.html"); BOILER PLATE
});

app.get("/test", function(req, res) {
    // console.log("paloma");
    res.json(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log("Example app listening on port 8081!"); //11/$ ALE PORT CHANGED FOLLOWING COURSE INTRCUTION TO FIX FUNCTIONALLITY
});

// app.post("./analize", function(requ, res) {
//             const APY_KEY = process.env.APY_KEY;
//             const articleUrl = req.body.articleUrl;

//             const BaseURl = "";
//             const params = `?key=${APY_KEY}&lang=en&model=genereal&url=${articleUrl}
//     const urlToFetch = baseUrl  + params;

//     fetch(urlToFetch, {
//         method: "POST",
//         headers:{
//             "Content-Type": "application/JSON",
//         }
//     }).then(response) =>{
//         return response.json();
//     }).then(data)=>{
//         res.send({
//             score_tag:data.score_tag,
//             agreement:data.agrement,
//             subjectivity: data.subjectivity,
//             confidence:data.confidence
//         })
//     });

// })