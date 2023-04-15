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


module.exports = router;
