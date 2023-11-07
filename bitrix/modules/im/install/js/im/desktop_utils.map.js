{"version":3,"sources":["desktop_utils.js"],"names":["BX","desktopUtils","this","runningCheckTimeout","checkUrl","_openedBxLink","prototype","canDownload","BXDesktopSystem","DownloadFile","downloadFile","url","name","URL","document","baseURI","href","runningCheck","successCallback","failureCallback","successOnlyWithNewApp","dateCheck","Date","MessengerCommon","isDesktop","BXIM","desktopStatus","desktopVersion","alreadyRunFailureCallback","checkElement","create","attrs","src","data-id","props","className","events","error","checkId","getAttribute","clearTimeout","remove","load","body","appendChild","setTimeout","goToBx","match","replace","desktopProtocolVersion","location","hostname","_setOpenedBxLink","onCustomEvent","bind","isChangedLocationToBx","encodeParams","params","type","isPlainObject","stringParams","first","i","decodeParams","encodedParams","result","isNotEmptyString","chunks","split","length","encodeParamsJson","encodeURIComponent","JSON","stringify","e","console","decodeParamsJson","parse","decodeURIComponent"],"mappings":"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","file":"desktop_utils.map.js"}