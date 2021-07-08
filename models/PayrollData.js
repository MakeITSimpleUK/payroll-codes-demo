module.exports = payrollData = {
	inputs: {
		candidate: {
			'Pension Applicable': 'No',
			'Service Used': 'Umberlla',
			'Holiday Pay Rule': 'Rolled up on total pay',
			'Apprenticeship Levy Applicable': 'Yes'
		},
		timesheets: [
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
		],

		payroll: {}
	},

	outputs: {
		'Gross Timesheet Value': 43,
		'Margin': 34,
		'Holiday Pay': 75,
		'Employer NI': 133,
		'Employer Pension': 42,
		'Apprenticeship Levy': 144,
		'Gross Pay For Tax': 65,
		'Tax': 48,
		'Employee NI': 84,
		'Employee Pension': 25,
		'Net Pay': 245,
	}
};