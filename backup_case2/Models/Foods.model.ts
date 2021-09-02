import mongoose, { Schema,Document } from 'mongoose';
import RestaurantsModel from './Restaurants.model';

 export interface IFood extends Document {
     title : String;
     thumbnailURL : String;
     restaurants : typeof RestaurantsModel[];
 }

 const FoodSchema : Schema = new Schema({
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

 export default mongoose.model<IFood>('Food',FoodSchema);