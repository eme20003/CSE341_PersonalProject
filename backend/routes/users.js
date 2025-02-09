const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users in the database
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The unique identifier of the user
 *                   firstName:
 *                     type: string
 *                     description: The user's first name
 *                   lastName:
 *                     type: string
 *                     description: The user's last name
 *                   email:
 *                     type: string
 *                     description: The user's email address
 *                   password:
 *                     type: string
 *                     description: The user's password
 *                   balance:
 *                     type: string
 *                     description: The user's balance
 *       500:
 *         description: Some error occurred
 */
router.get('/', usersController.getAll);  // Handles GET /api/users

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieve a specific user by their ID from the database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the user
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier of the user
 *                 firstName:
 *                   type: string
 *                   description: The user's first name
 *                 lastName:
 *                   type: string
 *                   description: The user's last name
 *                 email:
 *                   type: string
 *                   description: The user's email address
 *                 password:
 *                     type: string
 *                     description: The user's password
 *                 balance:
 *                     type: string
 *                     description: The user's balance
 *       404:
 *         description: User not found
 *       500:
 *         description: Some error occurred
 */
router.get('/:id', usersController.getSingle);  // Handles GET /api/users/:id

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: Add a new user to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The user's first name
 *               lastName:
 *                 type: string
 *                 description: The user's last name
 *               email:
 *                 type: string
 *                 description: The user's email address
 *               password:
 *                     type: string
 *                     description: The user's password
 *               balance:
 *                     type: string
 *                     description: The user's balance
 *     responses:
 *       201:
 *         description: User created successfully
 *       500:
 *         description: Some error occurred
 */
router.post('/', usersController.createUser);  // Handles POST /api/users

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     description: Modify the details of a specific user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the user
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The user's first name
 *               lastName:
 *                 type: string
 *                 description: The user's last name
 *               email:
 *                 type: string
 *                 description: The user's email address
 *               password:
 *                     type: string
 *                     description: The user's password
 *               balance:
 *                     type: string
 *                     description: The user's balance
 *     responses:
 *       204:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Some error occurred
 */
router.put('/:id', usersController.updateUser);  // Handles PUT /api/users/:id

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: Remove a user from the database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the user
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Some error occurred
 */
router.delete('/:id', usersController.deleteUser);  // Handles DELETE /api/users/:id

module.exports = router;
