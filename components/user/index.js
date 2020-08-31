'use strict'
const Sequelize = require('sequelize');
require('dotenv').config()

console.log(process.env.DATABASE)

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD, {
        host: '127.0.0.1',
        dialect: 'postgres',
    },
);

const models = {
    User: sequelize.import('./user'),
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

module.exports = models;