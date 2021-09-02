import { model, Schema} from 'mongoose';

export interface IRestaurant {
    title: String;
    thumbnailURL : String;
    menu: [{ name: String, description: String, price : Number }]
}

const restaurantSchema = new Schema({
    title: String,
    thumbnailURL : String,
    menu : {
        type : [{ name: String, description: String, price : Number }],
        default : []
    }
});

export const Restaurant = model<IRestaurant>('Restaurant', restaurantSchema);