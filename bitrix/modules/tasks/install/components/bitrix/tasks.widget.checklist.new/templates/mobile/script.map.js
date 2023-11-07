{"version":3,"sources":["script.js"],"names":["BX","Mobile","Tasks","CheckList","options","this","renderTo","optionManager","OptionManager","treeStructure","buildTreeStructure","items","loader","Loader","target","setOptionManager","saveStableTreeStructure","setListeners","bindControls","render","handleTaskOptions","BXMobileApp","Events","postToComponent","taskId","entityId","taskGuid","isEditMode","prototype","eventNames","addAuditor","onMemberSelectedEvent","addAccomplice","addAttachment","onAddAttachmentEvent","removeAttachment","onRemoveAttachmentEvent","attachFiles","onAttachFilesEvent","removeFiles","onRemoveFilesEvent","fakeAttachFiles","onFakeAttachFilesEvent","fakeRemoveFiles","onFakeRemoveFilesEvent","rename","onRenameEvent","remove","onRemoveEvent","tabIn","onTabInEvent","tabOut","onTabOutEvent","important","onImportantEvent","toAnotherChecklist","onToAnotherCheckListEvent","Object","keys","forEach","name","addCustomEvent","eventData","apply","bind","disableAllUpdateModes","onAddCheckListClick","document","onDocumentMouseDown","onDocumentMouseUp","MobileCheckListItem","setNodeId","length","self","descendants","DESCENDANTS","key","add","makeTree","root","fields","FIELDS","action","ACTION","tree","setTotalCount","getTotalCount","getDescendants","descendant","getTreeStructure","layoutToRender","getLayout","converted","append","text","search","replace","message","alert","UI","Alert","color","Color","PRIMARY","icon","Icon","DANGER","getContainer","activateLoading","show","addClass","parentElement","window","proxy","disableTabbing","deactivateLoading","removeClass","unbind","hide","e","keyCode","preventDefault","getDestructedTreeStructure","memberTypes","accomplice","auditor","value","id","TYPE","type","NAME","util","htmlspecialcharsback","nameFormatted","destructedTreeStructure","MODIFY","checkCanUpdate","REMOVE","checkCanRemove","TOGGLE","checkCanToggle","push","setStableTreeStructure","loadStableTreeStructure","getStableTreeStructure","rerender","panel","dragndrop","lastChild","removeChild","checkActiveUpdateExist","addCheckList","then","newCheckList","sendAddAjaxAction","addCheckListItem","Event","EventEmitter","emit","getCanAdd","p","Promise","title","getDescendantsCount","TITLE","resolve","button","focusElement","closest","validAreaDetected","validAreas","area","userId","entityType","userPath","prefix","mode","commonAction","ajaxActions","diskOptions","folderId","diskFolderId","urls","diskUrls","showCompleteAllButton","collapseOnCompleteAll","showCompleted","SHOW_COMPLETED","defaultMemberSelectorType","DEFAULT_MEMBER_SELECTOR_TYPE","showOnlyMine","stableTreeStructure","slider","SidePanel","Instance","getTopSlider","getUserPath","getUserId","getPrefix","canAdd","getCanDrag","canDrag","getShowCompleteAllButton","getCollapseOnCompleteAll","getCanAddAccomplice","canAddAccomplice","getShowCompleted","setShowCompleted","updateTaskOption","getShowOnlyMine","setShowOnlyMine","getDefaultMemberSelectorType","option","ajax","runComponentAction","data","response","ProgressRound","arguments","__proto__","constructor","getStatusCounter","statusCounter","Math","round","getValue","getMaxValue","getStatus","status","getStatusType","Status","COUNTER","create","props","className","INCIRCLE","getStatusPercent","PERCENT","container","children","getTextAfter","getTextBefore","getBar","animateProgressBar"],"mappings":"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","file":"script.map.js"}