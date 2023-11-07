{"version":3,"sources":["logic.js"],"names":["BX","namespace","Tasks","Component","TasksWidgetButtonsTask","Util","Widget","extend","sys","code","options","goToListOnDelete","methods","construct","this","callConstruct","vars","data","option","can","publicMode","overtime","buttonActionEnabled","delegateReload","time","TIME_ELAPSED","parseInt","bindEvents","getDayPlan","bindDelegateControl","passCtx","onMenuOpen","onButtonPressed","node","PopupMenu","show","getTaskMenu","closeByEsc","action","type","isNotEmptyString","doDynamicAction","instances","dayplan","taskData","clone","taskId","ID","DayPlan","registerDispatcher","id","bindEvent","delegate","showTimerConfirm","onTaskTimerToggled","onTaskPlanToggled","onTaskTimerTick","showUserSelector","userSelector","UI","EntitySelector","Dialog","targetNode","control","enableSearch","multiple","context","entities","emailUsers","events","event","item","getData","userId","getId","bind","doMenuAction","menu","e","window","location","SidePanel","Instance","open","InfoHelper","isLimit","limitAnalyticsLabels","module","source","callbackData","serviceUrl","opt","popupWindow","close","args","togglePanelActivity","force","addToPlan","reFetchTaskData","top","Notification","Center","notify","content","message","doDynamicTaskAction","taskCompletePromise","Promise","taskStatus","isParentScrumTask","loadExt","then","isUndefined","Scrum","TaskStatus","groupId","parentTaskId","performActionOnParentTask","result","fulfill","showDod","catch","reject","update","self","toLowerCase","ajax","runComponentAction","mode","parameters","response","fireGlobalTaskEvent","errors","alert","ENTITY_SELECT","reload","stopTimer","updateTaskData","DATA","updatePlanner","ACTION","destroy","mergeEx","updateButtons","eventTaskData","STAY_AT_PAGE","STATUS","COMPLETE","map","TIMER_IS_RUNNING_FOR_CURRENT_USER","pause","PAUSE","start","START","complete","approve","APPROVE","disapprove","DISAPPROVE","edit","EDIT","RENEW","toggleCSSMap","partialData","estimate","TIME_ESTIMATE","isNaN","changeCSSFlag","innerHTML","formatTimeAmount","way","addToData","previousTask","body","replace","title","util","htmlspecialchars","confirm","push","text","className","onclick","DELEGATE","DEFER","REMOVE","addTabs","length","items","i","LOADER","componentData","requestMethod","requestParams","params","NAME","ONCLICK","delta","call"],"mappings":"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","file":"logic.map.js"}