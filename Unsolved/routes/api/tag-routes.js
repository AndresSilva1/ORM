const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags

  //Tag.findAll

  // be sure to include its associated Product data

  // model: Product
  // through ProductTag

});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`

  // Tag.findOne

  // be sure to include its associated Product data

  //model: Product
  // through ProductTag
});

router.post('/', (req, res) => {
  // create a new tag
  // .create
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  //.update
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  //.destroy
});

module.exports = router;
