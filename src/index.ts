import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import { generatedId } from './controller/chargingController';
import sequelize from './database/database'; 
import { createChargingPoint } from './controller/chargingController';

const app = express();

app.use(bodyParser.json()); 

app.post('/chargingPoint/create', createChargingPoint);

app.listen(async() => {
    console.log('Serveur sur port ${port}');
    try {
        await sequelize.authenticate();
        console.log("Connexion bdd réussie");
        await sequelize.sync();
        console.log("Bdd synchronisée");
    } catch (error){
        console.error("Connexion échouée", error);
    }
})
