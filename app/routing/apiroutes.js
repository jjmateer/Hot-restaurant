var tableData = require('../data/table-data');
var waitingData = require('../data/waiting-data');

module.exports = function (app) {
    app.get('/api/tables', function (req, res) {
        res.json(tableData);
    })
    app.get('/api/waitList', function (req, res) {
        res.json(waitingData);
    })
}