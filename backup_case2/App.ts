import express,{ Application,Request,Response, NextFunction } from 'express';

import bodyParser from 'body-parser';
import Routes from './Routes';
import connect from './MongoConnector';

const app : Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',(req:Request,res : Response ) => {

    res.send('TS App is Running')
})

const PORT = 4000;

connect();
Routes({ app })

app.listen(PORT,() => {
    console.log(`server is running on PORT ${PORT}`)
})