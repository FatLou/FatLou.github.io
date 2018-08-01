// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DataAggregation/js/UI/templates/Feature.html":'\x3cdiv\x3e\r\n\r\n  \x3c!--Feature toolbar table--\x3e\r\n  \x3ctable class\x3d"page-table display-none table-layout" cellpading\x3d"0" data-dojo-attach-point\x3d"featureToolbarTable"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr class\x3d"bottom-border task-instruction-row"\x3e\r\n        \x3ctd data-dojo-attach-point\x3d"reviewRowRecordTd" class\x3d"pad-bottom-10"\x3e\r\n          \x3cspan class\x3d"float-left main-text pad-left-10 pad-right-10 display-none" data-dojo-attach-point\x3d"reviewText" style\x3d"line-height:30px;"\x3e${nls.review.item}\x3c/span\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"_duplicateFlag" class\x3d"pad-bottom-10 duplicate-flag"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"pad-bottom-10 feature-toolbar-td"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"featureToolbar"\x3e\r\n\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\r\n  \x3c!--feature toggle table--\x3e\r\n  \x3ctable data-dojo-attach-point\x3d"featureToggleTable" class\x3d"page-table display-none table-layout" cellpading\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr class\x3d"bottom-border toggle-expand-row" data-dojo-attach-event\x3d"onclick:_toggleFeature"\x3e\r\n        \x3ctd colspan\x3d"2" class\x3d"field-control-td text-left field-row-width"\x3e\r\n          \x3cdiv class\x3d"main-text float-left"\x3e\r\n            ${nls.review.feature}\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd style\x3d"width: 20px;" nowrap class\x3d"page-item-td-nav" data-dojo-attach-point\x3d"featureTd"\x3e\r\n          \x3cdiv class\x3d"float-right bg-img-toggle bg-toggle-down-img margin-left-5" data-dojo-attach-point\x3d"toggleFeature"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\r\n  \x3cdiv data-dojo-attach-point\x3d"featureInformation" class\x3d"display-none"\x3e\r\n\r\n    \x3c!--feature controls table--\x3e\r\n    \x3ctable data-dojo-attach-point\x3d"featureTable" class\x3d"page-table display-none table-layout" cellpading\x3d"0"\x3e\r\n      \x3ccolgroup\x3e\r\n        \x3ccol width\x3d"30%" /\x3e\r\n        \x3ccol width\x3d"35%" /\x3e\r\n        \x3ccol width\x3d"35%" /\x3e\r\n      \x3c/colgroup\x3e\r\n      \x3ctbody data-dojo-attach-point\x3d"featureControlTable"\x3e\x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3c!--location toggle table--\x3e\r\n  \x3ctable data-dojo-attach-point\x3d"locationControlToggleTable" class\x3d"page-table display-none table-layout" cellpading\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr class\x3d"bottom-border toggle-expand-row" data-dojo-attach-event\x3d"onclick:_toggleLocation"\x3e\r\n        \x3ctd class\x3d"field-control-td text-left field-row-width"\x3e\r\n          \x3cdiv class\x3d"main-text float-left"\x3e\r\n            ${nls.review.locationInfo}\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd style\x3d"width: 20px;" class\x3d"page-item-td-nav" data-dojo-attach-point\x3d"locationTd"\x3e\r\n          \x3cdiv class\x3d"float-right bg-img-toggle bg-toggle-down-img margin-left-5" data-dojo-attach-point\x3d"toggleLocation"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n\r\n  \x3cdiv data-dojo-attach-point\x3d"locationInformation" class\x3d"display-none"\x3e\r\n\r\n    \x3c!--location toolbar--\x3e\r\n    \x3ctable class\x3d"page-table display-none" cellpading\x3d"0" data-dojo-attach-point\x3d"locationSyncTable"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr class\x3d"bottom-border task-instruction-row"\x3e\r\n          \x3ctd class\x3d"field-control-td"\x3e\r\n            \x3cdiv class\x3d"instruction" data-dojo-attach-point\x3d"locationHint"\x3e${nls.review.locationControlHint}\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"field-control-td" title\x3d"${nls.review.sync}"\x3e\r\n            \x3cdiv class\x3d"float-right bg-ft-img bg-sync feature-toolbar-btn" data-dojo-attach-point\x3d"syncFields" data-dojo-attach-event\x3d"onclick:_syncAddressInfo"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd title\x3d"${nls.featureToolbar.locate}"\x3e\r\n            \x3cdiv class\x3d"bg-ft-img bg-locate feature-toolbar-btn float-right" data-dojo-attach-point\x3d"locateButton" data-dojo-attach-event\x3d"onclick:_locate"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n\r\n    \x3c!--location controls table--\x3e\r\n    \x3ctable class\x3d"page-table display-none" cellpading\x3d"0" data-dojo-attach-point\x3d"locationControlTable"\x3e\r\n      \x3ccolgroup\x3e\r\n        \x3ccol width\x3d"35%" /\x3e\r\n        \x3ccol width\x3d"65%" /\x3e\r\n      \x3c/colgroup\x3e\r\n      \x3ctbody\x3e\x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n\r\n  \x3c/div\x3e\r\n\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-class dijit/form/ValidationTextBox dijit/form/Select dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dijit/form/DateTextBox dojo/text!./templates/Feature.html dojo/Deferred ./FeatureToolbar esri/tasks/query jimu/dijit/Popup jimu/utils esri/lang".split(" "),function(u,d,h,e,k,n,p,v,w,x,y,z,A,m,B,q,r,t,C){return u([v,w,x,y],{baseClass:"cf-feature",declaredClass:"CriticalFacilities.Feature",
templateString:A,_started:null,label:"Feature",parent:null,nls:null,map:null,appConfig:null,config:null,_featureToolbar:null,fields:[],feature:null,fileAddress:{},isDuplicate:!1,_useGeomFromFile:!1,_useGeomFromLayer:!0,_useValuesFromFile:!1,_useValuesFromLayer:!0,_featureExpanded:!1,_locationExpanded:!1,theme:"",isDarkTheme:"",styleColor:"black",layer:null,_changedFileAttributeRows:[],_changedLayerAttributeRows:[],_changedAddressRows:[],_editToolbar:null,_featureQuery:null,_skipFields:[],csvStore:null,
constructor:function(a){d.mixin(this,a)},postCreate:function(){this.inherited(arguments);this._initToolbar(this.featureToolbar)},_initSkipFields:function(a){this._skipFields=["DestinationOID","matchScore","hasDuplicateUpdates","duplicateState",this.layer.objectIdField];h.forEach(a,d.hitch(this,function(a){-1<a.name.indexOf(this.csvStore.matchFieldPrefix)&&this._skipFields.push(a.name)}))},startup:function(){var a=this.feature.fieldInfo;this._initSkipFields(a);this._initRows(a,this.featureControlTable);
this.isDuplicate?this._initDuplicateReview(a):this._initStandardReview();this._getFeature().then(d.hitch(this,function(a){this._feature=a;this._featureToolbar._panToAndSelectFeature(a)}));this._getEditFeature().then(d.hitch(this,function(a){this._editFeature=a;this.isDuplicate&&this._editFeature&&this._editFeature.geometry&&this._toggleLocationControls(!0)}));this.onShown()},onShown:function(){this._isReviewed=!0;this._featureToolbar._disableEdit();this._showView();this._featureToolbar._panToAndSelectFeature(this.isDuplicate&&
this._useGeomFromLayer?this._editFeature:this._feature);this.isShowing=!0;this.pageContainer.nextDisabled=!1;this.pageContainer.backDisabled=!1},onHidden:function(){this.isShowing=!1},validate:function(a,b){var c=new m;"next-view"===a?c.resolve(this._nextView()):"back-view"===a?c.resolve(this._backView()):this._homeView(b).then(function(a){c.resolve(a)});return c},_nextView:function(){return!0},_backView:function(){return!0},_homeView:function(a){var b=new m;this.pageContainer.getViewByTitle("Home").verifyClearSettings(a).then(function(a){b.resolve(a)});
return b},_showView:function(){k.remove(this.featureTable,"display-none");k.remove(this.featureToggleTable,"display-none");k.remove(this.locationSyncTable,"display-none");k.remove(this.locationControlTable,"display-none");k.remove(this.locationControlToggleTable,"display-none");k.remove(this.featureToolbarTable,"display-none");this.isDuplicate&&k.remove(this.reviewText,"display-none");this._updateInfoRows()},_getFeature:function(){var a=new m,b=this.layer.objectIdField,c=this.feature.fieldInfo.filter(function(a){return a.name===
b});this._featureQuery=new q;this._featureQuery.objectIds=[c[0].value];this.layer.queryFeatures(this._featureQuery).then(d.hitch(this,function(b){a.resolve(b.features[0])}));return a},_getEditFeature:function(){var a=new m,b=this.feature.fieldInfo.filter(function(a){return"DestinationOID"===a.name});b&&0<b.length?(this._editQuery=new q,this._editQuery.objectIds=[b[0].value],this.parent.editLayer.queryFeatures(this._editQuery).then(d.hitch(this,function(b){a.resolve(b.features[0])}))):a.resolve();
return a},_initStandardReview:function(){this._useValuesFromFile=!0;this._useValuesFromLayer=!1},_initDuplicateReview:function(a){this._initDuplicateSelect();this._initDuplicateReviewRows(a);k.add(this.featureToolbar,"display-none")},_initDuplicateSelect:function(){var a=new p({style:{display:"table",width:"100%",height:"28px"},options:[{label:this.nls.review.duplicateAction,value:"no-change",selected:!0},{label:this.nls.remove,value:"skip"},{label:this.nls.review.isDuplicateMakeChange,value:"make-change"},
{label:this.nls.save,value:"not-duplicate"}],onChange:d.hitch(this,this._updateDuplicateUI)});this._duplicateFlag.fromSelect=a;e.place(a.domNode,this._duplicateFlag);a.startup()},_updateDuplicateUI:function(a){this._updateDuplicateAttributes(a,null);this._featureToolbar._disableEdit();"make-change"===a?k.remove(this.featureToolbar,"display-none"):k.add(this.featureToolbar,"display-none");"not-duplicate"===a&&this._showShouldLocateFeaturePopup().then(d.hitch(this,function(b){b?(this.resetAddressValues(this._featureToolbar._originalValues,
a),this._featureToolbar._locateFeature(!0).then(d.hitch(this,function(){var a=new r({titleLabel:this.nls.review.featureLocated,width:400,autoHeight:!0,content:e.create("div",{innerHTML:this.nls.warningsAndErrors.itemMoveMatch,style:"padding-bottom: 10px;"}),buttons:[{label:this.nls.ok,onClick:d.hitch(this,d.hitch(this,function(){a.close();a=null}))}],onClose:d.hitch(this,function(){a=null;this._featureToolbar._save(!0)})})}))):this._duplicateFlag.fromSelect.set("value","no-change")}))},_updateDuplicateAttributes:function(a,
b){this._feature.attributes.duplicateState=null!==a?a:this._feature.attributes.duplicateState;this._feature.attributes.hasDuplicateUpdates=null!==b?b:this._feature.attributes.hasDuplicateUpdates},_showShouldLocateFeaturePopup:function(){var a=new m,b=e.create("div");e.create("div",{innerHTML:this.nls.warningsAndErrors.itemWillBeLocated,style:"padding-bottom: 10px;"},b);e.create("div",{innerHTML:this.nls.warningsAndErrors.proceed},b);var c=new r({titleLabel:this.nls.review.locateFeature,width:400,
autoHeight:!0,content:b,buttons:[{label:this.nls.yes,onClick:d.hitch(this,function(){c.close();c=null;a.resolve(!0)})},{label:this.nls.no,onClick:d.hitch(this,function(){c.close();c=null;a.resolve(!1)})}],onClose:function(){c=null}});return a},_initDuplicateReviewRows:function(a){var b=e.create("tr",{className:"bottom-border",isHeaderRow:!0},this.reviewTable);e.create("td",{className:"text-left"},b);var c=e.create("td",{className:"text-left"},b);e.create("div",{className:"duplicate-col-headers main-text float-left",
innerHTML:this.nls.review.fromLayer},c);b=e.create("td",{className:"text-left"},b);e.create("div",{className:"duplicate-col-headers main-text float-left",innerHTML:this.nls.review.fromFile},b);h.forEach(a,d.hitch(this,function(a){if(-1===this._skipFields.indexOf(a.name)){var b=e.create("tr",{className:"bottom-border",isLabelRow:!0,isControlRow:!0},this.reviewTable);b.fieldName=a.name;b.parent=this;var c=e.create("td",{className:"field-control-td text-left"},b);e.create("div",{className:"main-text float-left",
innerHTML:a.label},c);this._initLabel(b,a.duplicateFieldInfo.value,!1,!1);this._initLabel(b,a.value,!0,!1)}}))},_initToolbar:function(a){this._featureToolbar=new B({nls:this.nls,map:this.map,parent:this.parent,config:this.config,appConfig:this.appConfig,feature:this.feature,theme:this.theme,layer:this.layer,featureView:this,_editToolbar:this._editToolbar,csvStore:this.csvStore,_stageLayer:this.csvStore.matchedFeatureLayer,styleColor:this.styleColor});this._featureToolbar.placeAt(a);this._featureToolbar.startup()},
_initRows:function(a,b){if(this.isDuplicate){this._initSelectRow(this.nls.review.use,this.locationControlTable,this._useGeomChanged,"geom");this._initSelectRow(this.nls.review.use,this.featureControlTable,this._useValuesChanged,"values");var c=e.create("tr",{className:"bottom-border",isHeaderRow:!0},b);e.create("td",{className:"text-left"},c);var l=e.create("td",{className:"text-left"},c);e.create("div",{className:"duplicate-col-headers main-text float-left",innerHTML:this.nls.review.fromLayer},l);
c=e.create("td",{className:"text-left"},c);e.create("div",{className:"duplicate-col-headers main-text float-left",innerHTML:this.nls.review.fromFile},c)}(this._syncEnabled=0<Object.keys(this._parentFeatureList._syncFields).length)?this._syncFields=this._parentFeatureList._syncFields:k.add(this.syncFields,"display-none");var g=0;h.forEach(a,d.hitch(this,function(a){if(-1===this._skipFields.indexOf(a.name)){var c=e.create("tr",{className:"bottom-border",isRadioRow:!1,isEditRow:!0,rowIndex:g},b);c.fieldName=
a.name;c.parent=this;var l=e.create("td",{className:"field-control-td text-left field-row-width"},c);e.create("div",{className:"main-text float-left",innerHTML:a.label},l);this.isDuplicate&&this._initValidationBox(c,a.duplicateFieldInfo.value,!1,!1);this._initValidationBox(c,a.value,!0,!1);g+=1}}));this.addressFields=this.csvStore.useMultiFields?this.csvStore.multiFields:this.csvStore.useAddr?this.csvStore.singleFields:this.getXYFields();h.forEach(this.addressFields,d.hitch(this,function(a){var b=
e.create("tr",{className:"bottom-border",isRadioRow:!1,isEditRow:!1,isAddressRow:!0},this.locationControlTable);b.label=a.label;b.keyField=a.keyField;b.parent=this;var c=e.create("td",{className:"field-control-td text-left"},b);e.create("div",{className:"main-text float-left",innerHTML:a.label},c);var l=this.csvStore.matchFieldPrefix,c=this.feature.fieldInfo.filter(function(b){return b.name===l+a.keyField})[0];this._initValidationBox(b,c.value,!1,!0)}))},_syncAddressInfo:function(){if(!this._featureToolbar._syncDisabled){var a=
this._getAddress();this._updateAddressFields(a,!0);this._featureToolbar._hasAddressEdit=!1;this._featureToolbar._updateSync(!0)}},_locate:function(){this._featureToolbar._locate()},getXYFields:function(){this._featureToolbar._isAddressFeature=!1;var a=this.parent._pageContainer.getViewByTitle("Coordinates"),b=a.xField,a=a.yField;this._featureToolbar.xField=this.csvStore.xFieldName;this._featureToolbar.yField=this.csvStore.yFieldName;return[{keyField:this.csvStore.xFieldName,label:b.label,value:this.csvStore.xFieldName},
{keyField:this.csvStore.yFieldName,label:a.label,value:this.csvStore.yFieldName}]},_updateAddressFields:function(a,b){this._address=a;b?h.forEach(this.locationControlTable.rows,d.hitch(this,function(a){if(this._syncFields.hasOwnProperty(a.keyField))for(var b=this._syncFields[a.keyField],c=0;c<this.featureControlTable.rows.length;c++){var e=this.featureControlTable.rows[c];if(e.isEditRow&&e.fieldName===b.layerFieldName){a=this.csvStore.matchFieldPrefix+a.keyField;a=this._address&&this._address.hasOwnProperty(a)?
this._address[a]:"";this.isDuplicate&&this._useValuesFromLayer?(e.layerValueTextBox.set("value",a),e.layerValueTextBox.emit("keyUp")):(e.fileValueTextBox.set("value",a),e.fileValueTextBox.emit("keyUp"));break}}})):h.forEach(this.locationControlTable.rows,d.hitch(this,function(a){var b=this.csvStore.useAddr&&!this.csvStore.useMultiFields?"Match_addr":a.keyField;a.addressValueTextBox&&(b=this._address&&this._address.hasOwnProperty(b)?this._address[b]:"",a.addressValueTextBox.set("value",b))}))},_validateAddressDifference:function(){var a=
!1;this.locationControlTable&&h.forEach(this.locationControlTable.rows,d.hitch(this,function(b){if(this._syncFields&&this._syncFields.hasOwnProperty(b.keyField)&&!a){var c=b.addressValueTextBox.displayedValue;b=this._syncFields[b.keyField];for(var e=0;e<this.featureControlTable.rows.length;e++){var g=this.featureControlTable.rows[e];if(g.isEditRow&&g.fieldName===b.layerFieldName&&!a){a=this.isDuplicate&&this._useValuesFromLayer?g.layerValueTextBox.displayedValue!==c:g.fileValueTextBox.displayedValue!==
c;break}}}}));return a},_getAddress:function(){this._address={};h.forEach(this.locationControlTable.rows,d.hitch(this,function(a){a.addressValueTextBox&&(this._address[this.csvStore.matchFieldPrefix+a.keyField]=a.addressValueTextBox.value)}));return this._address},_getAddressFieldsValues:function(){var a={};h.forEach(this.locationControlTable.rows,function(b){b.addressValueTextBox&&(a[b.keyField]=b.addressValueTextBox.value)});return a},_initLabel:function(a,b,c,l){var g=e.create("td",{className:"field-control-td field-row-width2"},
a),d=new n({style:{width:"100%",height:"33px"},title:b,invalidMessage:this.nls.review.valuesDoNotMatch});d.set("value",b);d.set("readonly",!0);d.placeAt(g);d.startup();d.isFile=c;d.isAddress=l;d.row=a;d.parent=this;c?(a.fileValueTextBox=d,a.fileValue=b):l?(a.addressValueTextBox=d,a.addressValue=b):(a.layerValueTextBox=d,a.layerValue=b);c&&(d.validator=this._valuesMatch,d.validate())},_initValidationBox:function(a,b,c,d){for(var g,l=0;l<this.csvStore.fsFields.length;l++){var f=this.csvStore.fsFields[l];
if(f.name===a.fieldName){g=f;break}}l=e.create("td",{className:"field-control-td",colspan:this.isDuplicate?1:2},a);g&&g.type&&"date"===g.type?(f=g.fieldInfo&&g.fieldInfo.format?g.fieldInfo:void 0,b=-1===[null,void 0,""].indexOf(b)?new Date(b):void 0,f=new z({style:{width:"100%",height:"33px"},title:f?t.localizeDateByFieldInfo(b,f):t.localizeDate(b)}),f.on("change",function(a){var b;a="undefined"!==typeof a?this.parent._getValue(a):"date"===this.fieldType?"":this.value;b=this.validate();if(this.row._isValid=
b){b=this.parent._getValue(this.row.fileValue);var c=this.parent._getValue(this.row.layerValue);a=this.isFile?a!==b:a!==c;c=this.isFile?this.parent._changedFileAttributeRows:this.parent._changedLayerAttributeRows;b=c.indexOf(this.row.rowIndex);-1===b&&a?c.push(this.row.rowIndex):-1<b&&!a&&c.splice(b,1);var d=!0;h.forEach(this.parent.featureControlTable.rows,function(a){"undefined"===typeof a._isValid||a._isValid||(d=!1)});d?this.parent.emit("attribute-change",0<c.length):this.featureToolbar._updateSave(!0)}else this.featureToolbar._updateSave(!0)})):
f=new n({style:{width:"100%",height:"33px"},title:b});f.set("intermediateChanges",!0);f.set("value",this.isDuplicate&&d?"":b);f.placeAt(l);f.startup();f.isFile=c;f.isAddress=d;f.row=a;f.featureToolbar=this._featureToolbar;if(!d){var k;g&&g.length&&(k=C.substitute({num:g.length},this.nls.warningsAndErrors.rangeMessage));f.invalidLengthMessage=k;f.invalidTypeMessage=this.nls.warningsAndErrors.invalidMessage;f.fieldLength=g.length;f.fieldType=g.type;f.fieldNullable=g.nullable;g&&g.type&&"date"!==g.type&&
(f.validator=this._valuesValidForType)}f.parent=this;c?(a.fileValueTextBox=f,a.fileValue=b):d?(a.addressValueTextBox=f,a.addressValue=b):(a.layerValueTextBox=f,a.layerValue=b);f.on("keyUp",function(a){var b;a="undefined"!==typeof a.srcElement.value?this.parent._getValue(a.srcElement.value):"date"===this.fieldType?"":this.value;if(this.isAddress)a=a!==this.parent._getValue(this.row.addressValue),b=this.parent._changedAddressRows.indexOf(this.row.rowIndex),-1===b&&a?this.parent._changedAddressRows.push(this.row.rowIndex):
-1<b&&!a&&this.parent._changedAddressRows.splice(b,1),this.parent.emit("address-change",0<this.parent._changedAddressRows.length);else if(b=this.validate(),this.row._isValid=b){b=this.parent._getValue(this.row.fileValue);var c=this.parent._getValue(this.row.layerValue);a=this.isFile?a!==b:a!==c;c=this.isFile?this.parent._changedFileAttributeRows:this.parent._changedLayerAttributeRows;b=c.indexOf(this.row.rowIndex);-1===b&&a?c.push(this.row.rowIndex):-1<b&&!a&&c.splice(b,1);var d=!0;h.forEach(this.parent.featureControlTable.rows,
function(a){"undefined"===typeof a._isValid||a._isValid||(d=!1)});d?this.parent.emit("attribute-change",0<c.length):this.featureToolbar._updateSave(!0)}else this.featureToolbar._updateSave(!0)})},_valuesValidForType:function(a){var b=a.toString();if(b.length>this.fieldLength)return this.invalidMessage=this.invalidLengthMessage,!1;if(0===b.length)return"undefined"!==typeof this.fieldNullable?this.fieldNullable:!0;this.invalidMessage=this.invalidTypeMessage;switch(this.fieldType){case "int":return/^-?[0-9]+$/.exec(a);
case "float":return/^-?[0-9]+[.]?[0-9]*$/.exec(a);case "date":if(a)try{return!isNaN((new Date(a)).getTime())}catch(c){return console.error(c),!1}else return!0;case "domainInt":return/^-?[0-9]+$/.exec(a);case "domain":return!0;case "other":return!0}},_valuesMatch:function(){return this.row.fileValueTextBox&&this.row.layerValueTextBox?this.row.fileValueTextBox.value===this.row.layerValueTextBox.value:!0},_validateValues:function(){var a=!0;h.forEach(this.featureControlTable.rows,d.hitch(this,function(b){if(b.isEditRow){"undefined"===
typeof b._isValid||b._isValid||(a=!1);var c="date"===b.fileValueTextBox.fieldType&&b.fileValueTextBox.value.toString()===b.fileValueTextBox._invalidDate?"":this._getValue(b.fileValueTextBox.value),d=this._getValue(b.fileValue),e="date"===b.layerValueTextBox.fieldType&&b.layerValueTextBox.value.toString()===b.layerValueTextBox._invalidDate?"":this._getValue(b.layerValueTextBox.value),f=this._getValue(b.layerValue);b.parent._useValuesFromFile&&(c===d&&c===f||this._changedFileAttributeRows.push(b.rowIndex));
b.parent._useValuesFromLayer&&e!==f&&this._changedLayerAttributeRows.push(b.rowIndex)}}));var b=this._useValuesFromFile?this._changedFileAttributeRows:this._changedLayerAttributeRows;a?this.emit("attribute-change",0<b.length):this._featureToolbar._updateSave(!0)},_getValue:function(a){return-1===[null,void 0,""].indexOf(a)?a:""},_validateGeoms:function(){var a=this._featureToolbar._hasAttributeEdit,b=this._featureToolbar._hasGeometryEdit;this._useGeomFromLayer?this._featureToolbar._updateSaveAndCancel(!a):
b?this._featureToolbar._updateSaveAndCancel(!a&&!b):this._featureToolbar._updateSaveAndCancel(!a)},_initSelectRow:function(a,b,c,d){b=e.create("tr",{className:"task-instruction-row bottom-border",isRadioRow:!0,isEditRow:!1},b);b.radioButtons=[];b.useType=d;d=e.create("td",{},b);e.create("div",{className:"main-text float-left pad-left-10",innerHTML:a},d);this._createSelect(b,c)},_createSelect:function(a,b){var c=e.create("td",{colspan:2,className:"field-control-td"},a);b=new p({style:{display:"table",
width:"100%",height:"28px"},options:[{label:this.nls.review.fromLayer,value:"layer",selected:!0},{label:this.nls.review.fromFile,value:"file"}],onChange:d.hitch(this,b)});a.fromSelect=b;e.place(b.domNode,c);b.startup()},_useGeomChanged:function(a){this._useGeomFromFile=a="file"===a;this._useGeomFromLayer=!a;a?(this._featureToolbar._enableEdit(!0),this.resetAddressValues(this._featureToolbar._originalValues)):this._featureToolbar._enableEdit(!1);a&&!this._hasBeenLocatedForFile?this._hasBeenLocatedForFile||
this._featureToolbar._locateFeature().then(d.hitch(this,function(a){this._featureToolbar._originalValues.duplicateGeometry=a.feature.geometry;this._hasBeenLocatedForFile=!0;var b=[a.feature,this._editFeature];if(a.feature.geometry.x!==this._editFeature.geometry.x||a.feature.geometry.y!==this._editFeature.geometry.y)this.map&&this.map.extent&&this.map.extent.contains?this.map.extent.contains(a.feature.geometry)&&this.map.extent.contains(this._editFeature.geometry)||this.csvStore._zoomToData(b):this.csvStore._zoomToData(b);
this._featureToolbar._flashFeatures(b);this._validateGeoms()})):(this._featureToolbar._updateFeature(this._useGeomFromFile?this._featureToolbar._originalValues.duplicateGeometry:this._editFeature.geometry,!1,!0),this._featureToolbar._flashFeatures([a?this._feature:this._editFeature]),this._validateGeoms());this._useGeomFromLayer&&this._updateAddressFields(this._featureToolbar._originalValues.editAddress,!1);this._toggleLocationControls(!1);this._syncFields&&this._featureToolbar._updateSync(!this._validateAddressDifference())},
_toggleFeature:function(){if(this._featureExpanded=!this._featureExpanded)this._locationExpanded=!1;this._updateInfoRows()},_toggleLocation:function(){if(this._locationExpanded=!this._locationExpanded)this._featureExpanded=!1;this._updateInfoRows()},_updateInfoRows:function(){this._updateRow(this._featureExpanded,this.featureInformation,this.toggleFeature);this._updateRow(this._locationExpanded,this.locationInformation,this.toggleLocation)},_updateRow:function(a,b,c){var d=["bg-toggle-up-img","bg-toggle-up-img-white"],
e=["bg-toggle-down-img","bg-toggle-down-img-white"];a?k.remove(b,"display-none"):k.add(b,"display-none");this._updateImageNode(a?d:e,a?e:d,c)},_updateImageNode:function(a,b,c){var d=-1<this._featureToolbar._darkThemes.indexOf(this.theme);k.remove(c,d?b[1]:b[0]);k.add(c,d?a[1]:a[0])},_toggleLocationControls:function(a){var b=this.isDuplicate&&this._useGeomFromLayer?!0:a;this.locationControlTable&&h.forEach(this.locationControlTable.rows,function(c){c.fromSelect&&c.fromSelect.set("disabled",a);c.isAddressRow&&
c.addressValueTextBox&&c.addressValueTextBox.set("disabled",b)})},_useValuesChanged:function(a){this._useValuesFromFile=a="file"===a;this._useValuesFromLayer=!a;this._featureToolbar._editDisabled||this._toggleEnabled(a);this._validateValues();this._syncFields&&this._featureToolbar._updateSync(!this._validateAddressDifference())},_toggleEnabled:function(a){h.forEach(this.featureControlTable.rows,function(b){b.isRadioRow||(b.fileValueTextBox&&b.fileValueTextBox.set("disabled",!a),b.layerValueTextBox&&
b.layerValueTextBox.set("disabled",a))})},_toggleEditControls:function(a){this.featureControlTable&&h.forEach(this.featureControlTable.rows,function(b){b.isRadioRow&&b.fromSelect.set("disabled",a);b.isEditRow&&(b.fileValueTextBox&&(a?b.fileValueTextBox.set("disabled",a):b.parent.isDuplicate&&b.parent._useValuesFromFile?b.fileValueTextBox.set("disabled",a):b.parent.isDuplicate||b.fileValueTextBox.set("disabled",a)),b.layerValueTextBox&&(a?b.layerValueTextBox.set("disabled",a):b.parent.isDuplicate&&
b.parent._useValuesFromLayer?b.layerValueTextBox.set("disabled",a):b.parent.isDuplicate||b.layerValueTextBox.set("disabled",a)))});this._toggleLocationControls(a)},resetAttributeValues:function(){h.forEach(this.featureControlTable.rows,d.hitch(this,function(a){a.fileValueTextBox&&a.fileValueTextBox.set("value",a.fileValue);a.layerValueTextBox&&a.layerValueTextBox.set("value",a.layerValue)}));this._changedFileAttributeRows=[];this._changedLayerAttributeRows=[]},resetAddressValues:function(a,b){h.forEach(this.locationControlTable.rows,
d.hitch(this,function(c){var d=this.csvStore.useAddr&&!this.csvStore.useMultiFields?"Match_addr":c.keyField;c.addressValueTextBox&&(d=this.isDuplicate&&this._useGeomFromLayer&&"not-duplicate"!==b?a.editAddress&&a.editAddress.hasOwnProperty(d)?a.editAddress[d]:void 0:c.addressValue,c.addressValueTextBox.set("value",d))}))},resetGeometry:function(a){this._feature.geometry=a;this.feature.geometry=a;this._featureToolbar._updateLayer(this.layer,null,[this._feature],null,!1,!0).then(d.hitch(this,function(){this._featureToolbar._flashFeatures([this._feature])}));
this.resetFromLayerRows()},resetFromLayerRows:function(){this.isDuplicate&&(this._featureToolbar._fileGeometryModified||(this._useGeomFromLayer=!0),this._featureToolbar._fileValuesModified||(this._useValuesFromLayer=!0),h.forEach(this.featureControlTable.rows,d.hitch(this,function(a){a.fromSelect&&("geom"===a.useType&&this._useGeomFromLayer||"values"===a.useType&&this._useValuesFromLayer)&&a.fromSelect.set("value","layer")})),h.forEach(this.locationControlTable.rows,d.hitch(this,function(a){a.fromSelect&&
("geom"===a.useType&&this._useGeomFromLayer||"values"===a.useType&&this._useValuesFromLayer)&&a.fromSelect.set("value","layer")})))},setStyleColor:function(a){this.styleColor=a;this._featureToolbar.styleColor=a},updateTheme:function(a){this.theme=a}})});