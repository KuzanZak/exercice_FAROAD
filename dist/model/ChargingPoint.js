"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargingPoint = void 0;
const sequelize_1 = require("sequelize");
class ChargingPoint extends sequelize_1.Model {
}
exports.ChargingPoint = ChargingPoint;
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
    sequelize,
    tableName: 'pointDeCharge',
});
