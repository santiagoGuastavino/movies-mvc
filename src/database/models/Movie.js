module.exports = (sequelize, DataTypes) => {
    let alias = 'movies';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        },
        title: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        releaseDate: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'release_date'
        },
        length: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        }
    };
    let config = {
        tableName: 'movies',
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