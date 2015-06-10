module.exports = {
    add: function (req , res) {
        this.view.render(res , 'index/index', {name: "saeed"});
    },
    index : function(req,res){
        this.view.render(res , 'index/index',{name : "index"})
    }
}