import mongoose from 'mongoose'

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  id: {
    /* The id of this User */

    type: String,
    required: [true, 'Please provide a unique id for this User.'],
    unique: true
  },
  created_at: {
    /* The date of creation for this User */

    type: Date,
    required: true
  },
  email: {
    /* The species of your User */

    type: String,
    required: [true, 'Please specify the User email.'],
  },
  hash: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
