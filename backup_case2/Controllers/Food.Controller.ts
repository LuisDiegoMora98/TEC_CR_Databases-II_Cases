import Food,{ IFood } from '../Models/Foods.model';

async function createFood({ title, thumbnailURL, restaurants}): Promise<IFood> {
  try {
    const data = await Food.create({ title, thumbnailURL, restaurants });
    return data;
  } catch (error) {
    throw error;
  }
}

async function getFoods(){

}

export default { createFood, getFoods };