const express = require("express");
const uploadRouter = require("./routes/upload-router");
const path = require("path");

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route for uploading files
app.use("/upload", uploadRouter);

// Route for serving index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
