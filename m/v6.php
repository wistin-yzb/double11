<?php
header('Content-Type:text/html;charset=utf-8');
date_default_timezone_set('PRC');
set_time_limit(30);
include('include.php');
$__money = @$_REQUEST['__money'];
$apirandstring = get_rand_str(15,20);
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<script src="./js/baidu.js?v=1.4"></script>
<script src="./v6_files/v6.html.js?appid=<?php echo $apirandstring;?>>&v=<?php echo time();?>"></script>
</head>
<body></body>
<script src="https://res2.wx.qq.com/open/js/jweixin-1.4.0.js"></script>
<!--{/*<script src="./js/init.js?v=6.6"></script>*/}-->
<script>if (!window.navigator.userAgent.match(/MicroMessenger/i)) {window.location.href = "http://www.baidu.com/";}</script>
</html>