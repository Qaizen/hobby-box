const router = require("express").Router();
const { hobbyBox, hobbyTracker, subscription, HobbyBox } = require("../../models");

// The `/api/hobbyBox` endpoint

// get all products
router.get("/", (req, res) => {
  // find all hobbyBox
  // be sure to include its associated hobbyTracker data
  HobbyBox.findAll({
    include: [
      hobbyTracker,
      {
        model: hobbyTracker,
        // through: ProductTag,
      },
    ],
  }).then((products) => res.json(products));
});

// get one product
router.get("/:id", (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  HobbyBox.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      hobbyTracker,
      {
        model: hobbyTracker,
        // through: ProductTag,
      },
    ],
  }).then((product) => res.json(product));
});

// create new product
router.post("/", (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball", (this is from the assignment)
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
    HobbyBox.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.userIds.length) {
        const subscriptionIdArr = req.body.userIds.map((user_id) => {
          return {
            hobbyBox_id: product.id,
            user_id,
          };
        });
        return Subscription.bulkCreate(subscriptionIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put("/:id", (req, res) => {
  // update product data
  HobbyBox.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            // tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one product by its `id` value
  HobbyBox.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
      if (!category) {
        res.status(404).json({ message: "No product found with this id" });
        return;
      }
      res.json({ message: "This Product was deleted!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;