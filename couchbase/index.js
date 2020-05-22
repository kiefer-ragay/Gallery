const couchbase = require('couchbase')
const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('patriot898', 'kiefer898');
const gallery = cluster.openBucket('gallery');
const N1qlQuery = couchbase.N1qlQuery;