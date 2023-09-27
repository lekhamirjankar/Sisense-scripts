widget.on('buildquery', function(se, ev) {
	
    // Get the widget title
    var widgetTitle = ev.widget.title;

    // Assign URL link to the glossary
    var url = 'https://sisense.dev/reference/js/';

    // Define the tooltip text
    var tooltip = 'Tooltip text here';

    // Insert the hyperlink with tooltip into the widget title
    $(`widget[widgetid="${ev.widget.oid}"] .transput-holder`).empty().append(`<a href="${url}" target="_blank" title="${tooltip}">${widgetTitle}</a>`);
    
    $(`widget[widgetid="${ev.widget.oid}"] widget-title`).empty().append(`<a href="${url}" target="_blank" title="${tooltip}">${widgetTitle}</a>`);

});
