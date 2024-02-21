const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  fname: String,
  lname:String,
  age: Number,
  employeeID: String,
  email:String,
  heartbeat: Number,
  phoneNumber: String,
  address: String,
  bloodOxygenLevel: Number,
  note:String,
  dateOfjoining:Date
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
