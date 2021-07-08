module.exports = async function (payrollData) {
  payrollData.outputs['Employee Pension'] = 22;
  payrollData.outputs['Employer Pension'] = 11;

  return payrollData;
}