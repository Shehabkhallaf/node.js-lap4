const express = require('express');
const todosController = require('../controllers/todos');
const auth = require('../middleware/auth');
const router = express.Router();
const mongoose= require("mongoose");
router.use(auth);

router.get('/', (req, res, next) => {
    const data = todosController.find().then
    res.json(data);
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    todosController.findOne(id)
        .then((todo) => {
            if (!todo) {
                res.status(404).end()
                return
            }
            res.json(todo)
        })
        .catch(e => {
            res.status(500).json(e)
        })
});

router.post('/', async (req, res, next) => {
    const { title } = req.body;
    const user = req.user
    todosController.create({title, userId : user.id})
        .then((todo) => {
            res.json(todo);
        })
        .catch(e => res.status(422).json(e))
});

router.patch('/:id', (req, res, next) => {
    const { id } = req.params;
    const { title } = req.body;
    todosController.edit(id, title).then(todo => {
        if (!todo) {
            res.status(404).json('error')
            return
        }
        res.json(todo)
    })
        .catch((err) => {
            res.status(404).json(err)
        })
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    todosController.Delete(id).then((todo) => {
        if (!todo) {
            res.status(404).json(err)
            return
        }
    })
        .catch((err) => {
            res.status(404).json(err)
        })
});
module.exports = router;