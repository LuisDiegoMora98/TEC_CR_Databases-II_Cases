import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  year: Number,
  name: String,
  description: String,
  photoURL: String,
  initialPrice: Number,
  maxPrice: Number,
  initialDate: {type: Date, default: Date.now},
  finalDate: {type: Date, default: Date.now},
  owner : {name: String, email: String},
  active: {type: Boolean, default: true}
});

// Convert into a model
const Article = mongoose.model('Article', articleSchema);

export default Article;