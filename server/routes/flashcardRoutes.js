const express = require('express');
const router = express.Router();
const Dictionary = require('../models/Dictionary'); // Update model import
const FlashcardController = require('../controllers/FlashcardController'); // Update controller import



/* Get route for the Word List */
// Read Operation
router.get('/flashList', FlashcardController.displayFlashcard);


module.exports = router;