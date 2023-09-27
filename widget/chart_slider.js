/* 1: Keeping the Slider Always Present */

widget.on('beforeviewloaded', function (ev, args) {
	
	// Enable the slider
    args.options.navigator.enabled = true; 
	
	// Set the maximum visible data points counting from 0 
	// So 5 bars will be displayed in this case
    args.options.xAxis.max = 4; 

});

/* 2: Showing the Slider Based on a Threshold */

widget.on('beforeviewloaded', function (ev, args) {
	
	// Set the threshold 
    if (args.options.xAxis.categories.length > 7) {
		
		// Enable the slider
        args.options.navigator.enabled = true; 
		
		// Set the maximum visible data points counting from 0 
		// So 5 bars will be displayed in this case		
        args.options.xAxis.max = 4; 
    }
	
});