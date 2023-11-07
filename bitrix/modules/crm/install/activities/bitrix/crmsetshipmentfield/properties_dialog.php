<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var \Bitrix\Bizproc\Activity\PropertiesDialog $dialog */

foreach ($dialog->getMap() as $fieldId => $field):
?>
<tr>
	<td align="right" width="40%">
		<?if ($field['Required']):?><span class="adm-required-field"><?endif?>
		<?=htmlspecialcharsbx($field['Name'])?>:
		<?if ($field['Required']):?></span><?endif?>
	</td>
	<td width="60%">
		<? $filedType = $dialog->getFieldTypeObject($field);

		echo $filedType->renderControl(array(
			'Form' => $dialog->getFormName(),
			'Field' => $field['FieldName']
		), $dialog->getCurrentValue($field['FieldName']), false, 0);
		?>
	</td>
</tr>
<?endforeach;?>