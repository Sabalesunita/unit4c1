const express = require("express");

const User = require("../models/user.models");

const todosController = require("./todo.controllers");

const router = express.Router();

// USERS CRUD
router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.status(200).send({ users: users }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", todosController.post(User));


router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", todosController.delete(User));

module.exports = router;
