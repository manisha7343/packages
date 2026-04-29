const express = require("express");
const Ajv = require("ajv");

const app = express();
app.use(express.json()); // body read karne ke liye

const ajv = new Ajv();

// Schema (rules)
const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "number" }
  },
  required: ["name", "age"],
  additionalProperties: false
};

// validator compile - create a function basically
const validate = ajv.compile(schema);

// API route
app.post("/user", (req, res) => {
  const data = req.body; 
  const valid = validate(data);

  if (!valid) {
    return res.status(400).json({
      message: "Invalid data ",
      errors: validate.errors
    });
  }

  res.json({
    message: "Valid data ",
    data: data
  });
});

// server start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});