"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("favourites", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      imdbId: {
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      year: {
        type: DataTypes.INTEGER
      },
      poster: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("favourites").done(done);
  }
};