const express = require('express')
const router = express.Router()

//Post route
router.get('/',(req,res)=>{
    res.send('We are on posts')
})

module.exports = router