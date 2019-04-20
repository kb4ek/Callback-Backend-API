const RequestedReview = require('../../../database/models/RequestedReview');

const indexPage = async (req, res) => {
  try {
    await RequestedReview.find({}, function (err, allPost) {
      if (!allPost) {
        res.status(200).json({
          result: {
            SUCCESS: true,
            message: "작성된 글이 없습니다."
          },
          allPost
        });
      } else if (allPost) {
        res.status(200).json({
          result: {
            SUCCESS: true,
          },
          allPost
        })
      } else {
        res.status(500).json({
          result: {
            SUCCESS: true,
            message: "알 수 없는 오류"
          }
        })
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      result: {
        SUCCESS: false,
        message: "server error"
      }
    })
  }
}

module.exports = indexPage;