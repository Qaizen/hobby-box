const router = require("express").Router();
const { HobbyBox, Subscriptions, Users } = require("../../models");

// The `/api/hobbyBox` endpoint
// get all hobby boxes
router.get("/",  async (req, res) => {
  HobbyBox.findAll({
    include: [
      {
        model: Users,
        attributes: ["id", "username"],
      },
    ],
  }).then((products) => res.json(products));
});

// get one product
router.get("/:id", (req, res) => {
  // find a single product by its `id`

  HobbyBox.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Users,
        attributes: ["id", "username"],
      },
    ],
  }).then((product) => res.json(product));
});

// create new product
router.post("/", (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball", 
      price: 200.00,
      stock: 3,
      
    }
  */
  HobbyBox.create({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
  })
  .then((product) => {
      if (req.body.usersIds.length) {
      const subscriptionIdArr = req.body.usersIds.map((users_id) => {
        return {
          hobbybox_id: product.id,
          users_id,
        };
      });
      return Subscription.bulkCreate(subscriptionIdArr);
    }
    // if no product tags, just respond
    res.status(200).json(product);
  })
    // .then((productTagIds) => res.status(200).json(productTagIds))
    // .catch((err) => {
    //   console.log(err);
    //   res.status(400).json(err);
    // });
});

// update a product
router.put("/:id", (req, res) => {
  HobbyBox.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from the ProductTag table
      return Subscriptions.findAll({ where: { hobbybox_id: req.params.id } });
    })
    .then((subscriptions) => {
      // get list of current tag_ids
      const subscriptionIds = subscriptions.map(({ users_id }) => users_id);
      // create filtered list of new tag_ids
      const newSubscriptions = req.body.usersIds
        .filter((users_id) => !subscriptionIds.includes(users_id))
        .map((users_id) => {
          return {
            hobbybox_id: req.params.id,
            users_id,
          };
        });
      // figure out which ones to remove
      const subscriptionsToRemove = subscriptions
        .filter(({ users_id }) => !req.body.usersIds.includes(users_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        Subscription.destroy({ where: { id: subscriptionsToRemove } }),
        Subscription.bulkCreate(newSubscriptions),
      ]);
    })
    .then((updatedSubscriptions) => res.json(updatedSubscriptions))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});


module.exports = router;
