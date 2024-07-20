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
app.use(body_parser_1.default.json());
// app.post('/create', createChargingPoint);
const charging = ChargingPoint_1.ChargingPoint.build({ id: (0, chargingController_1.generatedId)(), name: 'Testore', location: 'bureaux' });
charging.save();
app.listen(3001, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Serveur sur port 3001');
    try {
        yield database_1.default.authenticate();
        console.log("Connexion bdd réussie");
        yield database_1.default.sync();
        console.log("Bdd synchronisée");
    }
    catch (error) {
        console.error("Connexion échouée", error);
    }
}));
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
