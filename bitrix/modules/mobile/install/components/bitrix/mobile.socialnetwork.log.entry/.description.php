<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

$arComponentDescription = array(
	"NAME" => GetMessage("SONET_SLEM_TEMPLATE_NAME2"),
	"DESCRIPTION" => GetMessage("SONET_SLEM_TEMPLATE_DESCRIPTION2"),
	"ICON" => "/images/icon.gif",
	"SORT" => 250,
	"PATH" => array(
		"ID" => "communication",
		"CHILD" => array(
			"ID" => "socialnetwork",
			"NAME" => GetMessage("SONET_NAME")
		)
	)
);
?>