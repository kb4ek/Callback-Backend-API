const router = require('express').Router();

// Request reviews, Review comments
const RequestReview = require('./controller/RequestReview');
const ReviewComment = require('./controller/ReviewComment');

// view Posts, index page
const viewPost = require('./middleware/post/viewPost');
const indexPage = require('./middleware/main/indexPage');

// Request and review routers
router.post('/request', RequestReview);
router.post('/review', ReviewComment);

// method type : get | view page
router.get('/view', viewPost);
router.get('/', indexPage);

module.exports = router;