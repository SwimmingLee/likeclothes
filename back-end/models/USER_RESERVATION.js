/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER_RESERVATION', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    clothes_item_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'CLOTHES_ITEM',
        key: 'id'
      }
    },
    user_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'USER',
        key: 'email'
      }
    },
    duration: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '3'
    },
    reserved_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    returned: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'USER_RESERVATION'
  });
};
