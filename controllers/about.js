module.exports = {
    index: function (req, res) {

        this.view.render(res,'about/index', {name: "INDEX"});
    },
    aaa: function (req , res    ) {
        this.view.render(res, 'about/index', {name: "AAA"});
    }
}
