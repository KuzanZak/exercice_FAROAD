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
const database_1 = __importDefault(require("./database/database"));
const chargingController_1 = require("./controller/chargingController");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.post('/chargingPoint/create', chargingController_1.createChargingPoint);
app.listen(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Serveur sur port ${port}');
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
