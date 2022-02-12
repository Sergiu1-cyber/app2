var express = require('express');
var router = express.Router();
var { Moneys } = require('../models');

/* GET home page. */
router.post('/all', (req, res, next) => {
  Moneys.findAll()
  .then(response => res.send(response))
  .catch(err => res.send(err));
});

router.post('/id', (req, res, next) => {
  let a = req.body.id
  Moneys.findAll({where: {id: a}})
  .then(response => res.send(response))
  .catch(err => res.send(err));
});

router.post('/adaog', async (req, res, next) => {
  let a = req.body.sql
  let b = JSON.parse(a)
  let data = await Moneys.create(b)
  res.send(data instanceof Moneys)
});

router.post('/redactez', async (req, res, next) => {
  let a = req.body.sql
  let b = JSON.parse(a)
  let c = req.body.id
  let data = await Moneys.update(b, {where: {id: c}})
  res.send(data instanceof Moneys)
});

router.post('/sterg', async (req, res, next) => {
  let a = req.body.id
  await Moneys.destroy({where:{id:a}})
  res.send('sters')
});

module.exports = router;
