const router = require("express").Router();
// const Users = require("../../models/Users.js");
// const HobbyBox = require("../../models/hobbyBox.js");
const { Users, HobbyBox } = require('../../models');

// const withAuth = require('../../utils/auth'); need this next

router.get("/", (req, res) => {
  // find all tags

  Users.findAll({
    // be sure to include its associated Product data

    include: [
      {
        model: HobbyBox,
        //attributes: ["id", "product_name", "price", "stock"],
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

        //attributes: ["id", "product_name", "price", "stock"],
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

// The `/api/tags` endpoint
// router.post("/", (req, res) => {
//   // expects {username: 'xxx', email: 'xxx@gmail.com', password: 'pass'}
//   Users.findOne({
//     where: {
//       email: req.body.email,
//     },
//   })
//     .then((foundUser) => {
//       if (foundUser) {
//         res
//           .status(400)
//           .json({ message: "Email is already associated with a User!" });
//         return;
//       } else {
//         Users.create({
//           username: req.body.username,
//           email: req.body.email,
//           password: req.body.password,
//         }).then((UserData) => {
//           req.session.save(() => {
//             req.session.user_id = UserData.id;
//             req.session.username = UserData.username;
//             req.session.loggedIn = true;

//             res.json(UserData);
//           });
//         });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.post('/', (req, res) => {
  // expects {username: 'xxx', email: 'xxx@gmail.com', password: 'pass'}
  Users.findOne({
    where: {
      email: req.body.email
    }
  }).then(foundUser => {
    if(foundUser) {
      res.status(400).json({ message: 'Email is already associated with a User!' });
      return;
    } else{
      Users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(UserData => {
        req.session.save(() => {
          req.session.user_id = UserData.id;
          req.session.username = UserData.username;
          req.session.loggedIn = true;
          res.json(UserData);
        });
      })
    }
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post("/login", (req, res) => {
  // expects {email: 'xxx@mail.com', password: 'Password1!'}
  console.log(req.body);
  Users.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "Incorrect Email or Password!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect Email or Password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
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
