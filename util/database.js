const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Aldershko' ,
{
    dialect:'mysql', 
    host:'localhost'
})

module.exports = sequelize