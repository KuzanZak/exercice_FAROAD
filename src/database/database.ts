import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('faroad', 'root', 'root',{
    host:'localhost',
    dialect:'postgres', 
})

export default sequelize; 