const express = require('express');
const router = express.Router();
const db = require('../db/connect');

// GET all items
router.get('/', (req, res) => {
  const items = db.getDb().collection('items');
  items.find().toArray()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// POST a new item
router.post('/', (req, res) => {
  const newItem = req.body;
  const items = db.getDb().collection('items');
  items.insertOne(newItem)
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
});


/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Get all items
 *     responses:
 *       200:
 *         description: A list of items
 *   post:
 *     summary: Add a new item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item created
 */


module.exports = router;
