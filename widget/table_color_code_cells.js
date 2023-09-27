widget.on('domready', function(sender, ev) {

    $("td:nth-child(8):contains('Used')", element).css({ 'color': 'red' });

    // An event fired on each table re-draw:
    $(element).on('draw.dt', function() {
        $("td:nth-child(8):contains('Used')", element).css({ 'color': 'red' });
    })
    
});