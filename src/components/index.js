const payrollData = require('../models/PayrollData');

module.exports = async function runPayroll() {

  const payrollStages = [
    require('./getTaxPayroll'),
    require('./getCandidateInfo'),
    require('./getTimesheets'),

    require('./calculateGTV'),
    require('./calculateHolidayPay'),
    require('./calculatePension'),
    require('./calculateTax'),

    require('./calculateNetPay')
  ];


  const finalResults = await payrollStages.reduce(async (prev, current) => current(await prev), payrollData);

  return finalResults;

}