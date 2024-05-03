const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const AuthRouter = Router();

// POST REQUESTS

AuthRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // TODO: Login basierend auf email/password
  // Token soll erstellt werden und zurückgegeben werden
  res.send("Ich bin nur ein Platzhalter");
});

AuthRouter.post("/signup", async (req, res) => {
  const { email, password, name, profileImgUrl } = req.body;
  if (!email || !password || !name || !profileImgUrl) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  // TODO: Signup basierend auf email, password, name, profileImgUrl
  // Token soll erstellt werden und zurückgegeben werden
  res.send("Ich bin nur ein Platzhalter");
});

module.exports = { AuthRouter };
