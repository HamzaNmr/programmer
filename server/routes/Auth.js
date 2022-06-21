const express = require('express');
const passport = require('passport');
const { registerPost, loginPost } = require('../controllers/Auth.js');
require("../passportJwt.js");

const router = express.Router();

router.post('/register', registerPost);
router.post('/login', loginPost);

router.get('/protected', passport.authenticate("jwt", { session: false }), (req, res) => {
    return res.status(200).send({
        success: true,
        user: {
            id: user._id,
            email: user.email,
        }
    })
});
module.exports = router;