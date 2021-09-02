import mongoose, { Schema,Document } from 'mongoose';

 export interface IRestaurant extends Document {
     title : String;
     thumbnailURL : String;
     menu : String[];
 }

 const RestaurantSchema : Schema = new Schema({
    title : {
         type : String,
         required : true,
         unique : true
     },
     thumbnailURL : {
         type : String,
         required : true
     }
 });

 export default mongoose.model<IRestaurant>('Restaurant', RestaurantSchema);