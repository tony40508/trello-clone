import Sequelize from 'sequelize';

const sequelize = new Sequelize('trello_clone', 'trello_admin', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const db = {
  User: sequelize.import('./user'),
  Board: sequelize.import('./board'),
  Suggestion: sequelize.import('./suggestion')
};

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;
