const router = require('express').Router();

// Request reviews, Review comments
const RequestReview = require('./middleware/post/RequestReview');
const ReviewComment = require('./middleware/post/ReviewComment');

router.post('/request', RequestReview);
router.post('/review', ReviewComment);

module.exports = router;