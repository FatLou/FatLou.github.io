// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/RelatedTableCharts/setting/SymbolChooser.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv style\x3d"height: calc(100% - 50px); overflow: auto;"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"symbolData" title\x3d"${nls.symbol}" class\x3d"common-input esriCTSymbolData"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"buttonsDiv" class\x3d"buttonsDiv"\x3e\r\n        \x3cdiv class\x3d"button-container button-container-absolute" style\x3d"padding: 0px;"\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1" data-dojo-attach-point\x3d"okButton"\x3e\r\n                OK\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/on dojo/dom-class dojo/text!./SymbolChooser.html jimu/dijit/SymbolChooser jimu/utils esri/symbols/jsonUtils dojo/dom-construct dojo/domReady!".split(" "),function(c,d,e,f,g,h,k,l,m,b,n){return c([d,e],{templateString:k,baseClass:"jimu-widget-RelatedTableCharts-setting",startup:function(){this.inherited(arguments)},postCreate:function(){this.own(g(this.okButton,"click",f.hitch(this,this._onOKButtonClicked)));
this._createSymbolInput()},_onOKButtonClicked:function(){if(!h.contains(this.okButton,"jimu-state-disabled"))this.onOkClick()},onOkClick:function(a){return a},_createSymbolInput:function(){var a;if(this.data.geometryType)return this.data.featureSetMode="draw",a={},this.config&&this.config.symbol&&!this.data.symbol?"esriGeometryPoint"===this.data.geometryType&&(a.symbol=b.fromJson(this.config.symbol.graphicLocationSymbol)):this.data&&this.data.symbol?a.symbol=b.fromJson(this.data.symbol):a.type=m.getSymbolTypeByGeometryType(this.data.geometryType),
this.symbolChooser=new l(a,n.create("div",{},this.symbolData)),this.symbolChooser.startup(),this.symbolChooser.getSymbol().toJson()}})});