module.exports = {
    controllerNotFound : function (req,res) {
        console.log('ERROR CONTROLLER NOT FOUND' );
        this.view.render(res , 'error/notFound',{type : 'controller' , controller: controller,action:action});
    },
    actionNotFound : function (req , res) {
        console.log('ERROR ACTION NOT FOUND');
        this.view.render(res ,'error/notFound',{type : 'action' , controller: controller,action:action});
    },
    error : function (req, res) {
        this.view.render(res , 'error');
    }
}