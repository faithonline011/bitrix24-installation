{"version":3,"sources":["script.js"],"names":["this","BX","Intranet","exports","main_core_events","main_core","_","t","_t","_t2","_id","babelHelpers","classPrivateFieldLooseKey","_windowMessageHandler","_getContent","_handleFrameLoad","_handleWindowMessage","ReleaseSlider","EventEmitter","constructor","options","super","Object","defineProperty","value","_handleWindowMessage2","_handleFrameLoad2","_getContent2","writable","setEventNamespace","Type","isPlainObject","subscribeFromOptions","events","url","isStringFilled","sliderOptions","classPrivateFieldLooseBase","bind","html","Cache","MemoryCache","show","isOpen","defaultOptions","width","customLeftBoundary","assign","userEvents","onCloseComplete","Event","unbind","window","emit","onOpenComplete","contentCallback","slider","eventName","isFunction","subscribe","SidePanel","Slider","getEventFullName","Promise","resolve","reject","getFrame","src","Instance","open","getId","hide","getSlider","close","remember","Tag","render","event","frameOrigin","URL","origin","message","data","_$1","_t$1","ReleaseEar","container","zone","animate","Dom","removeClass","getContainer","requestAnimationFrame","addClass","handleClick","append","document","body","_deactivated","_runAction","_handleSliderClose","_handleEarClick","_handleFrameMessage","PolarStar","_handleFrameMessage2","_handleEarClick2","_handleSliderClose2","_runAction2","Error","onMessage","ear","onClick","mode","context","getEar","action","labels","ajax","runComponentAction","analyticsLabel","module","service","getData","command","catch","Helper","Bitrix24"],"mappings":"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","file":"script.map.js"}