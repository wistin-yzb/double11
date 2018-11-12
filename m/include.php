<?php
$ksyun_domain = array(
  'wx620181122efa34.ks3-cn-guangzhou.ksyun.com/mobile',
);
$org_domain = array(
		'fsdk29181111.eatuo.com',
		'abc.jiaoyiruanjian.org',
		'wxerter12323.jiaoyiruanjian.org',
		'sdvsd3453453.jiaoyiruanjian.org',
		'456fvfvr56.jiaoyiruanjian.org',
		'3453rgrtg454.jiaoyiruanjian.org',
		'45645rgrgt.jiaoyiruanjian.org',
		'454rtgrtgtry.jiaoyiruanjian.org',
		'yydf.jiaoyiruanjian.org',
		'aac222.jiaoyiruanjian.org',
		'aac222f456.jiaoyiruanjian.org',
);

function get_rand_str($min,$max)
{
	$str = '';
	$rand = rand($min,$max);
	for($i = 0; $i < $rand; $i ++)
	{
		$rand2 = rand(0,1) ? rand(65,90) : rand(97,122);
		$str .= chr($rand2);
	}
	return $str;
}

function pre($array){
	echo '<pre>';
	var_dump($array);
	echo '</pre>';
	exit;
}