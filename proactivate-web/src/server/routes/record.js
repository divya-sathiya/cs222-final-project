const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

module.exports = recordRoutes;

//Adding to tasks in the mongodb
recordRoutes.route("/tasks/add_task").post(function (req, res) {
  const dbConnect = dbo.getDb();
  
  const matchDocument = {
    user_auth_token: req.body.token,
    tasks: req.body.todos
  };
  dbConnect
    .collection("tasks")
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send("Error inserting task!");
      } else {
        console.log(`Added a new task with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
});




