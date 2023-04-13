const router = require("express").Router();
const { Users, HobbyBox, Subscriptions } = require("../../models");
// const withAuth = require('../../utils/auth'); need this next

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  Users.findAll({
    // be sure to include its associated Product data
    include: [
      {
        model: HobbyBox,
        attributes: ["id", "product_name", "price", "stock"],
      },
    ],
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find a single user by its `id`
  Users.findOne({
    where: {
      id: req.params.id,
    },
    // be sure to include its associated Product data
    include: [
      {
        model: HobbyBox,
        attributes: ["id", "product_name", "price", "stock"],
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new tag
  Users.create({
    //first_name: req.body.first_name,
    // the last_name is the last name of the user
    //last_name: req.body.last_name,
    // the email is the email of the user
    user_name: req.body.user_name,
    email: req.body.email,
    // the password is the password of the user
    password: req.body.password,
    // the address is the address the user lives in
    //address: req.body.address,
    // the city is the city the user lives in
    //city: req.body.city,
    // the state is the state the user lives in
    //state: req.body.state,
    // the zip is the zip code of the user
    //zipCode: req.body.zipCode,
  })
    // send the response back to the client
    .then((dbUserData) => {
      // save the session before sending the response
      req.session.save(() => {
        // set the session user_id to the user id of the user we just created
        req.session.users = dbUserData.id;
        //set the session user_name to the user
        req.session.user_name = dbUserData.user_name;
        // set teh session email to the email of the user we just created
        req.session.email = dbUserData.email;
        // the purpose of session.loggedIn is to check if the user is logged in or not
        req.session.loggedIn = true;
        // send the user back to the client
        res.json(dbUserData);
      });
    })
    // catch any errors
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Users.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete user by `id` value
  Users.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
