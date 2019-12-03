// импорт модели
const User = require('../models/user');


module.exports.createUser = (req,res) => {
  const {name, about, avatar} = req.body;
  User.create({name,about,avatar})
  .then(user => res.send({data:user}))
  .catch(err => res.status(500).send({message:'Ошибка'}));
};


module.exports.findUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) throw ({ message: "Пользователь не найден" });
        return user;
    })
    .then((user) => res.send(user))
    .catch((err) => res.status(404).send({ message:"Ошибка" }));
}


module.exports.getUsers = (req,res) => {
  User.find({})
    .then(user => res.send({data:user}))
    .catch(err => res.status(500).send({message:'Ошибка'}));
  };