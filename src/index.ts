import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import { generatedId } from './controller/chargingController';
import sequelize from './database/database'; 
// import { createChargingPoint } from './controller/chargingController';
import { ChargingPoint } from './model/ChargingPoint';

const app = express();

app.use(bodyParser.json()); 

// app.post('/create', createChargingPoint);
// Insertion en dure fonction, plus qu'à gérer la requête pour l'insertion de données afin de finir
const charging = ChargingPoint.build({id:generatedId(), name: 'Testore', location: 'bureaux' });
charging.save();

app.listen(3001, async() => {
    console.log('Serveur sur port 3001');
    try {
        await sequelize.authenticate();
        console.log("Connexion bdd réussie");
        await sequelize.sync();
        console.log("Bdd synchronisée");
    } catch (error){
        console.error("Connexion échouée", error);
    }
})

app.use((req, res, next) => {
    console.log(`Requête reçue : ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/test', (req, res) => {
    console.log('Route /test appelée');
    res.send('Test route working');
});

