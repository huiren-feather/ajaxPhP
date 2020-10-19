function myAjax(type,url,params,dateType,callback,async) {
    var xhr=null;
        if (window.XMLHttpRequest) {
            xhr=new XMLHttpRequest();
        } else { 
            // IE6
            xhr=new ActiveXObject("Microsoft.XMLHTTP");
        } 
        if (type=="get") {
            if (params&&params!="") {
                url+="?"+params; 
            } 
        }
        xhr.open(type,url,async);
        
        if (type=="get") {
            xhr.send(null);
        } else {
           xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
           xhr.send(params); 
        }

        if (async) {
            xhr.onreadystatechange=function(){
            if (xhr.readyState==4) {
                if (xhr.status==200) {
                    // 得到数据
                    var result=null;
                    if (dateType=="json") {
                        result= xhr.responseText;
                        result=JSON.parse(result);
                    } else if (dateType=="xml") {
                        result= xhr.responseXML;
                    }else{
                        result= xhr.responseText;
                    }
                    if (callback) {
                        callback(result);
                    }
                   

                }
            }


        };
        } else {
            if (xhr.readyState==4) {
                if (xhr.status==200) {
                    // 得到数据
                    var result=null;
                    if (dateType=="json") {
                        result= xhr.responseText;
                        result=JSON.parse(result);
                    } else if (dateType=="xml") {
                        result= xhr.responseXML;
                    }else{
                        result= xhr.responseText;
                    }
                    if (callback) {
                        callback(result);
                    }
                   

                }
            }
        }    
}

obj={
    url:"xxx",
    type:"get",
    dateType:"json",
    data:{
    uname:"zhangsan",
    age:"18",
    success:function(result){}
}

};

function myAjax2(obj){
    var defaults={
            type:"get",
            url:"#",
            dataType:"json",
            data:{},
            async:true,
            success:function(result){console.log(result);}
    };
    // obj 中的属性，覆盖到defaults中的属性
    // 1、属性只存在于obj中，会给defaults中增加属性
    // 2、都存在，则会将defaults中的默认值覆盖
    // 3、属性只存在于defaults中，就会保留默认值
    for (var key in obj) {
       defaults[key]=obj[key];
    }

    var xhr=null;
        if (window.XMLHttpRequest) {
            xhr=new XMLHttpRequest();
        } else { 
            // IE6
            xhr=new ActiveXObject("Microsoft.XMLHTTP");
        } 
        var params="";
        for(var attr in defaults.data){
           
            params+=attr+"="+defaults.data[attr]+'&';
        } 
        if (params) {
                params=params.substring(0,params.length-1);
            }
        if (defaults.type=="get") {
            // if (params&&params!="") {
                defaults.url+="?"+params; 
            // }  
        }
        xhr.open(defaults.type,defaults.url,defaults.async);
        
        if (defaults.type=="get") {
            xhr.send(null);
        } else {
           xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
           xhr.send(params); 
        }

        if (defaults.async) {
            xhr.onreadystatechange=function(){
            if (xhr.readyState==4) {
                if (xhr.status==200) {
                    // 得到数据
                    var result=null;
                    if (defaults.dateType=="json") {
                        result= xhr.responseText;
                        result=JSON.parse(result);
                    } else if (defaults.dateType=="xml") {
                        result= xhr.responseXML;
                    }else{
                        result= xhr.responseText;
                    }
                    defaults.success(result);
                   

                }
            }


        };
        } else {
            if (xhr.readyState==4) {
                if (xhr.status==200) {
                    // 得到数据
                    var result=null;
                    if (defaults.dateType=="json") {
                        result= xhr.responseText;
                        result=JSON.parse(result);
                    } else if (defaults.dateType=="xml") {
                        result= xhr.responseXML;
                    }else{
                        result= xhr.responseText;
                    }
                    defaults.success(result);
                   

                }
            }
        }    
}
