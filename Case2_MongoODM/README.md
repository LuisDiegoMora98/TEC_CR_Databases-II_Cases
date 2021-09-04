## For evaluation purposes, check "binnacleMongo.txt" for database commands and Schemas under "model/PedidosYa" and "model/Newt"
---
In this case, we got 4 applications as example and we had to choose 2, then create a database for each application where we can have the required collections to show the content in the examples [Info_here](https://docs.google.com/document/d/1ZmlyL_rWlJnnAshhJODWeffK4sP7Jo9w6vRx5ScWwf0/edit?usp=sharing)

Everything is developed in Typescript using [Moongose_ODM](https://mongoosejs.com/) and here we have the steps to create it in case of other use cases or evaluation purposes. 

## Installation:

    1- Install Mongo

    2- Instal NodeJS npm

    3- Install mongoose, typescript and ts-node

## Usage:

1- In Mongo Shell, insert 3 registries in each database. Commands are the following:
    
    For pedidosYaDB:
        db.foods.save({"title": "Comida Asiatica","thumbnailURL": "URL","restaurants": [{"title": "Kimchis CR","thumbnailURL": "URL","menu": [{"name": "Pollo Bap Dulce / Ajo","description": "Rico Pollo Bap","price": 5800},{"name": "Kimbap","descrition": "Rico Kimbap de atun","price": 5800},{"name": "Bulgogi","description": "Rico Bulgogi","price": 6350}]},{"title": "Fritos","thumbnailURL" : "URL","menu": [{"name": "Jaetuk bokkum","description": "Rico Jaetuk","price": 5000},{"name": "Kimchi Chigae","description": "Rica sopa Kimchi","price": 6000},{"name": "Samkyeobsal","description": "Maravillosa BBQ coreana","price": 6000}]}]})
        db.foods.save({"title": "Comida Tica","thumbnailURL": "URL","restaurants" : [{"title": "Puertas del Sol","thumbnailURL": "URL","menu" : [{"name": "Casado","description": "Rico casado tico","price": 3500},{"name": "Sushi","description": "Rico sushi tico","price": 6500},{"name": "Bulgogi","description": "Rico Bulgogi","price": 8000}]}]})
        db.foods.save({"title": "Comida Coreana","thumbnailURL": "URL","restaurants" : [{"title": "Kimchis CR","thumbnailURL": "URL","menu" : [{"name": "Pollo Bap Dulce / Ajo","description": "Rico Pollo Bap","price": 5800},{"name": "Kimbap","description": "Rico kimbap de atun","price": 5800},{"name": "Bulgogi","description": "Rico Bulgogi","price": 6350}]}]})
        db.restaurants.save({"title": "Puertas del Sol","thumbnailURL": "URL","menu" : [{"name": "Casado","description": "Rico casado tico","price": 3500},{"name": "Sushi","description": "Rico sushi tico","price": 6500},{"name": "Bulgogi","description": "Rico Bulgogi","price": 8000}]})
        db.restaurants.save({"title": "Kimchis CR","thumbnailURL": "URL","menu" : [{"name": "Pollo Bap Dulce / Ajo","description": "Rico Pollo Bap","price": 5800},{"name": "Kimbap","description": "Rico kimbap de atun","price": 5800},{"name": "Bulgogi","description": "Rico Bulgogi","price": 6350}]})
        db.restaurants.save({"title": "Fritos","thumbnailURL": "URL","menu" : [{"name": "Jaetuk bokkum","description": "Rico Jaetuk","price": 5000},{"name": "Kimchi Chigae","description": "Rica sopa Kimchi","price": 6000},{"name": "Samkyeobsal","description": "Maravillosa BBQ coreana","price": 6000}]})

---
    For NewtDB:
        db.users.save("username": "ablanco", "wallet": 230, [{ {("licensePlate": "17","yearOfAcquisition": "2016","levelOfBattery": 100,"available": "False","pricePerMinute": 1.20,"description": "Red and cute","location": "Plaza la Soledad"), startingPoint : "Las Ruinas", arrivalPoint : String, timeInMinutes: 19, cost: 20 }])
        db.users.save("username": "ludiaz", "wallet": 475, [{ {("licensePlate": "23","yearOfAcquisition": "2020","levelOfBattery": 97,"available": "False","pricePerMinute": 1.70,"description": "Blue and able for kids","location": "Plaza la Soledad"), startingPoint : "TEC", arrivalPoint : "Caballo Blanco", timeInMinutes: 54, cost: 130 }])
        db.users.save("username": "josVal", "wallet": 0, [])


4- Create 3 queries as following:

    a) Find All elements:
        For pedidosYaDB:
            db.foods.find().pretty(); 

        For NewtDB:
            db.users.find().pretty(); 
___
    b) "WHERE" with ranges:
        For pedidosYaDB:
            db.foods.find({title:"Comida Asiatica"}).pretty();

        For NewtDB:
            db.users.find({username:"ludiaz"}).pretty()
___
    c) An aggregarated function (avg, min, max):
        For pedidosYaDB:
            db.restaurants.aggregate([{$match: {title: "Kimchis CR" }},{$set : { avgPrice : { $avg : ["$menu.price"] } } }])
