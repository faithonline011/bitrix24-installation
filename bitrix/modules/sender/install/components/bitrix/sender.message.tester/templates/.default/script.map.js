{"version":3,"file":"script.map.js","names":["window","BX","namespace","Sender","Message","Tester","Helper","prototype","classNameBtnWait","eventNameSend","init","params","this","context","containerId","id","actionUri","mess","ajaxAction","AjaxAction","messageCode","lastRecipients","type","types","button","getNode","result","buttonValidation","enablePhoneVerification","initSelector","bind","Bitrix24","PhoneVerify","getInstance","startVerify","callback","verified","send","mandatory","validate","value","mail","validateEmail","phone","validatePhone","selector","UI","TileSelector","getById","Error","addCustomEvent","events","search","onSearch","buttonSelect","onButtonSelect","buttonSelectFirst","onButtonSelectFirst","title","searchTitleMail","searchTitlePhone","showSearcher","data","name","categoryLast","items","map","code","setSearcherData","split","forEach","trim","addTile","match","printResult","consent","node","isSuccess","errorCode","self","errorHandler","ErrorHandler","onError","text","resultErrors","join","consentSuccess","testSuccess","testSuccessPhone","textContent","removeWaitingIndicator","removeClass","addWaitingIndicator","addClass","convertDataFromPostToJson","key","hasOwnProperty","test","newKey","item","replace","reduce","accum","currentKey","isPlainObject","isNotEmptyObject","action","resultNode","list","getTilesId","filter","length","testEmpty","message","onCustomEvent","request","onsuccess","onfailure","messageId","messageData"],"sources":["script.js"],"mappings":"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"}