{"version":3,"sources":["createprocess.js"],"names":["BX","namespace","Disk","Document","CreateProcess","parameters","EditProcess","apply","this","arguments","typeFile","targetFolderId","serviceCode","additionalQueryParameters","service","popupConfirm","prototype","__proto__","constructor","getSliderQueryParameters","Object","assign","action","getSliderData","process","buildModalWindow","openModal","util","add_url_param","getConfirmMessages","title","message","replace","name","text","saveButton","save","commit","then","response","objectId","showSaveFileDialog","bind","params","extension","nameWithoutExtension","saveDialog","create","props","className","children","id","type","value","self","saveFileDialog","PopupWindowManager","content","overlay","buttons","PopupWindowCustomButton","events","click","newName","focus","addClassName","rename","oldName","onAfterSave","call","object","size","sizeInt","folderName","close","discard","closeModal","autoHide","closeByEsc","onPopupClose","destroy","show","promise","Promise","fulfill","status","data","renameUrl","urlHelper","getUrlRenameFile","buildLinkToCommit","ajax","method","dataType","url","sessid","bitrix_sessid","console","log","getUrlCommitBlank","buildLinkToDiscard","getUrlDiscardBlankFile"],"mappings":"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","file":"createprocess.map.js"}