/**
 * Interface for PayrollData
 * Default values
 */
module.exports = payrollData = {
  filters: {
    payFrequency: 'Weekly',
    agency: ['agency1_id', 'agency2_id'],
    product: 'Umbrella',
    workers: ['candidate1_id', 'candidate2_id', 'candidate3_id']
  },

  payroll: {
    'Pay Frequency': '' //Weekly, Monthly, etc.
  },

  system: {
    statutoryRate: {}
  },


  workersInfo: {
    'candidate1_id': {

      // contains candidates' objects
      info: {
        'Pension Applicable': '',
        'Service Used': '',
        'Holiday Pay Rule': '',
        'Apprenticeship Levy Applicable': ''
      },

      timesheets: [{}],

      actionRequests: [{}],

      // all other items


      // Results
      payslip: {
        'Gross Timesheet Value': 0,
        'Margin': 0,
        'Holiday Pay': 0,
        'Employer NI': 0,
        'Employer Pension': 0,
        'Apprenticeship Levy': 0,
        'Gross Pay For Tax': 0,
        'Tax': 0,
        'Employee NI': 0,
        'Employee Pension': 0,
        'Net Pay': 0,
      },

      errors: [{

      }]

    }
  }

};