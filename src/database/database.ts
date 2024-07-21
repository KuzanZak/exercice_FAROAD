import {Sequelize} from 'sequelize';

// Initialize a new Sequelize instance to connect to the 'faroad' database
const sequelize = new Sequelize('faroad', 'postgres', 'root',{
    host:'localhost',
    dialect:'postgres', 
    port: 3000,
})

export default sequelize; 