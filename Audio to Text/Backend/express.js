const express = require("express");
const multer = require("multer");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Import the cors package

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static(path.join(__dirname, "public"))); // Serve static files
app.use(cors()); // Enable CORS

app.post("/analyze", upload.single("audioFile"), async (req, res) => {
  if (req.file) {
    const data = fs.readFileSync(req.file.path);

    const response = await fetch(
      "https://api-inference.huggingface.co/models/openai/whisper-large-v2",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();
    console.log(result);
    res.json(result.text);

    fs.unlinkSync(req.file.path); // Remove the file after processing
  } else {
    res.status(400).send("No file uploaded.");
  }
});

app.get("/check", function (req, res) {
  res.send("OK");
});

const PORT = 5000;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
