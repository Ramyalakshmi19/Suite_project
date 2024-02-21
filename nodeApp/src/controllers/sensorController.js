const { Employee } = require('../models/employeeModel');

const sensorController = {
  storeSensorData: async (req, res) => {
    try {
      const { bloodOxygenLevel, heartbeat } = req.body.sensorData;

      // Admin-provided parameters
      const {
        name,
        age,
        employeeID,
        phoneNumber,
        address,
      } = req.body.adminData;

      // Create a new Employee document
      const employee = new Employee({
        name,
        age,
        employeeID,
        heartbeat,
        phoneNumber,
        address,
        bloodOxygenLevel,
      });

      // Save the employee document to MongoDB
      await employee.save();

      console.log('Employee data stored in MongoDB:', employee);
      res.sendStatus(200);
    } catch (error) {
      console.error('Error storing employee data in MongoDB:', error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = sensorController;
