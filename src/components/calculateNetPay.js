module.exports = async function (payrollData) {
  payrollData.outputs['Net Pay'] = 100;
  return payrollData;
}