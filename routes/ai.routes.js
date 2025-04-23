const express  = require('express');
const aiController = require('../controllers/ai.controller');   
const router  = express.Router();

router.post('/get-review',aiController.getReview);
console.log("ai.routes.js is running");


module.exports = router;