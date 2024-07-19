import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('faroad', 'postgres', 'root',{
    host:'localhost',
    dialect:'postgres', 
    port: 3001,
})

export default sequelize; 