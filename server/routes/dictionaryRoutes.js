const express = require('express');
const router = express.Router();
const Dictionary = require('../models/Dictionary'); // Update model import
const DictionaryController = require('../controllers/DictionaryController'); // Update controller import

function requireAuth(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login'); // Redirect unauthenticated users to login
    }
    next();
}


/* Get route for the Word List */
// Read Operation
router.get('/wordList', DictionaryController.displayWordList);

/* Get route for Add Word page --> Create */
router.get('/addWord', requireAuth, DictionaryController.addWord);

/* Post route for Add Word page --> Create */
router.post('/addWord', requireAuth, DictionaryController.processWord);

/* Get route for displaying the Edit Word page --> Update */
router.get('/editWord/:id', requireAuth, DictionaryController.editWord);

/* Post route for processing the Edit Word page --> Update */
router.post('/editWord/:id', requireAuth, DictionaryController.processEditWord);

/* Get to perform Delete Operation --> Delete Operation */
router.get('/deleteWord/:id', requireAuth, DictionaryController.deleteWord);

module.exports = router;
