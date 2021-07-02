module.exports = (sequelize, DataTypes) => {
    let alias = 'peliculas';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
    };
    let config = {
        tableName: 'Movies',
        timestamps: true,
        paranoid: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };
    let Movie = sequelize.define(alias,cols,config);
    return Movie;
};