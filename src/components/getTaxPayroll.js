module.exports = async function (payrollData) {
  payrollData.inputs.payroll = {
    'Pay Frequency': 'Weekly'
  };

  return payrollData;
}