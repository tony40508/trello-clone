export default (sequelize, DataTypes) => {
  const FbAuth = sequelize.define('fb_auth', {
    fbId: DataTypes.STRING,
    displayName: DataTypes.STRING
  });

  FbAuth.associate = models => {
    FbAuth.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return FbAuth;
};
