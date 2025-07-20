const { Model } = require('objection');

class Task extends Model {
  static get tableName() {
    return 'tasks';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'task_name', 'task_status'],
      properties: {
        id: { type: 'integer' },
        user_id: { type: 'integer' },
        task_name: { type: 'string' },
        task_status: { type: 'string', enum: ['Pending', 'Done'] }
      }
    };
  }
}

module.exports = Task;
