// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/Evented jimu/BaseWidget dojo/_base/html dojo/_base/array dojo/on dijit/TooltipDialog dijit/form/Select dojo/dom-construct dijit/popup jimu/dijit/Message jimu/CSVUtils ./extractDataTask ./createReplica dojo/dom-class".split(" "),function(n,e,p,q,r,h,g,t,u,l,m,v,w,x,y,z){return n([q,p],{baseClass:"jimu-widget-screening",_popup:null,downloadOptions:[],isTooltipDialogOpened:!1,downLoadStatus:{},constructor:function(a){this._popup=null;this.downloadOptions=
[];this.isTooltipDialogOpened=!1;this.downLoadStatus={};e.mixin(this,a)},startup:function(){this._popup=new t({"class":"esriCTDownloadSettingsDialog "+this.baseClass,style:{width:"300px"}});"DartTheme"===this.appConfig.theme.name&&z.add(this._popup.domNode,"dart-panel");this._popup.startup();this.own(g(document.body,"click",e.hitch(this,function(a){this.isPartOfPopup(a.target||a.srcElement)||this.closePopup()})));this.own(g(window,"resize",e.hitch(this,function(){this.closePopup()})));this._createSettingsDialog()},
checkFileForDownload:function(){var a,b,c;a=b=c=!1;"extractDataTask"===this.config.downloadSettings.type&&(a=b=c=!0);h.forEach(this.config.downloadSettings.layers,e.hitch(this,function(d){d.allowDownload&&this.downloadFeatureDetailsObj[d.id]&&0<this.downloadFeatureDetailsObj[d.id].length&&(0<=d.downloadingFileOption.indexOf("csv")&&(a=!0),0<=d.downloadingFileOption.indexOf("shapefile")&&(b=!0),0<=d.downloadingFileOption.indexOf("filegdb")&&(c=!0))}));this.downLoadStatus={isCSVAvailable:a,isShapeFileAvailable:b,
isFileGDBAvailable:c}},_createSettingsDialog:function(){var a,b;a=l.create("div",{"class":"esriCTDownloadSettingsContainer"},null);l.create("div",{"class":"esriCTEllipsis esriCTDownloadSettingLabel",innerHTML:this.nls.reportsTab.downloadLabelText},a);this.downloadFormatSelect=new u;this._loadOptionsForDropDown(this.downloadFormatSelect);this.downloadFormatSelect.placeAt(a);b=l.create("button",{innerHTML:this.nls.reportsTab.downloadBtnText,"class":"esriCTEllipsis jimu-btn esriCTDownloadSettingsBtn"},
l.create("div",{"class":"esriCTDownloadSettingsBtnContainer"},a));this.own(g(b,"click",e.hitch(this,function(){this.closePopup();this.isAndroidDevice?this._startDownload():this._chooseFileTypeToDownload()})));this._popup.setContent(a)},_loadOptionsForDropDown:function(a){var b=[],c;h.forEach(this.config.downloadSettings.downloadingFileOptions,e.hitch(this,function(a){c={value:a,label:this.nls.reportsTab[a]};b.push(c)}));a.addOption(b)},openPopup:function(){m.open({popup:this._popup,x:this.position.pageX,
y:this.position.pageY});this.isTooltipDialogOpened=!0},closePopup:function(){this._popup&&(m.close(this._popup),this.isTooltipDialogOpened=!1)},isPartOfPopup:function(a){var b;b=this._popup.domNode;return a===b||r.isDescendant(a,b)},_chooseFileTypeToDownload:function(){switch(this.downloadFormatSelect.get("value")){case "csv":this.downLoadStatus.isCSVAvailable?this._exportToCSV():this.emit("showMessage",this.nls.reportsTab.noFeaturesFound);break;case "filegdb":this.downLoadStatus.isFileGDBAvailable?
"syncEnable"===this.config.downloadSettings.type?this._exportFileUsingCreateReplica("filegdb"):"extractDataTask"===this.config.downloadSettings.type&&this.isPointOrLineAOI?this.emit("showMessage",this.nls.reportsTab.unableToDownloadFileGDBText):this._exportFileUsingExtractDataTask("filegdb"):this.emit("showMessage",this.nls.reportsTab.noFeaturesFound);break;case "shapefile":this.downLoadStatus.isShapeFileAvailable?"syncEnable"===this.config.downloadSettings.type?this._exportFileUsingCreateReplica("shapefile"):
"extractDataTask"===this.config.downloadSettings.type&&this.isPointOrLineAOI?this.emit("showMessage",this.nls.reportsTab.unableToDownloadShapefileText):this._exportFileUsingExtractDataTask("shapefile"):this.emit("showMessage",this.nls.reportsTab.noFeaturesFound)}},_startDownload:function(){var a=new v({titleLabel:this.nls.reportsTab.downloadReportConfirmTitle,message:this.nls.reportsTab.downloadReportConfirmMessage,autoHeight:!0,buttons:[{label:this.nls.common.yes,onClick:e.hitch(this,function(){this._chooseFileTypeToDownload();
a.close()})},{label:this.nls.common.no}]})},_exportToCSV:function(){var a,b,c={},d,k,f=[],f=this.config.downloadSettings.layers;this.shapeFileLayerDetails&&(f=f.concat(this.shapeFileLayerDetails));h.forEach(f,e.hitch(this,function(f){c={};k=!1;k="extractDataTask"===this.config.downloadSettings.type?!0:f.allowDownload;a=f.isShapeFile?f.layer:this.filterLayerObj[f.id];b=this._getLayerData(a,this.downloadFeatureDetailsObj[f.id]);b=dojo.mixin({},b);b=this._removeAnalysisUnitFromCSV(b);this._addAnalysisDataToCSVData(b,
f.id);d=this._getInfoTemplate(a);0<b.graphicsArray.length&&k&&(c.datas=b.graphicsArray,c.fromClient=!1,c.withGeometry="esriGeometryPoint"===a.geometryType,c.outFields=b.outFields,c.formatNumber=!1,c.formatDate=!0,c.formatCodedValue=!0,c.popupInfo=d,w.exportCSVFromFeatureLayer(a.name||"CSV_FILE",a,c))}))},_removeAnalysisUnitFromCSV:function(a){var b;b=a.outFields;h.forEach(b,function(a,d){"CSVMeasurementUnit"===a.name&&b.splice(d,1)});return a},_getInfoTemplate:function(a){var b,c,d;if(a.infoTemplate)return a.infoTemplate.info;
b=a.id.split("_");b[b.length-1]===a.layerId.toString()&&(b.pop(),c=b.join("_"));c&&(d=this.map.getLayer(c));return d&&d.infoTemplates&&d.infoTemplates.hasOwnProperty(a.layerId)?d.infoTemplates[a.layerId].infoTemplate.info:null},_getLayerData:function(a,b){var c=[];h.forEach(b,e.hitch(this,function(a){a.attributes.geometry=a.geometry;c.push(a.attributes)}));return"esriGeometryPoint"===a.geometryType?(a=this._formatPointLayerData(c,a),{graphicsArray:a.layerGraphics,outFields:a._outFields}):{graphicsArray:c,
outFields:a.fields}},_formatPointLayerData:function(a,b){var c={};a=e.clone(a);b=b.fields;h.forEach(a,function(a){var b=a.geometry;b&&"point"===b.type&&("x"in a?a._x=b.x:a.x=b.x,"y"in a?a._y=b.y:a.y=b.y);delete a.geometry});b=e.clone(b);var d="",d=-1!==b.indexOf("x")?"_x":"x";b.push({name:d,alias:d,format:{digitSeparator:!1,places:6},show:!0,type:"esriFieldTypeDouble"});d=-1!==b.indexOf("y")?"_y":"y";b.push({name:d,alias:d,format:{digitSeparator:!1,places:6},show:!0,type:"esriFieldTypeDouble"});c.layerGraphics=
a;c._outFields=b;return c},_exportFileUsingExtractDataTask:function(a){this.loadingIndicator.show();a=new x({map:this.map,aoi:this.aoi,fileFormat:a,url:this.config.downloadSettings.extractDataTaskURL});a.startup();this.own(g(a,"onGPTaskSuccess",e.hitch(this,function(a){this._downloadDataFile(a);this.loadingIndicator.hide()})));this.own(g(a,"onGPTaskFailed",e.hitch(this,function(){this.emit("showMessage",this.nls.reportsTab.extractDataTaskFailedMessage);this.loadingIndicator.hide()})))},_exportFileUsingCreateReplica:function(a){this.loadingIndicator.show();
a=new y({map:this.map,config:this.config,aoi:this.aoi,fileFormat:a,filterLayerObj:this.filterLayerObj,nls:this.nls,downloadFeatureDetailsObj:this.downloadFeatureDetailsObj});this.own(g(a,"onRequestSucceeded",e.hitch(this,function(a){this._downloadDataFile(a);this.loadingIndicator.hide()})));this.own(g(a,"onRequestFailed",e.hitch(this,function(){this.loadingIndicator.hide()})));this.own(g(a,"createReplicaComplete",e.hitch(this,function(a){a&&this.emit("showMessage",a);this.loadingIndicator.hide()})));
this.own(g(a,"showErrMessage",e.hitch(this,function(a){this.emit("showMessage",a)})));a.startup()},_downloadDataFile:function(a){var b,c,d,k,f,g,h;for(f in this.filterLayerObj)if(this.filterLayerObj.hasOwnProperty(f)&&(d=this.filterLayerObj[f],d.credential&&d.credential.token&&(k=a.split("replicafiles"),g=d.url,h=k[0].toLowerCase(),h=h.replace(/(^\w+:|^)\/\//,""),0<k.length&&-1<g.toLowerCase().indexOf(h.toLowerCase())))){a=a+"?token\x3d"+d.credential.token;break}b=l.create("iframe",{"class":"esriCTHidden",
src:a},this.iframeNode);c=setInterval(e.hitch(this,function(){var a=b.contentDocument||b.contentWindow.document;if("complete"===a.readyState||"interactive"===a.readyState)l.destroy(b),clearInterval(c)}),4E3)},_addAnalysisDataToCSVData:function(a,b){var c,d,e,f;d=a.graphicsArray.length;if(0<d){for(c=0;c<d;c++)if(f=a.graphicsArray[c],e=this._getFeatureAnalysisData(b,c))f.CSVMeasurementUnit=e.analysisResultValue;e&&this._addGeometryUnitToFields(a,e)}},_addGeometryUnitToFields:function(a,b){a.outFields.push({alias:b.analysisResultKey+
"("+b.analysisUnit+")",name:"CSVMeasurementUnit",type:"esriFieldTypeDouble"})},_getFeatureAnalysisData:function(a,b){var c,d,e,f={};e="";for(c in this.printData)if(d=this.printData[c],-1!==c.indexOf(a)&&"esriGeometryPoint"!==d.geometryType)return e=this._getAnalysisUnitForGeometry(this.areaUnits,d.geometryType),a=this.areaUnits.toLowerCase()+"UnitInfo",f.analysisResultValue=d[a][b],f.analysisResultKey=this._getAnalysisResultKey(d.geometryType),f.analysisUnit=e,f},_getAnalysisResultKey:function(a){if("esriGeometryPolygon"===
a)return this.nls.reportsTab.featureCSVAreaText;if("esriGeometryPolyline"===a)return this.nls.reportsTab.featureCSVLengthText},_getAnalysisUnitForGeometry:function(a,b){var c;switch(a){case "Feet":c="esriGeometryPolygon"===b?this.nls.units.squareFeetAbbr:this.nls.units.feetAbbr;break;case "Miles":c="esriGeometryPolygon"===b?this.nls.units.acresAbbr:this.nls.units.milesAbbr;break;case "Meters":c="esriGeometryPolygon"===b?this.nls.units.squareMetersAbbr:this.nls.units.metersAbbr;break;case "Kilometers":c=
"esriGeometryPolygon"===b?this.nls.units.squareKilometerAbbr:this.nls.units.kilometersAbbr;break;case "Hectares":c="esriGeometryPolygon"===b?this.nls.reportsTab.hectaresAbbr:this.nls.units.kilometersAbbr}return c}})});