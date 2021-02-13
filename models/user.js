import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Please provide a unique id for this User.'],
    unique: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Please specify the User email.'],
    unique: true,
  },
  hash: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'recipe',
    },
  ],
});

export default mongoose.models.user || mongoose.model('user', UserSchema);
