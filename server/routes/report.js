const router = require('express').Router();
// require('')

const { addReport,
        displayAllReport

 } = require('./../controllers/report')

router.post('/:id/:id', addReport)
router.get('/',displayAllReport)



module.exports = router