import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('faroad', 'root', 'root',{
    host:'localhost',
    dialect:'postgres', 
    port: 3000,
})

export default sequelize; 