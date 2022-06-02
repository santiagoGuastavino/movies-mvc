module.exports = (sequelize, DataTypes) => {
  const alias = 'Actor'
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
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'last_name'
    },
    rating: {
      type: DataTypes.DECIMAL(3, 1).UNSIGNED
    }
  }
  const config = {
    tablename: 'actors',
    timestamps: true,
    paranoid: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8mb4_unicode:ci'
    }
  }
  const Actor = sequelize.define(
    alias,
    cols,
    config
  )
  Actor.associate = (model) => {
    // each actor has acted in many movies
    // and each movie has many actors
    Actor.belongsToMany(model.Movie, {
      as: 'movies',
      through: 'actor_movie',
      foreignKey: 'actor_id',
      otherKey: 'movie_id',
      timestamps: false
    })
  }
  return Actor
}
