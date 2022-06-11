const express = require('express');
const { indexView, loginPost } = require('../controllers/loginController');
const router = express.Router();

router.get('/', indexView);
router.post('/', loginPost);
// router.post('/logout', loginPost);

module.exports = router;