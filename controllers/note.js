const express = require('express')
const router = express.Router()

const Note = require("../models/Note");

router.get("/", (req, res) => {
  Note.find({})
    .then(notes => {
      res.render("index", { notes });
    })
    .catch(err => console.log(err));
});

router.get("/new", (req, res) => {
    res.render("notes/new");
  });
  