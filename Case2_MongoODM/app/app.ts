import mongoose from 'mongoose';
import { exit } from 'process';
import { PedidosYaController } from "../logic/PedidosYaController";

function connectDB(){
    mongoose.connect("mongodb://localhost:27017/pedidosYa").then(()=>{
        console.log('Connected to mongodb');
    },error=>{
        console.log(error);
});
}

// CRUD Test using pedidosYaController
async function pedidosYaTest(){
    const pedidosYaTester = new PedidosYaController();

    //*****  Inserts  *****
    /*
    await pedidosYaTester.insertFoods();
    await pedidosYaTester.insertRestaurants();
    */

    //*****  Reads  *****
    /*
    const foodList = await pedidosYaTester.getAllFood();
    const screenData = await pedidosYaTester.getPedidosYaScreen();
    console.log("All Food registries here:");
    foodList.forEach(food => {
        console.log(food.toJSON());
    });
    console.log("Screen Data has:");
    console.log(screenData.foods.toLocaleString());
    console.log(screenData.restaurants.toLocaleString());
    console.log("Agreggation Average Query:");
    const avg = await pedidosYaTester.getRestaurantsAVG();
    avg.forEach(a => {
        console.log(a);
    })
    const where = await pedidosYaTester.getAsiaticFood();
    console.log(where.toLocaleString());
    */

    //*****  Updates  *****
    /*
    const newFood = await pedidosYaTester.updateFood();
    const newRestaurant = await pedidosYaTester.updateRestaurant();
    console.log("Updated Food\n" + newFood.acknowledged);
    console.log("Updated Restaurant\n" + newRestaurant.acknowledged);
    */

    //*****  Delete  *****
    /*
    await pedidosYaTester.wipeFood();
    await pedidosYaTester.wipeRestaurants();
    */
    exit();
}
// Main execution point here!

connectDB();
pedidosYaTest();
