"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const chargingController_1 = require("./controller/chargingController");
const database_1 = __importDefault(require("./database/database"));
// import { createChargingPoint } from './controller/chargingController';
const ChargingPoint_1 = require("./model/ChargingPoint");
const app = (0, express_1.default)();
// Middleware to parse JSON request bodies 
app.use(body_parser_1.default.json());
// Route to create a new charging point
// app.post('/create', createChargingPoint);
app.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        // Get name/location from the request body
        const name = req.body.name;
        const location = req.body.location;
        //Generate a random ID
        const id = (0, chargingController_1.generatedId)();
        // Create a new ChargingPoint 
        const charging = ChargingPoint_1.ChargingPoint.build({ id, name, location });
        yield charging.save();
        res.status(201).json(charging);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Create and save a sample charing point for testing 
const charging = ChargingPoint_1.ChargingPoint.build({ id: (0, chargingController_1.generatedId)(), name: 'Testoros', location: 'domicile' });
charging.save();
// Start the server and connect to the database
app.listen(3001, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Serveur sur port 3001');
    try {
        // Authenticate the databe connection 
        yield database_1.default.authenticate();
        console.log("Connexion bdd réussie");
        // Synchronize the models with the database
        yield database_1.default.sync();
        console.log("Bdd synchronisée");
    }
    catch (error) {
        console.error("Connexion échouée", error);
    }
}));
