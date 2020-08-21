const { Router } = require("express");

const route = new Router();

route.get("/", (req, res) => {
  res.send("//TODO: all posts");
});

module.exports = {
  postsRoute: route,
};
