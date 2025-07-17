import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes'

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;


app.use(express.json());
app.use('/users',userRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDb');
    app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))
  })
  .catch(err => {
    console.error('MongoDb Connection error:',err);
  });