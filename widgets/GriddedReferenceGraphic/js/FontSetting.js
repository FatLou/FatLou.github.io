// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/GriddedReferenceGraphic/templates/FontSetting.html":'\x3cdiv class\x3d"style-selector"\x3e\r\n  \x3cdiv class\x3d"setting-items font clearFix" data-dojo-attach-point\x3d"fontSetting"\x3e\r\n    \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.font}"\x3e${nls.font}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"fontSelect" data-dojo-props\x3d\'style:{width:"100%"}\' data-dojo-type\x3d"dijit/form/Select"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"setting-items text-size clearFix" data-dojo-attach-point\x3d"textSizeSetting"\x3e\r\n    \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.textSize}"\x3e${nls.textSize}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cdiv class\x3d"text-size-group jimu-float-leading"\x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"textSizeSelect"\x3e\x3c/select\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"text-size-group jimu-float-leading"\x3e\r\n        \x3cdiv class\x3d"sliderbar" data-dojo-attach-point\x3d"sliderBar"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"setting-items text-color clearFix" data-dojo-attach-point\x3d"textColorSetting"\x3e\r\n    \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.textColor}"\x3e${nls.textColor}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cdiv class\x3d"font-group jimu-float-leading"\x3e\r\n        \x3cdiv class\x3d"text-color-btn" data-dojo-attach-point\x3d"textColorBtn"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"font-group font-group-btns jimu-float-leading"\x3e\r\n        \x3cdiv class\x3d"font-btn jimu-float-leading bold" data-dojo-attach-point\x3d"bold"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"font-btn jimu-float-leading italic" data-dojo-attach-point\x3d"italic"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"font-btn jimu-float-leading underline" data-dojo-attach-point\x3d"underline"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"setting-items text-color clearFix" data-dojo-attach-point\x3d"transparencySetting"\x3e\r\n    \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.transparency}"\x3e${nls.transparency}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cdiv class\x3d"font-group jimu-float-leading"\x3e\r\n        \x3cdiv class\x3d"text-color-btn" data-dojo-attach-point\x3d"transparencySlider"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e      \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e  \r\n  \x3cdiv class\x3d"setting-items halo-size clearFix" data-dojo-attach-point\x3d"haloSetting"\x3e\r\n    \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.halo}"\x3e${nls.halo}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cdiv class\x3d"halo-size-group jimu-float-leading"\x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"haloSizeSelect"\x3e\x3c/select\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"halo-size-group jimu-float-leading"\x3e\r\n        \x3cdiv class\x3d"halo-color-btn" data-dojo-attach-point\x3d"haloColorBtn"\x3e\x3c/div\x3e        \r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"halo-size-group jimu-float-leading"\x3e\r\n        \x3cdiv class\x3d"label" title\x3d"${nls.show}"\x3e${nls.show}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"halo-size-group jimu-float-leading"\x3e\r\n        \x3cinput class\x3d"halo-toggle" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"showHalo" checked\x3d"true" /\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/_base/html dojo/_base/array dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!../templates/FontSetting.html jimu/dijit/ColorPickerPopup dijit/form/HorizontalSlider ./TransparencyEditor dojo/store/Memory dijit/form/ComboBox jimu/dijit/CheckBox jimu/dijit/ImageChooser".split(" "),function(k,b,d,c,l,m,n,p,q,r,g,t,u,h){return k([n,p,q,m],{templateString:r,nls:null,_FONTS:null,_MIN_TEXT_SIZE:12,_MAX_TEXT_SIZE:48,
_INTERVAL_TEXT_SIZE:2,_DEFAULT_CONFIG:null,postCreate:function(){this.inherited(arguments);this._FONTS="Arial;Comic Sans MS;Courier New;Garamond;Tahoma;Times New Roman;Verdana".split(";");this._DEFAULT_CONFIG={font:{fontFamily:this._FONTS[0],bold:!1,italic:!1,underline:!1},fontSize:"24",textColor:"#282828",haloSize:1,haloColor:"#FFFFFF",haloOn:!0,labelTransparency:1};this.config=b.mixin(b.clone(this._DEFAULT_CONFIG),this.config);l.forEach(this._FONTS,b.hitch(this,function(a){this.fontSelect.addOption({value:a,
label:a})}));for(var a=new h({}),e=this._MIN_TEXT_SIZE,f=this._MAX_TEXT_SIZE;e<=f;e+=this._INTERVAL_TEXT_SIZE)a.put({id:e,name:e});this.textSizeSelect.store=a;this.textSizeSelect.validator=b.hitch(this,function(){var a=this.textSizeSelect.getValue();return null!==a&&""!==a?!isNaN(a):!1});this.textSizeSlider=new t({name:"slider",value:0,minimum:this._MIN_TEXT_SIZE,maximum:this._MAX_TEXT_SIZE,discreteValues:this.textSizeSelect.store.data.length+1,intermediateChanges:!0,showButtons:!1,style:"display: inline-block;"},
this.sliderBar);this.textSizeSlider.startup();this.textColorPicker=new g({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0},recordUID:this.recordUID});this.textColorPicker.placeAt(this.textColorBtn);this.textColorPicker.startup();this.labelTransparency=new u({},this.transparencySlider);this.labelTransparency.startup();a=new h({});e=1;for(f=10;e<=f;e+=1)a.put({id:e,name:e});this.haloSizeSelect.store=a;this.haloSizeSelect.validator=b.hitch(this,function(){var a=
this.haloSizeSelect.getValue();return null!==a&&""!==a?!isNaN(a):!1});this.haloColorPicker=new g({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0}});this.haloColorPicker.placeAt(this.haloColorBtn);this.haloColorPicker.startup();this.own(d(this.fontSelect,"change",b.hitch(this,function(a){if(this.config.font.fontFamily!==a)this.onSettingChange({font:{fontFamily:a,bold:this.config.font.bold,italic:this.config.font.italic,underline:this.config.font.underline}})})));
this._initAppearance();this.own(d(this.bold,"click",b.hitch(this,function(){var a=!c.hasClass(this.bold,"selected");this.fontBtnClickd({bold:a});this.onSettingChange({font:{fontFamily:this.config.font.fontFamily,bold:a,italic:this.config.font.italic,underline:this.config.font.underline}})})));this.own(d(this.italic,"click",b.hitch(this,function(){var a=!c.hasClass(this.italic,"selected");this.fontBtnClickd({italic:a});this.onSettingChange({font:{fontFamily:this.config.font.fontFamily,bold:this.config.font.bold,
italic:a,underline:this.config.font.underline}})})));this.own(d(this.underline,"click",b.hitch(this,function(){var a=!c.hasClass(this.underline,"selected");this.fontBtnClickd({underline:a});this.onSettingChange({font:{fontFamily:this.config.font.fontFamily,bold:this.config.font.bold,italic:this.config.font.italic,underline:a}})})));this.own(d(this.textSizeSelect,"change",b.hitch(this,function(a){this.config.fontSize!==a&&!1!==this.textSizeSelect.isValid()&&(this.setTextSize(a),this.onSettingChange({fontSize:a}))})));
this.own(d(this.textSizeSlider,"change",b.hitch(this,function(a){this.config.fontSize!==a&&(this.setTextSize(a),this.onSettingChange({fontSize:a}))})));this.own(d(this.textColorPicker,"change",b.hitch(this,function(a){if(this.config.textColor!==a)this.onSettingChange({textColor:a.toHex()})})));this.own(this.labelTransparency.watch("transparency",b.hitch(this,function(){this.onSettingChange({labelTransparency:this.labelTransparency.getValues().transparency})})));this.own(d(this.haloSizeSelect,"change",
b.hitch(this,function(a){if(this.config.haloSize!==a&&!1!==this.haloSizeSelect.isValid())this.onSettingChange({haloSize:a})})));this.own(d(this.haloColorPicker,"change",b.hitch(this,function(a){if(this.config.haloColor!==a)this.onSettingChange({haloColor:a.toHex()})})));this.own(d(this.showHalo,"change",b.hitch(this,function(){this.onSettingChange({haloOn:this.showHalo.checked})})))},startup:function(){this.inherited(arguments);this.setConfig(this.config);this.refresh()},onSettingChange:function(a){this.config=
b.mixin(this.config,a);this.onChange(this.config)},onChange:function(a){this.emit("change",a)},refresh:function(){this.onSettingChange({})},isValid:function(){return!1===this.textSizeSelect.isValid()?!1:!0},getConfig:function(){return this.isValid()?this.config:!1},setConfig:function(a){if("undefined"!==a){"undefined"!==typeof a.font&&(this.config.font=a.font,this.config.font.fontFamily&&this.fontSelect.set("value",this.config.font.fontFamily),this.fontBtnClickd(this.config.font));"undefined"!==typeof a.fontSize&&
(this.config.fontSize=a.fontSize,this.setTextSize(this.config.fontSize));if("undefined"===typeof a.textColor||""===a.textColor)a.textColor=this._DEFAULT_CONFIG.textColor;this.config.textColor=a.textColor;if("undefined"===typeof a.labelTransparency||""===a.labelTransparency)a.labelTransparency=this._DEFAULT_CONFIG.labelTransparency;this.config.labelTransparency=a.labelTransparency;this.labelTransparency.setValues({transparency:this.config.labelTransparency});if("undefined"===typeof a.haloSize||""===
a.haloSize)a.haloSize=this._DEFAULT_CONFIG.haloSize;this.config.haloSize=a.haloSize;this.haloSizeSelect.set("value",a.haloSize);if("undefined"===typeof a.haloColor||""===a.haloColor)a.haloColor=this._DEFAULT_CONFIG.haloColor;this.config.haloColor=a.haloColor;c.setStyle(this.textColorPicker.domNode,"backgroundColor",this.config.textColor);this.textColorPicker.picker.refreshRecords();this.textColorPicker.picker.setColor(this.config.textColor,!1,!0);c.setStyle(this.haloColorPicker.domNode,"backgroundColor",
this.config.haloColor);this.haloColorPicker.picker.refreshRecords();this.haloColorPicker.picker.setColor(this.config.haloColor,!1,!0);if("undefined"===typeof a.haloOn||""===a.haloOn)a.haloOn=this._DEFAULT_CONFIG.haloOn;this.showHalo.set("checked",this.config.haloOn)}},setTextSize:function(a){a!==this.textSizeSelect.getValue()&&this.textSizeSelect.set("value",a);a!==this.textSizeSlider.getValue()&&(a>this._MAX_TEXT_SIZE?a=this._MAX_TEXT_SIZE:a<this._MIN_TEXT_SIZE&&(a=this._MIN_TEXT_SIZE),this.textSizeSlider.set("value",
a))},fontBtnClickd:function(a){!0===a.bold?c.addClass(this.bold,"selected"):!1===a.bold&&c.removeClass(this.bold,"selected");!0===a.italic?c.addClass(this.italic,"selected"):!1===a.italic&&c.removeClass(this.italic,"selected");!0===a.underline?c.addClass(this.underline,"selected"):!1===a.underline&&c.removeClass(this.underline,"selected")},_initAppearance:function(){this.appearance&&(!1===this.appearance.bold&&c.addClass(this.bold,"hide"),!1===this.appearance.italic&&c.addClass(this.italic,"hide"),
!1===this.appearance.underline&&c.addClass(this.underline,"hide"))}})});