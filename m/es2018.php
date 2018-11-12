<?php
header('Content-Type:text/html;charset=utf-8');
date_default_timezone_set('PRC');
set_time_limit(30);
$__money = $_REQUEST ['__money'];
$__st = $_REQUEST['__st']; 
$__suo = $_REQUEST['suo']; 
include('include.php');
$domain = $_SERVER['HTTP_HOST'];
if(!$domain){
	exit;
}
//分享域名随机获取
$org_domain = $org_domain[rand(0,count($org_domain)-1)];
$ksyun_domain = $ksyun_domain[rand(0,count($ksyun_domain)-1)];
$versionrd = get_rand_str(1,6) . rand(1,9) . (time() * 3);
$share_ksyun_link = "http://".$ksyun_domain.'/es2018.html?suo=ft&post=M2QoemkUWGq6uMOWAk8gkqqYQSm20XuUM2wM6SswWKK0XEY8W2kq2IqsKEO678&version='.$versionrd.'#_rdksy=@*)_sy'.time();
$share_org_link = "http://".get_rand_str(1,6).$org_domain.'/v6'.get_rand_str(1,6).'.html?suo=ft&appid=M2QoemkUWGq6uMOWAk8gkqqYQSm20XuUM2wM6SswWKK0XEY8W2kq2IqsKEO0345&version='.$versionrd.'#_rdorg=@*)_rg'.time();

?>
<!DOCTYPE html>
<html>
<head>
<script src="./js/baidu.js?v=1.4"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf8">
<title></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0 , maximum-scale=1.0, user-scalable=0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<meta name="apple-itunes-app" content="app-id=477927812">
<style type="text/css">
* {padding: 0;	margin: 0}
body {font-size: 16px;line-height: 1.4;font-family: -apple-system-font, Helvetica Neue, sans-serif}
.toast {
	transition-duration: .2s;
	transform: translate(-50%, -50%);
	margin: 0;
	top: 45%;
	z-index: 2000;
	position: fixed;
	width: 7.6em;
	min-height: 7.6em;
	left: 50%;
	background: hsla(0, 0%, 7%, .7);
	text-align: center;
	border-radius: 5px;
	color: #fff
}
.toast.toast--visible {opacity: 1;visibility: visible}
.icon_toast.loading {margin: 30px 0 0;width: 38px;height: 38px;vertical-align: baseline}
.icon_toast {font-size: 55px;color: #fff}
.loading {
	display: inline-block;
	animation: e 1s steps(12) infinite;
	background: transparent
		url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=)
		no-repeat;
	background-size: 100%
}
i {font-style: italic}
@keyframes e { 0%{
	-webkit-transform: rotate(0deg);
	transform: rotate(0deg)
}
to {
	-webkit-transform: rotate(1turn);
	transform: rotate(1turn)
}
}
/*style2*/
html, body, div, p, ul, li, span, a {margin: 0;padding: 0;}
a {
	text-decoration: none;
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	-webkit-user-select: none;
	-moz-user-focus: none;
	-moz-user-select: none;
}
a, button, input {outline: none;}
input::-webkit-input-placeholder {color: #b1b1b1;}
body {background-color: #2c2449;}
ul, ol, li {list-style: none;}
.hb_content {
	position: relative;
	width: 100%;
	max-width: 750px;
	height: 100%;
	background-image: url(./img/bg.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top center;
	z-index: 1;
}
.hb_title {
	width: 100%;
	text-align: center;
}
.hb_title img {
	width: 80%;
	display: block;
	margin: auto;
}
.hb_money {
	width: 100%;
	/*padding-top: 6px;*/
	text-align: center;
	font-size: 16px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}
.number {
	font-size: 28px;
	color: #e82100;
	font-weight: bold;
	padding-left: 2px;
	padding-right: 2px;
}
.hb_list {
	width: 80%;
	margin: 0 auto;
	/*padding-top: 10px;*/
}
.hb_list ul {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}
.hb_list li {
	width: 30%;
	padding-bottom: 8px;
	opacity: 0;
}
.hb_list li:nth-child(1), .hb_list li:nth-child(7) {
	margin-left: -50px;
}
.hb_list li:nth-child(2), .hb_list li:nth-child(8) {
	margin-top: -50px;
}
.hb_list li:nth-child(3), .hb_list li:nth-child(9) {
	margin-right: 50px;
}
.hb_list li:nth-child(4) {
	margin-left: 50px;
}
.hb_list li:nth-child(5) {
	margin-top: -50px;
}
.hb_list li:nth-child(6) {
	margin-right: -50px;
}
.hb_list li img {
	width: 100%;
}
.hb_bot {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.hb_bot p {
	width: 55%;
	height: 35px;
	line-height: 35px;
	border: 1px solid #7d72a4;
	background-color: #2c2449;
	border-radius: 3px;
	text-align: center;
	font-size: 16px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}
.button_open {
	animation: changeRotate 1s 1;
	transform-style: preserve-3d;
}
@keyframes changeRotate { 
	0% {
		transform: rotateY(0deg) scale(1.2);
	}
	100%{
	  transform:rotateY(360deg)scale(1);
	}
}
.pop_hb {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: none;
	z-index: 2;
}
.pophb_con {
	position: absolute;
	top: 0;
	left: 15%;
	width: 75%;
	height: 350px;
	margin-top: -150px;
	padding-top: 20px;
	background-color: #fff;
	border-radius: 5px;
	box-sizing: border-box;
	opacity: 0;
	z-index: 3;
}
.pophb_title {
	width: 100%;
	padding-bottom: 10px;
	font-size: 30px;
	font-weight: bold;
	color: #19bf3c;
	text-align: center;
}
.pophb_money {
	width: 220px;
	height: 114px;
	margin: 0 auto;
	background-image: url(./img/money_bg.png);
	background-repeat: no-repeat;
	background-size: 100%;
}
.get_money {
	padding-left: 75px;
	padding-top: 18px;
	font-size: 24px;
	color: #ee112a;
	font-weight: bold;
}
.get_money span {
	font-size: 36px;
}
.sm_title {
	margin-left: 75px;
	width: 110px;
	height: 20px;
	line-height: 20px;
	font-size: 12px;
	color: #cf680c;
	background-color: #fff;
	border-radius: 10px;
	text-align: center;
}
.button1, .button2 {
	display: block;
	width: 208px;
	height: 36px;
	margin: 10px auto 0;
	text-align: center;
	font-size: 16px;
	color: #fff;
	border-radius: 3px;
}
.button1 {
	background-color: #f74d2a;
	border: 1px solid #fc451f;
}
.button2 {
	background-color: #19bf3c;
	border: 1px solid #15ae35;
}
.pophb_notice {
	position: absolute;
	top: 0;
	left: 50%;
	width: 292px;
	height: 364px;
	margin-left: -146px;
	margin-top: -182px;
	background-image: url(./img/hb_bg.png);
	background-repeat: no-repeat;
	background-size: 100%;
	opacity: 0;
	z-index: 4;
}
.notice_title {
	width: 100%;
	padding-top: 60px;
	text-align: center;
	font-size: 18px;
	font-weight: bold;
	color: #2e2e2e;
}
.notice_money {
	width: 100%;
	font-size: 40px;
	font-weight: bold;
	color: #ee112a;
	text-align: center;
}
.notice_con {
	width: 100%;
	padding-top: 45px;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}
.notice_con span {
	color: #fff000;
	font-size: 22px;
}
.notice_btn {
	padding-top: 60px;
	width: 100%;
	text-align: center;
}
.notice_btn img {
	width: 110px;
}
.pop_share {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 9;
	text-align: right;
	display: none;
}
.pop_share img {
	width: 90%;
}
.notice_close {
	position: absolute;
	right: -5px;
	top: -5px;
	width: 32px;
	height: 32px;
	line-height: 32px;
	background-color: rgba(255, 255, 255, 1);
	font-size: 18px;
	color: #2e2e2e;
	border-radius: 50%;
	text-align: center;
}
.allmoney {
	width: 100%;
	text-align: center;
	padding-top: 10px;
	padding-bottom: 10px;
	font-size: 16px;
	color: #2e2e2e;
}
.allmoney span {
	color: #ee112a;
	font-weight: bold;
}
.weui_dialog {
	position: fixed;
	z-index: 999999999;
	width: 85%;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	background-color: #fafafc;
	text-align: center;
	border-radius: 3px;
	font-family: arial
}
.weui_mask {
	position: fixed;
	z-index: 1;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, .6)
}
.weui_dialog_hd {
	padding: 0em 0 .3em
}
.weui_dialog_bd {
	padding: 0 20px;
	font-size: 16px;
	color: #888;
	word-wrap: break-word;
	word-break: break-all
}
.weui_dialog_ft {
	position: relative;
	line-height: 42px;
	margin-top: 20px;
	font-size: 17px;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex
}
.weui_dialog_ft:after {
	content: " ";
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 1px;
	border-top: 1px solid #d5d5d6;
	color: #d5d5d6;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5)
}
.weui_btn_dialog.primary {
	color: #0bb20c
}
.weui_dialog_ft a {
	display: block;
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	-ms-flex: 1;
	flex: 1;
	color: #3cc51f;
	text-decoration: none;
	-webkit-tap-highlight-color: transparent
}
.weui_dialog_title {
	font-weight: 400;
	font-size: 17px;
	color: #000
}
.img_dialog {
	background: initial;
}
.img_dialog .weui-dialog__bd {
	padding: 0;
}
.img_dialog .weui-dialog__bd div {
	width: 100%;
	padding-bottom: 83.5%;
	background-size: 100% 100%;
}
.img_dialog .weui-dialog__ft {
	position: absolute;
	top: 77.4%;
	height: 16%;
	width: 100%;
}
.img_dialog .weui-dialog__ft:after {
	border-top-width: 0;
}
.img_dialog .weui-dialog__ft a.weui-dialog__btn {
	display: block;
	width: 67.4%;
	margin: 0 auto;
	flex: initial;
	-webkit-flex: initial;
	-webkit-box-flex: initial;
}
</style>
<link href="./css/weui.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="https://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script>define = null;require = null;</script>
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script type="text/javascript" src="https://ip.ws.126.net/ipquery"></script>
</head>
<body>
	<div class="hb_content">
		<div class="hb_title">
			<img src="./img/banner.gif" alt="">
		</div>
		<div class="hb_money">
			已获得￥：<span class="number"><?php echo $__money;?></span>元
		</div>
		<div class="hb_list">
			<ul>
				<li style="opacity: 1; margin-left: 0px; margin-top: 0px;"><img
					src="./img/hb_icon0.png" alt=""></li>
				<li style="opacity: 1; margin-top: 0px;"><img
					src="./img/hb_icon1.png" alt=""></li>
				<li style="opacity: 1; margin-top: 0px; margin-right: 0px;"><img
					src="./img/hb_icon0.png" alt=""></li>
				<li style="opacity: 1; margin-left: 0px;"><img
					src="./img/hb_icon0.png" alt=""></li>
				<li style="opacity: 1; margin-top: 0px;"><img
					src="./img/hb_icon0.png" alt=""></li>
				<li style="opacity: 1; margin-right: 0px;"><img
					src="./img/hb_icon0.png" alt=""></li>
				<li style="opacity: 1; margin-left: 0px; margin-top: 0px;"><img
					src="./img/hb_icon0.png" alt=""></li>
				<li style="opacity: 1; margin-top: 0px;"><img
					src="./img/hb_icon0.png" alt=""></li>
				<li style="opacity: 1; margin-top: 0px; margin-right: 0px;"><img
					src="./img/hb_icon0.png" alt=""></li>
			</ul>
		</div>
		<div class="hb_bot">
			<p>
				还有<span class="number">0</span>次机会
			</p>
		</div>
	</div>
	<div class="pop_hb">
		<div class="pophb_con">
			<div class="pophb_title">恭喜您！</div>
			<div class="pophb_money">
				<div class="get_money">
					￥<span></span>元
				</div>
				<!--<div class="sm_title">满8可领取</div>-->
			</div>
			<div class="allmoney">
				您目前总获得：<span></span>元
			</div>
			<button class="button2">不玩了，立即提现</button>
			<button class="button1">金额累计，继续翻</button>
		</div>
		<div class="pophb_notice">
			<div class="notice_close">X</div>
			<div class="notice_title">当前金额</div>
			<div class="notice_money">
				￥<span></span>
			</div>
			<!--<div class="notice_con">还差<span></span>即可领取</div>-->
			<div class="notice_btn">
				<img src="./img/button.png" alt="">
			</div>
		</div>
	</div>
	<div class="pop_share" style="text-align: center;display:block;">
		<img src="./img/share_qun.gif" alt="">
	</div>
	<audio src="./img/voice.mp3" class="audioPlay" style="display: none;"></audio>
	<div class="weui-dialog-box" style="z-index: 9999;">
		<div class="weui-mask"></div>
		<div class="weui-dialog">
			<div class="weui-dialog__bd">
				<img style="width: 30px" src="http://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rN41ibuV99MPdQAGo6WSIP2aicKRzEKUtaxg/0"><br>
				<b style="font-size: 20px; color: red">正在查询红包数据...</b>
			</div>
			<div class="weui-dialog__ft">
				<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary"></a>
			</div>
		</div>
	</div>
	<div class="toast loading_toast toast--visible">
		<div><i class="loading icon_toast"></i></div>
		<p class="toast_content">正在加载中...</p>
	</div>
	<input type="hidden" id="__st" name="__st" value="<?php echo $__st;?>"/>
	<input type="hidden" id="share_ksyun_link" name="share_ksyun_link" value="<?php echo $share_ksyun_link;?>"/>	
	<input type="hidden" id="share_org_link" name="share_org_link" value="<?php echo $share_org_link;?>"/>	
	<script src="./js/common.js?v=10.94"></script>
	<script>if (!window.navigator.userAgent.match(/MicroMessenger/i)) { window.location.href = "http://www.baidu.com/";}</script>
</body>
</html>