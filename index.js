var Airtable = require('airtable');
var base = new Airtable({apiKey: 'patsEKXEvpZs91p3B.ceb48f08c5d329187528db6e74fa3d0cc17c9e1d0055fc14418166fea894d5d9'}).base('appceU21rd6BnYbDZ');


base('Projects').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Details: ', record.get('FirstName'), record.get('LastName'), record.get('Status'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});