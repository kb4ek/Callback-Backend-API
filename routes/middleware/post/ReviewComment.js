const RequestedReview = require('../../../database/models/requestedreview');

const ReviewComment = async (req, res) => {
  try {
    const {
      userName,
      filePath,
      lineNumber,
      content,
    } = req.body;

    if (userName && filePath && lineNumber && content) {
      const Comment = {
        userName,
        filePath,
        lineNumber,
        content
      };

      await RequestedReview.findOne({

      }).then(RequestedReview.update({
        reviews: Comment
      }))

      res.status(200).json({
        result: {
          SUCCESS: true,
          message: "성공적으로 작성되었습니다."
        },
        comment: Comment
      })
    } else {
      res.status(400).json({
        result: {
          SUCCESS: false,
          message: "빈 항목을 채워주세요."
        }
      });
    }
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

module.exports = ReviewComment;