// models/school.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class School extends Model {
    static associate(models) {}
  }

  School.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'School',
    tableName: 'Schools', // <- MUST match migration
    timestamps: true // since createdAt/updatedAt are in migration
  });

  return School;
};
