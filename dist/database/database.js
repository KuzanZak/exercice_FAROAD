"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Initialize a new Sequelize instance to connect to the 'faroad' database
const sequelize = new sequelize_1.Sequelize('faroad', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    port: 3000,
});
exports.default = sequelize;
