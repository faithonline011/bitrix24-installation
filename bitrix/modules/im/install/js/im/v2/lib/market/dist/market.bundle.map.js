{"version":3,"file":"market.bundle.map.js","names":["this","BX","Messenger","v2","exports","marketplace","ui_vue3_vuex","main_core","im_v2_application_core","im_v2_const","_loadLink","babelHelpers","classPrivateFieldLooseKey","_getPlacementOptions","MarketService","constructor","Object","defineProperty","value","_getPlacementOptions2","writable","openPlacement","item","context","Promise","resolve","reject","formData","FormData","entries","loadConfiguration","forEach","key","append","classPrivateFieldLooseBase","requestPrams","method","body","fetch","then","response","text","textResponse","catch","error","setLoadLink","link","placementOptions","dialogId","messageId","MarketTypes","freeze","user","chat","lines","crm","all","_canShowPlacementInChat","_matchDialogType","_isUser","_isChat","_isLines","_isCrm","AvailabilityManager","_isCrm2","_isLines2","_isChat2","_isUser2","_matchDialogType2","_canShowPlacementInChat2","getAvailablePlacements","placements","dialogType","filter","placement","options","some","marketType","DialogType","_store","_marketService","_availabilityManager","MarketManager","static","instance","marketApps","getInstance","init","Core","getStore","dispatch","links","load","getAvailablePlacementsByType","placementType","getters","type","loadPlacement","id","Number","parseInt","unloadPlacement","placementId","appLayoutNew","values","rest","layoutList","layout","params","length","destroy","Runtime","loadExtension","AppLayout","openApplication","ID","marketplaceImPlacementCode","SidePanel","Instance","open","Lib","Vue3","Vuex","Application","Const"],"sources":["market.bundle.js"],"mappings":"AAAAA,KAAKC,GAAKD,KAAKC,IAAM,CAAC,EACtBD,KAAKC,GAAGC,UAAYF,KAAKC,GAAGC,WAAa,CAAC,EAC1CF,KAAKC,GAAGC,UAAUC,GAAKH,KAAKC,GAAGC,UAAUC,IAAM,CAAC,GAC/C,SAAUC,EAAQC,EAAYC,EAAaC,EAAUC,EAAuBC,GAC5E,aAEA,IAAIC,EAAyBC,aAAaC,0BAA0B,YACpE,IAAIC,EAAoCF,aAAaC,0BAA0B,uBAC/E,MAAME,EACJC,cACEC,OAAOC,eAAejB,KAAMa,EAAsB,CAChDK,MAAOC,IAETH,OAAOC,eAAejB,KAAMU,EAAW,CACrCU,SAAU,KACVF,MAAO,IAEX,CACAG,cAAcC,EAAMC,GAClB,OAAO,IAAIC,SAAQ,CAACC,EAASC,KAC3B,MAAMC,EAAW,IAAIC,SACrBZ,OAAOa,QAAQP,EAAKQ,mBAAmBC,SAAQ,EAAEC,EAAKd,MACpDS,EAASM,OAAO,kBAAkBD,KAAQd,EAAM,IAElDF,OAAOa,QAAQlB,aAAauB,2BAA2BlC,KAAMa,GAAsBA,GAAsBU,IAAUQ,SAAQ,EAAEC,EAAKd,MAChIS,EAASM,OAAO,qCAAqCD,KAAQd,EAAM,IAErE,MAAMiB,EAAe,CACnBC,OAAQ,OACRC,KAAMV,GAERW,MAAM3B,aAAauB,2BAA2BlC,KAAMU,GAAWA,GAAYyB,GAAcI,MAAKC,GAAYA,EAASC,SAAQF,MAAKG,GAAgBjB,EAAQiB,KAAeC,OAAMC,GAASlB,EAAOkB,IAAO,GAExM,CACAC,YAAYC,GACVnC,aAAauB,2BAA2BlC,KAAMU,GAAWA,GAAaoC,CACxE,EAEF,SAAS3B,EAAsBI,GAC7B,MAAMwB,EAAmB,CAAC,EAC1B,GAAIxB,EAAQyB,SAAU,CACpBD,EAAiBC,SAAWzB,EAAQyB,QACtC,CACA,GAAIzB,EAAQ0B,UAAW,CACrBF,EAAiBE,UAAY1B,EAAQ0B,SACvC,CACA,OAAOF,CACT,CAEA,MAAMG,EAAclC,OAAOmC,OAAO,CAChCC,KAAM,OACNC,KAAM,OACNC,MAAO,QACPC,IAAK,MACLC,IAAK,QAEP,IAAIC,EAAuC9C,aAAaC,0BAA0B,0BAClF,IAAI8C,EAAgC/C,aAAaC,0BAA0B,mBAC3E,IAAI+C,EAAuBhD,aAAaC,0BAA0B,UAClE,IAAIgD,EAAuBjD,aAAaC,0BAA0B,UAClE,IAAIiD,EAAwBlD,aAAaC,0BAA0B,WACnE,IAAIkD,EAAsBnD,aAAaC,0BAA0B,SACjE,MAAMmD,EACJhD,cACEC,OAAOC,eAAejB,KAAM8D,EAAQ,CAClC5C,MAAO8C,IAEThD,OAAOC,eAAejB,KAAM6D,EAAU,CACpC3C,MAAO+C,IAETjD,OAAOC,eAAejB,KAAM4D,EAAS,CACnC1C,MAAOgD,IAETlD,OAAOC,eAAejB,KAAM2D,EAAS,CACnCzC,MAAOiD,IAETnD,OAAOC,eAAejB,KAAM0D,EAAkB,CAC5CxC,MAAOkD,IAETpD,OAAOC,eAAejB,KAAMyD,EAAyB,CACnDvC,MAAOmD,GAEX,CACAC,uBAAuBC,EAAYC,EAAa,IAC9C,OAAOD,EAAWE,QAAOC,GAAa/D,aAAauB,2BAA2BlC,KAAMyD,GAAyBA,GAAyBiB,EAAWF,IACnJ,EAEF,SAASH,EAAyBK,EAAWF,GAC3C,IAAKE,EAAUC,QAAQpD,UAAYiD,EAAY,CAC7C,OAAO,IACT,CACA,OAAOE,EAAUC,QAAQpD,QAAQqD,MAAKC,GAAclE,aAAauB,2BAA2BlC,KAAM0D,GAAkBA,GAAkBmB,EAAYL,IACpJ,CACA,SAASJ,EAAkBS,EAAYL,GACrC,OAAQK,GACN,KAAK3B,EAAYE,KACf,OAAOzC,aAAauB,2BAA2BlC,KAAM2D,GAASA,GAASa,GACzE,KAAKtB,EAAYG,KACf,OAAO1C,aAAauB,2BAA2BlC,KAAM4D,GAASA,GAASY,GACzE,KAAKtB,EAAYI,MACf,OAAO3C,aAAauB,2BAA2BlC,KAAM6D,GAAUA,GAAUW,GAC3E,KAAKtB,EAAYK,IACf,OAAO5C,aAAauB,2BAA2BlC,KAAM8D,GAAQA,GAAQU,GACvE,KAAKtB,EAAYM,IACf,OAAO,KACT,QACE,OAAO,MAEb,CACA,SAASW,EAASK,GAChB,OAAOA,IAAe/D,EAAYqE,WAAW1B,IAC/C,CACA,SAASc,EAASM,GAChB,OAAOA,IAAe/D,EAAYqE,WAAWxB,OAASkB,IAAe/D,EAAYqE,WAAWvB,KAAOiB,IAAe/D,EAAYqE,WAAW1B,IAC3I,CACA,SAASa,EAAUO,GACjB,OAAOA,IAAe/D,EAAYqE,WAAWxB,KAC/C,CACA,SAASU,EAAQQ,GACf,OAAOA,IAAe/D,EAAYqE,WAAWvB,GAC/C,CAEA,IAAIwB,EAAsBpE,aAAaC,0BAA0B,SACjE,IAAIoE,EAA8BrE,aAAaC,0BAA0B,iBACzE,IAAIqE,EAAoCtE,aAAaC,0BAA0B,uBAC/E,MAAMsE,EACJC,qBACE,IAAKnF,KAAKoF,SAAU,CAClBpF,KAAKoF,SAAW,IAAIpF,IACtB,CACA,OAAOA,KAAKoF,QACd,CACAD,YAAYE,GACVH,EAAcI,cAAcC,KAAKF,EACnC,CACAtE,cACEC,OAAOC,eAAejB,KAAM+E,EAAQ,CAClC3D,SAAU,KACVF,WAAY,IAEdF,OAAOC,eAAejB,KAAMgF,EAAgB,CAC1C5D,SAAU,KACVF,WAAY,IAEdF,OAAOC,eAAejB,KAAMiF,EAAsB,CAChD7D,SAAU,KACVF,WAAY,IAEdP,aAAauB,2BAA2BlC,KAAM+E,GAAQA,GAAUvE,EAAuBgF,KAAKC,WAC5F9E,aAAauB,2BAA2BlC,KAAMgF,GAAgBA,GAAkB,IAAIlE,EACpFH,aAAauB,2BAA2BlC,KAAMiF,GAAsBA,GAAwB,IAAIlB,CAClG,CACAwB,KAAKF,GACH1E,aAAauB,2BAA2BlC,KAAM+E,GAAQA,GAAQW,SAAS,aAAcL,GACrF1E,aAAauB,2BAA2BlC,KAAMgF,GAAgBA,GAAgBnC,YAAYwC,EAAWM,MAAMC,KAC7G,CACAC,6BAA6BC,EAAe9C,EAAW,IACrD,MAAMuB,EAAa5D,aAAauB,2BAA2BlC,KAAM+E,GAAQA,GAAQgB,QAAQ,yBAAyBD,GAClH,MAAMtB,EAAaxB,EAAWrC,aAAauB,2BAA2BlC,KAAM+E,GAAQA,GAAQgB,QAAQ,iBAAiB/C,GAAUgD,KAAO,GACtI,OAAOrF,aAAauB,2BAA2BlC,KAAMiF,GAAsBA,GAAsBX,uBAAuBC,EAAYC,EACtI,CACAyB,cAAcC,EAAI3E,EAAU,CAAC,GAC3B,MAAMmD,EAAY/D,aAAauB,2BAA2BlC,KAAM+E,GAAQA,GAAQgB,QAAQ,kBAAkBI,OAAOC,SAASF,EAAI,KAC9H,OAAOvF,aAAauB,2BAA2BlC,KAAMgF,GAAgBA,GAAgB3D,cAAcqD,EAAWnD,EAChH,CACA8E,gBAAgBC,GACd,MAAMC,EAAevF,OAAOwF,OAAOvG,GAAGwG,KAAKC,YAAYjC,QAAOkC,GACrDA,EAAOC,OAAON,cAAgBA,IAEvC,GAAIC,EAAaM,OAAS,EAAG,CAC3BN,EAAaxE,SAAQ4E,IACnBA,EAAOG,SAAS,GAEpB,CACF,CACA3B,kBAAkBT,EAAWnD,GAC3BhB,EAAUwG,QAAQC,cAAc,aAAazE,MAAK,KAChDtC,GAAGwG,KAAKQ,UAAUC,gBAAgBxC,EAAU5C,kBAAkBqF,GAAI5F,EAASmD,EAAU5C,kBAAkB,GAE3G,CACAqD,yBACE,MAAMiC,EAA6B,UACnCnH,GAAGoH,UAAUC,SAASC,KAAK,sBAAsBH,IACnD,EAGFhH,EAAQ8E,cAAgBA,CAEzB,EAzLA,CAyLGlF,KAAKC,GAAGC,UAAUC,GAAGqH,IAAMxH,KAAKC,GAAGC,UAAUC,GAAGqH,KAAO,CAAC,EAAGvH,GAAGA,GAAGwH,KAAKC,KAAKzH,GAAGA,GAAGC,UAAUC,GAAGwH,YAAY1H,GAAGC,UAAUC,GAAGyH"}