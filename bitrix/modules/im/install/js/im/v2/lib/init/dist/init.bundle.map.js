{"version":3,"file":"init.bundle.map.js","names":["this","BX","Messenger","v2","exports","im_v2_application_core","im_v2_lib_call","im_v2_lib_smileManager","im_v2_lib_user","im_v2_lib_counter","im_v2_lib_logger","im_v2_lib_notifier","im_v2_const","im_v2_lib_market","im_v2_lib_desktop","_started","babelHelpers","classPrivateFieldLooseKey","_initCurrentUser","_initLogger","_initChatRestrictions","_initCounters","_initMarket","_initSettings","InitManager","static","classPrivateFieldLooseBase","Logger","warn","CallManager","init","SmileManager","NotifierManager","DesktopManager","_initCurrentUser2","currentUser","Core","getApplicationData","ApplicationName","quickAccess","UserManager","setUsersToModel","_initLogger2","loggerConfig","setConfig","_initChatRestrictions2","chatOptions","getStore","dispatch","_initCounters2","counters","CounterManager","_initMarket2","marketApps","MarketManager","_initSettings2","settings","Object","defineProperty","value","writable","Lib","Application","Const"],"sources":["init.bundle.js"],"mappings":"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"}