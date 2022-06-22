const router = require('express').Router();

const { addReport,
        displayAllReport

 } = require('./../controllers/report')

router.post('/', addReport)
router.get('/',displayAllReport)



module.exports = router