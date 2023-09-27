widget.on("beforequery", function(se, ev) {
	
    // Get the metadata items from the query
    let metadataItems = ev.query.metadata;

    // Define the filter title to target
    // Instead of Date, add the name of your filter
    let filter = "Date";

    // Get the current date
    const date = new Date();
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;

    // Iterate through the metadata items
    metadataItems.forEach(function(item) {
		
        // Check if the item belongs to the "scope" panel,
        // has the specified filter title, and is of datetime datatype
        if (
      		item.panel === "scope" &&
            item.jaql.title === filter &&
            item.jaql.datatype === "datetime" &&
            item.jaql.filter &&
            item.jaql.filter.to
        	) 
		{
            // Check if end date > current date, assign current date
            if (item.jaql.filter.to > currentDate) 
			{
                item.jaql.filter = 
				{
                    members: [currentDate]
                }
            } 
			// Otherwise, use the selected end date
			else 
			{
                item.jaql.filter = 
				{
                    members: [item.jaql.filter.to]
                }
            }
        }
    })
});