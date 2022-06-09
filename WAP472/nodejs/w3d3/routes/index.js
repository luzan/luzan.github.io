const express = require('express');
const { indexView, loginPost } = require('../controllers/loginController');
const router = express.Router();

router.get('/', indexView);
router.post('/login', loginPost);

module.exports = router;