import Restaurants,{ IRestaurant } from '../Models/Restaurants.model';

interface ICreateRestaurant {
    title: IRestaurant['title'];
    thumbnailURL: IRestaurant['thumbnailURL'];
    menu: IRestaurant['menu'];
}

async function CreateRestaurant({
    title,
    thumbnailURL,
    menu
  }: ICreateRestaurant): Promise<IRestaurant> {
    return Restaurants.create({
        title,
        thumbnailURL,
        menu
    })
      .then((data: IRestaurant) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
  
  export default { CreateRestaurant };