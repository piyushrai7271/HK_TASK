const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email', 'mobile'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string' },
        mobile: { type: 'string' }
      }
    };
  }
}

module.exports = User;
