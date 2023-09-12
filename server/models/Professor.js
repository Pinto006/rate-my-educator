const { Schema, model } = require('mongoose');

const professorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }, 
    thumbsUp: [
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
    thumbsDown: [
        {

        }
    ]
   
}

)

