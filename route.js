const express = require("express");
const router = express.Router();

router.get("/apidoc", function(req, res) {
  req.app.get("socket").broadcast.emit("reload-kichen-pages", "done");
  req.app.get("socket").emit("reload-kichen-pages", "done");
});

module.exports = router;
