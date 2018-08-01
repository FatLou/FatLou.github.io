// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/Intersection.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"addLayerLink"\x3e\r\n    \x3cdiv class\x3d"add-with-icon" data-dojo-attach-point\x3d"addLayer"\x3e\r\n      \x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\x3cspan class\x3d"add-label"\x3e\r\n        ${nls.intersectionPage.addLayerLinkText}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"layerTableNode" class\x3d"intersectionTable"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang jimu/dijit/CheckBox dijit/form/Select dojo/_base/array dojo/dom-construct dojo/on dojo/query dojo/Deferred dojo/text!./Intersection.html dijit/_TemplatedMixin jimu/dijit/LayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup".split(" "),function(l,d,x,m,f,n,h,k,p,q,r,g,t,u,v,w){return l([u,r],{baseClass:"jimu-widget-smartEditor-setting-intersection",templateString:q,_totalLayers:[],postCreate:function(){this.inherited(arguments);
this._totalLayers=[];this._createDialogContent();this.showDialog();this._initLayerSelector();this.own(h(this.addLayer,"click",d.hitch(this,function(){var a=this._layerTable.addRow({}).tr;this._addLayersDropDown(a);this._addFieldsDropDown(a)})))},_createDialogContent:function(){this.isEnabled=!1;this._fieldValues&&this._fieldValues.Intersection&&this._fieldValues.Intersection.hasOwnProperty("enabled")&&(this.isEnabled=this._fieldValues.Intersection.enabled);this._initTable()},_initTable:function(){this._layerTable=
new v({fields:[{name:"layerName",title:this.nls.intersectionPage.layerText,type:"empty",width:"40%"},{name:"fieldName",title:this.nls.intersectionPage.fieldText,type:"empty",width:"40%"},{name:"actions",title:this.nls.intersectionPage.actionsText,type:"actions",width:"20%",actions:["up","down","delete"],"class":"actions"}],selectable:!1});this._layerTable.placeAt(this.layerTableNode);this._layerTable.startup();this.own(h(this._layerTable,"actions-edit",d.hitch(this,this._onEditFieldInfoClick)));this.own(h(this._layerTable,
"actions-delete",d.hitch(this,this._onDeleteFieldInfoClick)));this._populateTableData()},_populateTableData:function(){f.forEach(this._fieldValues.Intersection.fields,d.hitch(this,function(a){var b=this._layerTable.addRow({}).tr;this._addLayersDropDown(b,a);this._addFieldsDropDown(b,a)}))},_addLayersDropDown:function(a,b){var c,e;a.layerSelector&&a.layerSelector.destroy();c=this._createLayerChooserMapArgs();e=new g(c);e.startup();c=k(".simple-table-cell",a)[0];e=new t({layerChooser:e});e.placeAt(c);
e.startup();a.layerSelector=e;e.setSelectedLayer(this._totalLayers[0]);b&&e.setSelectedLayer(this.layerInfos.getLayerInfoById(b.layerId).layerObject);this.own(h(e,"selection-change",d.hitch(this,function(){a.layerFields.set("options",this._addLayerFieldOptions(a));a.layerFields.set("value",a.layerFields.options[0],!1)})))},_createLayerChooserMapArgs:function(){return{multiple:!1,createMapResponse:this.map.webMapResponse,filter:this._createFiltersForLayerSelector()}},_createFiltersForLayerSelector:function(){var a,
b;a=g.createFeaturelayerFilter(["point","polyline","polygon"],!1,!1);b=g.createImageServiceLayerFilter(!0);return g.orCombineFilters([a,b])},_initLayerSelector:function(){var a;a=this._createLayerChooserMapArgs();this._layerChooserFromMap=new g(a);this._layerChooserFromMap.startup();a=this._layerChooserFromMap.layerInfosObj.getLayerInfoArray();this._getAllFilteredLayers(a,[])},_getAllFilteredLayers:function(a,b){f.forEach(a,d.hitch(this,function(a){var c;a.isLeaf()?(c=new p,this._layerChooserFromMap.filter(a).then(d.hitch(this,
function(b){b&&this._totalLayers.push(a);c.resolve()})),b.push(c)):this._getAllFilteredLayers(a.newSubLayers,b)}))},_addFieldsDropDown:function(a,b){var c;if(c=k(".simple-table-cell",a)[1])c=n.create("div",{"class":"esriCTDropDownContainer"},c),a.layerFields=new m({options:this._addLayerFieldOptions(a),"class":"esriCTSettingsFieldDropdown"}),a.layerFields.placeAt(c),a.layerFields.startup(),b&&a.layerFields.set("value",b.field,!1)},_addLayerNameOptions:function(){var a,b=[];a=this.layerInfos.getLayerInfoArray();
f.forEach(a,d.hitch(this,function(a){-1<a.layerObject.capabilities.indexOf("Query")&&b.push({label:a.layerObject.name,value:a.layerObject.id})}));return b},_addLayerFieldOptions:function(a){var b=[];a=a.layerSelector.getSelectedItem().layerInfo.layerObject;f.forEach(a.fields,d.hitch(this,function(a){"esriFieldTypeGeometry"!==a.type&&"esriFieldTypeBlob"!==a.type&&"esriFieldTypeRaster"!==a.type&&"esriFieldTypeXML"!==a.type&&b.push({label:a.alias||a.name,value:a.name})}));return b},showDialog:function(){var a=
new w({titleLabel:"Intersection",width:700,maxHeight:400,autoHeight:!0,content:this,"class":this.baseClass,buttons:[{label:this.nls.ok,onClick:d.hitch(this,function(){var b={};b.enabled=this.isEnabled;b.fields=this._getTableData();this._fieldValues.Intersection||(this._fieldValues.Intersection={actionName:"Intersection"});d.mixin(this._fieldValues.Intersection,b);a.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:d.hitch(this,function(){a.close()})}],onClose:d.hitch(this,
function(){})})},_getTableData:function(){var a=[],b;f.forEach(this._layerTable.getRows(),d.hitch(this,function(c){c.layerSelector&&(b={},b.layerId=c.layerSelector.getSelectedItem().layerInfo.id,b.field=c.layerFields.getValue(),a.push(b))}));return a}})});