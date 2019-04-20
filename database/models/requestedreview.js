const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestedReviewSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  repositoryName: {
    type: String,
    required: true
  },
  branchName: {
    type: String,
    required: true
  },
  snapshotUrl: {
    type: String,
    required: true
  },
  excludedFilePath: {
    type: [String],
    required: false,
    default: []
  },
  mostlyUsedLanguage: {
    type: String,
    required: false,
    default: null
  },
  repositoryDescription: {
    type: String,
    required: false,
    default: null
  },
  additionalDescription: {
    type: String,
    required: false,
    default: null
  },
  reviews: {
    type: [ReviewCommentSchema],
    required: false,
    default: []
  }
});

const ReviewCommentSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  lineNumber: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = ('RequestedReview', RequestedReviewSchema);