const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//Create, Read, Update, Delete

//.findAll
//.findOne

//.create

//.update

//.destroy

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // Category.findAll({
  //   include: [Product]
  // }).then((model) => res.json(model))
  //   .catch(err => res.json(err))
  try {
    const categories = await Category.findAll({
      include: [Product],
    });
    res.json(categories);
  } catch (err) {
    res.json(err);
  }
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
    .then((model) => res.json(model))
    .catch(err => res.json(err));
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body)
    .then((model) => res.json(model))
    .catch(err => res.json(err));
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  })
  .then((model) => res.json(model))
    .catch(err => res.json(err));
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy( {
    where: {
      id: req.params.id
    },
})
.then((model) => res.json(model))
.catch(err => res.json(err));
});


module.exports = router;
