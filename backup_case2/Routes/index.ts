import {NextFunction, Request, Response} from 'express';
import {ReasonPhrases, StatusCodes} from 'http-status-codes';
import { RoutesInput } from '../Types/types';
import getFoods from '../Controllers/Food.Controller';
import createFood from '../Controllers/Food.Controller';
import getRestaurants from '../Controllers/Restaurant.Controller';
import { IFood } from '../Models/Foods.model';

export default ({ app } : RoutesInput) => {

    app.get('/api/getRestaurantService', async (req:Request,res : Response ) => {
        const foodList = await getFoods();
        const restaurantList = await getRestaurants();
        return res.status(StatusCodes.OK).json({ food: foodList, 
                                                 restaurant: restaurantList});
        })

    app.post('/api/food',async (req: { body: { title: any; thumbnailURL: any; restaurants: any; }; },
                              res: { send: (arg0: { food: IFood; }) => any; }) => {
        const food = await createFood({
            title: req.body.title,
            thumbnailURL: req.body.thumbnailURL,
            restaurants: req.body.restaurants
    });
        food.save();
    return res.send({ food });
    })
}