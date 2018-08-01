// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/Deferred dojo/topic dojo/Evented dojo/on dojo/aspect dojo/json dojo/query dojo/request/xhr dojo/promise/all dijit/registry ./utils jimu/tokenUtils ./dijit/Message ./DataSourceManager".split(" "),function(B,d,l,m,k,h,C,D,n,u,E,v,q,r,g,y,w,z){var t=null,x=B(C,{constructor:function(){this.loaded=[];this.missedActions=[];this.activeWidget=null;window.isBuilder?(h.subscribe("app/mapLoaded",d.hitch(this,this._onMapLoaded)),
h.subscribe("app/mapChanged",d.hitch(this,this._onMapChanged))):(h.subscribe("mapLoaded",d.hitch(this,this._onMapLoaded)),h.subscribe("mapChanged",d.hitch(this,this._onMapChanged)));window.isBuilder?(h.subscribe("app/sceneViewLoaded",d.hitch(this,this._onSceneViewLoaded)),h.subscribe("app/sceneViewChanged",d.hitch(this,this._onSceneViewChanged))):(h.subscribe("sceneViewLoaded",d.hitch(this,this._onSceneViewLoaded)),h.subscribe("sceneViewChanged",d.hitch(this,this._onSceneViewChanged)));window.isBuilder?
(h.subscribe("app/appConfigLoaded",d.hitch(this,this._onAppConfigLoaded)),h.subscribe("app/appConfigChanged",d.hitch(this,this._onAppConfigChanged))):(h.subscribe("appConfigLoaded",d.hitch(this,this._onAppConfigLoaded)),h.subscribe("appConfigChanged",d.hitch(this,this._onAppConfigChanged)));h.subscribe("userSignIn",d.hitch(this,this._onUserSignIn));h.subscribe("userSignOut",d.hitch(this,this._onUserSignOut));h.subscribe("builder/actionTriggered",d.hitch(this,this._onActionTriggered));h.subscribe("/dnd/move/start",
d.hitch(this,this._onMoveStart))},loadWidget:function(a){var b=new k,c;a=d.clone(a);(c=this.getWidgetById(a.id))?b.resolve(c):q([this.loadWidgetClass(a),this.loadWidgetManifest(a)]).then(d.hitch(this,function(a){var c=a[0],e=a[1];this.loadWidgetResources(e).then(d.hitch(this,function(a){try{var f=this.createWidget(e,c,a);m.setAttr(f.domNode,"data-widget-name",e.name);console.log("widget ["+e.uri+"] created.")}catch(A){console.log("create ["+e.uri+"] error:"+A.stack),new w({message:window.jimuNls.widgetManager.createWidgetError+
": "+e.uri}),r.byId(e.id)&&r.byId(e.id).destroy(),b.reject(A)}setTimeout(d.hitch(this,function(){b.resolve(f);this.emit("widget-created",f);h.publish("widgetCreated",f)}),50)}),function(a){b.reject(a)})}),function(a){b.reject(a)});return b},loadWidgetClass:function(a){var b=new k,c;c=a.isRemote?a.uri+".js":a.uri;require(g.getRequireConfig(),[c],d.hitch(this,function(a){b.resolve(a)}));g.checkError(a.uri,b);return b},loadWidgetResources:function(a){var b=new k,c,e,f,p=[];f=d.clone(a);a=this.tryLoadWidgetConfig(f);
c=this._tryLoadResource(f,"i18n");e=this._tryLoadResource(f,"style");f=this._tryLoadResource(f,"template");p.push(a);p.push(c);p.push(f);p.push(e);q(p).then(d.hitch(this,function(a){var c={};c.config=a[0];c.i18n=a[1];c.template=a[2];c.style=a[3];b.resolve(c)}),function(a){b.reject(a)});return b},loadWidgetManifest:function(a){var b=new k,c=g.getUriInfo(a.uri),c=c.isRemote?c.folderUrl+"manifest.json?f\x3djson":c.folderUrl+"manifest.json";if(a.manifest)return b.resolve(a),b;v(c,{handleAs:"json",headers:{"X-Requested-With":null}}).then(d.hitch(this,
function(c){if(c.error&&c.error.code)return b.reject(c.error);c.category="widget";d.mixin(c,g.getUriInfo(a.uri));g.manifest.addI18NLabel(c).then(d.hitch(this,function(){this._processManifest(c);g.widgetJson.addManifest2WidgetJson(a,c);b.resolve(a)}))}),function(a){b.reject(a)});return b},getWidgetMarginBox:function(a){if("string"===typeof a&&(a=this.getWidgetById(a),!a))return{};if(a._marginBox)return a._marginBox;var b={left:-9999,top:-9999,relativeTo:a.position.relativeTo};a._isTestSizeFlag=!0;
a.setPosition(b);this.openWidget(a);a._marginBox=a.getMarginBox();this.closeWidget(a);"undefined"!==typeof a._isTestSizeFlag&&delete a._isTestSizeFlag;return a._marginBox},_processManifest:function(a){g.manifest.addManifestProperies(a);g.manifest.processManifestLabel(a,window.dojoConfig.locale)},createWidget:function(a,b,c){if(this.getWidgetById(a.id))return this.getWidgetById(a.id);c.config&&c.i18n&&(c.config=g.replacePlaceHolder(c.config,c.i18n));a.rawConfig=a.config;a.config=c.config||{};this.appConfig._appData&&
this._mergeAgolConfig(a);a.nls=c.i18n||{};c.template&&(a.templateString=c.template);a["class"]="jimu-widget";a.label||(a.label=a.name);this.map&&(a.map=this.map);a.appConfig=this.appConfig;c={};for(var e in a)a.hasOwnProperty(e)&&(c[e]=a[e]);c.widgetManager=this;a=new b(c);a.clazz=b;n.after(a,"startup",d.hitch(this,this._postWidgetStartup,a));n.before(a,"destroy",d.hitch(this,this._onDestroyWidget,a));D(a.domNode,"click",d.hitch(this,this._onClickWidget,a));this.loaded.push(a);return a},getAllWidgets:function(){return this.loaded},
destroyAllWidgets:function(){var a=l.map(this.loaded,function(a){return a.id});l.forEach(a,function(a){this.destroyWidget(a)},this);this.loaded=[]},loadWidgetSettingPage:function(a){var b=new k;a=d.clone(a);a.id+="_setting";q([this.loadWidgetSettingClass(a)]).then(d.hitch(this,function(c){var e=c[0];this.loadWidgetSettingPageResources(a).then(d.hitch(this,function(c){var f;c={nls:c.i18n,templateString:c.template,appConfig:this.appConfig,"class":"jimu-widget-setting"};"HTML3D"===window.appInfo.appType?
c.sceneView=this.sceneView:c.map=this.map;for(var g in a)a.hasOwnProperty(g)&&(c[g]=a[g]);try{f=new e(c),m.setAttr(f.domNode,"data-widget-name-setting",c.name),n.before(f,"destroy",d.hitch(this,this._onDestroyWidgetSetting,f)),b.resolve(f)}catch(F){new w({message:window.jimuNls.widgetManager.createWidgetSettingPageError+":"+a.uri}),r.byId(c.id)&&r.byId(c.id).destroy(),b.reject(F)}}),function(a){console.log(a)})}),function(a){b.reject(a)});return b},loadWidgetSettingClass:function(a){var b=new k,c;
c=a.isRemote?a.folderUrl+"setting/Setting.js":a.amdFolder+"setting/Setting";require(g.getRequireConfig(),[c],d.hitch(this,function(a){b.resolve(a)}));g.checkError(a.folderUrl+"setting/Setting.js",b);return b},loadWidgetSettingPageResources:function(a){var b=new k,c,e,f=[];a=d.clone(a);c=this._tryLoadResource(a,"settingI18n");e=this._tryLoadResource(a,"settingTemplate");a=this._tryLoadResource(a,"settingStyle");f.push(c);f.push(e);f.push(a);q(f).then(d.hitch(this,function(a){var c={};c.i18n=a[0]||
{};c.template=a[1];c.style=a[2];b.resolve(c)}),function(a){console.log(a)});return b},getWidgetById:function(a){var b;l.some(this.loaded,function(c){if(c.id===a)return b=c,!0},this);return b},getWidgetByLabel:function(a){var b;l.some(this.loaded,function(c){if(c.label===a)return b=c,!0},this);return b},getWidgetsByName:function(a){var b=[];l.some(this.loaded,function(c){c.name===a&&b.push(c)},this);return b},changeWindowStateTo:function(a,b){"normal"===b?this.normalizeWidget(a):"minimized"===b?this.minimizeWidget(a):
"maximized"===b?this.maximizeWidget(a):console.log("error state: "+b)},closeWidget:function(a){if("string"===typeof a&&(a=this.getWidgetById(a),!a))return;if("closed"!==a.state){this.activeWidget&&this.activeWidget.id===a.id&&(this.activeWidget.onDeActive(),this.activeWidget=null);m.setStyle(a.domNode,"display","none");a.setState("closed");try{a.onClose()}catch(b){console.log(console.error("fail to close widget "+a.name+". "+b.stack))}}this.appConfig.mode||this._removeDataSourceUsage(a)},openWidget:function(a){if("string"===
typeof a&&(a=this.getWidgetById(a),!a))return;if(!a.started)try{a.started=!0,a.startup()}catch(b){console.error("fail to startup widget "+a.name+". "+b.stack)}if("closed"===a.state){m.setStyle(a.domNode,"display","");a.setState("opened");try{a.onOpen()}catch(b){console.error("fail to open widget "+a.name+". "+b.stack)}}this.appConfig.mode||this._addDataSourceUsage(a)},activateWidget:function(a){if("string"===typeof a&&(a=this.getWidgetById(a),!a))return;"opened"===a.state&&this._activeWidget(a)},
maximizeWidget:function(a){if("string"===typeof a&&(a=this.getWidgetById(a),!a))return;"closed"===a.state&&this.openWidget(a);a.setWindowState("maximized");try{a.onMaximize()}catch(b){console.log(console.error("fail to maximize widget "+a.name+". "+b.stack))}},minimizeWidget:function(a){if("string"===typeof a&&(a=this.getWidgetById(a),!a))return;"closed"===a.state&&this.openWidget(a);a.setWindowState("minimized");try{a.onMinimize()}catch(b){console.log(console.error("fail to minimize widget "+a.name+
". "+b.stack))}},normalizeWidget:function(a){if("string"===typeof a&&(a=this.getWidgetById(a),!a))return;"closed"===a.state&&this.openWidget(a);a.setWindowState("normal");try{a.onNormalize()}catch(b){console.log(console.error("fail to normalize widget "+a.name+". "+b.stack))}},destroyWidget:function(a){if("string"===typeof a&&(a=this.getWidgetById(a),!a))return;this._removeWidget(a);try{a.destroy()}catch(b){console.log(console.error("fail to destroy widget "+a.name+". "+b.stack))}},tryLoadWidgetConfig:function(a){return this._tryLoadWidgetConfig(a).then(d.hitch(this,
function(b){return this._upgradeWidgetConfig(a,b).then(function(b){return a.config=b})}))},triggerWidgetOpen:function(a){function b(a){var b=n.after(a,"onOpen",function(){b.remove();c.resolve(a)})}var c=new k,e=this.getWidgetById(a);if(e){if("closed"!==e.state)return c.resolve(e),c;b(e)}else var f=h.subscribe("widgetCreated",d.hitch(this,function(b){b.id===a&&(f.remove(),c.resolve(b))}));h.publish("openWidget",a);return c},_tryLoadWidgetConfig:function(a){var b=new k;if(a.config&&d.isObject(a.config))return b.resolve(a.config),
b;if(a.config){if(require.cache["url:"+a.config])return b.resolve(u.parse(require.cache["url:"+a.config])),b;b=g.processUrlInAppConfig(a.config);b=b.split("/");b[b.length-1]=encodeURIComponent(b[b.length-1]);b=b.join("/");return v(b,{handleAs:"json",headers:{"X-Requested-With":null}})}return this._tryLoadResource(a,"config").then(function(b){a.isDefaultConfig=!0;return b})},_upgradeWidgetConfig:function(a,b){var c=new k,e=a.manifest.version,f=a.version,h;if(e===f)return c.resolve(b),c;if(!1===a.hasVersionManager)return a.version=
e,c.resolve(b),c;require(g.getRequireConfig(),[a.amdFolder+(a.isRemote?"VersionManager.js":"VersionManager")],d.hitch(this,function(d){d=new d;var g=d.getVersionIndex(f),k=d.getVersionIndex(e);if(g>k)c.reject("Bad widget version number, "+a.name+","+f);else try{h=d.upgrade(b,f,e),a.version=e,c.resolve(h)}catch(G){console.log("Read widget ["+a.name+"] old config error,"+G.stack),c.resolve(b)}}));return c},loadWidgetStyle:function(a){var b=this._getStyleIdFromWidgetJson(a,!1),c=new k;return m.byId(b)?
(c.resolve("load"),c):g.loadStyleLink(b,a.styleFile,"theme_"+this.appConfig.theme.name+"_style_common")},loadWidgetSettingStyle:function(a){var b=this._getStyleIdFromWidgetJson(a,!0),c=new k;return m.byId(b)?(c.resolve("load"),c):g.loadStyleLink(b,a.settingStyleFile)},loadWidgetConfig:function(a){a=require(g.getRequireConfig()).toUrl(a.configFile);if(require.cache["url:"+a]){var b=new k;b.resolve(u.parse(require.cache["url:"+a]));return b}return v(a,{handleAs:"json",headers:{"X-Requested-With":null}})},
loadWidgetI18n:function(a){var b=new k;require(g.getRequireConfig(),["dojo/i18n!"+a.i18nFile],function(a){b.resolve(a)});return b},loadWidgetSettingI18n:function(a){var b=new k;require(g.getRequireConfig(),["dojo/i18n!"+a.settingI18nFile],function(a){b.resolve(a)});return b},loadWidgetTemplate:function(a){var b=new k;require(g.getRequireConfig(),["dojo/text!"+a.templateFile],function(a){b.resolve(a)});g.checkError(a.templateFile,b);return b},loadWidgetSettingTemplate:function(a){var b=new k;require(g.getRequireConfig(),
["dojo/text!"+a.settingTemplateFile],function(a){b.resolve(a)});g.checkError(a.settingTemplateFile,b);return b},removeWidgetStyle:function(a){this._removeStyle(this._getStyleIdFromWidgetJson(a,!1))},removeWidgetSettingStyle:function(a){this._removeStyle(this._getStyleIdFromWidgetJson(a,!0))},_removeStyle:function(a){if(m.byId(a)){var b=m.attr(a,"data-import-styles");if(b)for(var c=0;c<parseInt(b,10);c++)m.destroy(a+"_import_"+c);m.destroy(a)}},_getStyleIdFromWidgetJson:function(a,b){return this._replaceId("widget/style/"+
(a.itemId?a.itemId:a.uri)+(b?"/setting":""))},getControllerWidgets:function(){return l.filter(this.loaded,function(a){return a.isController})},getOffPanelWidgets:function(){return l.filter(this.loaded,function(a){return!a.inPanel})},getOnScreenOffPanelWidgets:function(){return l.filter(this.loaded,function(a){return a.isOnScreen&&!a.inPanel})},closeOtherWidgetsInTheSameGroup:function(a){if("string"===typeof a&&(a=this.getWidgetById(a),!a))return;for(var b=0;b<this.loaded.length;b++)this.loaded[b].gid===
a.gid&&this.loaded[b].id!==a.id&&this.closeWidget(this.loaded[b])},closeAllWidgetsInGroup:function(a){for(var b=0;b<this.loaded.length;b++)this.loaded[b].gid===a&&this.closeWidget(this.loaded[b])},_addDataSourceUsage:function(a){l.forEach(this._getUsedDataSourceIdFromWidget(a),function(b){z.getInstance().addDataSourceUsage(b,a.id)})},_removeDataSourceUsage:function(a){l.forEach(this._getUsedDataSourceIdFromWidget(a),function(b){z.getInstance().removeDataSourceUsage(b,a.id)})},_getUsedDataSourceIdFromWidget:function(a){if((a=
this.appConfig.getConfigElementById(a.id))&&a.config){var b=u.stringify(a.config);return l.filter(Object.keys(this.appConfig.dataSource.dataSources),function(a){return-1<b.indexOf(a)},this)}},_mergeAgolConfig:function(a){var b=this.appConfig._appData.values,c="widgets["+a.id+"]",e;for(e in b){var d=e.replace(/\//g,"_").indexOf(c+"_config");0<=d&&g.template.setConfigValue(a,e.replace(/\//g,"_").substr(d,e.length).replace(c,"widget"),b[e])}},_onUserSignIn:function(a){l.forEach(this.loaded,function(b){b.onSignIn(a)},
this)},_onUserSignOut:function(){l.forEach(this.loaded,function(a){a.onSignOut()},this)},_activeWidget:function(a){if(this.activeWidget){if(this.activeWidget.id===a.id){!1===this.activeWidget.inPanel&&this.activeWidget.moveTopOnActive&&m.setStyle(this.activeWidget.domNode,"zIndex",101);return}"active"===this.activeWidget.state&&(this.activeWidget.setState("opened"),!1===this.activeWidget.inPanel&&m.setStyle(a.domNode,"zIndex","zIndex"in a.position?a.position.zIndex:"auto"),this.activeWidget.onDeActive())}this.activeWidget=
a;"opened"===this.activeWidget.state&&(this.activeWidget.setState("active"),!1===this.activeWidget.inPanel&&this.activeWidget.moveTopOnActive&&m.setStyle(this.activeWidget.domNode,"zIndex",101),this.activeWidget.onActive(),h.publish("widgetActived",a))},_onClickWidget:function(a,b){var c=E(".jimu-widget",a.domNode);if(0<c.length)for(var d=0;d<c.length;d++)if(b.target===c[d]||m.isDescendant(b.target,c[d]))return;this._activeWidget(a)},_onMoveStart:function(a){l.forEach(this.loaded,function(b){b.domNode===
a.node&&this._activeWidget(b)},this)},_onAppConfigLoaded:function(a){this.appConfig=a=d.clone(a);y.setPortalUrl(a.portalUrl)},_onMapLoaded:function(a){this.map=a},_onMapChanged:function(a){this.map=a},_onSceneViewLoaded:function(a){this.sceneView=a},_onSceneViewChanged:function(a){this.sceneView=a},_onAppConfigChanged:function(a,b,c,e){var f=d.clone(a);this.appConfig=f;l.forEach(this.loaded,function(a){a&&(a.onAppConfigChanged(f,b,c,e),"widgetChange"===b&&this._onConfigChanged(c.id,c.config,e))},
this)},_onConfigChanged:function(a,b){if(a=this.getWidgetById(a))a.onConfigChanged(b),d.mixin(a.config,b)},_onActionTriggered:function(a){if("map"!==a.elementId&&"app"!==a.elementId){var b=this.getWidgetById(a.elementId);if(b)b.onAction(a.action,a.data);else this.missedActions.push({id:a.elementId,action:{name:a.action,data:a.data}});l.forEach(this.getControllerWidgets(),function(b){if(b.widgetIsControlled(a.elementId))b.onAction(a.action,{widgetId:a.elementId,data:a.data})},this)}},_postWidgetStartup:function(a){a.started=
!0;g.setVerticalCenter(a.domNode);n.after(a,"resize",d.hitch(this,g.setVerticalCenter,a.domNode));this.openWidget(a);var b=y.getPortalCredential(this.appConfig.portalUrl);if(b)a.onSignIn(b);else a.onSignOut();this._triggerMissedAction(a)},_triggerMissedAction:function(a){this.missedActions.forEach(function(b){if(b.id===a.id)a.onAction(b.action.name,b.action.data)})},_remove:function(a){return l.some(this.loaded,function(b,c){if(b.id===a)return this.loaded.splice(c,1),!0},this)},_tryLoadResource:function(a,
b){var c,d=new k;if("config"===b)c=a.amdFolder+"config.json",a.configFile=c,c="hasConfig";else if("style"===b)c=a.amdFolder+"css/style.css",a.styleFile=c,c="hasStyle";else if("i18n"===b)c=a.amdFolder+"nls/strings.js",a.i18nFile=a.isRemote?c:a.amdFolder+"nls/strings",c="hasLocale";else if("template"===b)c=a.amdFolder+"Widget.html",a.templateFile=c,c="hasUIFile";else if("settingTemplate"===b)c=a.amdFolder+"setting/Setting.html",a.settingTemplateFile=c,c="hasSettingUIFile";else if("settingI18n"===b)c=
a.amdFolder+"setting/nls/strings.js",a.settingI18nFile=a.isRemote?c:a.amdFolder+"setting/nls/strings",c="hasSettingLocale";else if("settingStyle"===b)c=a.amdFolder+"setting/css/style.css",a.settingStyleFile=c,c="hasSettingStyle";else return d;a[c]?function(){var c;if("config"===b)c=this.loadWidgetConfig(a);else if("style"===b)c=this.loadWidgetStyle(a);else if("i18n"===b)c=this.loadWidgetI18n(a);else if("template"===b)c=this.loadWidgetTemplate(a);else if("settingTemplate"===b)c=this.loadWidgetSettingTemplate(a);
else if("settingStyle"===b)c=this.loadWidgetSettingStyle(a);else if("settingI18n"===b)c=this.loadWidgetSettingI18n(a);else return d;c.then(function(a){d.resolve(a)},function(b){new w({message:window.jimuNls.widgetManager.loadWidgetResourceError+": "+a.uri});d.reject(b)})}.apply(this):d.resolve(null);return d},_replaceId:function(a){return a.replace(/\//g,"_").replace(/\./g,"_")},_onDestroyWidget:function(a){"closed"!==a.state&&this.closeWidget(a);this._removeWidget(a);this.emit("widget-destroyed",
a.id);h.publish("widgetDestroyed",a.id);console.log("destroy widget ["+a.uri+"].")},_onDestroyWidgetSetting:function(a){this.removeWidgetSettingStyle(a)},_removeWidget:function(a){if("string"===typeof a&&(a=this.getWidgetById(a),!a))return;this.activeWidget&&this.activeWidget.id===a.id&&(this.activeWidget=null);this._remove(a.id);0===this.getWidgetsByName(a.name).length&&this.removeWidgetStyle(a)}});x.getInstance=function(a){null===t&&(t=new x(a),window._widgetManager=t);return t};return x});