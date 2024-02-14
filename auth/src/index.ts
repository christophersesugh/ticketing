import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from auth service");
});

app.listen(3000, () => {
  console.log("Auth service listening on port 3000");
});
