const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

function createAccessToken(userId) {
  // Access Token mit dem Inhalt der User Id erstellen
}

function decodeAccessToken(accessToken) {
  // Den Inhalt des Access tokens dekodieren
}

module.exports = { createAccessToken, decodeAccessToken };
