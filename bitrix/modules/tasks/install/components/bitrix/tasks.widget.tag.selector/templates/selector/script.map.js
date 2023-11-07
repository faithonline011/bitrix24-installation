{"version":3,"file":"script.map.js","names":["this","BX","exports","namespace","Tasks","Component","TasksWidgetTagSelector","extend","sys","code","methods","construct","callConstruct","subInstance","constructor","Items","scope","data","option","groupId","taskId","userName","isScrumTask","tagsAreConverting","preRendered","Util","ItemSet","options","controlBind","itemFx","itemFxHoverDelete","dialog","dialogCallback","bindEvents","callMethod","bindDelegateControl","passCtx","openAddForm","addCustomEvent","window","onTagsChange","bind","onPullTagChanged","params","tagsToRemove","oldTagsNames","opts","hide","displayedItems","each","item","push","names","forEach","display","tagToChange","oldTagName","newTagName","changedItems","addItem","NAME","indexOf","oldIndex","splice","deleteItem","value","index","length","multiIndex","onPullTaskProjectChanged","selectedItems","getSelectedItems","tagOwner","parseInt","match","owner","PULL","subscribe","type","PullClient","SubscriptionType","Server","moduleId","command","callback","getTagSelector","load","event","getTarget","selectedItem","getData","setSort","getTab","getRootNode","items","getItems","k","isSelected","getTitle","util","in_array","node","message","top","UI","Dialogs","MessageBox","title","buttons","MessageBoxButtons","OK","okCaption","onOk","close","show","onItemDeleteByCross","onCustomEvent","arguments","unselectDialogItem","babelHelpers","getItem","prepareTagItemData","deselect","prepareItemData","tags","id","tag","text","entityId","extractItemDisplay","extractItemValue","VALUE","Math","abs","hashCode","str","isNotEmptyString","hash","i","c","charCodeAt","previousSelected","projectDialog","EntitySelector","Dialog","getById","showAddButton","getFooterContainer","querySelector","hidden","hideAddButton","onSearch","query","trim","showAlert","className","error","getContainer","concat","alert","document","createElement","innerHTML","before","onTagsLoad","tagName","tabs","badges","select","exists","dialogItem","setBadges","newItem","events","handler","ctrlKey","metaKey","keyCode","newTag","getTagSelectorQuery","ajax","runComponentAction","mode","then","response","success","sort","clearSearch","alertClass","removeAlert","notification","remove","setTimeout","ev","addEventListener","getTargetContainer","fields","querySelectorAll","target","control","field","contains","targetNode","enableSearch","width","height","multiple","dropdownMode","compactView","entities","searchOptions","allowCreateItem","footer","Footer","footerOptions","clearUnavailableItems","onLoad","style","zIndex","call","undefined"],"sources":["script.js"],"mappings":"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"}