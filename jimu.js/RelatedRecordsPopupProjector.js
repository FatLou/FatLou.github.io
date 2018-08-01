// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/has dojo/query dojo/Deferred dijit/_WidgetBase dijit/_TemplatedMixin esri/undoManager esri/OperationBase esri/tasks/RelationshipQuery esri/dijit/Popup esri/dijit/PopupMobile esri/graphicsUtils esri/dijit/PopupTemplate jimu/utils jimu/ConfigManager jimu/dijit/DropdownMenu jimu/LayerInfos/LayerInfos".split(" "),function(k,f,l,d,n,r,e,p,t,u,v,w,x,q,y,z,A,B,C,D,E){var h=k([t,u],{baseClass:"related-records-popup-projector",
templateString:"\x3cdiv\x3e\x3cdiv class\x3d'operation-box' data-dojo-attach-point\x3d'operationBox' style\x3d'display: none'\x3e\x3cdiv class\x3d'previos-btn feature-action' data-dojo-attach-point\x3d'previouBtn'data-dojo-attach-event\x3d'click:_onPreviouBtnClick'\x3e\x3c/div\x3e\x3cdiv class\x3d'operation-title' data-dojo-attach-point\x3d'operationTitle'\x3eabc\x3c/div\x3e\x3cdiv class\x3d'add-new-btn' data-dojo-attach-point\x3d'addNewBtn'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'content-box' data-dojo-attach-point\x3d'contentBox'\x3e\x3c/div\x3e\x3c/div\x3e",
popup:null,popupManager:null,undoManager:null,originalFeature:null,originalJimuLayerInfo:null,_temporaryData:null,postCreate:function(){this.undoManager=new v;this.layerInfosObj=E.getInstanceSync();var a=f.getObject("_wabProperties.referToFeatureLayerId",!1,this.originalFeature)||this.originalFeature.getLayer().id;this.originalJimuLayerInfo=this.layerInfosObj.getLayerInfoById(a);this._temporaryData={eventHandles:[],dijits:[]};window.isRTL?d.addClass(this.previouBtn,"icon-arrow-forward"):d.addClass(this.previouBtn,
"icon-arrow-back");a=this._createOperation({feature:this.originalFeature,oriJimuLayerInfo:this.originalJimuLayerInfo});this.showRelatedTables(a);this.popupUIController="esri.dijit.Popup"===this.popup.declaredClass?new h.PopupUIController(this):new h.PopupMobileUIController(this);this.popupUIController.addDomNode(this.domNode)},destroy:function(){this._clearPage();this.undoManager.destroy();this.popupUIController.destroy();this.inherited(arguments)},_getRelatedTableInfoArray:function(a){a=a.data.oriJimuLayerInfo;
var b=new p;a.getRelatedTableInfoArray().then(f.hitch(this,function(a){b.resolve(a)}));return b},_getOriRelationshipByDestLayer:function(a){var b=null;l.some(a.oriJimuLayerInfo.layerObject.relationships,function(c){if(c.relatedTableId===a.destJimuLayerInfo.layerObject.layerId)return b=c,!0},this);return b},_getRelatedRecordsByRelatedQuery:function(a){var b=new p,c=new x,d=this._getOriRelationshipByDestLayer(a);c.outFields=["*"];c.returnGeometry=!0;c.outSpatialReference=this.popupManager.mapManager.map.spatialReference;
c.relationshipId=d.id;var g=a.feature.attributes[a.oriJimuLayerInfo.layerObject.objectIdField];c.objectIds=[g];a.oriJimuLayerInfo.layerObject.queryRelatedFeatures(c,f.hitch(this,function(a){(a=a[g]&&a[g].features)?b.resolve(a):b.resolve([])}),f.hitch(this,function(){b.resolve([])}));return b},_ignoreCaseToGetFieldObject:function(a,b){var c=null;b&&a&&a.fields&&l.some(a.fields,function(a){if(a.name.toLowerCase()===b.toLowerCase())return c=a,!0});return c},getLocaleDateTime:function(a){return B.localizeDate(new Date(a),
{fullYear:!0,formatLength:"medium"})},_getDisplayTitleOfRelatedRecord:function(a,b,c){var d=a.getInfoTemplate();return(a="popupTitle"===c&&d?"function"===typeof d.title?d.title(b):d.title:this._getDisplayTitleFromPopup(a,b,c))?a:""},_getDisplayTitleFromPopup:function(a,b,c){(a=this._getPopupTemplateWithOnlyDisplayField(a,c))?(b.setInfoTemplate(a),c=this.popupUIController.getDisplayTitle(b),b.setInfoTemplate(null)):c=b.attributes[c];return c},_getPopupTemplateWithOnlyDisplayField:function(a,b){a=a._getCustomPopupInfo(a.layerObject,
[b]);return new A(a)},_canShowRelatedData:function(a){var b=!0;(a=a.getPopupInfo())&&a.relatedRecordsInfo&&(b=!1!==a.relatedRecordsInfo.showRelatedRecords);return b},setPopupContent:function(a){this._clearPage();a.data.destJimuLayerInfo?a.data.relatedFeature||this.showRelatedRecords(a):this.showFeature(a);this.undoManager.peekUndo()?this.popupUIController.changeRefDomNode():this.popupUIController.revertRefDomNode()},showFeature:function(a){var b=a.data,c=b.oriJimuLayerInfo.layerObject,d=f.getObject("_wabProperties.originalLayerName",
!1,c)||b.oriJimuLayerInfo.title,c=f.getObject("_wabProperties.popupInfo.displayFieldOfRelatedRecordList",!1,c),g=this._getDisplayTitleOfRelatedRecord(b.oriJimuLayerInfo,b.feature,c);"popupTitle"!==c&&(g=d+": "+g);this._setOperationTitle(g);f.setObject("_wabProperties.popupInfo.operationDataForListRelatedRecords",null,b.oriJimuLayerInfo.layerObject);b.oriJimuLayerInfo.loadInfoTemplate().then(f.hitch(this,function(c){b.oriJimuLayerInfo.layerObject.infoTemplate||a.data.feature.setInfoTemplate(c);this.popupUIController.setFeature(a.data.feature);
b.oriJimuLayerInfo.layerObject.infoTemplate||a.data.feature.setInfoTemplate(null)}));this.showRelatedTables(a);this.popupManager.initPopupMenu([a.data.feature]);this.popupUIController.updateZoomToBtn([a.data.feature])},showRelatedRecords:function(a){var b=a.data,c=f.getObject("_wabProperties.originalLayerName",!1,b.destJimuLayerInfo.layerObject)||b.destJimuLayerInfo.title;this._setOperationTitle(c);this._clearPage();f.setObject("_wabProperties.popupInfo.operationDataForListRelatedRecords",b,b.destJimuLayerInfo.layerObject);
f.setObject("_wabProperties.popupInfo.originalFeature",this.originalFeature,b.destJimuLayerInfo.layerObject);f.setObject("_wabProperties.popupInfo.layerForActionWithEmptyFeatures",b.destJimuLayerInfo.layerObject,this.popup);this._getRelatedRecordsByRelatedQuery(b).then(f.hitch(this,function(c){0<c.length?this._setTitle(window.jimuNls.popup.relatedRecords):this._setTitle(window.jimuNls.popup.noRelatedRecotds,"font-normal");var g=this._showFieldSelector(b.destJimuLayerInfo);l.forEach(c,function(c,e){c._layer=
b.destJimuLayerInfo.layerObject;var F=this._getDisplayTitleOfRelatedRecord(b.destJimuLayerInfo,c,g);e=d.create("div",{"class":"item record-item "+(0===e%2?"oddLine":"evenLine"),innerHTML:F},this.contentBox);e.relatedRecord=c;e=n(e,"click",f.hitch(this,function(){this._addOperation(a);var d=this._createOperation({feature:c,oriJimuLayerInfo:b.destJimuLayerInfo});this.setPopupContent(d)}));this._temporaryData.eventHandles.push(e)},this);this.popupManager.initPopupMenu(c);this.popupUIController.updateZoomToBtn(c)}));
this.popupUIController.setContent(this.domNode)},showRelatedTables:function(a){this._canShowRelatedData(a.data.oriJimuLayerInfo)&&this._getRelatedTableInfoArray(a).then(f.hitch(this,function(b){0<b.length&&this._setTitle(window.jimuNls.popup.relatedTables);l.forEach(b,function(b,e){e=d.create("div",{"class":"item table-item "+(0===e%2?"oddLine":"evenLine"),innerHTML:b.title},this.contentBox);e=n(e,"click",f.hitch(this,function(){b.getLayerObject().then(f.hitch(this,function(){this._addOperation(a);
var c=this._createOperation({feature:a.data.feature,oriJimuLayerInfo:a.data.oriJimuLayerInfo,destJimuLayerInfo:b});this.setPopupContent(c)}))}));this._temporaryData.eventHandles.push(e)},this)}))},_createOperation:function(a){return new h.Operation({feature:a.feature||null,oriJimuLayerInfo:a.oriJimuLayerInfo||null,destJimuLayerInfo:a.destJimuLayerInfo||null,relatedFeature:a.relatedFeature||null},this)},_addOperation:function(a){this.undoManager.add(a)},_onPreviouBtnClick:function(){this.undoManager.undo()},
_clearPage:function(){d.empty(this.contentBox);l.forEach(this._temporaryData.eventHandles,function(a){a&&a.remove&&a.remove()},this);this._temporaryData.eventHandles=[];l.forEach(this._temporaryData.dijits,function(a){a&&a.destroy&&a.destroy()},this);this._temporaryData.dijits=[]},_setTitle:function(a,b){a&&d.create("div",{"class":"title-box "+(b?b:""),innerHTML:a},this.contentBox)},_setOperationTitle:function(a){d.setAttr(this.operationTitle,"innerHTML",a);d.setAttr(this.operationTitle,"title",a)},
_showFieldSelector:function(a){var b="objecid",c=e(".title-box",this.contentBox)[0],d=a.layerObject,g=[];if(!c||!a)return b;var h=a.getPopupInfo();h&&h.title&&g.push({label:window.jimuNls.popup.saveAsPopupTitle,value:"popupTitle"});l.forEach(d.fields,function(a){"globalid"!==a.name.toLowerCase()&&"shape"!==a.name.toLowerCase()&&g.push({label:a.alias||a.name,value:a.name})});c=(new D({items:g})).placeAt(c);c.domNode.title=window.jimuNls.popup.chooseFieldTip;var k=f.getObject("_wabProperties.popupInfo.displayFieldOfRelatedRecordList",
!1,d),m=this._ignoreCaseToGetFieldObject(a.layerObject,a.layerObject.displayField||a.layerObject.objectIdField),p=C.getInstance().getAppConfig();k?b=k:"2.3"===p.configWabVersion&&m&&m.name?b=m.name:h&&h.title?b="popupTitle":m&&m.name?b=m.name:0<g.length&&(b=g[0].value);b&&(c.setHighlightValue(b),f.setObject("_wabProperties.popupInfo.displayFieldOfRelatedRecordList",b,d));this._temporaryData.dijits.push(c);a=n(c,"click-item",f.hitch(this,function(a,b){e(".item.record-item",this.contentBox).forEach(f.hitch(this,
function(c){f.setObject("_wabProperties.popupInfo.displayFieldOfRelatedRecordList",b,d);var e=this._getDisplayTitleOfRelatedRecord(a,c.relatedRecord,b);c.innerHTML=e}))},a));this._temporaryData.eventHandles.push(a);return b}});h.Operation=k([w],{constructor:function(a,b){this.data=a;this.relatedRecordsPopupProjector=b},performUndo:function(){this.relatedRecordsPopupProjector.setPopupContent(this)}});h.PopupUIController=k([],{constructor:function(a){this.rrPopupProjector=a;this.popup=a.popup;this.initTempPopup();
this._initTempPopupForDisplayTitle();this._initZoomToBtn();this._setScrollable()},initTempPopup:function(){this._tempPopup=new q({},d.create("div"))},_initTempPopupForDisplayTitle:function(){this._tempPopupForDisplayTitle=new q({},d.create("div"));this._tempPopupForDisplayTitle.show()},destroy:function(){this._tempPopup.destroy();this._tempPopupForDisplayTitle.destroy();this._zoomToBtnClickHandle&&this._zoomToBtnClickHandle.remove&&this._zoomToBtnClickHandle.remove();this._zoomToBtnANode&&d.destroy(this._zoomToBtnANode);
this.toucemoveScrollHandle&&this.toucemoveScrollHandle.remove&&this.toucemoveScrollHandle.remove()},addDomNode:function(a){setTimeout(f.hitch(this,function(){d.place(a,this._getRefDomNode(),"after")}),1)},setFeature:function(a){this._tempPopup.setFeatures([a]);if(a=e(".esriViewPopup",this._tempPopup.domNode)[0])this.setContent(a),d.place(this.rrPopupProjector.domNode,a,"after"),this._unsetScrollable()},setContent:function(a){var b=e(".related-records-popup-projector").parent()[0];b&&b.removeChild(this.rrPopupProjector.domNode);
this.popup.setContent(a);this._unsetScrollable()},_setScrollable:function(){var a=e(".contentPane",this.popup.domNode)[0];r("esri-touch")&&a&&(this.toucemoveScrollHandle=n(a,"touchmove",f.hitch(this,function(b){b.preventDefault();e(".esriViewPopup",this.popup.domNode)[0]&&(b=a.firstChild,b instanceof Text&&(b=a.childNodes[1]),this.rrPopupProjector.domNode&&d.setStyle(this.rrPopupProjector.contentBox,{"-webkit-transition-property":"-webkit-transform","-webkit-transform":"translate("+b._currentX+"px, "+
b._currentY+"px)"}))})))},_unsetScrollable:function(){d.setStyle(this.rrPopupProjector.contentBox,{"-webkit-transition-property":"none","-webkit-transform":"none"});d.setStyle(this.rrPopupProjector.domNode,{"-webkit-transition-property":"none","-webkit-transform":"none"})},getDisplayTitle:function(a){this._tempPopupForDisplayTitle.setFeatures([a]);return(a=e("td.attrValue",this._tempPopupForDisplayTitle.domNode)[0])&&a.innerHTML},_getRefDomNode:function(){return this._getViewPopupDomNode()},_getViewPopupDomNode:function(){return e(".esriViewPopup",
this.popup.domNode)[0]},_setPopupTitleInBody:function(){this.rrPopupProjector.undoManager.peekUndo()?this._tempPopup.set("titleInBody",!1):this._tempPopup.set("titleInBody",!0)},_initZoomToBtn:function(){var a=e(".actionList",this.popup.domNode)[0];this._oldZoomToBtnANdoe=e(".action",a)[0];this._zoomToBtnANode=d.create("a",{"class":"action",style:"display: none",href:"javascript:void(0)"},a);this._zoomToBtn=d.create("span",{innerHTML:window.jimuNls.common.zoomTo},this._zoomToBtnANode);this._showOldZoomToBtn()},
_hideZoomToBtn:function(){this._zoomToBtnANode&&d.setStyle(this._zoomToBtnANode,"display","none")},_showZoomToBtn:function(){this._zoomToBtnANode&&d.setStyle(this._zoomToBtnANode,"display","inline-block")},_hideOldZoomToBtn:function(){this._oldZoomToBtnANdoe&&d.setStyle(this._oldZoomToBtnANdoe,"display","none")},_showOldZoomToBtn:function(){this._oldZoomToBtnANdoe&&d.setStyle(this._oldZoomToBtnANdoe,"display","inline-block")},updateZoomToBtn:function(a){this._hideOldZoomToBtn();!a||1>a.length||!a[0].geometry?
this._hideZoomToBtn():(this._showZoomToBtn(),this._zoomToBtnClickHandle&&this._zoomToBtnClickHandle.remove&&this._zoomToBtnClickHandle.remove(),this._zoomToBtnClickHandle=n(this._zoomToBtn,"click",f.hitch(this,function(){var b=null;try{b=z.graphicsExtent(a)}catch(c){console.error(c)}b&&(this.rrPopupProjector.popupManager.mapManager.map.setExtent(b),this.popup.hide())})))},changeRefDomNode:function(){d.setStyle(this.rrPopupProjector.operationBox,"display","block");d.addClass(this.rrPopupProjector.domNode,
"second-page-mode");var a=this._getViewPopupDomNode();a&&d.addClass(a,"second-page-mode")},revertRefDomNode:function(){d.setStyle(this.rrPopupProjector.operationBox,"display","none");d.removeClass(this.rrPopupProjector.domNode,"second-page-mode");this._hideZoomToBtn();this._showOldZoomToBtn()}});h.PopupMobileUIController=k([h.PopupUIController],{initTempPopup:function(){this._tempPopup=new y({},d.create("div"))},setFeature:function(a){this._tempPopup.setFeatures([a]);a=e(".esriMobileInfoView.esriMobilePopupInfoView",
this._tempPopup.domNode)[0];if(a=e(".esriViewPopup",a)[0])this.setContent(a),d.place(this.rrPopupProjector.domNode,a,"after")},updateZoomToBtn:function(){},_initZoomToBtn:function(){},_getRefDomNode:function(){return e(".esriMobilePopupInfoView .esriMobileInfoViewItem")[1]},_getViewPopupDomNode:function(){var a=e(".esriMobileInfoView.esriMobilePopupInfoView")[0];return e(".esriViewPopup",a)[0]}});return h});