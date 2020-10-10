"use strict";
const todolistController = require("../controllers/todolist-controller");
module.exports = app => {
  app
    .route("/api/todolist")
    .get(todolistController.list)
    .post(todolistController.save);
  app
    .route("/api/todolist/:id")
    .put(todolistController.update)
    .delete(todolistController.delete);
};
