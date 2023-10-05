import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
  },
  image: {
    type: String,
  },
});

//Checks to see if user is already in models db//
const User = models.User || model('User', UserSchema);

export default User;
