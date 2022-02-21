import express from "express";
const router = express.Router();

const guess = Math.floor(Math.random() * 11);
console.log(guess);

router.get("/", (req, res) => {
  res.send("Hello");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (parseInt(id) === guess) res.send("Hurrah!, You guessed correct");
  else if (id > guess) res.send("Try lower");
  else res.send("Try Higer");
});

export default router;
