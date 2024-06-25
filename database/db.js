import mongoose from 'mongoose';
async function dbConnect(){
   return await mongoose.connect('mongodb://127.0.0.1/moviedb');
}
export default dbConnect;
