widget.on('processresult', function(widget, query) {
    
    // when result < -5 then 'red'
    
    if(((query.result.value.data/query.result.secondary.data)-1) <  -0.05)
    {
        query.result.gauge.color = '#ff0000'
    }
    
    // when result < 0 then 'yellow'
    
    else if(((query.result.value.data/query.result.secondary.data)-1) < 0)
    {
        query.result.gauge.color = '#FAD02C'
    }
    
    // when result >= 0 then 'green'
    
    else if(((query.result.value.data/query.result.secondary.data)-1) >=0)
    {
        query.result.gauge.color = '#00a808'
    }
    
    // default color : 'orange'
    
    else
    {
        query.result.gauge.color = '#ff7e20'    
    }    
    
});