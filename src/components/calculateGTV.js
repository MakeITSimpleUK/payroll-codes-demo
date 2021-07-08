module.exports = async function (payrollData) {
  payrollData.outputs['Gross Timesheet Value'] = 200;
  return payrollData;
}