/**
 * Interface for PayrollData
 * Default values
 */
module.exports = payrollData = {
	inputs: {
		candidate: {
			'Pension Applicable': '',
			'Service Used': '',
			'Holiday Pay Rule': '',
			'Apprenticeship Levy Applicable': ''
		},
		timesheets: [],

		payroll: {
			'Pay Frequency': '' //Weekly, Monthly, etc.
		}
	},

	outputs: {
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
	}
};