widget.on('buildquery', function(se, ev) {
	
    // Get the widget title
    var widgetTitle = ev.widget.title;
      
    // Assign URL link
    var url ='https://sisense.dev/reference/js/';
      
    // Use the widget title as the url link text with proper formatting
    $(`widget[widgetid="${ev.widget.oid}"] .transput-holder`).empty().append(`<a href="${url}" target="_blank">${widgetTitle}</a>`);
    
    $(`widget[widgetid="${ev.widget.oid}"] widget-title`).empty().append(`<a href="${url}" target="_blank">${widgetTitle}</a>`);
  
  });