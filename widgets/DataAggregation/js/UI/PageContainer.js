// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DataAggregation/js/UI/templates/PageContainer.html":'\x3cdiv style\x3d"height: 100%;"\x3e\r\n  \x3cdiv class\x3d"control-node" data-dojo-attach-point\x3d"controlNode"\x3e\r\n    \x3ctable data-dojo-attach-point\x3d"controlTable" class\x3d"control-table" cellpading\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"controlTr" style\x3d"line-height:20px;"\x3e\r\n          \x3c!--BACK--\x3e\r\n          \x3ctd nowrap class\x3d"page-item-td-left" data-dojo-attach-point\x3d"backTd" data-dojo-attach-event\x3d"onclick:_prevView"\x3e\r\n            \x3cdiv class\x3d"float-left bg-img bg-back-img margin-right-5" data-dojo-attach-point\x3d"backImage"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"page-item-div main-text" title\x3d"${nls.back}" label\x3d"${nls.back}"\x3e${nls.back}\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3c!--HOME--\x3e\r\n          \x3ctd nowrap align\x3d"center" class\x3d"page-item-td-center" data-dojo-attach-point\x3d"homeTd" data-dojo-attach-event\x3d"onclick:_homeView"\x3e\r\n            \x3cdiv\x3e\r\n              \x3cdiv class\x3d"bg-home bg-home-img" data-dojo-attach-point\x3d"homeImage"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"page-item-div"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3c!--NEXT--\x3e\r\n          \x3ctd nowrap class\x3d"page-item-td-right" data-dojo-attach-point\x3d"nextTd" data-dojo-attach-event\x3d"onclick:_nextView"\x3e\r\n            \x3cdiv class\x3d"float-right bg-img bg-next-img margin-left-5" data-dojo-attach-point\x3d"nextImage"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"page-item-div main-text" title\x3d"${nls.next}" label\x3d"${nls.next}"\x3e${nls.next}\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"container-node" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"tab-shelter" data-dojo-attach-point\x3d"shelter"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/topic dojo/Evented dojo/query dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/PageContainer.html jimu/dijit/ViewStack".split(" "),function(n,h,k,l,m,p,q,f,r,t,u,v){return n([r,t,p],{templateString:u,selected:"",tabs:null,average:!1,nls:null,baseClass:"jimu-tab3",declaredClass:"PageContainer",views:[],_currentIndex:-1,_homeIndex:0,theme:"",isDarkTheme:"",styleColor:"",altHomeIndex:0,nextDisabled:!1,
_backLabels:[],constructor:function(a){h.mixin(this,a);this.theme=this.appConfig.theme.name;this.own(m.subscribe("appConfigChanged",h.hitch(this,this._onAppConfigChanged)));this.own(m.subscribe("builder/styleChanged",h.hitch(this,this._onBuilderStyleChanged)))},postCreate:function(){this.inherited(arguments);this.displayControllerOnStart||this.toggleController(!0);this._darkThemes=["DartTheme","DashboardTheme"];this.updateImageNodes()},startup:function(){this.inherited(arguments);this._started=!0;
this._initSelf();this.selected?this.selectView(this.selected):0<this.views.length&&this.selectView(this._homeIndex);this._backLabels=[]},_onBuilderStyleChanged:function(a){this.setStyleColor(a.styleColor)},_onAppConfigChanged:function(a,b,c){switch(b){case "themeChange":this.theme=a.theme.name;this.updateImageNodes();this._updateViewTheme();this.emit("theme-change",a,b,c);break;case "layoutChange":this.emit("layout-change",a,b,c);break;case "styleChange":this.emit("style-change",a,b,c);break;case "widgetChange":this.emit("widget-change",
a,b,c);break;case "mapChange":this.emit("map-change",a,b,c)}},selectView:function(a,b){!b&&0<a&&(b=this.getSelectedTitle(),(b=this.getViewByTitle(b))&&this._backLabels[this._backLabels.length-1]!==b.label&&(this._backLabels.push(b.label),this.backDisabled=!1));this.viewStack.switchView(a);this._updateDomNodes(a);this._currentIndex=a;this.emit("view-changed",a)},showShelter:function(){l.setStyle(this.shelter,"display","block")},hideShelter:function(){l.setStyle(this.shelter,"display","none")},_initSelf:function(){this.viewStack?
this.viewStack._currentView=void 0:this.viewStack=new v(null,this.containerNode);this._initViews()},_initViews:function(){k.forEach(this.views,h.hitch(this,function(a){this.addView(a)}))},_prevView:function(){this._navView("back-view")},_homeView:function(){this._navView("home-view")},_nextView:function(){this._navView("next-view")},_navView:function(a){var b=this.getSelectedTitle(),c=this.getViewByTitle(b),e=this._homeIndex,d,f=!1;if("back-view"===a&&0<this._backLabels.length){var k;for(d=this._backLabels.length-
1;0<=d&&(!(k=this.getViewByTitle(this._backLabels[d]))||this._backLabels[d]===b);d--)this._backLabels.splice(d,1);d=k.index;f=!0}"next-view"===a&&"undefined"===typeof c&&0<this._backLabels.length&&(c=this.getViewByTitle(this._backLabels[this._backLabels.length-1]));"undefined"===typeof d&&(d="next-view"===a?c.altNextIndex:"back-view"===a?c.altBackIndex:void 0);var g;"undefined"!==typeof d&&"home-view"!==a?g=this.getViewByIndex(d):"next-view"===a?this._currentIndex<this.viewCount-1&&(g=this.getViewByIndex(this._currentIndex+
1)):g="back-view"===a?this._currentIndex-1<=this._homeIndex?this.getViewByIndex(this._homeIndex):this.getViewByIndex(this._currentIndex-1):this.getViewByIndex(e);g&&(b={currentView:c,navView:g},this.emit(a,b),c.validate?c.validate(a,b).then(h.hitch(this,function(b){b&&this._navigate(g.index,f,c.index,a,g.label)})):this._navigate(g.index,f,c.index,a,g.label))},_navigate:function(a,b,c,e,d){0<c&&"next-view"===e&&this._backLabels[this._backLabels.length-1]!==this.views[c].label&&(this._backLabels.push(this.views[c].label),
this.backDisabled=!1);if(b){for(b=this._backLabels.length-1;0<=b;b--)if(this._backLabels[b]===d){this._backLabels.splice(b,1);break}0===this._backLabels.length&&(this.backDisabled=!0)}this._currentIndex=a;this.selectView(a,!0);this.emit("nav-view",a)},getSelectedIndex:function(){return this._currentIndex},getSelectedTitle:function(){return this.viewStack.getSelectedLabel()},getViewByIndex:function(a){if(this.views.length>a)return this.views[a]},getViewByTitle:function(a){for(var b=0;b<this.views.length;b++){var c=
this.views[b];if(c.label===a)return c}},_updateControl:function(a,b){b?l.addClass(a,"control-disbaled"):l.removeClass(a,"control-disbaled")},_updateViews:function(){this.viewCount=this.views.length;for(var a=0;a<this.views.length;a++){var b=this.views[a];b.setStyleColor(this.styleColor);"undefined"!==typeof b.index&&b.index!==a&&this.emit("view-index-change",{oldIndex:b.index,newIndex:a});b.index=a}this.emit("views-updated",this)},addView:function(a){a.pageContainer=this;this._containsView(a.label)||
this.views.push(a);this.viewStack.getViewByLabel(a.label)||this.viewStack.addView(a);this._updateViews();this.emit("view-added",a)},removeViewByTitle:function(a){a=this.getViewByTitle(a);this.removeViewByIndex(a.index)},removeView:function(a){this.removeViewByIndex(a.index)},removeViewByIndex:function(a){var b=this.getViewByIndex(a),c=b.label;this.viewStack.removeView(b);this.views.splice(a,1);this._updateViews();this._backLabels=this._backLabels.filter(function(a){return a!==c});0===this._backLabels.length&&
(this.backDisabled=!0);this._navView("next-view");this.emit("view-removed",b)},_clearViews:function(){k.forEach(this.views,h.hitch(this,function(a){this.viewStack.removeView(a)}));this.views=[];this._backLabels=[]},_containsView:function(a){for(var b=0;b<this.views.length;b++)if(this.views[b].label===a)return!0;return!1},setStyleColor:function(a){this.styleColor=a;k.forEach(this.views,h.hitch(this,function(b){b.styleColor=a}))},updateImageNodes:function(){var a=-1<this._darkThemes.indexOf(this.theme);
this._updateImageNode(a,"bg-back-img","bg-back-img-white");this._updateImageNode(a,"bg-home-img","bg-home-img-white");this._updateImageNode(a,"bg-next-img","bg-next-img-white")},_updateDomNodes:function(a){var b=this.views[a],c=this._homeIndex,e=this.backDisabled?this.backDisabled:a===this._homeIndex?!0:!1;this._updateControl(this.backTd,e);this._updateControl(this.backImage,e);e=a===c?!0:!1;this._updateControl(this.homeTd,e);this._updateControl(this.homeImage,e);b=b&&"undefined"!==typeof b.altNextIndex;
a=this.nextDisabled?this.nextDisabled:a!==c||this.nextDisabled?b?!1:this.nextDisabled:!1;this._updateControl(this.nextTd,a);this._updateControl(this.nextImage,a)},_updateImageNode:function(a,b,c){var e=a?b:c,d=a?c:b;a=q("."+e,this.domNode);k.forEach(a,function(a){f.remove(a,e);f.add(a,d)})},_updateViewTheme:function(a){this.theme=a;k.forEach(this.views,h.hitch(this,function(b){b.theme=a}))},toggleController:function(a){this.controlTable&&(a?f.contains(this.controlTable,"display-none")||f.add(this.controlTable,
"display-none"):f.contains(this.controlTable,"display-none")&&f.remove(this.controlTable,"display-none"))},reset:function(){this._clearViews();this.views=[];this._currentIndex=-1;this._homeIndex=0;this.nextDisabled=!1;this.backDisabled=!0;this.selected="";this.updateImageNodes()}})});