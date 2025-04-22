import { DataTypes } from 'sequelize';
import { sequelize } from '../shared/db/sequelize';
import { User } from './User';

export const Reweiw = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  value: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  
}, {
  tableName: 'rewiews',
  timestamps: false,
});

// Связь: один пользователь может иметь много отзывов
User.hasMany(Reweiw, { foreignKey: 'user_id' });
Reweiw.belongsTo(User, { foreignKey: 'user_id' });
