"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargingPoint = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
// Define the ChargingPoint model extending Sequelize's Model class
class ChargingPoint extends sequelize_1.Model {
}
exports.ChargingPoint = ChargingPoint;
// Initialize the ChargingPoint model with its attributes and configuration 
ChargingPoint.init({
    id: {
        type: sequelize_1.DataTypes.STRING(5),
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    location: {
        type: sequelize_1.DataTypes.ENUM('bureaux', 'domicile'),
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    tableName: 'pointDeCharge',
});
