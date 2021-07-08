module.exports = async function (payrollData) {
  payrollData.inputs.candidate = {
    'Pension Applicable': 'No',
    'Service Used': 'Umberlla',
    'Holiday Pay Rule': 'Rolled up on total pay',
    'Apprenticeship Levy Applicable': 'Yes'
  };

  return payrollData;
}