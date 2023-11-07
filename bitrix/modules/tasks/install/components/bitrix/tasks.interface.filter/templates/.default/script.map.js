{"version":3,"file":"script.map.js","names":["BX","FilterEntitySelector","this","_id","_settings","_fieldId","_control","_selector","_inputKeyPressHandler","delegate","keypress","prototype","initialize","id","settings","getSetting","addCustomEvent","window","onCustomEntitySelectorOpen","onCustomEntitySelectorClose","getId","name","defaultval","hasOwnProperty","e","open","field","query","Tasks","Integration","Socialnetwork","NetworkSelector","scope","mode","useSearch","useAdd","parent","popupOffsetTop","popupOffsetLeft","bindEvent","data","setData","util","htmlspecialcharsback","nameFormatted","close","control","closeAll","k","items","create","self","TasksGroupsSelectorInit","menu","selectorId","buttonAddId","pathTaskAdd","indexOf","messages","groups","currentGroup","groupLimit","offsetLeft","setTaskAddHref","groupId","setAttribute","parseInt","text","htmlspecialchars","bind","menuItems","clickHandler","item","onCustomEvent","currentMenuItems","getMenuItems","addMenuItem","onclick","length","getMenuItem","removeMenuItem","innerHTML","i","c","push","class","delimiter","TASKS_BTN_GROUP_SELECT","event","getPopupWindow","setAutoHide","selector","getContainer","substring","PopupMenu","autoHide","closeByEsc","popupWindow","show","SortManager","setSort","dir","gridId","Main","gridManager","undefined","grid","getById","instance","sortByColumn","sort_by","sort_order","getRows","enableDragAndDrop","disableDragAndDrop","ajax","post","add_url_param","GRID_ID","action","by","order","res","JSON","parse","error","location","reload","err","SprintSelector","containerId","params","querySelector","sprintsSelectorDialog","UI","EntitySelector","Dialog","targetNode","width","height","multiple","dropdownMode","enableSearch","compactView","showAvatars","cacheable","preselectedItems","sprintId","entities","options","onlyCompleted","dynamicLoad","dynamicSearch","events","selectedItem","getData","customData","get","selectorTextNode","textContent","ProjectSelector","reloadProject","url","document","href","group_id"],"sources":["script.js"],"mappings":"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"}