const RequestedReview = require('../../database/models/RequestedReview');

const RequestReview = async (req, res, next) => {
  try {
    const {
      userName,
      repositoryName,
      branchName,
      snapshotUrl,
      excludedFilePath,
      mostlyUsedLanguage,
      repositoryDescription,
      additionalDescription
    } = req.body;

    if (repositoryName && branchName && snapshotUrl) {
      await RequestedReview.findOne({
        userName: userName,
        repositoryName: repositoryName
      }).then(post => {
        if (post) {
          res.status(412).json({
            result: {
              SUCCESS: false,
              message: '이미 업로드된 레파지토리입니다.'
            }
          });
        } else {
          const RequestedReviewData = {
            userName: userName,
            repositoryName: repositoryName,
            branchName: branchName,
            snapshotUrl: snapshotUrl,
            excludedFilePath: excludedFilePath,
            mostlyUsedLanguage: mostlyUsedLanguage,
            repositoryDescription: repositoryDescription,
            additionalDescription: additionalDescription
          };

          RequestedReview.create(RequestedReviewData);

          res.status(200).json({
            result: {
              SUCCESS: true,
              message: "성공적으로 작성되었습니다."
            },
            info: RequestedReviewData
          });
        }
      });
    } else {
      res.status(400).json({
        result: {
          SUCCESS: false,
          message: '필수 항목을 채워주세요.'
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

module.exports = RequestReview;