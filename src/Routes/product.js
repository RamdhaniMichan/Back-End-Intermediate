const express = require("express");

const routes = express.Router();
const controller = require("../Controllers/product");
const upload = require("../Middleware/multer");
const cache = require("../Middleware/cache");
const validate = require("../Middleware/validate");

routes.get("/", validate("user"), cache, controller.get);
routes.get("/names", validate("user"), controller.getByName);
routes.get("/find", validate("user"), controller.findBy);
routes.post("/", validate("admin"), upload.single("image"), controller.add);
routes.put("/", validate("admin"), controller.update);
routes.delete("/:id", validate("admin"), controller.del);

module.exports = routes;