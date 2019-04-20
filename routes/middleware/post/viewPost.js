const RequestedReview = require('../../../database/models/RequestedReview');

const viewPost = async (req, res, next) => {
  try {
    const postID = req.params.id;
    console.log(postID);
    await RequestedReview.find({
      _id: postID
    }).then(RequestReview => {
      if (!RequestReview) {
        console.log(err);
        res.status(400).json({
          result: {
            SUCCESS: false,
            message: '잘못된 게시글 아이디.'
          }
        });
      } else {
        res.status(200).json({
          result: {
            SUCCESS: true
          },
          RequestReview
        });
      }
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      result: {
        SUCCESS: false,
        message: 'server error'
      }
    });
  }
}

module.exports = viewPost;