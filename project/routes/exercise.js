const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');

// Route to get all exercises
router.get('/', (req, res) => {
  // Assuming getAllExercises is a method in your Exercise model
  const exercises = Exercise.getAllExercises();
  res.render('exercises', { exercises });
});

// Route to get a specific exercise by ID
router.get('/:id', (req, res) => {
  const exerciseId = req.params.id;

  // Assuming getExerciseById is a method in your Exercise model
  const exercise = Exercise.getExerciseById(exerciseId);

  if (exercise) {
    res.render('exerciseDetail', { exercise });
  } else {
    res.status(404).send('Exercise not found');
  }
});

module.exports = router;
