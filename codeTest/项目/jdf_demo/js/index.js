//这是index页面入口js，所有初使化需要的依赖在这里加载
seajs.use(['crayfish/zui/tips/1.0.0/tips.js', '../widget/js_mod_cmd/js_mod_cmd', '../widget/js_mod/js_mod'

	, '../widget/js_mod_cmd_2/js_mod_cmd_2'

	],function(tips, js_mod_cmd, js_mod, js_mod_cmd_2){

	//这是cmd规范的js写法，可参考阅读 '/widget/js_mod_cmd/js_mod_cmd
	js_mod_cmd.init();
	js_mod_cmd_2.init();
	
	//旧的非cmd规范的js会直接加载
	
    $('.jrm-demo-btn').on('click', function(){
    	//某些模块依赖的js组件，可以这样延迟加载
    	seajs.use(['crayfish/zui/panel/1.0.0/panel.js'],function(panel, tips, js_mod, js_mod_cmd){
	        $('body').panel({ 
	          title: '退款说明', 
	          content: '<div class="jrm-floating-p"><p class="jrm-floating-title">1 副标题</p>退款将抵消您的白条账单，如果您之前已偿还白条，退款将返回至您偿还白条时使用的支付方式中</div><div class="jrm-floating-p"><p class="jrm-floating-title">2 副标题</p>白条账单</p>'
	        });
        });
    });
})