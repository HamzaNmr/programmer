const express = require("express");
const {createGroup, updateGroup, deleteGroup} = require('../controllers/groups.js');

const router = express.Router();

router.post('/group', createGroup);
// router.patch('/:id', updateGroup);
// router.delete('/:id', deleteGroup);

module.exports = router;