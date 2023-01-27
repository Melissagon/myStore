const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  })
  .then(categories => res.json(categories))
  .catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: { id: req.params.id }
  },{
    include: [Product]
  })
  .then(dbCategory => res.json(dbCategory))
  .catch(err => res.json(err))
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then(dbCategory => res.json(dbCategory))
  .catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
  Category.update({
    where: { id: req.params.id }
  }, req.body)
  .then(dbCategory => res.json(dbCategory))
  .catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: { id: req.params.id }
  })
  .then(dbCategory => res.json(dbCategory))
  .catch(err => res.json(err))
});

module.exports = router;
