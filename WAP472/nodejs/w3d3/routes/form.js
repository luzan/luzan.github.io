const express = require('express');
const { formView, formPost } = require('../controllers/formController');
const router = express.Router();

router.get('/', formView);
router.post('/', formPost);

module.exports = router;