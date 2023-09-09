const { Schema, model } = require('mongoose');
const educatorSchema = new Schema({
    ratedEducator: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }, 
    // do we need to make one field/property for each star or can it be left as rating?
    rating: [
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
            review: {
                type: String,
                required: 'You need to leave a rating!',
                minlength: 1,
                maxlength: 280,
                trim: true,
            },
        }
    ],
   
}
)
const Educator = model('Educator', educatorSchema);

module.exports = Educator;