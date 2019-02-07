const express = require("express");
const router = express.Router();

// Item Model
const Todo = require("../../models/Todo");

// @route   GET api/todos
// @desc    Get All Todos
// @access  Public
router.get("/", (req, res) => {
  Todo.find()
    .sort({ date: -1 })
    .then(todo => res.json(todo));
});

module.exports = router;
