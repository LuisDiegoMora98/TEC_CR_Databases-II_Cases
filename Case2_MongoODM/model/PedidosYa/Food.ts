import { model, Schema} from 'mongoose';
import { Restaurant } from "./Restaurant"

export interface IFood {
    title: String;
    thumbnailURL : String;
    restaurants: [typeof Restaurant]
}

const foodSchema = new Schema({
    title: String,
    thumbnailURL : String,
    restaurants: {
        type: [typeof Restaurant],
        default: []
    }
});

export const Food = model<IFood>('Food', foodSchema);