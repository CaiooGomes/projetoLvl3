const router = require('express').Router()
const NotesController = require('../Controllers/NoteController')

router
    .get('/', NotesController.getAll)
    .post('/createNote', NotesController.createNote)
    .put('/editNote:id', NotesController.editNote)
    .delete('/deleteNote:id', NotesController.deleteNote)

module.exports = router;