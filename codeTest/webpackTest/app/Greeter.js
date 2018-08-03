/*只包括一个用来返回包含问候信息的html元素的函数*/
/*app文件夹用来存放原始数据和我们将写的JavaScript模块*/

var config = require('./config.json')
module.exports = function() {
    var greet = document.createElement('div')
    greet.textContent = config.greetText;
    return greet;
}