import mongoose from 'mongoose';
import Person from './person';
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  year: {type: Date, default: Date.now},
  name: {type: String, required: [true, 'Required Name']},
  description: String,
  photoURL: String,
  initialPrice: Number,
  bidder: {type: {person: {name: String, email: String}, ammountOffered: Number}},
  finalDate: {type: Date, default: Date.now},
  owner : {name: String, email: String},
  active: {type: Boolean, default: true}
});

// Convert into a model
const Article = mongoose.model('Article', articleSchema);

export default Article;