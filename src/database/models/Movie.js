module.exports = (sequelize, DataTypes) => {
  const alias = 'Movie'
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
    title: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    rating: {
      type: DataTypes.DECIMAL(3, 1).UNSIGNED,
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
    },
    genreId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'genre_id'
    }
  }
  const config = {
    tableName: 'movies',
    timestamps: true,
    paranoid: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8mb4_unicode:ci'
    }
  }
  const Movie = sequelize.define(
    alias,
    cols,
    config
  )
  Movie.associate = (model) => {
    // each movie has one genre
    Movie.belongsTo(model.Genre, {
      as: 'genre',
      foreignKey: 'genre_id'
    })
    // each movie has many actors
    // and each actor has acted in many movies
    Movie.belongsToMany(model.Actor, {
      as: 'actors',
      through: 'actor_movie',
      foreignKey: 'movie_id',
      otherKey: 'actor_id',
      timestamps: false
    })
  }
  return Movie
}
