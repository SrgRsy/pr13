const userRout = require('express').Router();


const { getUsers,createUser,findUser } = require('../controllers/users');


userRout.get('/', getUsers);
userRout.get('/', findUser);
userRout.post('/', createUser);



module.exports = userRout;