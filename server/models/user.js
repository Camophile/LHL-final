import bookshelf from '../bookshelf';
import Package from './Package'

export default bookshelf.Model.extend({
  tableName: 'users',
  packages() {
    return this.hasMany(Package, 'users_id');
  }
});
