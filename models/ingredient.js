import mongoose from 'mongoose';

/* IngredientSchema will correspond to a collection in your MongoDB database. */
const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please specify the Ingredient name.'],
    unique: true,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

export default mongoose.models.ingredient ||
  mongoose.model('ingredient', IngredientSchema);
