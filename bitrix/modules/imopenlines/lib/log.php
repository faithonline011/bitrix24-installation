<?php
namespace Bitrix\ImOpenLines;

class Log
{
	public static function write($data, $title = '')
	{
		if (!\Bitrix\Main\Config\Option::get("imopenlines", "debug"))
			return false;

		if (is_array($data))
		{
			unset($data['HASH']);
			unset($data['BX_HASH']);
		}
		else if (is_object($data))
		{
			if ($data->HASH)
			{
				$data->HASH = '';
			}
			if ($data->BX_HASH)
			{
				$data->BX_HASH = '';
			}
		}

		$log = "\n------------------------\n";
		$log .= date("Y.m.d G:i:s")."\n";
		$log .= ($title <> '' ? $title : 'DEBUG')."\n";
		$log .= print_r($data, 1);
		$log .= "\n------------------------\n";

		if (function_exists('BXSiteLog'))
		{
			BXSiteLog("imopenlines.log", $log);
		}
		else
		{
			\Bitrix\Main\IO\File::putFileContents($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/imopenlines.log", $log, \Bitrix\Main\IO\File::APPEND);
		}

		return true;
	}
}