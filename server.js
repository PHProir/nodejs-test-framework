var http = require('http');
var url = require('url');
var fs = require('fs');

var controller, action;


//start server
function start(route) {
    http.createServer(function (req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log(pathname);
        res.writeHead(200, {"Content-Type": "text/html"});

        handle(route(pathname), req, res);
        res.end();
    }).listen(8888);
}

function handle(cname, req, res) {

    var controller = cname.controller;
    var action = cname.action;
    controllerPath = './controllers/' + controller;
    var ex = true;
    console.log("C PATCH :: " + controllerPath);
    /**
     * check if controller exists in controllers directory
     * if not exists call error controller and controllerNotFound action
     */
    try {
        fs.statSync(controllerPath + ".js");
    } catch (err) {
        if (err.code == 'ENOENT') { // controller not found
            controllerPath = './controllers/error';
            cname.controller = 'error';
            cname.action = 'controllerNotFound';
            console.log(err);
        }
    }

    try {
        var ControllerObj = require(controllerPath);
        var view = require('./view');
        ControllerObj.view = new view();

        if (typeof ControllerObj[cname.action] != 'undefined') // action exists
            ControllerObj[cname.action](req, res);
        else {
            ControllerObj.view.render(res, 'error/notFound', {
                type: 'action',
                controller: cname.controller,
                action: cname.action
            });
        }

    } catch (err) {
        console.log(err);
        res.write(err.message);
    }
};


exports.start = start;
