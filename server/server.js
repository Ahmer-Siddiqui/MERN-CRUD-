const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

connectDB();

app.use(cors());
app.use(express.json({ limit: "10gb" }));
app.use(express.urlencoded({ extended: false, limit: "10gb" }));

app.use("/form", require("./routes/formDataRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
   