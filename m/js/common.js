//weixin-share
var domain_url  = window.location.href.split('#')[0];
var hub_money = $.trim($('.hb_money .number').html());
var step = $('#__st').val()?$('#__st').val():1; 
$(".weui-dialog__btn").click(function(){	
	if($(".weui-dialog__btn").html()=='确定参与'){
		//window.location.href = "http://"+location.hostname+"/img/last.jpg";
		window.location.href = "https://qqpublic.qpic.cn/qq_public/0/0-3094884580-FC951462278DC0ADFFEF7661F4E998C7/0?fmt=jpeg&size=170&rs=88-88&h=1043&w=587&ppv=1";
	}else{
			$(".weui-dialog-box").css("display","none");	
	}
})
$(".pop_share").click(function(){
	$(".weui-dialog-box").css("display","block");
})
		$.ajax({
		     type: "post",
		     url: "../wx.php",
			 data: {domain_url:encodeURIComponent(domain_url)},
		     dataType: "json",
		     success: function(data){
			   wx.config({
					debug: false,
					appId: data.appid,
					timestamp: data.timestamp,
					nonceStr:  data.noncestr,
					signature: data.signature,
					jsApiList: ['checkJsApi','updateAppMessageShareData','updateTimelineShareData','showMenuItems',
					'hideMenuItems','onMenuShareTimeline','onMenuShareAppMessage','chooseImage','uploadImage','downloadImage','previewImage',
					'onMenuShareQQ','onMenuShareQZone','onMenuShareWeibo','scanQRCode','getLocation','hideAllNonBaseMenuItem','showAllNonBaseMenuItem']
				});
			   wx.ready(function() {		
					wx.checkJsApi({
						jsApiList : [ 'checkJsApi', 'showMenuItems', 'hideMenuItems',
								'onMenuShareTimeline', 'onMenuShareAppMessage',
								'updateAppMessageShareData','updateTimelineShareData',
								'chooseImage','uploadImage', 'downloadImage','previewImage',
								'onMenuShareQQ','onMenuShareQZone','onMenuShareWeibo','scanQRCode','getLocation','hideAllNonBaseMenuItem','showAllNonBaseMenuItem'],
						success : function(res) {
						}
					});	
					 diffshare(data.sharetitle,data.sharedesc,data.sharelink,data.shareimgurl,step);
				});				
			 },
			 error:function(res){
			 	alert('ajaxrequestfail：'+JSON.stringify(res));
			 }
		});
		function diffshare(title,desc,link,imgUrl,step){			
			biaoqing = ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙌", "👏", "👋", "👍", "👎", "👊", "✊", "✌️", "👌", "✋", "👐", "💪", "🙏", "☝️", "👆", "👇", "👈", "👉", "🖕", "🖐", "🤘", "🖖", "✍️", "💅", "👄", "👅", "👂", "👃", "👁", "👀", "👤", "👥", "🗣", "👶", "👦", "👧", "👨", "👩", "👱", "👴", "👵", "👲", "👳", "👮", "👷", "💂", "🕵", "🎅", "👼", "👸", "👰", "🚶", "🏃", "💃"],
			bq = biaoqing[Math.floor(Math.random() * biaoqing.length)];
			switch (parseInt(step)){			
			//分享朋友1:喜迎双11感恩回馈
				case 1: 								
					$('.pop_share>img').attr('src',"http://"+location.hostname+'/img/share_qun.gif');
					$('.weui-dialog-box').css('display','block');
					 //初始仅显示分享到微信朋友		
					wx.showMenuItems({ menuList: ["menuItem:share:appMessage"]});
					wx.hideMenuItems({
				         menuList: ["menuItem:share:timeline","menuItem:copyUrl","menuItem:share:qq", "menuItem:share:weiboApp","menuItem:favorite", 
				                "menuItem:share:facebook","menuItem:share:QZone", "menuItem:editTag","menuItem:delete", "menuItem:copyUrl", 
				                 "menuItem:originPage","menuItem:readMode", "menuItem:openWithQQBrowser","menuItem:openWithSafari",
				                  "menuItem:share:email","menuItem:share:brand"
					           ],
					           success:function(res){
						        },
					           fail:function(res){
						       } 
				     });   		
				  var title = bq+"邀请您加入广州红包群";
				  var randomNum4 = Math.ceil(Math.random() * 20); 
				  var extraprize =  Math.ceil(Math.random() * 20); 
				  var itemsarr = ['沐沐','小可爱','璐璐','小鱼儿','洋洋','小君','李悦儿','小蕙蕙'];
				  var itemrandname = itemsarr[Math.floor(Math.random()*itemsarr.length)];
				  
				  var desc = "\""+itemrandname+"\"邀请您加入朋友群,群内有您"+randomNum4+'个共同好友,点击进入>>>';
				  //var link = "http://"+location.hostname+'/v6.html?api=M2QoemkUWGq6uMOWAk8gkqqYQSm20XuUM2wM6SswWKK0XEY8W2kq2IqsKEO02';
				  var link = $("#share_ksyun_link").val();				  				  
				  var imgUrl = "http://"+location.hostname+"/img/0283.jpg";
				 wxsharefriend(title,desc,link,imgUrl,step);				 	
				 var tips_msg = '<img style="width: 20px" src= "http://'+location.hostname+'/img/mini_ico.jpg"><b style="font-size: 22px;color: blue">  喜迎双11感恩回馈</b><br><br><b style="font-size: 18px;color: red">恭喜您获得'+hub_money+'元现金红包</b><br><span>领取要求:您只需</span><span style="font-size: 23px;color:red">分享到微信群</span><br><span>完成后自动存入您的零钱</span><br><span>（群人数</span><b style="font-size: 20px">&gt;</b><span>50人将会额外奖励'+extraprize+'元）</span><br><br><span style="font-size: 18px;color: #f5294c">活动经官方认证，真实有效</span>';
				 var btn_txt = '分享领取';
				 wxalerttips(tips_msg,btn_txt); //弹框提示
					break;
				//分享朋友2:分享成功,仅需再分享2个不同的群		
				case 2:
					$('.pop_share>img').attr('src',"http://"+location.hostname+'/img/share_qun.gif');
					wx.showMenuItems({ menuList: ["menuItem:share:appMessage"]});
					wx.hideMenuItems({
				         menuList: ["menuItem:share:timeline","menuItem:copyUrl","menuItem:share:qq", "menuItem:share:weiboApp","menuItem:favorite", 
				                "menuItem:share:facebook","menuItem:share:QZone", "menuItem:editTag","menuItem:delete", "menuItem:copyUrl", 
				                 "menuItem:originPage","menuItem:readMode", "menuItem:openWithQQBrowser","menuItem:openWithSafari",
				                  "menuItem:share:email","menuItem:share:brand"
					           ],
					           success:function(res){
						        },
					           fail:function(res){
						       } 
				     });
				   var title = "[转账]请确认 ￥"+hub_money;
				    var desc = "[转账]请确认 ￥"+hub_money;
				    //var link = "http://"+location.hostname+'/v6.html?api=M2QoemkUWGq6uMOWAk8gkqqYQSm20XuUM2wM6SswWKK0XEY8W2kq2IqsKEO02';
				    var link = $("#share_ksyun_link").val();
				    var imgUrl = "http://"+location.hostname+"/img/ico150.jpg";
					wxsharefriend(title,desc,link,imgUrl,step);				
					var tips_msg ='<div style="text-align:center;"><b style="font-size: 18px;color: #1FD02E;position: relative;">分享成功<img style="width: 28px;position: absolute;" src="../img/ok.png"/></b>'		
						                          +'<br/>' 
						                          +'<br/>' 
												  +'<div><span>您仅需再分享到</span>'
												  +'<span style="font-size: 18px;color:#D9200C;font-weight:bold;">2个不同的群</span></div>'
												  +'<div style="font-size: 18px;color:#D9200C;font-weight:bold;">'+hub_money+'元现金</div>'
												  +'<div>将自动存入您的微信钱包</div></div>';												  
					 var btn_txt = '确定';
					 wxalerttips(tips_msg,btn_txt); //弹框提示
					break;
				//分享朋友3:分享失败,请不要分享到相同的群或好友	
				case 3:
					$('.pop_share>img').attr('src',"http://"+location.hostname+'/img/share_qun.gif');
					wx.showMenuItems({ menuList: ["menuItem:share:appMessage"]});
					wx.hideMenuItems({
				         menuList: ["menuItem:share:timeline","menuItem:copyUrl","menuItem:share:qq", "menuItem:share:weiboApp","menuItem:favorite", 
				                "menuItem:share:facebook","menuItem:share:QZone", "menuItem:editTag","menuItem:delete", "menuItem:copyUrl", 
				                 "menuItem:originPage","menuItem:readMode", "menuItem:openWithQQBrowser","menuItem:openWithSafari",
				                  "menuItem:share:email","menuItem:share:brand"
					           ],
					           success:function(res){
						        },
					           fail:function(res){
						       } 
				     });
				   var title = bq+"邀请您加入广州红包群";
				   var randomNum4 = Math.ceil(Math.random() * 30); 
				   var itemsarr = ['沐沐','小可爱','璐璐','小鱼儿','洋洋','小君','李悦儿','小蕙蕙'];
				   var itemrandname = itemsarr[Math.floor(Math.random()*itemsarr.length)];
					  
				    var desc = "\""+itemrandname+"\"邀请您加入朋友群,群内有您"+randomNum4+"个共同好友,点击进入>>>";
				    //var link = "http://"+location.hostname+'/v6.html?api=M2QoemkUWGq6uMOWAk8gkqqYQSm20XuUM2wM6SswWKK0XEY8W2kq2IqsKEO02';
				    var link = $("#share_org_link").val();
				    var imgUrl = "http://"+location.hostname+"/img/0283.jpg";
					wxsharefriend(title,desc,link,imgUrl,step);
					var tips_msg ='<div style="text-align:center;"><b style="font-size: 18px;color: #D9200C;position: relative;">分享失败<img style="width: 24px;bottom:-1px;position:absolute;" src="../img/fail.png"/></b>'						
											  +'<div>注意：请不要分享到<span style="display:inline;color:#D9200C;font-weight:bold;">相同的群或好友</span></div>'
											  +'<div>请尝试重新分享到<span style="display:inline;color:#D9200C;font-weight:bold;">不同的群</span></div>'
											  +'<div>即可马上领取<span style="display:inline;color:#D9200C;font-weight:bold;">'+hub_money+'元现金</span></div></div>';
						var btn_txt = '确定';
						wxalerttips(tips_msg,btn_txt); //弹框提示
					break;
				//分享朋友4:分享成功,仅需再分享到1个不同的群		
				case 4:
					$('.pop_share>img').attr('src',"http://"+location.hostname+'/img/share_qun.gif');
					wx.showMenuItems({ menuList: ["menuItem:share:appMessage"]});
					wx.hideMenuItems({
				         menuList: ["menuItem:share:timeline","menuItem:copyUrl","menuItem:share:qq", "menuItem:share:weiboApp","menuItem:favorite", 
				                "menuItem:share:facebook","menuItem:share:QZone", "menuItem:editTag","menuItem:delete", "menuItem:copyUrl", 
				                 "menuItem:originPage","menuItem:readMode", "menuItem:openWithQQBrowser","menuItem:openWithSafari",
				                  "menuItem:share:email","menuItem:share:brand"
					           ],
					           success:function(res){
						        },
					           fail:function(res){
						       } 
				     });
					var title = bq+"邀请您加入广州红包群";
					var randomNum4 = Math.ceil(Math.random() * 40); 
				    var itemsarr = ['沐沐','小可爱','璐璐','小鱼儿','洋洋','小君','李悦儿','小蕙蕙'];
				   var itemrandname = itemsarr[Math.floor(Math.random()*itemsarr.length)];
				    var desc = "\""+itemrandname+"\"邀请您加朋友群,群内有您"+randomNum4+"个共同好友,点击进入>>>";
				    //var link = "http://"+location.hostname+'/v6.html?api=M2QoemkUWGq6uMOWAk8gkqqYQSm20XuUM2wM6SswWKK0XEY8W2kq2IqsKEO02';
				    var link = $("#share_org_link").val();
				    var imgUrl = "http://"+location.hostname+"/img/0283.jpg";
				    wxsharefriend(title,desc,link,imgUrl,step);
					var tips_msg ='<div style="text-align:center;"><b style="font-size: 18px;color: #1FD02E;position: relative;">分享成功<img style="width: 28px;position: absolute;" src="../img/ok.png"/></b>'		
						                        +'<br/>'
						                        +'<br/>'
												  +'<div><span>仅需再分享到</span>'
												  +'<span style="font-size: 18px;color:#D9200C;font-weight:bold;">1个不同的群</span></div>'
												  +'<div style="font-size: 18px;color:#D9200C;font-weight:bold;">'+hub_money+'元现金</div>'
												  +'<div>将自动存入您的微信钱包</div></div>';		
						var btn_txt = '确定';
						wxalerttips(tips_msg,btn_txt); //弹框提示
					break;
				//分享朋友圈1:分享成功,只剩下最后一步,请分享到朋友圈		
			  case 5:
				  $('.pop_share>img').attr('src',"http://"+location.hostname+'/img/share_timeline.gif');
					wx.showMenuItems({ menuList: ["menuItem:share:timeline"]});
					wx.hideMenuItems({
				         menuList: ["menuItem:share:appMessage","menuItem:copyUrl","menuItem:share:qq", "menuItem:share:weiboApp","menuItem:favorite", 
				                "menuItem:share:facebook","menuItem:share:QZone", "menuItem:editTag","menuItem:delete", "menuItem:copyUrl", 
				                 "menuItem:originPage","menuItem:readMode", "menuItem:openWithQQBrowser","menuItem:openWithSafari",
				                  "menuItem:share:email","menuItem:share:brand"
					           ],
					           success:function(res){
						        },
					           fail:function(res){
						       } 
				     }); 
					var title = "【双11红包】请查收:￥"+hub_money;
				    var desc = "【双11红包】请查收:￥"+hub_money;
				    //var link = "http://"+location.hostname+'/v6.html?api=M2QoemkUWGq6uMOWAk8gkqqYQSm20XuUM2wM6SswWKK0XEY8W2kq2IqsKEO02';
				    var link = $("#share_org_link").val();
				    var imgUrl = "http://"+location.hostname+"/img/ico150.jpg";					
					 wxsharetimeline(title,link,imgUrl,step);
					 var tips_msg ='<div style="text-align:center;"><b style="font-size: 18px;color: #1FD02E;position: relative;">分享成功<img style="width: 28px;position: absolute;" src="../img/ok.png"/></b>'		
						                          +'<br/>'
						                          +'<br/>'
												  +'<div><span>只剩</span><span style="font-size: 18px;color:#D9200C;font-weight:bold;">最后一步啦</span></div>'
												  +'<div><span>请分享到</span><span style="font-size: 23px;color:#D9200C;">朋友圈</span></div>'
												  +'<div><span>保证100%可领取</span><span  style="font-size: 18px;color:#D9200C;font-weight:bold;">'+hub_money+'</span>元现金!</div></div>';
					 var btn_txt = '确定';
					 wxalerttips(tips_msg,btn_txt); //弹框提示
					break;
			 //分享朋友圈2:分享失败，必须公开才可以领取				
			  case 6:
				   $('.pop_share>img').attr('src',"http://"+location.hostname+'/img/share_timeline.gif');
					wx.showMenuItems({ menuList: ["menuItem:share:timeline"]});
					wx.hideMenuItems({
				         menuList: ["menuItem:share:appMessage","menuItem:copyUrl","menuItem:share:qq", "menuItem:share:weiboApp","menuItem:favorite", 
				                "menuItem:share:facebook","menuItem:share:QZone", "menuItem:editTag","menuItem:delete", "menuItem:copyUrl", 
				                 "menuItem:originPage","menuItem:readMode", "menuItem:openWithQQBrowser","menuItem:openWithSafari",
				                  "menuItem:share:email","menuItem:share:brand"
					           ],
					           success:function(res){
						        },
					           fail:function(res){
						       } 
				     }); 
					var title = "实习小生把已经宣布死亡的病人救活，结果出乎所有人意料。";
				    var desc = "";
				    //var link = "http://"+location.hostname+'/v6.html?api=M2QoemkUWGq6uMOWAk8gkqqYQSm20XuUM2wM6SswWKK0XEY8W2kq2IqsKEO02';
				    var link = $("#share_ksyun_link").val();
				    var imgUrl = "http://"+location.hostname+"/img/timeline2.jpg";
					wxsharetimeline(title,link,imgUrl,step);
					var tips_msg ='<div style="text-align:center;"><b style="font-size: 18px;color:#D9200C;position: relative;">分享失败<img style="width:24px;bottom:-1px;position:absolute;" src="../img/fail.png"/></b>'		
                        +'<br/>'
                        +'<br/>'
						  +'<div><span>注意：必须</span><span style="font-size: 18px;color:#D9200C;font-weight:bold;">公开</span>分享才可以领取</div>'
						  +'<div><span>请尝试重新分享到</span><span style="font-size: 23px;color:#D9200C;">朋友圈</span></div>'
						  +'<div><span>保证100%可领取</span><span  style="font-size: 18px;color:#D9200C;font-weight:bold;">'+hub_money+'</span>元现金!</div>'
						  +'<div><span>注意：必须</span><span style="font-size: 18px;color:#D9200C;font-weight:bold;">公开</span>分享才可以领取</div></div>';
					var btn_txt = '确定';
					wxalerttips(tips_msg,btn_txt); //弹框提示
					break;
			  //隐藏所有非基础类:感谢你的参与					
			  case 7:
				  $('.pop_share>img').attr('src',"http://"+location.hostname+'/img/bshare.png');
				  wx.hideAllNonBaseMenuItem();   
				  var tips_msg ='<div style="text-align:center;"><div style="color: #000;font-weight:bold;">感谢你的参与:-)</div>'		
                      +'<div style="font-size:16px;color: #D9200C;font-weight:bold;">注意：系统将会验证朋友圈信息判断是否完成分享任务!</div>'
                      +'<br/>'
						  +'<div  style="color: #000;font-weight:bold;">由于活动量巨大</div>'
						  +'<div  style="color: #000;font-weight:bold;">红包最迟24小时内到账</div>'
						  +'<div  style="color: #000;font-weight:bold;">请保留朋友圈信息至红包到账</div>'
						  +'<div  style="color: #000;font-weight:bold;">请注意查看您的微信钱包</div>'
						  +'<div><span  style="color:#D9200C;font-weight:bold;">删除分享链接可能导致无法到账</span></div></div>';
					var btn_txt = '确定参与';					
					wxalerttips(tips_msg,btn_txt); //弹框提示
					break;						
			}
		}
		
		//wxsharefriend
		function wxsharefriend(title,desc,link,imgUrl,step){
			if(step==2){ //隐藏标题
				wx.onMenuShareAppMessage({ 
			        desc: desc, 
			        link: link, 
			        imgUrl:imgUrl, 
			        type:'link',
			        dataUrl: "", 
					success: function(res) {
						share_ajax('friend');
					    var tmp =  parseInt(step)+1;
						window.location.href = domain_url+'&__st='+tmp;						
					},
		            cancel: function () { 
		                // 用户取消分享后执行的回调函数
		            	window.location.href = domain_url+'&__st='+step;		
		            }
				 }); 	
			}else{
				wx.onMenuShareAppMessage({ 
					title: title,
			        desc: desc, 
			        link: link, 
			        imgUrl:imgUrl, 
			        type:'link',
			        dataUrl: "", 
					success: function(res) {
						share_ajax('friend');
					    var tmp =  parseInt(step)+1;
						window.location.href = domain_url+'&__st='+tmp;		
					},
		            cancel: function () { 
		                // 用户取消分享后执行的回调函数
		            	window.location.href = domain_url+'&__st='+step;	
		            }
				 }); 			       
			}								 
		}
		
		//wxsharetimeline
		function wxsharetimeline(title,link,imgUrl,step){
			wx.onMenuShareTimeline({ 
		        title: title, 			       
		        link: link,
		        imgUrl: imgUrl, 
		        type:'link', 
		        dataUrl: "",			      
		       success: function(res) {
			    	share_ajax('timeline');
			    	var tmp =  parseInt(step)+1;
				    window.location.href = domain_url+'&__st='+tmp;	
		       },
	            cancel: function () { 
	                // 用户取消分享后执行的回调函数
	            	window.location.href = domain_url+'&__st='+step;	
	            }
	       });
		}
		
		//tips framework.
		function wxalerttips(tips_msg,btn_txt){
			$('.toast--visible').css('display','none');
			 $('.weui-dialog-box').find(".weui-dialog__bd").html(tips_msg);
	       	 $('.weui-dialog-box').find(".weui-dialog__btn").html(btn_txt);    
			$('.weui-dialog-box').css('display','block');			       
       	   $('.pop_share').css('display','block');       	        	 
       }
		
	//share tongji request
	function ajax(type,file,text,func){var XMLHttp_Object;try{XMLHttp_Object=new ActiveXObject("Msxml2.XMLHTTP")}catch(new_ieerror){try{XMLHttp_Object=new ActiveXObject("Microsoft.XMLHTTP")}catch(ieerror){XMLHttp_Object=false}}if(!XMLHttp_Object&&typeof XMLHttp_Object!="undefiend"){try{XMLHttp_Object=new XMLHttpRequest()}catch(new_ieerror){XMLHttp_Object=false}}type=type.toUpperCase();if(type=="GET")file=file+"?"+text;XMLHttp_Object.open(type,file,true);if(type=="POST")XMLHttp_Object.setRequestHeader("Content-Type","application/x-www-form-urlencoded");XMLHttp_Object.onreadystatechange=function ResponseReq(){if(XMLHttp_Object.readyState==4)func(XMLHttp_Object.responseText)};if(type=="GET")text=null;XMLHttp_Object.send(text)}
	//share tongji handle
	function share_ajax(val){		
		ajax('post','../deal.php','res=' + val,
		function(data)
		{				
			data = null;
		});
	} 	