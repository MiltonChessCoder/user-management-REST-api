const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const auth = require('../middleware/auth')

// GET all users (with optional pagination & filtering)
router.get('/', usersController.getAllUsers)

// GET single user by ID
router.get('/:id', usersController.getUserById)

// POST user
router.post('/', auth, usersController.createUser)

// PUT user
router.put('/:id', auth, usersController.updateUser)

// DELETE user
router.delete('/:id', auth, usersController.deleteUser)

module.exports = router