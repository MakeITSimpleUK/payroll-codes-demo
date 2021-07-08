module.exports = async function (payrollData) {
  payrollData.inputs.timesheets = [
    [
      {
        weekEndDate: '07/07/2021',
        itemType: 'Standard Hourly Rate',
        unit: 45,
        rate: 9,
        amount: 860,
        description: '',
        vat: 132
      }
    ]
  ];

  return payrollData;
}