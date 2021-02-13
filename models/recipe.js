import mongoose from 'mongoose';
import mfs from 'mongoose-fuzzy-searching';

/* RecipeSchema will correspond to a collection in your MongoDB database. */
const RecipeSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Please specify the Recipe email.'],
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
  },
  email: {
    type: String,
    required: true,
  },
  steps: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'step',
    },
  ],
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ingredient',
    },
  ],
});

RecipeSchema.plugin(mfs, { fields: ['name'] });
export default mongoose.models.recipe || mongoose.model('recipe', RecipeSchema);
