<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

use Bitrix\Main\Localization\Loc;

$arActivityDescription = [
	'SORT' => 300,
	'NAME' => Loc::getMessage('RPA_BP_REV_DESCR_NAME'),
	'DESCRIPTION' => Loc::getMessage('RPA_BP_REV_DESCR_DESCRIPTION_MSGVER_1'),
	'TYPE' => ['activity', 'robot_activity', 'rpa_activity'],
	'CLASS' => 'RpaReviewActivity',
	'JSCLASS' => 'BizProcActivity',
	'CATEGORY' => [
		'ID' => 'document',
	],
	'FILTER' => [
		'INCLUDE' => [['rpa']],
	],
	'RETURN' => [
		'TaskId' => [
			'NAME' => 'ID',
			'TYPE' => 'int',
		],
		'LastReviewer' => [
			'NAME' => Loc::getMessage('RPA_BP_REV_DESCR_LAST_REVIEWER'),
			'TYPE' => 'user',
		],
	],
	'ROBOT_SETTINGS' => [
		'CATEGORY' => 'employee',
		'RESPONSIBLE_PROPERTY' => 'Responsible',
	],
];