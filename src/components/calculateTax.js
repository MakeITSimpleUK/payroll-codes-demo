module.exports = async function (payrollData) {
  payrollData.outputs['Tax'] = 10;
  return payrollData;
}