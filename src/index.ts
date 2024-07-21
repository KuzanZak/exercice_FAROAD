import express , {Request, Response} from 'express';
import bodyParser from 'body-parser';
import { generatedId } from './controller/chargingController';
import sequelize from './database/database'; 
// import { createChargingPoint } from './controller/chargingController';
import { ChargingPoint } from './model/ChargingPoint';

const app = express();

// Middleware to parse JSON request bodies 
app.use(bodyParser.json()); 

// Route to create a new charging point
// app.post('/create', createChargingPoint);
app.post('/create', async (req: Request, res:Response) => {
    console.log(req.body);
    try {
        // Get name/location from the request body
        const name = req.body.name; 
        const location = req.body.location; 

        //Generate a random ID
        const id = generatedId();

        // Create a new ChargingPoint 
        const charging = ChargingPoint.build({id, name, location});
        await charging.save();
        res.status(201).json(charging);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
}, )

// Create and save a sample charing point for testing 
const charging = ChargingPoint.build({id:generatedId(), name: 'Testoros', location: 'domicile' });
charging.save();

// Start the server and connect to the database
app.listen(3001, async() => {
    console.log('Serveur sur port 3001');
    try {
        // Authenticate the databe connection 
        await sequelize.authenticate();
        console.log("Connexion bdd réussie");

        // Synchronize the models with the database
        await sequelize.sync();
        console.log("Bdd synchronisée");
    } catch (error){
        console.error("Connexion échouée", error);
    }
})


