import express, {Request, Response} from 'express'; 
import { ChargingPoint } from '../model/ChargingPoint';

export const generatedId = (): string => {
    const chars = 'ABCDEFGHIJKLMPQRSTUVXYZ123456789';
    let result = '';
    for (let i = 0; i < 5; i++){
        result += chars.charAt(Math.floor(Math.random()* chars.length));
    }
    return result; 
}

export const createChargingPoint = async (req: Request, res:Response) => {
    try {
        const {name, location} = req.body; 
        const id = generatedId();

        const charging = ChargingPoint.create({id, name, location});
        res.status(201).json(charging);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
}