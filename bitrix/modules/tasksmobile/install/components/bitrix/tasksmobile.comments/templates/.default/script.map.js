{"version":3,"file":"script.map.js","names":["exports","main_core","main_core_events","tasks_result","namespace","Reflection","Comments","babelHelpers","createClass","key","get","comments","stub","options","classCallCheck","this","userId","taskId","guid","canReadCommentsOnInit","timeout","timeoutSec","commentsList","unreadComments","Map","commentsToRead","initTextField","initCommentsBlock","initTaskResultManager","sendEvents","bindEvents","value","BX","MobileUI","TextField","defaultParams","window","show","EventEmitter","subscribe","events","MOBILE_UI_TEXT_FIELD_SET_PARAMS","commentsBlock","firstComment","querySelector","resolveVisibility","block","visibleBlock","arguments","length","undefined","hiddenClass","Dom","hasClass","removeClass","addClass","_ref","resultComments","isClosed","ResultManager","getInstance","initResult","context","logId","params","log_id","ts","currentTs","bPull","BXMobileApp","onCustomEvent","_this","event","_event$getData","getData","_event$getData2","slicedToArray","xmlId","list","concat","canCheckVisibleComments","_event$getData3","_event$getData4","id","data","author","messageFields","AUTHOR","Number","set","Date","_event$getData5","_event$getData6","commentId","getCommentsCount","_event$getData7","_event$getData8","has","sendOnCommentsReadEvent","size","setTimeout","readComments","addCustomEvent","isCommentsTab","tab","scroll","GetWindowScrollPos","position","top","scrollTop","bottom","GetWindowInnerSize","innerHeight","checkVisibleComments","addLivefeedLongTapHandler","likeNodeClass","newCommentsCount","Events","postToComponent","clear","ajax","runAction","parameters","IS_REAL_VIEW","default","Event","Tasks"],"sources":["script.js"],"mappings":"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"}