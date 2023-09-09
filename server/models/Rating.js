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
  ratingAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  //   ratedEducator: {
  //     type: String,
  //     required: true,
  //     trim: true,
  // }, 
  // ratingStars: {
  //   type: Number,
  //   required: true,
  //   trim: true,
  // },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Rating = model('Rating', ratingSchema);

module.exports = Rating;
