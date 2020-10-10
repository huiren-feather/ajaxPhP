//正式修改  合同费用_材料设备付款申请 脚本

function design_frm_OnShow(e)
{
    $("#tsCheckflowInfo").hide();
    $("#tsNewCheckflow").hide();

   	    var cv= API.GetControlValue("dx_Status");
        var humenid=CurrentEnv["HumenSID"];
        var humensid= API.GetControlValue("dx_RegisterHuman_sid");

	var form= API.GetControlValue("dx_formstatus");
	if (form=='垫资审批')
	{
	    alert('说明：该付款申请属于 垫资付款审批，先由事业部总经理、财务总监、总经理审核是否同意垫资付款；若同意，则流程继续正常的付款审批。请领导审核，谢谢');
	}

        //API.ShowTabPage("pagecontrol_client","本次付款明细*");

  $("#btnExprtToWord").html($("#btnExprtToWord").html().replace("导出到Word","导出Word"));
  $("#div_dx_xmbh.design-textbtn .txtbtn").attr("disabled", "disabled");

  var proid=CurrentEnv["Project_Id"];
  var xm= API.GetControlValue("dx_xmbh");

  if ( proid=='default' )
  {
    if (xm=='default')
	{
	  $("#dx_xmbh").val('');
	  $("#dx_xmmc").val('');
	}
	$("#div_dx_htbh.design-textbtn .txtbtn").attr("disabled", "disabled");
	$("#div_dx_ys_name.design-textbtn .txtbtn").attr("disabled", "disabled");
	$("#div_dx_Status.design-select .combo-arrow").attr("disabled", "disabled");
  }


    if (cv == '新增')
    {
        $("#btnExam").html($("#btnExam").html().replace("审批","提交审批"));
           //插入团队
    // var sql22=" exec  P_TZfin_htfk_team  "+recordid+","+"'"+xm+"'";
    // alert(sql22);
    // API.PBP_OpenSQL(sql22,function(){
    //                                  $("#btnSave").click();
    //                                  $("#btnRefresh").click();
    //                                 });
    API.PBP_OpenSQL("select owneropenbank from tzpro_contract where project_id ='" + xm +"'",function(data){
                                        API.SetControl("dx_team",data.Data[0]["owneropenbank"]);
                                        // API.SetControl("dx_code4",data.Data[0]["code4"]);
                   });
    }
    else if (cv == '审批中' || cv == '批准' )
    {
      $("#btnExam").html($("#btnExam").html().replace("审批","审批"));

	  	var sql="exec P_inTZfin_htfk_CLSBFK "+recordid;
	    API.PBP_ExecSQL(sql,function(){
		   API.PBP_ButtonClick("btnRefresh");
	    });
    }




    API.PBP_OpenSQL("exec P_tzfin_htfk_shows "+"'"+rectype+"',"+recordid+","+humenid,function(data){
		var Data=data.Data;
	    var firstrow=Data[0];
	    var num=firstrow["mms"];

		if (num=='SHOW')
		{
			$("#tsCheckflowInfo").show();
            $("#tsNewCheckflow").show();
		}
		else
		{
            $("#tsCheckflowInfo").hide();
            $("#tsNewCheckflow").hide();
		}
	});

  $("#btnExam").unbind("click").bind("click",function(){
  var cv5= API.GetControlValue("dx_Status");

	if (cv5 == '新增' )
    {
  var fukuanLX= API.GetControlValue("dx_fklx");
	var daohuoJl= API.GetControlValue("dx_dept_name");
	if(fukuanLX==' ')
	{
		alert('付款类型为 必填项!');
		return;
	}

	if(fukuanLX=='到货款')
	{

		if(daohuoJl=='')
		{
			alert('付款类型为 到货款 时，物资到货记录不能为空!');
			return;
		}
	}
  }
    var yhq=CurrentEnv["HumenSID"];
	var xmcode= API.GetControlValue("dx_xmbh");
	if (xmcode=='F16001')
	{
	btnExamClick();
	}

		 if (xmcode!='F16001')
         {
			var isok=true;
        	var fields=["dx_htbh","dx_code","dx_Title"];
	        for(var i in fields)
			{
		        var v=API.GetControlValue(fields[i]);
		        if(!v||v=="")
		        isok=false;
	        }
	        if(isok)
			{
		        API.SaveData(function(){ });

			  var cvd= API.GetControlValue("dx_Status");
			  //var httyper= API.GetField("ht_type");
			  var dds= API.GetControlValue("dx_sid");
			  if (dds==6490 ) //4814 4198
			  {
			     btnExamClick();
			  }
			  else
			  {
			  if (cvd == '新增' )
			  {


     var sqll = "  (SELECT top 1 replace(contname+LEFT(title,LEN(title)-1),'评审','付款申请') name FROM ( "
            +" SELECT a.sid, (SELECT isnull(fkname,'')+'、'  FROM TZcont_moneyPlan_1 WHERE m_sid=a.sid  FOR XML PATH('') )  "
		    +" title,c.title contname FROM TZfin_htfk A left join tzpur_cgps c on c.sid = a.htsid) B where sid = "+recordid+")  ";

   API.PBP_OpenSQL(sqll,function(d){
    var dd = d.Data;
    var ss = dd[0];
    var br = ss["name"];
    if(d && d["Data"].length>0){
      API.SetControl("dx_Title",API.GetControlValue("dx_htbh")+br);
      ExecSql(" update  TZfin_htfk set title =  '"+ API.GetControlValue("dx_htbh")+br +"'  where sid = " + recordid);
                                }
  });


					API.SaveData(function(){ });
					API.PBP_OpenSQL("exec p_tz_getfkjh_cg "+recordid,function(data){
					    var Data=data.Data;
	                    var firstrow=Data[0];
	                    var num=firstrow["mm"];
						if (num>0)
						{
                            var sql7=" exec  P_TZfin_htfk_examb11  "+recordid;
						    API.PBP_OpenSQL(sql7,function(data){
                                var Data=data.Data;
                                var firstrow=Data[0];
                                var code1=firstrow["mm"];
                                if (code1==0)
                                {
                                    alert('补充合同不得发起采购合同付款申请！');
                                }
                                else
                                {
                                    btnExamClick();
                                }
                            });
						}
						else if (num==0)
						{
						   alert('请您填写付款计划，而且实际付款金额不能超出计划付款金额!');
						   return;
						}
					});
			  }
			  if (cvd != '新增')
			  {
			        API.SaveData(function(){ });
					var sd=CurrentEnv["HumenSID"];
					if (sd==1566  )
					{
					    btnExamClick();
					}
				  else
				  {
					API.PBP_OpenSQL("exec P_tzfin_htfk_shenpi_clsb "+recordid,function(data){
					    var Data=data.Data;
	                    var firstrow=Data[0];
	                    var num=firstrow["mm"];

						if (num==0)
						{
						   btnExamClick();
						}
						else if (num>0)
						{
				   alert('此付款申请，存在付款项不在月度付款计划中，请您核实');
				   return;
   //		   btnExamClick();
						}
					});
				  }
			  }
			  }


	        }
	        else
			{
		       alert("请检查编号、合同、名称有没有填写！");
	        }

        }

		});

}

function selfTs_1_OnShow(e)
{
  $("#selfGrd_1_del").hide();
  $("#selfGrd_1_add").hide();

  API.PBP_Grid.AddButtonOnBottom("selfGrd_1","htnhq","获取历史累计付款信息","",function(){
    API.SaveData(function(){
      var htbh=API.GetField("htbh");
      API.PBP_OpenSQL("select count(*) num from TZfin_htfk where status in ('批准','审批中') and  htbh= '"+htbh+"'",function(data){
	    var Data=data.Data;
	    var firstrow=Data[0];
        var numb =firstrow["num"];
        if( numb >= 1)
          {
	         var sql= " exec P_inTZfin_htfk_CLSBFK  "+FV("sid");
             API.PBP_ExecSQL(sql,function(){
			     API.PBP_Grid.ReloadGrid("selfGrd_1");
			 });
          }
	    else
		  {
		     alert('此合同无付款记录！');
		  }
      });
    });
  });


}

function selfTs_2_OnShow(e)
{
    $("#selfGrd_2_canimport").hide();
    $("#selfGrd_2_add").hide();
    $("#selfGrd_2_del").hide();
  var ctv= API.GetControlValue("dx_Status")
if (ctv == '新增')
{
        var humenid=CurrentEnv["HumenSID"];
        var humensid= API.GetControlValue("dx_RegisterHuman_sid");
		if(humenid=="1"||humenid==humensid)
		{
API.SaveData(function(){
  API.PBP_Grid.AddButtonOnBottom("selfGrd_2","btnfkname"," 新增","",function(){
        GridAddClick("selfGrd_2","");
        API.PBP_Grid.ButtonColumnClick("selfGrd_2","fkname");


    });
	API.PBP_Grid.AddButtonOnBottom("selfGrd_2","bitbtn117","删除","",function(){GridDelClick("selfGrd_2");})
   });
   }  }
}


function BitBtn2_OnClick(e)
{

}




function BitBtn3_OnClick(e)
{


 API.SaveData(function(){
  var ssid =API.GetField("htsid");
  if(!ssid)
  {
    alert("请选择合同！");
  }       else
  {
    API.PBP_OpenSelfdefine("0093",ssid);
  }
  });
}

function BitBtn5_OnClick(e)
{
 API.SaveData(function(){
  var ssid =API.GetField("dept_sid");
  if(!ssid)
  {
    alert("请选择物资到货记录！");
  }       else
  {
    API.PBP_OpenSelfdefine("0120",ssid);
  }
  });

}

function BitBtn6_OnClick(e)
{
    API.SaveData(function(){
		API.PBP_ButtonClick("dxButtonEdit1");
	});
}

function BitBtn7_OnClick(e)
{
    API.SaveData(function(){
		API.PBP_ButtonClick("dxButtonEdit2");
	});
}

function BitBtn8_OnClick(e)
{
    API.SaveData(function(){
		API.PBP_ButtonClick("dxButtonEdit3");
	});
}

function BitBtn9_OnClick(e)
{
    API.SaveData(function(){
		API.PBP_ButtonClick("dxButtonEdit4");
	});
}

function selfTs_3_OnShow(e)
{
   $("#selfGrd_3_add").hide();
   $("#selfGrd_3_del").hide();


}
