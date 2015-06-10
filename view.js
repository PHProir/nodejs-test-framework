var swig = require('swig');

module.exports = function () {

    this.render = function (res , file, data) {

        var output = swig.renderFile("./views/" + file + ".html", data);
        res.write(output);

    }
}
