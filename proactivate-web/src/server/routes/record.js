const express = require("express");
const { getAuth } = require("firebase/auth");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

module.exports = recordRoutes;


/* TASKS */



//TASK POST ->CREATE
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

//TASK GET ->READ
recordRoutes.route("/tasks/get_task").get(async function (req, res) {
  var tokenId = req.body.token;
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("tasks")
    .find({user_auth_token: tokenId})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching user tasks!");
     } else {
        res.json(result);
      }
    });
});

//TASK POST -> UPDATE
recordRoutes.route("/tasks/update_task").post(function (req, res) {
  const tokenIdQuery = {user_auth_token: req.body.token};
  const dbConnect = dbo.getDb();
  const updates = {
    $set: {
      tasks: req.body.todos
    }
  };

  dbConnect
    .collection("tasks")
    .updateOne(tokenIdQuery, updates, function (err, _result) {
      if (err) {
        res.status(400).send(`Error updating likes on listing with id ${tokenIdQuery.id}!`);
      } else {
        console.log("1 document updated");
      }
    });
});

//TASK DELETE
recordRoutes.route("/tasks/delete_task").get(async function (req, res) {
  const tokenIdQuery = {user_auth_token: req.body.token};
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("tasks")
    .deleteOne(tokenIdQuery, function (err, _result) {
      if (err) {
        res.status(400).send(`Error deleting listing with id ${tokenIdQuery.listing_id}!`);
      } else {
        console.log("1 document deleted");
      }
    });
});


/* DEADLINE */
//DEADLINE POST -> CREATE
recordRoutes.route("/deadline/add_stats").post(function (req, res) {
  const dbConnect = dbo.getDb();
  
  const matchDocument = {
    uid:req.body.uid,
    assignment: req.body.name,
    deadline_id: req.body.deadline_id,
    due_date: req.body.date,
    time_due: req.body.time,
    status: req.body.complete
  };
  dbConnect
    .collection("deadlines")
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send("Error inserting task!");
      } else {
        console.log(`Added a new task with id ${result.insertedId}`);
      }
    });
   // console.log("posting to" + matchDocument);
});

// //DEADLINE GET -> READ
recordRoutes.route("/deadline/get_stats/:id").get((req,res)=>{
  var tokenId = req.params.id;
  
  const dbConnect = dbo.getDb();
  dbConnect.collection("deadlines")
  .find({uid: tokenId})
  .toArray(function (err, result) {
    if (err) {
      //return next(err)
      res.status(400).send("Error fetching deadlines!");
   } else {
      res.json(result);
    }
  });
})



//DEADLINE DELETE
recordRoutes.route("/deadline/delete_stat/:id").delete(function (req, res) {
  var objId = new ObjectId(req.params.id)
  const matchDocument = {
    _id: objId
  };
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("deadlines")
    .deleteOne(matchDocument, function (err, _result) {
      if (err) {
        //res.status(400).send(`Error deleting listing with id ${tokenIdQuery.listing_id}!`);
        console.log("deleted");
      } else {
        console.log("1 document deleted");
      }
    });
});


/* TIME */
//TIME POST -> CREATE
recordRoutes.route("/time/add_session").post(function (req, res) {
  const dbConnect = dbo.getDb();
  
  const matchDocument = {
    uid: req.body.uid,
    minutes: req.body.minutes,
    seconds: req.body.seconds
  };
  dbConnect
    .collection("time")
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send("Error inserting task!");
      } else {
        console.log(`Added a new task with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
});


//TIME GET -> READ (this should return the total time for the specific user_token_id)
recordRoutes.route("/time/get_total/:id").get((req, res)=>{
  var user_uid = req.params.id;
  console.log("187")
  const dbConnect = dbo.getDb();
  var result = dbConnect
    .collection("time")
    .aggregate(
      [ { $match : { uid: user_uid } } , 
        {
          $group:
            {
              minutes: { $sum: "$minutes" },
              seconds: { $sum: "$seconds" } 
            }
        }
      ]
   );
   res.json(result);
});

/* MY ACCOUNT */ 
//MY ACCOUNT POST -> CREATE (this should create a user profile when sign up happens)
recordRoutes.route("/account/add_profile").post(function (req, res) {
  const dbConnect = dbo.getDb();
  
  const matchDocument = {
    user_auth_token: req.body.token,
    first_name: req.body.first,
    last_name: req.body.last,
    email: req.body.email,
    profile_pic: req.body.picture
  };
  dbConnect
    .collection("profiles")
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send("Error inserting task!");
      } else {
        console.log(`Added a new task with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
});

//MY ACCOUNT GET -> READ (gives you the current first name, last name, email, and profile pic)
recordRoutes.route("/account/get_profile").get(async function (req, res) {
  var tokenId = req.body.token;
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("profiles")
    .find({user_auth_token: tokenId})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching user tasks!");
     } else {
        res.json(result);
      }
    });
});

//MY ACCOUNT POST -> UPDATE (helps you update the current information)
recordRoutes.route("/account/update_account").post(function (req, res) {
  const tokenIdQuery = {user_auth_token: req.body.token};
  const dbConnect = dbo.getDb();
  const updates = {
    $set: {
      first_name: req.body.first,
      last_name: req.body.last,
      email: req.body.email,
      profile_pic: req.body.picture
    }
  };

  dbConnect
    .collection("profiles")
    .updateOne(tokenIdQuery, updates, function (err, _result) {
      if (err) {
        res.status(400).send(`Error updating likes on listing with id ${tokenIdQuery.id}!`);
      } else {
        console.log("1 document updated");
      }
    });
});




