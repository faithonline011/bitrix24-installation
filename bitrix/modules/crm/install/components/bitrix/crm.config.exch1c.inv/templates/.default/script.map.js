{"version":3,"sources":["script.js"],"names":["BX","CrmExch1cInvManager","settings","this","prototype","PropertyTypeChange","fieldType","tabNumber","typeControl","valueControlPrefix","arHideControlPrefix","VALUE1","VALUE2","VALUE3","value","i","control","style","display","BuildRekvRow","rowId","rowInfo","self","tr","create","tdTitle","attrs","class","fieldTitleId","fieldId","newoption","toString","replace","inputTitle","id","type","name","util","htmlspecialchars","maxlength","appendChild","text","tdValue","param1","param2","typeSelect","events","change","Option","options","selectedIndex","fieldValue","f","orderFieldsList","orderFieldsNameList","value2Select","length","personTypeId","propertyFieldsList","propertyFieldsNameList","value3Select","value1Input","addRekv","field","container","parentNode","nextNumber","NAME","TYPE","VALUE","BuildRekvBlocks","lastFieldInfo","td","block","title","colspan","html","rekvFields","fieldName","j","k","fields","nRekv","n","bContainer","buttonAddRekv","click","substring","HideEmptyFields","arEmptyFields","tabFields","AddShowEmptyFieldsButton","fieldContainer","fieldSibling","button","findNextSibling","tag","ShowEmptyFields","insertBefore","ShowAccountNumberWarning","tabId","inpName","tab","inp","findChild","attr","span"],"mappings":"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","file":""}