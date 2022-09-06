
const express = require('express')
const Router = express.Router(); 

const {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser } = require('../controllers/users');



Router.get('/', getUsers); 

Router.get('/:id', getUser);

Router.post('/', createUser);


Router.delete('/:id', deleteUser)


Router.patch('/:id', updateUser)


module.exports = Router; 