// импорт модели
const Card = require('../models/card');


module.exports.createCard = (req,res) => {
  const {name, link, owner,likes,createdAt} = req.body;
  Card.create({name, link, owner,likes,createdAt})
  .then(card => res.send({data:card}))
  .catch(err => res.status(500).send({message:'Ошибка'}));
};


module.exports.deleteCard = (req,res) => {
  Card.findById(req.params.id)
  .then(card => res.send({data:card}))
  .catch(err => res.status(500).send({message:'Ошибка'}));
};


module.exports.getCard = (req,res) => {
  Card.find({})
    .then(card => res.send({data:card}))
    .catch(err => res.status(500).send({message:'Ошибка'}));
  };

  module.exports.createCard = (req, res) => {
    console.log(req.user._id);
  };