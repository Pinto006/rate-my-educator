const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ratingSchema = new Schema({
  ratingText: {
    type: String,
    required: 'You need to leave a rating!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  // ratingAuthor: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  professorId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Professor',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     commentAuthor: {
  //       type: String,
  //       required: true,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

const Rating = model('Rating', ratingSchema);

module.exports = Rating;
