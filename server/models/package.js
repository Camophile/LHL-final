import bookshelf from '../bookshelf';
import Shelter from './Shelter';
import User from './User';

const Package = bookshelf.Model.extend({
  tableName: 'package',
  shelter: function() {
    return this.belongsTo(Shelter, 'shelter_id');
  },
  user() {
    return this.belongsTo(User, 'users_id');
  }
});

export default Package;

export function insertPackages(data) {
  return Package.forge({
    shelter_id: data.shelter,
    users_id: data.user,
  }, { hasTimestamps: true }).save()
}

export function deliveryValidate(data) {
  return Package.query({
    where: { id: 2 }
    }).save(
    { delivered_at: new Date().toISOString() },
    { method: 'update' }
  );
}

// Package.fetchAll().then(packages => {
//   console.log("User", packages.at(0).related('user'));
// })