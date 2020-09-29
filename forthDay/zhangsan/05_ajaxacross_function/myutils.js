//"https://suggest.taobao.com/sug?q="+keywordValue+"&callback=hehe";

// obj={
// 	url:"https://suggest.taobao.com/sug",
// 	data:{q:"123",pwd:"123456"}, //   q=123&pwd=123456  -->https://suggest.taobao.com/sug?q=123&pwd=123456
// 	success:function(data){}
// }

function myAjax(obj){
	var defaults = {
		type:"get",
		url:"#",
		data:{},
		success:function(data){},
		jsonp:"callback",
		jsonpCallback:"hehe"
	};

	for(var key in obj) {
		defaults[key] = obj[key];
	}

	var params = "";
	for(var attr in defaults.data){
		params += attr + "=" + defaults.data[attr]  + "&";
	}
	if(params) {
		params = params.substring(0,params.length-1);
		defaults.url += "?" + params;
	}

	defaults.url += "&"+defaults.jsonp+"=" + defaults.jsonpCallback;
	console.log(defaults.url);

	var script = document.createElement("script");
	script.src = defaults.url;

	window[defaults.jsonpCallback] = function(data){
		defaults.success(data);
	};

	var head = document.querySelector("head");
	head.appendChild(script);

}