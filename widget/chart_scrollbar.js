/* 1: Keeping the Scroll Bar Always Present */

widget.on('processresult', function (se, ev) {
	
    // Enable the scroll bar
    ev.result.xAxis.scrollbar = {
        enabled: true
    };

    // Set the visible range of data points
    ev.result.xAxis.min = 0;
    ev.result.xAxis.max = 4;
	
});

/* 2: Showing the Scroll Bar Based on a Threshold */

widget.on('processresult', function (se, ev) {
	
    // Check if the number of data points exceeds a threshold
    if (ev.result.xAxis.categories.length > 7) {
		
        // Enable the scroll bar
        ev.result.xAxis.scrollbar = {
            enabled: true
        };

        // Set the visible range of data points
        ev.result.xAxis.min = 0;
        ev.result.xAxis.max = 4;
    }
    
});
