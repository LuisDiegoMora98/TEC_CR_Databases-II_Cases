import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const personSchema = new Schema({

  name: {type: String, required: [true, 'Required Name']},
  email: String
});

// Convert into a model
const Person = mongoose.model('Person', personSchema);

export default Person;