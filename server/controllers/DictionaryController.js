// Other imports
let Dictionary = require('../models/Dictionary'); // Updated model import

module.exports.displayWordList = async (req, res, next) => {
    try {
        const wordList = await Dictionary.find();
        res.render('dictionary/wordList', {
            title: 'Word List',
            words: wordList,
            displayName: req.user ? req.user.displayName : ''
        });
    } catch (err) {
        console.error(err);
        res.render('dictionary/wordList', {
            error: 'Error on server'
        });
    }
};

module.exports.addWord = async (req, res, next) => {
    try {
        res.render('dictionary/addWord', {
            title: 'Add Word',
            displayName: req.user ? req.user.displayName : ''
        });
    } catch (err) {
        console.error(err);
        res.render('dictionary/wordList', {
            error: 'Error on the server'
        });
    }
};

module.exports.processWord = async (req, res, next) => {
    try {
        await Dictionary.create({
            "word": req.body.word,
            "meaning": req.body.meaning,
            "examples": req.body.examples
        });
        res.redirect('/dictionary/wordList');
    } catch (err) {
        console.error(err);
        res.render('dictionary/wordList', {
            error: 'Error on the server'
        });
    }
};

module.exports.editWord = async (req, res, next) => {
    try {
        const id = req.params.id;
        const wordToEdit = await Dictionary.findById(id);
        res.render('dictionary/editWord', {
            title: 'Edit Word',
            word: wordToEdit,
            displayName: req.user ? req.user.displayName : ''
        });
    } catch (err) {
        console.error(err);
        res.render('dictionary/wordList', {
            error: 'Error on the server'
        });
    }
};

module.exports.processEditWord = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Dictionary.findByIdAndUpdate(id, {
            "word": req.body.word,
            "meaning": req.body.meaning,
            "examples": req.body.examples
        });
        res.redirect('/dictionary/wordList');
    } catch (err) {
        console.error(err);
        res.render('error', {
            error: 'Error updating the word'
        });
    }
};

module.exports.deleteWord = async (req, res, next) => {
    try {
        let id = req.params.id;
        await Dictionary.deleteOne({ _id: id });
        res.redirect('/dictionary/wordList');
    } catch (err) {
        console.error(err);
        res.render('dictionary/wordList', {
            error: 'Error on the server'
        });
    }
};
