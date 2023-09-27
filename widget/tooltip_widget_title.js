widget.on('buildquery', function(se, ev) {
	
    // Get the widget title
    var widgetTitle = ev.widget.title;

    // Define the tooltip text
    var tooltip = 'Tooltip text here';

    // Add the tooltip to the widget title
    $(`widget[widgetid="${ev.widget.oid}"] .transput-holder`).attr('title',tooltip);
    
    $(`widget[widgetid="${ev.widget.oid}"] widget-title`).attr('title',tooltip);

});