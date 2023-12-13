let Dictionary = require('../models/Dictionary'); // Updated model import



module.exports.displayFlashcard = async (req, res, next) => {
    try {
        const flashList = await Dictionary.find();
        res.render('dictionary/flashList', {
            title: 'Flashcards',
            words: flashList,
            displayName: req.user ? req.user.displayName : ''
        });
    } catch (err) {
        console.error(err);
        res.render('dictionary/flashList', {
            error: 'Error on server'
        });
    }
};


