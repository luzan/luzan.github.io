const express = require('express');
const { formView, formPost, formReset } = require('../controllers/formController');
const router = express.Router();

router.get('/', formView);
router.post('/', formPost);
router.get('/reset', formReset);

module.exports = router;