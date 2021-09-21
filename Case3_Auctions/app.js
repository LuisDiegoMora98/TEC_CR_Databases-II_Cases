import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// DB Connection
const mongoose = require('mongoose');

// Cloud Connection
const uri = 'mongodb+srv://test:test@cluster0.sb3dx.mongodb.net/Case3';

const options = {
  useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true
}
mongoose.connect(uri, options).then(
  () => { console.log('Connected to mongoDB'); },
  err => { err }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Case 3 API Backend Server running on port 3000');
});
app.use('/api', require('./routes/personRoutes'));
app.use('/api', require('./routes/articleRoutes'));
app.set('Port', process.env.PORT || 3000);
app.listen(app.get('Port'), () => {
  console.log('Example app listening on port: '+ app.get('Port'));
});
//Run it with "npm run devbabel"