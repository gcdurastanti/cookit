import mongoose from 'mongoose';

/* StepSchema will correspond to a collection in your MongoDB database. */
const StepSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please specify the Step email.'],
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
  },
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ingredient',
    },
  ],
});

export default mongoose.models.step || mongoose.model('step', StepSchema);
