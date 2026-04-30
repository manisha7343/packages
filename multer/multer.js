const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Storage setup (correct path fix)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads')); // ✅ correct folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Test route
app.get('/', (req, res) => {
  res.send('Server working ');
});

// Upload route
app.post('/upload', upload.single('file'), (req, res) => {
  console.log("FILE:", req.file);
  res.send('File uploaded successfully ');
});

//Server start
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});