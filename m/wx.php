<?php
//也可以使用*通配符，来允许所有的域名访问
header("Access-Control-Allow-Origin:*");

$domain_url = urldecode($_POST['domain_url']); //当前页面路径
$wx_config_info = getwxconfiginfo($domain_url);

//获取微信配置信息
function getwxconfiginfo($domain_url){	 
		//$appid = 'wx5e606520aac26875';
		//$appsecret = '9e807c196cf6cf88b23dc02c88e0ae7e';
		//$appid = 'wxcc25e743d871491c';
		//$appsecret = 'cf25c60d878bbba24e1ef768908c2add';
		//$appid = 'wxf0fd57095dc1c14c';
		//$appsecret = 'ece75492eaa6b8a664fdc7825ec23498';
		//$appid = 'wx44ea9b65d2ceb0fb';
		//$appsecret = '48ae5a627eeadd08edeb8e02bad0df50';
		$appid = 'wx18d330ffff95fd3f';
		$appsecret = '98dde848b115b44ea0926340c58feb4e';
		$timestamp = time();
		$noncestr = get_random_str(16);
		
		$domain_uri = $_SERVER ['HTTP_HOST'];
		$domain_arr = explode('.',$domain_uri,2);
		$prefix = $domain_arr[0];
		$short_domain = $domain_arr[1];
		//$getfullurl  = getFullUrl(); 
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////
		$wx_cache = 'wx_cache/' . $short_domain . '-' . date('m-d-H') . '.txt';
		if(!file_exists($wx_cache))
		{   
		$wx_access_token_txt = file_get_contents('wx_access_token.txt');
		$wx_expire_time_txt = file_get_contents('wx_expire_time.txt');
		if($wx_access_token_txt&&$wx_expire_time_txt>time()){
			$access_token = $wx_access_token_txt;
		}else{
			$url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' . $appid . '&secret=' . $appsecret;
			$json = https_request($url);
			$arr = json_decode($json,true);
			if($arr['access_token']){
				$access_token = $arr['access_token'];
				file_put_contents('wx_access_token.txt',$access_token);
				file_put_contents('wx_expire_time.txt',time()+7000);
			}else{exit();}
		}
		$wx_jsapi_ticket_txt = file_get_contents('wx_jsapi_ticket.txt');
		$wx_jsapi_ticket_expire_time_txt = file_get_contents('wx_jsapi_ticket_expire_time.txt');
		if($wx_jsapi_ticket_txt&&$wx_jsapi_ticket_expire_time_txt>time()){
			$ticket = $wx_jsapi_ticket_txt;
		}else{
			$url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' . $access_token . '&type=jsapi';
			$json = https_request($url);
			$arr = json_decode($json,true);
			$ticket = $arr['ticket'];
			file_put_contents('wx_jsapi_ticket.txt',$ticket);
			file_put_contents('wx_jsapi_ticket_expire_time.txt',time()+7000);
		}
		/////////////////////////////////////////////////////////////////////////////////////////////////////
		
		$wx_cache_str = $appid . '|' . $timestamp . '|' . $noncestr  . '|' . $ticket;
		file_put_contents($wx_cache,$wx_cache_str);
		}else{
			$str = file_get_contents($wx_cache);
			$arr = explode('|',$str);
			$appid = $arr[0];
			$timestamp = $arr[1];
			$noncestr = $arr[2];
			$ticket = $arr[3];
		}
		$str = "jsapi_ticket=$ticket&noncestr=$noncestr&timestamp=$timestamp&url=$domain_url";		
		$signature =  sha1($str);
		$sharetitle = '现金红包大放送，好礼送不停，疯抢开购了!';
		$sharedesc = '新一轮的双十一就要来临了,你还在为不知道买什么而发愁吗?那就赶紧来金谷物美来选出你心仪的宝贝吧.';
		$shareimgurl = 'https://cdn.qhcyv.cn/ntmpl/07/hb_icon0.png';
		$sharelink = $domain_url;
		$configarr = array(
				'appid'=>$appid,
				'timestamp'=>$timestamp,
				'noncestr'=>$noncestr,
				'signature'=>$signature,
				'sharetitle'=>$sharetitle,
				'sharedesc'=>$sharedesc,
				'shareimgurl'=>$shareimgurl,
				'sharelink'=>$sharelink,
		);
		$configjson = json_encode($configarr);
		echo $configjson;
}

function https_request($url,$data = NULL)
{
	$curl = curl_init();
	curl_setopt($curl,CURLOPT_URL,$url);
	curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,false);
	curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,false);
	if (!empty($data))
	{
		curl_setopt($curl,CURLOPT_POST,1);
		curl_setopt($curl,CURLOPT_POSTFIELDS,$data);
	}
	curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
	$output = curl_exec($curl);
	curl_close($curl);
	return $output;
}

function get_random_str($len = 32)
{
	$str = '';
	$start = ord('a');
	for($i = 0; $i < $len; $i ++)
	{
		$num = mt_rand($start,$start + 25);
		$str .= chr($num);
	}
	return $str;
}

function pre($array){
	echo '<pre>';
	var_dump($array);
	echo '</pre>';
	exit();
}

function getFullUrl(){
	$requestUri = '';
	if (isset($_SERVER['REQUEST_URI'])) {
		$requestUri = $_SERVER['REQUEST_URI'];
	} else {
		if (isset($_SERVER['argv'])) {
			$requestUri = $_SERVER['PHP_SELF'] .'?'. $_SERVER['argv'][0];
		} else if(isset($_SERVER['QUERY_STRING'])) {
			$requestUri = $_SERVER['PHP_SELF'] .'?'. $_SERVER['QUERY_STRING'];
		}
	}
	$scheme = empty($_SERVER["HTTPS"]) ? '' : ($_SERVER["HTTPS"] == "on") ? "s" : "";
	$protocol = strstr(strtolower($_SERVER["SERVER_PROTOCOL"]), "/",true) . $scheme;
	$port = ($_SERVER["SERVER_PORT"] == "80") ? "" : (":".$_SERVER["SERVER_PORT"]);
	$_fullUrl = $protocol . "://" . $_SERVER['SERVER_NAME'] . $port . $requestUri;
	return $_fullUrl;
}
?>