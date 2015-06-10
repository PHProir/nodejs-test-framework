function route(pathname) {


    console.log('router : ' + pathname);
    var get = pathname.split('/').filter(function (n) {
        return n != ''
    });
    if ( !get[0]  || get[0] == '') {
        controller = 'index';
    } else {
        controller = get[0];
    }


    if (!get[1] || get[1] == '') {
        action = 'index';
    } else {
        action = get[1];
    }

    obj = {controller: controller, action: action}
    console.log(obj);
    return obj;

}


exports.route = route;