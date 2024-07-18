import {Model, DataTypes, Optional} from 'sequelize';
import sequelize from '../database/database'; 

type ChargingPointAttributes = {
    id:string;
    name:string;
    location: 'bureaux' | 'domicile';
}

type ChargingPointCreationAttributes = Optional<ChargingPointAttributes, 'id'>

class ChargingPoint extends Model<ChargingPointAttributes, ChargingPointCreationAttributes>{
    declare id:string;
    declare name:string; 
    declare location: 'bureaux' | 'domicile';
}

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
