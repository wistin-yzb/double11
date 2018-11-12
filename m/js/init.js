// index init
var domain_url  = window.location.href.split('#')[0];
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
			 wx.hideAllNonBaseMenuItem();
		});			  
	 },
	 error:function(res){
	 	alert('ajaxrequestfail：'+JSON.stringify(res));
	 }
});