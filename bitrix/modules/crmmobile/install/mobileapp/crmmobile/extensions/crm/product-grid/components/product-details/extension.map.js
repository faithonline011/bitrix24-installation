{"version":3,"sources":["extension.js"],"names":["jn","define","require","exports","module","Alert","Loc","ProductRow","ProductCalculator","DiscountType","Container","Island","Title","FormGroup","BarcodeField","BooleanField","CombinedField","DateTimeField","FileField","EntitySelectorField","MoneyField","NumberField","NumberPrecision","SelectField","StringField","notify","debounce","isObjectLike","isArray","clone","ProductDetails","LayoutComponent","constructor","props","super","this","state","productRow","productData","reservedQuantity","reserveEndDate","photoFieldRef","layout","initLayout","getProps","closeButtonText","isReadonly","getMessage","setTitle","text","setRightButtons","name","type","color","callback","close","enableNavigationBarBorder","hasUploadingFiles","showAlertToWaitUploading","validate","onChange","alert","BX","message","editable","nameFieldRef","getRawValues","render","nameField","sectionsField","barcodeField","galleryField","priceField","quantityField","discountField","taxField","totalSumField","inventoryControlEnabled","UI","BannerButton","title","description","onClick","openEntityDesktopPage","ref","value","getProductName","readOnly","required","newVal","setField","getSections","map","section","ID","multiple","config","selectorType","EntitySelectorFactory","Type","SECTION","enableCreation","provider","options","iblockId","entityList","NAME","id","parentWidget","item","getBarcode","gallery","getField","galleryInfo","galleryValue","photo","Number","isInteger","parseInt","fileInfo","mediaType","controller","entityId","productId","getProductId","images","preparedValue","image","push","amount","getBasePrice","currency","getCurrency","isPriceEditable","currencyReadOnly","selectionOnFocus","recalculate","calc","calculateBasePrice","onContentClick","seconds","getQuantity","measureCode","getMeasureCode","measure","measures","find","String","code","calculateQuantity","primaryField","renderField","placeholder","INTEGER","secondaryField","showRequired","items","moneyStub","Money","discountType","getDiscountType","discountValue","MONETARY","getDiscountSum","getDiscountRate","nextDiscountType","nextDiscountValue","calculateDiscountType","calculateDiscount","DOUBLE","precision","formattedCurrency","PERCENTAGE","isTaxMode","vatRates","rateReadonly","length","getTaxRate","vatIdByRate","rate","vatRate","vatRateById","taxRate","taxIncluded","isTaxIncluded","pipe","self","calculateTaxIncluded","calculateTax","getFields","getSum","calculateRowSum","storeField","storeId","STORE","useAddressAsTitle","console","log","storeBalanceField","getMeasureName","storeReservedField","reserveQuantityField","setState","reserveDateField","enableTime","fieldName","newValue","calculationFn","calculator","result","setFields","qrauth","open","redirectUrl","entityDetailPageUrl"],"mappings":"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","file":"extension.map.js"}