const todoSequelize = require("./src/database/setup/database");
const app = require("./src/server");

// Zugriff auf Umgebungsvariablen
// const { PORT } = process.env;
const PORT = process.env.PORT;

todoSequelize
  .sync()
  .then(() => {
    console.log("DB has been successfully initialized");
  })
  .catch((e) => {
    console.log(e);
  });

// App hört im folgenden auf den Port, welcher über die Umgebungsvariable definiert ist
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
