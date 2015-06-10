#nodejs-test-framework version 0.0.1 
a framework for node.js just for learning

## install ##
`npm install`

## how to work ##
create a controller in `controllers` directory

`/controllers/index.js` : 
```
module.exports = {
    hello : function(req , res){
        this.view.render(res , 'index/hello', {name : "Saeed"});
    }
}
```
## View
`/views/index/hello.html`
```
Hello {{name}}
```
###run 
`node index.js`

then : 

`localhost:8888/index/hello`
#### output
 > my name is Saeed
