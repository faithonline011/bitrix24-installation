{"version":3,"sources":["fieldset.bundle.js"],"names":["this","BX","exports","main_core","main_core_events","_templateObject","_templateObject2","_templateObject3","_templateObject4","_templateObject5","_createForOfIteratorHelper","o","allowArrayLike","it","Symbol","iterator","Array","isArray","_unsupportedIterableToArray","length","i","F","s","n","done","value","e","_e","f","TypeError","normalCompletion","didErr","err","call","step","next","_e2","minLen","_arrayLikeToArray","Object","prototype","toString","slice","constructor","name","from","test","arr","len","arr2","EntityEditorFieldsetField","_BX$UI$EntityEditorFi","babelHelpers","inherits","_this","classCallCheck","possibleConstructorReturn","getPrototypeOf","_entityEditorList","_entityId","_fieldsetContainer","_addEmptyValue","_nextIndex","createClass","key","doInitialize","get","_editor","getId","getDataBooleanParam","nextIndex","prop","getInteger","getSchemeElement","getData","layout","options","_this2","_hasLayout","ensureWrapperCreated","classNames","adjustWrapper","isNeedToDisplay","registerLayout","Tag","render","taggedTemplateLiteral","Dom","append","_wrapper","_mode","UI","EntityEditorMode","edit","addButtonPanel","getAddButton","setTimeout","initializeExistedValues","clearLayout","createEntityEditor","id","_this3","values","arguments","undefined","context","containerId","entityEditorId","prefix","getName","section","type","enableToggling","transferable","data","isRemovable","enableTitle","elements","getFields","config","EntityConfig","create","scope","enableScopeToggle","canUpdatePersonalConfiguration","canUpdateCommonConfiguration","scheme","EntityScheme","current","available","entityEditor","EntityEditor","model","EntityEditorModelFactory","isIdentifiable","getFieldsValues","serviceUrl","getServiceUrl","entityTypeName","entityId","validators","controllers","detailManagerId","initialMode","enableModeToggle","enableConfigControl","enableVisibilityPolicy","enableToolPanel","enableBottomPanel","enableFieldsContextMenu","enablePageTitleControls","readOnly","view","enableAjaxForm","enableRequiredUserFieldCheck","enableSectionEdit","enableSectionCreation","enableSectionDragDrop","enableFieldDragDrop","enableSettingsForAll","enableContextDataLayout","formTagName","externalContextId","contextId","show_always","ajaxData","isEmbedded","_enableCloseConfirmation","EventEmitter","subscribe","event","isChanged","markAsChanged","container","getContainer","Type","isDomNode","prepend","getDeleteButton","hasOwnProperty","layoutDeletedValue","style","display","inputName","concat","querySelector","onDeleteButtonClick","onAddButtonClick","addEmptyValue","getValue","push","ID","getModel","setField","getEditors","fields","clone","getArray","index","getFieldName","result","fieldId","originalName","bind","Loc","getMessage","existedItems","_iterator","_step","item","settings","self","initialize","EntityEditorField","methods","controlId","setData","Crm","Event"],"mappings":"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","file":"fieldset.bundle.map.js"}