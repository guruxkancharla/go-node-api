import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/user.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/user", userRoute);
app.get("/", (req, res) => {
  console.log("[Test!]");
  res.send("Hello from Homepage");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
