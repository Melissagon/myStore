const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [{ model: Product, through: ProductTag }]
  })
  .then(categories => res.json(categories))
  .catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: { id: req.params.id }
  },{
    include: [{ model: Product, through: ProductTag }]
  })
  .then(categories => res.json(categories))
  .catch(err => res.json(err))
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then(dbCategory => res.json(dbCategory))
  .catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
  Tag.update({
    where: { id: req.params.id }
  }, req.body)
  .then(dbCategory => res.json(dbCategory))
  .catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: { id: req.params.id }
  })
  .then(dbCategory => res.json(dbCategory))
  .catch(err => res.json(err))
});

module.exports = router;
