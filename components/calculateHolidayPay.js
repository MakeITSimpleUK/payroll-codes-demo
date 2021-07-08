module.exports = async function (payrollData) {
  payrollData.outputs['Holiday Pay'] = 20;
  return payrollData;
}