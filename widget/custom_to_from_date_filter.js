// Event handler executed when the dashboard is initialized
dashboard.on('initialized', function(s, e) {

	// Retrieve the specific date filter to be customized
	// Instead of Commerce.Date add your Table.Column name
	let newFilter = e.dashboard.filters.item('[Commerce.Date (Calendar)]', 'days');

	// Get the current date and format it
	let toDate = new Date();
	let toDateDay = ("0" + toDate.getDate()).slice(-2);
	let toDateMonth = ("0" + (toDate.getMonth() + 1)).slice(-2);
	let toDateYear = toDate.getFullYear();
	let toDateParsed = `${toDateYear}-${toDateMonth}-${toDateDay}`;

	// Determine the start date based on a condition
	if (toDateMonth >= 2) {
		var fromdate = new Date(toDateYear, 2, 1); // Start from March
	} else {
		var fromdate = new Date(toDateYear - 1, 2, 1); // Start from March of the previous year
	}

	// Format the start date
	let fromDateDay = ("0" + fromdate.getDate()).slice(-2);
	let fromDateMonth = ("0" + (fromdate.getMonth() + 1)).slice(-2);
	let fromDateYear = fromdate.getFullYear();
	let fromDateParsed = `${fromDateYear}-${fromDateMonth}-${fromDateDay}`;

	// Update the filter with custom date range
	newFilter.jaql.filter.from = fromDateParsed;
	newFilter.jaql.filter.to = toDateParsed;

	// Apply the changes to the filter and default filters
	e.dashboard.filters.update(newFilter, { refresh: true, save: true });
	e.dashboard.defaultFilters.find(f => f.jaql.dim === '[Commerce.Date (Calendar)]').jaql.filter.from = fromDateParsed;
	e.dashboard.defaultFilters.find(f => f.jaql.dim === '[Commerce.Date (Calendar)]').jaql.filter.to = toDateParsed;

});