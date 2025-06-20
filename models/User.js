import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  favorites: {
    type: [String], // Array of cocktail IDs
    default: []
  }
});

const User = mongoose.model('User', userSchema);
export default User;
