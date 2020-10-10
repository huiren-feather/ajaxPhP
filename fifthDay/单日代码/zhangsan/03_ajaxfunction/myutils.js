//uname=zhangsan&age=18
function myAjax(type,url,params,dataType,callback,async){
	//1 2 3 4
	var xhr = null;
	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//null--->?null
	if(type == "get") {
		if(params && params != "") {
			url += "?" + params;
		}
		
	}
	xhr.open(type,url,async);
	if(type == "get") {
		xhr.send(null);
	} else if(type == "post") {
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(params);
	}

	if(async) {
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {

					var result = null;
					if(dataType == "json") {
						result = xhr.responseText;
						result = JSON.parse(result);
					} else if(dataType == "xml"){
						result = xhr.responseXML;
					} else {
						result = xhr.responseText;
					}
					if(callback) {
						callback(result);
					}
					
				}
			}
		};
	} else {
		if(xhr.readyState == 4) {
				if(xhr.status == 200) {

					var result = null;
					if(dataType == "json") {
						result = xhr.responseText;
						result = JSON.parse(result);
					} else if(dataType == "xml"){
						result = xhr.responseXML;
					} else {
						result = xhr.responseText;
					}
					if(callback) {
						callback(result);
					}
					
				}
			}
	}

	
	
}

obj = {
	url:"xxx",
	type:"post",
	dataType:"json",
	data:{
		uname:"zhangsan",
		age:"18"
	},//  uname=zhangsan&age=18
	success:function(){}
};



function myAjax2(obj) {

	var defaults = {
		type:"get",
		url:"#",
		dataType:"json",
		data:{},
		async:true,
		success:function(result){console.log(result);}
	};

	//obj中的属性，覆盖到defaults中的属性
	//1、如果有一些属性只存在obj中，会给defaults中增加属性
	//2、如果有一些属性在obj和defaults中都存在，会将defaults中的默认值覆盖
	//3、如果有一些属性只在defaults中存在，在obj中不存在，这时候defaults中将保留预定义的默认值
	for(var key in obj){
		defaults[key] = obj[key];
	}

	var xhr = null;
	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//得到params
	// data:{
	// 	uname:"zhangsan",
	// 	age:"18"
	// }//  uname=zhangsan&age=18
	var params = "";
	for(var attr in defaults.data){
		params += attr + "=" + defaults.data[attr] + "&";
	}
	if(params) {
		params = params.substring(0,params.length - 1);
	}
	if(defaults.type == "get") {
		defaults.url += "?" + params;
	}
	xhr.open(defaults.type,defaults.url,defaults.async);

	if(defaults.type == "get") {
		xhr.send(null);
	} else if(defaults.type == "post") {
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(params);
	}

	if(defaults.async) {
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					var result = null;
					if(defaults.dataType == "json") {
						result = xhr.responseText;
						result = JSON.parse(result);
					} else if(defaults.dataType == "xml") {
						result = xhr.responseXML;
					} else {
						result = xhr.responseText;
					}
					defaults.success(result);
					
				}
			}
		};
	} else {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				var result = null;
				if(defaults.dataType == "json") {
					result = xhr.responseText;
					result = JSON.parse(result);
				} else if(defaults.dataType == "xml") {
					result = xhr.responseXML;
				} else {
					result = xhr.responseText;
				}
				defaults.success(result);
				
			}
		}
	}

	

}