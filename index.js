const app = require("express")();
const cors = require("cors");
const search = require("./helper/search");
const auto = require("./helper/auto");

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.set("json spaces", 4); /* Format the JSON in a Nice Way */

app.get("/location/:loc", async (req, res) => {
  res.send(await search(req.params.loc));
});

app.get("/auto", async (req, res) => {
  res.send(
    await auto(req.get("X-Forwarded-For") || req.get("CF-Connecting-IP"))
  );
});

app.listen(process.env.PORT || 8080, () => {
  /* Default Express Listen */
  console.log(`Listening at Port: ${process.env.PORT || 8080}`);
});

module.exports = app;
