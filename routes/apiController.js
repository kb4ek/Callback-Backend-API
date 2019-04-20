const router = require('express').Router();

// Request reviews, Review comments
const RequestReview = require('./controller/RequestReview');
const ReviewComment = require('./controller/ReviewComment');

// view Posts
const viewPost = require('./middleware/post/viewPost');

// Request and review routers
router.post('/request', RequestReview);
router.post('/review', ReviewComment);

// method type : get | view page
router.get('/view', viewPost);

module.exports = router;