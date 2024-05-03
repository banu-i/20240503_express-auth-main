const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const UserModel = require("../../database/models/UserModel");

const UserRouter = Router();

// GET REQUESTS
UserRouter.get("/currentuser", async (req, res) => {
  // TODO: der Nutzer soll basierend auf der userId aus dem Token ermittelt werden
  res.send("Ich bin nur ein Platzhalter");
});

module.exports = { UserRouter };
