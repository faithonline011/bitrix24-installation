{"version":3,"sources":["script.js"],"names":["exports","main_core","rpa_component","rpa_fieldscontroller","ui_userfieldfactory","namespace","Reflection","TypeComponent","_Component","babelHelpers","inherits","classCallCheck","this","possibleConstructorReturn","getPrototypeOf","apply","arguments","createClass","key","value","setFieldsController","fieldsController","FieldsController","init","get","prototype","call","Type","isPlainObject","params","type","addDataToSlider","prepareData","data","fields","Array","from","form","querySelectorAll","forEach","field","name","Text","toInteger","id","permissions","getPermissions","settings","getSettings","selectedIcon","getSelectedIcon","image","dataset","icon","scenarios","nodes","node","checked","push","getPermissionSelectors","action","selector","afterSave","response","_this","exit","getSlider","Manager","Instance","openKanban","slider","close","fieldNames","getFields","getName","ajax","runAction","typeId","visibility","then","catch","showErrors","errors","errorsContainer","parentNode","style","display","hideErrors","getIconsNode","document","querySelector","getIcons","iconsNode","nodeList","length","onIconClick","icons","classList","remove","add","Component","window","BX","Rpa","UI","UserFieldFactory"],"mappings":"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","file":"script.map.js"}