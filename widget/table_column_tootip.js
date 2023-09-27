widget.on('domready', function(w, args) {
	
	// Define the target column header's data-dim attribute value	
	// Instead of Commerce.Gender add your Table.Column name
	var targetDataDim = '[Commerce.Gender]';

	// Find the column header element based on the data-dim attribute
	var targetColumnHeader = $('widget[widgetid="'+w.oid+'"] .dataTable thead th[data-dim="' + targetDataDim + '"]');
	
    // Find the column members based on the index
	var targetColumnValue = $('widget[widgetid="'+w.oid+'"] .dataTable tbody td:nth-child(7)');

	// Define the tooltip text
	var tooltipText = 'Tooltip text here';

	// Add a title attribute with the tooltip text
	targetColumnHeader.attr('title', tooltipText);
	targetColumnValue.attr('title', tooltipText);
	
	// An event fired on each table re-draw:
    $(element).on('draw.dt', function() {
			
		// Define the target column header's data-dim attribute value	
		var targetDataDim = '[Commerce.Gender]';

		// Find the column header element based on the data-dim attribute
		var targetColumnHeader = $('widget[widgetid="'+w.oid+'"] .dataTable thead th[data-dim="' + targetDataDim + '"]');
		
		// Find the column members based on the index
		var targetColumnValue = $('widget[widgetid="'+w.oid+'"] .dataTable tbody td:nth-child(7)');

		// Define the tooltip text
		var tooltipText = 'Tooltip text here';

		// Add a title attribute with the tooltip text
		targetColumnHeader.attr('title', tooltipText);
		targetColumnValue.attr('title', tooltipText);
        
    })
	
});