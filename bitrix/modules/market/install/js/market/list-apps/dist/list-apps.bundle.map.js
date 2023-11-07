{"version":3,"file":"list-apps.bundle.map.js","names":["this","BX","exports","ui_vue3","market_listItem","market_categories","market_installStore","ui_vue3_pinia","main_core_events","ListApps","components","ListItem","Categories","props","data","selectedTag","selectedOrder","loader","bottomLoader","nextPageLoadWait","options","filter","empty","order","page","analytics","computed","mainUri","$root","length","getMainUri","isCollection","params","IS_COLLECTION","isCategory","IS_CATEGORY","isFavorites","IS_FAVORITES","isInstalledList","IS_INSTALLED","existApps","result","APPS","type","isArray","needSortMenu","SHOW_SORT_MENU","showCategories","showNextPageButton","CUR_PAGE","PAGES","prevCategory","category","CATEGORIES","ITEMS","subCategory","SUB_ITEMS","CODE","CATEGORY","code","name","NAME","showPrevCategory","namePrevCategory","hasOwnProperty","codePrevCategory","currentAppsCount","favNumbers","CURRENT_APPS_CNT","mapState","marketInstallState","mounted","setCurrentSort","setSelectedTag","bindNextPageEvent","bindPopupEvent","initBottomLoader","initTagEars","$refs","marketCatalogCategories","setTimeout","$Bitrix","eventEmitter","subscribe","loadContentFinish","methods","isSelectedTag","tag","SORT_INFO","CURRENT","VALUE","SELECTED_TAG","bind","document","event","needLoadNextPage","currentTarget","nextPage","EventEmitter","onClosePopup","installStep","clearTimeout","timer","reloadSlider","marketCatalogBottomLoader","Loader","target","size","UI","Ears","container","smallSize","noScrollbar","init","setVisibleTags","tags","querySelectorAll","item","isVisible","dataset","visible","isCurrentSort","JSON","stringify","filterTag","getFilter","setTagAnalyticsLabel","showLoader","loadItems","cleanTagAnalyticsLabel","isFilterTag","tagIsVisible","parseInt","show","append","favoriteIndex","ajax","runComponentAction","COMPONENT_NAME","mode","signedParameters","analyticsLabel","analyticsOptions","then","delegate","response","loadItemsFinish","apps","concat","cur_page","pages","apps_count","orderBy","menuItem","CATEGORY_TAGS","categoryTag","hide","emit","nextTick","window","scrollTo","top","marketCatalogTitleBlock","getBoundingClientRect","behavior","scrollingElement","scrollHeight","doc","scrollTop","offsetHeight","targetPosition","pageYOffset","left","pageXOffset","right","bottom","windowPosition","documentElement","clientWidth","clientHeight","mapActions","template","Market","Vue3","Pinia","Event"],"sources":["list-apps.bundle.js"],"mappings":"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"}