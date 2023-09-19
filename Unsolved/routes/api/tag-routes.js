const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags

  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag
      }]
  }
    
  )
  .then((tags) => res.json(tags))
  .catch((err) => {
    // console.log(err);
    res.status(400).json(err);
  });

  // be sure to include its associated Product data

  // model: Product
  // through ProductTag

});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        through: ProductTag
      }]
  }
    
  )
  .then((tags) => res.json(tags))
  .catch((err) => {
    // console.log(err);
    res.status(400).json(err);
  });
  // Tag.findOne

  // be sure to include its associated Product data

  //model: Product
  // through ProductTag
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tags) => res.json(tags))
  .catch((err) => {
    // console.log(err);
    res.status(400).json(err);
  });
  // create a new tag
  // .create
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((tags) => res.json(tags))
  .catch((err) => {
    // console.log(err);
    res.status(400).json(err);
  });
  // update a tag's name by its `id` value
  //.update
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((tags) => res.json(tags))
  .catch((err) => {
    // console.log(err);
    res.status(400).json(err);
  });
  // delete on tag by its `id` value
  //.destroy
});

module.exports = router;
