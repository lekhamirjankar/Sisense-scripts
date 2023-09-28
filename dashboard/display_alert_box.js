dashboard.on('filterschanged', function(s, e) {
	
    // Check if the specified filter exists and has multiple selected days
    // Instead of Commerce.Date add your Table.Column name
    if (
        dashboard.filters.item('[Commerce.Date (Calendar)]', 'days') &&
        dashboard.filters.item('[Commerce.Date (Calendar)]', 'days').jaql.filter.hasOwnProperty('members') === true
    ) 
	{
		// If multiple days are selected
        if (dashboard.filters.item('[Commerce.Date (Calendar)]', 'days').jaql.filter.members.length > 1) 
		{
            // Display an alert 
            alert("Alert text here");

            // Get the default date filter
            let defaultFilter = dashboard.defaultFilters[0];
			
            // Set the date filter to it's default state
            dashboard.filters.update(defaultFilter, { refresh: true, save: true })
        }
    }
	
});