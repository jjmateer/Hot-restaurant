var path = require('path');

module.exports = function (app) {

    app.get('/view', function (req, res) {
        res.sendFile(path.join(__dirname + '/../html/view.html'));
    })
    app.get('/make', function (req, res) {
        res.sendFile(path.join(__dirname + '/../html/make.html'));
    })
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../html/home.html'));
    })

}