import {Model, DataTypes, Optional} from 'sequelize';
import sequelize from '../database/database'; 

// Defie attributes for the ChargingPoint model
type ChargingPointAttributes = {
    id:string;
    name:string;
    location: 'bureaux' | 'domicile';
}

// Define creation attributes, making 'id' optional for creation 
type ChargingPointCreationAttributes = Optional<ChargingPointAttributes, 'id'>

// Define the ChargingPoint model extending Sequelize's Model class
class ChargingPoint extends Model<ChargingPointAttributes, ChargingPointCreationAttributes>{
    declare id:string;
    declare name:string; 
    declare location: 'bureaux' | 'domicile';
}

// Initialize the ChargingPoint model with its attributes and configuration 
ChargingPoint.init({
    id: {
        type: DataTypes.STRING(5),
        primaryKey: true, 
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(25),
        allowNull:false,
    },
    location: {
        type: DataTypes.ENUM('bureaux', 'domicile'),
        allowNull: false,
    },
}, {
    sequelize, 
    tableName: 'pointDeCharge',
});

export {ChargingPoint}; 
