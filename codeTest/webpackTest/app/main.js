/*用来把Greeter模块返回的节点插入页面*/
var greeter = require('./Greeter.js')
document.getElementById('root').appendChild(greeter())