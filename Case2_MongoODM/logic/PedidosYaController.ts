import { Food } from "../model/PedidosYa/Food";
import { Restaurant } from "../model/PedidosYa/Restaurant";

export class PedidosYaController {

    //Read documents methods:
    async getAllFood(){
        const allFoods = await Food.find();
        return allFoods;
    }

    async getAllRestaurants(){
        const allRestaurants = await Restaurant.find();
        return allRestaurants;
    }

    async getPedidosYaScreen(){
        const allFoods = await Food.find();
        const allRestaurants = await Restaurant.find();
        const screenData = { foods: allFoods, restaurants: allRestaurants };
        return screenData;
    }

    //Where query
    async getAsiaticFood(){
        const asiaticFood = Food.find({title: "Comida Asiatica"});
        return asiaticFood;
    }

    //AVG aggregate query
    async getRestaurantsAVG(){
        const restaurantAverage = Restaurant.aggregate([
            { $match: { title: "Kimchis CR" }},
            { $set : { avgPrice : { $avg : ["$menu.price"] } } }
        ]);
        return restaurantAverage;
    }

    //Insert documents methods:
    async insertFoods(){
        const foodList = 
        [ new Food({
            title: "Comida Asiatica",
            thumbnailURL: "URL",
            restaurants : [
                new Restaurant({
                    title: "Kimchis CR",
                    thumbnailURL: "URL",
                    menu : [
                        {
                            name: "Pollo Bap Dulce / Ajo",
                            description: "Rico Pollo Bap",
                            price: 5800
                        },
                        {
                            name: "Kimbap",
                            description: "Rico kimbap de atun",
                            price: 5800
                        },
                        {
                            name: "Bulgogi",
                            description: "Rico Bulgogi",
                            price: 6350
                        }
                    ]
                }),
                new Restaurant({
                    title: "Fritos",
                    thumbnailURL: "URL",
                    menu : [
                        {
                            name: "Jaetuk bokkum",
                            description: "Rico Jaetuk",
                            price: 5000
                        },
                        {
                            name: "Kimchi Chigae",
                            description: "Rica sopa Kimchi",
                            price: 6000
                        },
                        {
                            name: "Samkyeobsal",
                            description: "Maravillosa BBQ coreana",
                            price: 6000
                        }
                    ]
                })
            ]
        }),
        new Food({
            title: "Comida Tica",
            thumbnailURL: "URL",
            restaurants : [
                new Restaurant({
                    title: "Puertas del Sol",
                    thumbnailURL: "URL",
                    menu : [
                        {
                            name: "Casado",
                            description: "Rico casado tico",
                            price: 3500
                        },
                        {
                            name: "Sushi",
                            description: "Rico sushi tico",
                            price: 6500
                        },
                        {
                            name: "Bulgogi",
                            description: "Rico Bulgogi",
                            price: 8000
                        }
                    ]
                })
            ]
        }),
        new Food({
            title: "Comida Coreana",
            thumbnailURL: "URL",
            restaurants : [
                new Restaurant({
                    title: "Kimchis CR",
                    thumbnailURL: "URL",
                    menu : [
                        {
                            name: "Pollo Bap Dulce / Ajo",
                            description: "Rico Pollo Bap",
                            price: 5800
                        },
                        {
                            name: "Kimbap",
                            description: "Rico kimbap de atun",
                            price: 5800
                        },
                        {
                            name: "Bulgogi",
                            description: "Rico Bulgogi",
                            price: 6350
                        }
                    ]
                })
            ]
        })
        ];
        foodList.forEach(food => {
            food.save();
        })
    }

    async insertRestaurants(){
        const restaurantsList = 
        [new Restaurant({
            title: "Puertas del Sol",
            thumbnailURL: "URL",
            menu : [
                {
                    name: "Casado",
                    description: "Rico casado tico",
                    price: 3500
                },
                {
                    name: "Sushi",
                    description: "Rico sushi tico",
                    price: 6500
                },
                {
                    name: "Bulgogi",
                    description: "Rico Bulgogi",
                    price: 8000
                }
            ]
        }) ,
        new Restaurant({
            title: "Kimchis CR",
            thumbnailURL: "URL",
            menu : [
                {
                    name: "Pollo Bap Dulce / Ajo",
                    description: "Rico Pollo Bap",
                    price: 5800
                },
                {
                    name: "Kimbap",
                    description: "Rico kimbap de atun",
                    price: 5800
                },
                {
                    name: "Bulgogi",
                    description: "Rico Bulgogi",
                    price: 6350
                }
            ]
        }),
        new Restaurant({
            title: "Fritos",
            thumbnailURL: "URL",
            menu : [
                {
                    name: "Jaetuk bokkum",
                    description: "Rico Jaetuk",
                    price: 5000
                },
                {
                    name: "Kimchi Chigae",
                    description: "Rica sopa Kimchi",
                    price: 6000
                },
                {
                    name: "Samkyeobsal",
                    description: "Maravillosa BBQ coreana",
                    price: 6000
                }
            ]
        })];
        restaurantsList.forEach(restaurant => {
            restaurant.save();
        });
    }

    //Update documents methods:
    async updateFood(){
        const food = await Food.updateOne({title: "Comida Asiatica"}, { $set: { thumbnailURL: 'foo URL' } })
        return food;        //Here the updated document
    }

    async updateRestaurant(){
        const restaurant = await Restaurant.updateOne({title: "Puertas del Sol"}, { $set: { thumbnailURL: 'foo URL' } })
        return restaurant;        //Here the updated document
    }

    //Delete documents methods:
    async wipeFood(){
        await Food.deleteMany({});
        console.log("Food wiped");
    }

    async wipeRestaurants(){
        await Restaurant.deleteMany({});
        console.log("Restaurants wiped");
    }

}