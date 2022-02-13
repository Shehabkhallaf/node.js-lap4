const express = require('express');
const userController = require('../controllers/users')
const router = express.Router()


router.get("/",(req,res,next)=>{
    const data =controlUser.find({}).then((data)=>{
        res.json(data);
    })
})

router.get("/:id",(req,res,next)=>{
    const {id}=req.params;
    controlUser.findOne(id)
    .then((user)=>{
        res.json(user);
    })
    .catch(()=>{
        res.status(404).json({"err":"in valid id"})
    })
})

router.post('/', (req, res, next) => {
    const user = req.body;
    userController.create(user)
        .then(user => { res.json(user)})
        .catsh(e => { res.status(404).json(e)})
})

router.post('/login', (req, res, next) => {
    const userCred = req.body;
    userController.login(userCred)
    .then(data => res.json(data))
    .catsh(e=> res.status(401).json(e))
})

router.delete("/:id",(req,res,next)=>{
    const id=req.params
    controlUser.delOne(id).then(()=>{
      res.status(200).end()
    }).catch((err)=>{
        res.status(422).end()
    })
})

module.exports = router;