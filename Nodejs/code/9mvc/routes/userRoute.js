const express = require('express');
const router = express.Router();
const {User:Usermodel} = require('../model/Usermodel');
const {handleGetAllUsers, handleCreateUser, handleGetUserById, handleUpdateUser,handleDeleteUserById} = require('../controller/userControllers');

router.get('/',handleGetAllUsers);

router.post('/',handleCreateUser);

router
.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUser)
.delete(handleDeleteUserById);


module.exports = router;