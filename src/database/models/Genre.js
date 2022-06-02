module.exports = (sequelize, DataTypes) => {
  const alias = 'Genre'
  const cols = {
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
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ranking: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }
  const config = {
    tablename: 'genres',
    timestamps: true,
    paranoid: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8mb4_unicode:ci'
    }
  }
  const Genre = sequelize.define(
    alias,
    cols,
    config
  )
  Genre.associate = (model) => {
    // each genre has many movies
    Genre.hasMany(model.Movie, {
      as: 'movies',
      foreignKey: 'genre_id'
    })
  }
  return Genre
}
