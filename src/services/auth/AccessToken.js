const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

function createAccessToken(userId) {
  const accessToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "8h" });
  console.log("This is my access Token", accessToken);

  return accessToken;
}

function decodeAccessToken(accessToken) {
  const decodedToken = jwt.verify(accessToken, JWT_SECRET);

  console.log("this is my decoded Token", decodedToken);

  return decodedToken;
}

module.exports = { createAccessToken, decodeAccessToken };
