const ExcelJS = require('exceljs');
const User = require('../models/user');
const Task = require('../models/task');

const exportToExcel = async (req, res) => {
  try {
    const users = await User.query();
    const tasks = await Task.query();

    const workbook = new ExcelJS.Workbook();

    // --- Users Sheet ---
    const userSheet = workbook.addWorksheet('Users');
    userSheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 25 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Mobile', key: 'mobile', width: 20 },
    ];
    users.forEach(user => {
      userSheet.addRow({
        id: user.id,
        name: user.name,
        email: user.email,
        mobile: user.mobile
      });
    });

    // --- Tasks Sheet ---
    const taskSheet = workbook.addWorksheet('Tasks');
    taskSheet.columns = [
      { header: 'Task ID', key: 'id', width: 10 },
      { header: 'Task Name', key: 'task_name', width: 30 },
      { header: 'Status', key: 'task_status', width: 15 },
      { header: 'User ID', key: 'user_id', width: 10 },
      { header: 'User Name', key: 'user_name', width: 25 },
      { header: 'User Email', key: 'user_email', width: 30 }
    ];

    tasks.forEach(task => {
      const user = users.find(u => u.id === task.user_id);

      taskSheet.addRow({
        id: task.id,
        task_name: task.task_name,
        task_status: task.task_status,
        user_id: task.user_id,
        user_name: user ? user.name : 'Unknown',
        user_email: user ? user.email : 'Unknown'
      });
    });

    // --- Send file ---
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=User_Tasks.xlsx');

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Excel export error:', error);
    res.status(500).send('Error generating Excel file');
  }
};

module.exports = {
  exportToExcel
};
