import Sequelize from 'sequelize';

const Op = Sequelize.Op;
const sequelize = new Sequelize('trello_clone', 'trello_admin', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: Op // use Sequelize.Op
});

const db = {
  User: sequelize.import('./user'),
  Board: sequelize.import('./board'),
  Suggestion: sequelize.import('./suggestion'),
  FbAuth: sequelize.import('./FbAuth'),
  LocalAuth: sequelize.import('./localAuth'),
  Vote: sequelize.import('./vote')
};

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;
