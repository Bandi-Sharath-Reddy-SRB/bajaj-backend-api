const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bfhlRoutes = require("./routes/bfhlRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/bfhl", bfhlRoutes);

app.get("/", (req, res) => {
  res.send("BFHL Backend is running.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
