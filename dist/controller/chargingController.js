"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatedId = void 0;
// Function to generate a random ID of 5 characters 
const generatedId = () => {
    const chars = 'ABCDEFGHIJKLMPQRSTUVXYZ123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};
exports.generatedId = generatedId;
// Controller to create e new charging point 
// export const createChargingPoint = async (req: Request, res:Response) => {
//     try {
//         // Get name/location from the request body
//         const name = req.body.name; 
//         const location = req.body.location; 
//         //Generate a random ID
//         const id = generatedId();
//         // Create a new ChargingPoint 
//         const charging = ChargingPoint.build({id, name, location});
//         await charging.save();
//         res.status(201).json(charging);
//     } catch (error) {
//         res.status(500).json({error: 'Internal Server Error'})
//     }
// }
