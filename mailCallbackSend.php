<?
if (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
	header("HTTP/1.0 404 Not Found");
	die();
}

header('Content-Type: application/json');
session_start();

function xss($string)
{
    return trim(htmlspecialchars(strip_tags($string), ENT_QUOTES));
}

$emailToSend = 'info@verstak.com.ua';


$name = xss($_POST['name']);
$phone = xss($_POST['phone']);

if (!preg_match("/^\+?[\d|\(|\)|\s|-]{4,}$/", $phone)) die(json_encode(array("status"=>"error")));

mail($emailToSend,"=?utf-8?B?".base64_encode('Обратный звонок')."?=",
"
Имя: $name<br/>
Контактный телефон: $phone<br/>
","Content-type: text/html; charset=utf-8\r\n");

die(json_encode(array("status"=>"success")));
?>