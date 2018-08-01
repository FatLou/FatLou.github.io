// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/EmergencyResponseGuide/setting/symbologySettings":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/on ./ColorPickerEditor jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!../templates/Settings.html dojo/_base/lang dojo/Evented dojo/dom-class dojo/query dijit/registry dijit/form/Select jimu/dijit/SymbolChooser".split(" "),function(h,g,f,d,e,m,n,q,c,r,p,b,k){return h([m,n,r],{baseClass:"jimu-widget-ERG-Settings",templateString:q,selectedSettings:{},
colorPickerNodes:[],dropdownNodes:[],constructor:function(a){c.mixin(this,a)},startup:function(){this.colorPickerNodes=b(".colorPicker",this.domNode);this.dropdownNodes=b(".dropdown",this.domNode);g.forEach(this.colorPickerNodes,c.hitch(this,function(a,l){a=new e({nls:this.nls,type:p.contains(a,"Line")?"line":"fill"},a);a.setValues({color:this.config.erg.symbology[a.id].color,transparency:this.config.erg.symbology[a.id].transparency});a.startup();a.dropdown.set("value",this.config.erg.symbology[a.id].type)}));
this.onSettingsChanged()},postCreate:function(){this.inherited(arguments);p.add(this.domNode,"ERGSettingsContainer ERGFullWidth");this._handleClickEvents()},_handleClickEvents:function(){this.own(d(this.spillLocationSettingsButton,"click",c.hitch(this,function(){this._openCloseNodes(this.spillLocationSettingsButton,this.spillLocationContainer)})));this.own(d(this.IISettingsButton,"click",c.hitch(this,function(){this._openCloseNodes(this.IISettingsButton,this.IIZoneContainer)})));this.own(d(this.PASettingsButton,
"click",c.hitch(this,function(){this._openCloseNodes(this.PASettingsButton,this.PAZoneContainer)})));this.own(d(this.downwindSettingsButton,"click",c.hitch(this,function(){this._openCloseNodes(this.downwindSettingsButton,this.downwindZoneContainer)})));this.own(d(this.fireSettingsButton,"click",c.hitch(this,function(){this._openCloseNodes(this.fireSettingsButton,this.fireZoneContainer)})));this.own(d(this.bleveSettingsButton,"click",c.hitch(this,function(){this._openCloseNodes(this.bleveSettingsButton,
this.bleveZoneContainer)})))},_openCloseNodes:function(a,l){var k=b(".container",this.domNode),d=b(".ERGSettingsButtonIcon",this.domNode),e=!1;a&&p.contains(a,"ERGLabelSettingsRightButton")&&(e=!0);g.forEach(k,c.hitch(this,function(a){f.addClass(a,"controlGroupHidden")}));g.forEach(d,c.hitch(this,function(a){f.removeClass(a,"ERGLabelSettingsDownButton");f.addClass(a,"ERGLabelSettingsRightButton")}));e&&(f.removeClass(l,"controlGroupHidden"),f.removeClass(a,"ERGLabelSettingsRightButton"),f.addClass(a,
"ERGLabelSettingsDownButton"))},onClose:function(){this.onSettingsChanged();this._openCloseNodes()},onSettingsChanged:function(){g.forEach(this.colorPickerNodes,c.hitch(this,function(a,l){l={color:k.byId(a.id).getValues().color,transparency:k.byId(a.id).getValues().transparency,type:k.byId(a.id).dropdown.getValue()};this.selectedSettings[a.id]=l}));this.emit("settingsChanged",this.selectedSettings)}})})},"widgets/EmergencyResponseGuide/setting/ColorPickerEditor":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/Color dojo/on dojo/dom-class dojo/query dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!../templates/ColorPickerEditor.html dijit/form/HorizontalSlider jimu/dijit/ColorPickerPopup dijit/form/NumberSpinner".split(" "),
function(h,g,f,d,e,m,n,q,c,r,p,b,k,a){return h([c,r,p],{_defaultColor:"#485566",templateString:b,nls:null,postCreate:function(){this.colorPicker=new a({color:this._defaultColor},this.colorPicker);this.colorPicker.startup();this.slider=new k({name:"slider",value:100,minimum:0,maximum:100,discreteValues:101,intermediateChanges:!0,showButtons:!1,style:"display: inline-block;"},this.sliderBar);this.slider.startup();var l=[],b,c="esriSLSDash esriSLSDashDot esriSLSDashDotDot esriSLSDot esriSLSLongDash esriSLSLongDashDot esriSLSNull esriSLSShortDash esriSLSShortDashDot esriSLSShortDashDotDot esriSLSShortDot esriSLSSolid".split(" "),
d="esriSFSBackwardDiagonal esriSFSCross esriSFSDiagonalCross esriSFSForwardDiagonal esriSFSHorizontal esriSFSNull esriSFSSolid esriSFSVertical".split(" ");"line"===this.type?g.forEach(c,f.hitch(this,function(a){b={value:a,label:this.nls.lineStyles[a]};l.push(b)})):g.forEach(d,f.hitch(this,function(a){b={value:a,label:this.nls.fillStyles[a]};l.push(b)}));this.dropdown.addOption(l);this.inherited(arguments)},startup:function(){this.own(e(this.slider,"change",f.hitch(this,function(a){!1===this._isSameVal()&&
this.spinner.setValue(a)})));this.own(e(this.spinner,"change",f.hitch(this,function(a){!1===this._isSameVal()&&this.slider.setValue(a)})));this._stylePolyfill();this.inherited(arguments)},_isSameVal:function(){return this.slider.getValue()===this.spinner.getValue()},getValues:function(){var a=null,b=null;(b=this.colorPicker.getColor())&&b.toHex&&(a=b.toHex());b=this.spinner.getValue()/100;return{color:a,transparency:b}},setValues:function(a){if("object"===typeof a||"string"===typeof a)this.colorPicker.setColor(new d(a.color)),
a.transparency="undefined"===typeof a.transparency?0:100*a.transparency,this.slider.setValue(a.transparency),this.spinner.setValue(a.transparency)},_stylePolyfill:function(){var a=n(".dijitSliderLeftBumper",this.domNode)[0];a&&a.parentNode&&q.setStyle(a.parentNode,"background-color","#24b5cc")}})})},"jimu/dijit/ColorPickerPopup":function(){define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/lang dojo/_base/html dojo/on dojo/_base/Color dijit/TooltipDialog dijit/popup jimu/dijit/ColorPalette jimu/utils".split(" "),
function(h,g,f,d,e,m,n,q,c,r,p){return h([g,f],{baseClass:"jimu-color-pickerPopup",declaredClass:"jimu.dijit.ColorPickerPopup",templateString:'\x3cdiv class\x3d"jimu-color-picker"\x3e\x3c/div\x3e',_isTooltipDialogOpened:!1,color:null,showLabel:!1,around:null,_ENABLE:!0,recordUID:"",postCreate:function(){this.inherited(arguments);this._createTooltipDialog(this.domNode);this._hideTooltipDialog()},destroy:function(){c.close(this.tooltipDialog);this.picker.destroy();this.tooltipDialog.destroy();this.inherited(arguments)},
enable:function(){this._ENABLE=!0;e.removeClass(this.domNode,"disable")},disable:function(){this._ENABLE=!1;e.addClass(this.domNode,"disable")},isPartOfPopup:function(b){var c=this.tooltipDialog.domNode;return b===c||e.isDescendant(b,c)},hideTooltipDialog:function(){this._hideTooltipDialog()},showTooltipDialog:function(){this._showTooltipDialog()},initUI:function(){this.picker.initUI()},_showTooltipDialog:function(){c.open({parent:this.getParent(),popup:this.tooltipDialog,around:this.around?this.around:
this.domNode,orient:this.orient});this._isTooltipDialogOpened=!0},_hideTooltipDialog:function(){c.hide(this.tooltipDialog);this._isTooltipDialogOpened=!1},_createTooltipDialog:function(){var b=e.create("div");this.tooltipDialog=new q({content:b});e.addClass(this.tooltipDialog.domNode,"jimu-color-picker-popup-dialog");var c=new r({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showColorPickerOK:!0,showColorPickerApply:!0,showCoustomRecord:!0,closeDialogWhenChange:!0},recordUID:this.recordUID,
onChange:d.hitch(this,function(a){a&&(a=new n(a),this.setColor(a),this.onChange(a))})});c.placeAt(b);c.startup();this.own(m(c,"close",d.hitch(this,function(){this._hideTooltipDialog()})));this.own(m(c,"change-style",d.hitch(this,function(){this._hideTooltipDialog();this._showTooltipDialog()})));this.own(m(this.domNode,"click",d.hitch(this,function(a){a.stopPropagation();a.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():!1!==this._ENABLE&&this._showTooltipDialog()})));this.own(m(document,
"click",d.hitch(this,function(a){this.isPartOfPopup(a.srcElement||a.target)||this._hideTooltipDialog()})));this.picker=c},setColor:function(b){if(b instanceof n){null===this.color&&!0===this.showLabel&&this._changeLabel(b);var c=b.toHex();this.color=b;e.setStyle(this.domNode,"backgroundColor",c);this.picker&&(this.picker.refreshRecords(),this.picker.setColor(c,!1,!0));this.showLabel&&this._changeLabel(this.color)}},getColor:function(){return this.color},_changeLabel:function(b){e.empty(this.domNode);
e.create("span",{innerHTML:b.toHex(),className:"color-label",style:{color:p.invertColor(b.toHex())}},this.domNode)},onChange:function(b){b&&this.showLabel&&this._changeLabel(b)},changeColor:function(){this.picker&&this.picker.changeColor();this.showLabel&&this._changeLabel(this.color)},setTitle:function(b){this.domNode.title=b},getTooltipDialog:function(){return this.tooltipDialog||null}})})},"widgets/EmergencyResponseGuide/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/EmergencyResponseGuide/templates/ColorPickerEditor.html":'\x3cdiv class\x3d"colorPickerEditor"\x3e\r\n  \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"colorPicker"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"sliderbar" data-dojo-attach-point\x3d"sliderBar"\x3e\r\n    \x3col data-dojo-type\x3d"dijit/form/HorizontalRuleLabels" style\x3d"height:2.5em;" container\x3d"topDecoration"\x3e\r\n        \x3cli\x3e${nls.transparency}\x3c/li\x3e\r\n        \x3cli\x3e\x3c/li\x3e\r\n    \x3c/ol\x3e\r\n  \x3c/div\x3e\r\n  \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberSpinner" value\x3d"0"\r\n         data-dojo-attach-point\x3d"spinner" \r\n         data-dojo-props\x3d"smallDelta:10,intermediateChanges:true,constraints: {min:0,max:100}"\x3e\r\n  \x3cdiv style\x3d\'display: inline-grid;vertical-align: bottom;\'\x3e\r\n    \x3clabel for\x3d"${id}_select"\x3e${nls.style}\x3c/label\x3e\r\n    \x3cselect style\x3d"width: 150px" data-dojo-type\x3d"dijit/form/Select" \r\n      data-dojo-attach-point\x3d"dropdown" /\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n',
"url:widgets/EmergencyResponseGuide/templates/Settings.html":'\x3cdiv\x3e\r\n    \x3c!-- Spill Location DropDown --\x3e\r\n    \x3cdiv class\x3d"ERGSettingsRow"\x3e\r\n      \x3cdiv class\x3d"ERGLabelSettingsRightButton ERGSettingsButtonIcon ERGPointer" title\x3d"${nls.spillLocationButtonLabel}" data-dojo-attach-point\x3d"spillLocationSettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"ERGInputLabelSettings ERGEllipsis SubTitle" title\x3d"${nls.spillLocationLabel}"\x3e${nls.spillLocationLabel}\x3c/div\x3e      \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Spill Location Color Pickers --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"spillLocationContainer"\x3e      \r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"spillLocationOutlineColor" data-dojo-attach-point\x3d"spillLocationOutlineColorPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"spillLocationFillColor" data-dojo-attach-point\x3d"spillLocationFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Initial Isolation Zone DropDown --\x3e\r\n    \x3cdiv class\x3d"ERGSettingsRow"\x3e\r\n      \x3cdiv class\x3d"ERGLabelSettingsRightButton ERGSettingsButtonIcon ERGPointer" title\x3d"${nls.IIButtonLabel}" data-dojo-attach-point\x3d"IISettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"ERGInputLabelSettings ERGEllipsis SubTitle" title\x3d"${nls.IISettingsLabel}"\x3e${nls.IISettingsLabel}\x3c/div\x3e      \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Initial Isolation Zone --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"IIZoneContainer"\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"IIZoneOutlineColor" data-dojo-attach-point\x3d"IIZoneOutlineColorPicker"\x3e\x3c/div\x3e \r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"IIZoneFillColor" data-dojo-attach-point\x3d"IIZoneFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n    \r\n    \x3c!-- Protective Action Zone DropDown --\x3e    \r\n    \x3cdiv class\x3d"ERGSettingsRow"\x3e\r\n      \x3cdiv class\x3d"ERGLabelSettingsRightButton ERGSettingsButtonIcon ERGPointer" title\x3d"${nls.PAButtonLabel}" data-dojo-attach-point\x3d"PASettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"ERGInputLabelSettings ERGEllipsis SubTitle" title\x3d"${nls.PASettingsLabel}"\x3e${nls.PASettingsLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Protective Action Zone --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"PAZoneContainer"\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"PAZoneOutlineColor" data-dojo-attach-point\x3d"PAZoneOutlineColorPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"PAZoneFillColor" data-dojo-attach-point\x3d"PAZoneFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e \r\n    \r\n    \x3c!-- Downwind Zone DropDown --\x3e    \r\n    \x3cdiv class\x3d"ERGSettingsRow"\x3e\r\n      \x3cdiv class\x3d"ERGLabelSettingsRightButton ERGSettingsButtonIcon ERGPointer" title\x3d"${nls.downwindButtonLabel}" data-dojo-attach-point\x3d"downwindSettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"ERGInputLabelSettings ERGEllipsis SubTitle" title\x3d"${nls.downwindSettingsLabel}"\x3e${nls.downwindSettingsLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Downwind Action Zone --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"downwindZoneContainer"\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"downwindZoneOutlineColor" data-dojo-attach-point\x3d"downwindZoneOutlineColorPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"downwindZoneFillColor" data-dojo-attach-point\x3d"downwindZoneFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Fire Isolation DropDown --\x3e\r\n    \x3cdiv class\x3d"ERGSettingsRow"\x3e      \r\n      \x3cdiv class\x3d"ERGLabelSettingsRightButton ERGSettingsButtonIcon ERGPointer" title\x3d"${nls.fireButtonLabel}" data-dojo-attach-point\x3d"fireSettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"ERGInputLabelSettings ERGEllipsis SubTitle" title\x3d"${nls.fireSettingsLabel}"\x3e${nls.fireSettingsLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Fire Isolation Zone --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"fireZoneContainer"\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"fireZoneOutlineColor" data-dojo-attach-point\x3d"fireZoneOutlineColorPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"fireZoneFillColor" data-dojo-attach-point\x3d"fireZoneFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- BLEVE Isolation DropDown --\x3e\r\n    \x3cdiv class\x3d"ERGSettingsRow"\x3e\r\n      \x3cdiv class\x3d"ERGLabelSettingsRightButton ERGSettingsButtonIcon ERGPointer" title\x3d"${nls.bleveButtonLabel}" data-dojo-attach-point\x3d"bleveSettingsButton"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"ERGInputLabelSettings ERGEllipsis SubTitle" title\x3d"${nls.bleveSettingsLabel}"\x3e${nls.bleveSettingsLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- BLEVE Isolation Zone --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"bleveZoneContainer"\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"bleveZoneOutlineColor" data-dojo-attach-point\x3d"bleveZoneOutlineColorPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"GRGDrafterEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"bleveZoneFillColor" data-dojo-attach-point\x3d"bleveZoneFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/EmergencyResponseGuide/setting/Setting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"ERGSymbologyContainer" data-dojo-attach-point\x3d"SettingsNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',"url:widgets/EmergencyResponseGuide/setting/css/style.css":'.jimu-widget-ERG-setting{margin:0; padding:0; font-size:14px; position: absolute; overflow-y: hidden; top: 0; bottom: 0; left: 0; right: 0; letter-spacing: 0.38px;}.jimu-widget-ERG-setting .ERGSettingsRow {width: 100%; display: inline-flex;}.jimu-widget-ERG-setting .ERGSymbologyContainer {width: 50%; padding-top: 10px; padding-left: 15px;}.jimu-widget-ERG-setting .ERGHalfWidthContainer{display: flex; width: 50%;}.jimu-widget-ERG-setting .ERGInputLabel{float: left; line-height: 28px; padding: 5px 5px 0px 0;}.jimu-widget-ERG-setting .ERGInputLabelSettings{float: left; line-height: 28px; padding: 5px 0px 0px 0px;}.jimu-widget-ERG-setting .ERGDropdownLabel{line-height: 28px; padding-bottom: 5px; padding-top: 5px;}.jimu-widget-ERG-setting .ERGEllipsis{overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}.jimu-widget-ERG-setting.SubTitle {font-weight: bold;}.jimu-widget-ERG-setting .SubTitleRed {line-height: 28px; font-weight: bold; color: #ff0000; padding: 5px 0px 0px 10px;}.jimu-widget-ERG-setting .ERGPointer{cursor: pointer;}.jimu-widget-ERG-setting .ERGSettingsButtonIcon {margin-top: 13px; height: 16px; width: 16px;}.jimu-widget-ERG-setting .ERGLabelSettingsDownButton{background: url("../css/images/arrow-down_black.png") no-repeat; margin-top: 15px;}.jimu-widget-ERG-setting .ERGLabelSettingsDownButton:hover{background: url("../css/images/arrow-down_black_hover.png") no-repeat;}.jimu-widget-ERG-setting .ERGLabelSettingsRightButton{background: url("../css/images/arrow-right_black.png") no-repeat;}.jimu-widget-ERG-setting .ERGLabelSettingsRightButton:hover{background: url("../css/images/arrow-right_black_hover.png") no-repeat;}.jimu-widget-ERG-setting .controlGroupHidden {display: none;}.jimu-widget-ERG-setting .instruction {margin-bottom: 10px;}.jimu-widget-ERG-setting .tabs {font-family: "Avenir Light"; color: #000000; height: 100%;}.jimu-widget-ERG-setting .tabs .tab-description {margin: 10px 0;}.jimu-widget-ERG-setting .tabs .jimu-radio-checked .jimu-radio-inner {width: 6px; height: 6px; margin: 4px; border-radius: 50%; background-color: #24B5CC;}.jimu-widget-ERG-setting .tabs .jimu-radio{border: 1px solid #ccc; vertical-align: top;}.jimu-widget-ERG-setting .jimu-tab\x3e.control\x3e.tab{background-color: #fff; border-top: 0; border-left: 0; border-right: 0; border-bottom: 1px solid #dedede; color:#898989; font-family: "Avenir Medium"; font-size: 14px;}.jimu-widget-ERG-setting .jimu-tab\x3e.control\x3e.tab.jimu-state-selected {border-bottom: 3px solid #24b5cc; font-family: "Avenir Heavy"; color: #000000;}.jimu-widget-ERG-setting .tabs .titles {font-weight: bold; font-family: "Avenir Medium"; font-size: 12px; margin: 20px 0 10px 0;}.jimu-widget-ERG-setting .tabs .hide{display: none;}.jimu-widget-ERG-setting .tabs .indent{margin-left: 20px; margin-top: 10px;}.jimu-widget-ERG-setting .tabs .unit-item{margin: 15px 5px 5px 5px; line-height: 18px; height: 18px; vertical-align: middle;}.jimu-widget-ERG-setting .tabs .jimu-widget-ERG-settingearFix {*overflow: hidden; *zoom: 1;}.jimu-widget-ERG-setting .tabs .jimu-widget-ERG-settingearFix:after {display: table; content: ""; width: 0; clear: both;}.jimu-widget-ERG-setting .tabs .view{height: 100%; overflow-y: auto;}.jimu-widget-ERG-setting .tabs .jimu-tab\x3e.jimu-viewstack{padding-bottom: 20px;}.jimu-widget-ERG-setting .dijitSlider {width: calc(100% - 268px); margin-left: 5px; margin-right: auto; margin-top: 4px;}.jimu-widget-ERG-setting .colorPickerEditor {padding-top: 5px; padding-bottom: 8px;}.jimu-widget-ERG-setting .colorPickerEditor .jimu-color-picker{display: inline-block; width: 25px; height: 25px;}.jimu-widget-ERG-setting .colorPickerEditor .dijitSpinner.dijitNumberTextBox.dijitValidationTextBox{width:66px; height:30px;}.jimu-widget-ERG-setting .dijitSlider .dijitSliderImageHandleH {top: -10px; width: 20px; height: 20px;}.jimu-widget-ERG-setting .dijitSliderImageHandleH{top: -7px;}.jimu-widget-ERG-setting .dijitSliderImageHandle.dijitSliderImageHandleH{background-image: url("../../images/sliderball.svg"); background-position: 0 0;}.jimu-widget-ERG-setting .dijitSliderThumbHover{background-image: url("../../images/sliderball.svg"); background-position: 0 0;}.jimu-widget-ERG-setting .dijitSlider .dijitSliderProgressBarH,.jimu-widget-ERG-setting .dijitSlider .dijitSliderLeftBumper{border-color: #000; background-color: #000; background-image: -webkit-linear-gradient(top, #000 0px, #000 1px, rgba(255, 255, 255, 0) 2px); background-image: -o-linear-gradient(top, #000 0px, #000 1px, rgba(255, 255, 255, 0) 2px); background-image: linear-gradient(top, #000 0px, #000 1px, rgba(255, 255, 255, 0) 2px);}.jimu-widget-ERG-setting .dijitSlider .dijitSliderRemainingBarH,.jimu-widget-ERG-setting .dijitSlider .dijitSliderRightBumper{border-color: #d7d7d7; background-color: #d7d7d7;}.jimu-widget-ERG-setting .tabs .colorPickerEditor .trans{font-family: "Avenir Light"; font-size: 12px; padding: 0 10px 0 20px; letter-spacing: 0.33px;}.jimu-widget-ERG-setting .tabs .sliderbar {width: 60px;}.dijitRuleLabelH {left: -12%;}.jimu-widget-ERG-setting .layers-tab{}.jimu-widget-ERG-setting .layers-tab .editor-container{}.jimu-widget-ERG-setting .layers-tab .editor-container .dijitEditorIFrameContainer textarea {resize: none;}.jimu-widget-ERG-setting .symbology-tab{overflow-y: auto; height: 490px;}.jimu-widget-ERG-setting .symbology-tab .size-selector .size-box-container{display: inline-block; text-align: center; margin: 0 10px 0 0; width: 80px; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;}.jimu-widget-ERG-setting .symbology-tab .size-selector .size-box{width:80px; height:60px; background: no-repeat; margin-bottom: 5px;}.jimu-widget-ERG-setting .symbology-tab .size-selector .percent25{background: url("../../images/percent25.svg") center center no-repeat;;}.jimu-widget-ERG-setting .symbology-tab .size-selector .percent25.selected{background: url("../../images/percent25_selected.svg") center center no-repeat;;}.jimu-widget-ERG-setting .symbology-tab .size-selector .percent50{background: url("../../images/percent50.svg") center center no-repeat;;}.jimu-widget-ERG-setting .symbology-tab .size-selector .percent50.selected{background: url("../../images/percent50_selected.svg") center center no-repeat;;}.jimu-widget-ERG-setting .symbology-tab .size-selector .percent75{background: url("../../images/percent75.svg") center center no-repeat;;}.jimu-widget-ERG-setting .symbology-tab .size-selector .percent75.selected{background: url("../../images/percent75_selected.svg") center center no-repeat;;}.jimu-widget-ERG-setting .symbology-tab .size-selector .percent100{background: url("../../images/percent100.svg") center center no-repeat;;}.jimu-widget-ERG-setting .symbology-tab .size-selector .percent100.selected{background: url("../../images/percent100_selected.svg") center center no-repeat;;}.jimu-widget-ERG-setting .symbology-tab .size-selector .custom{background: url("../../images/custom.svg") center center no-repeat;;}.jimu-widget-ERG-setting .symbology-tab .size-selector .custom.selected{background: url("../../images/custom_selected.svg") center center no-repeat;;}.jimu-widget-ERG-setting .symbology-tab .size-selector .custom-label{vertical-align: top; line-height: 20px;}.jimu-rtl .jimu-widget-ERG-setting .symbology-tab .sizes\x3e:first-child{margin-right: 0;}.jimu-widget-ERG-setting .symbology-tab .size-selector .wh{margin: 0 14px;}.jimu-widget-ERG-setting .symbology-tab .size-selector .wh .wh-item{display: inline-block; margin-right: 10px;}.jimu-widget-ERG-setting .symbology-tab .size-selector .wh .wh-item .lable{font-family: "Avenir Medium"; font-size: 12px; color: #353535; margin:0 0 5px 0; width: 96px; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;}.jimu-widget-ERG-setting .symbology-tab .size-selector .wh .inputs{width:96px; border: 1px solid #d9dde0;}.jimu-widget-ERG-setting .symbology-tab .size-selector .wh .inputs .text-box{width: 70px; border: none;}.jimu-widget-ERG-setting .symbology-tab .size-selector .wh .inputs .unit{color: #898989; letter-spacing: 0;}.jimu-widget-ERG-setting .symbology-tab .align-selector .align-box-container{display: inline-block; text-align: center; margin: 0 10px; width:50px; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;}.jimu-widget-ERG-setting .symbology-tab .align-selector .align-box{width:40px; height:36px; background: no-repeat; margin: 0 5px 5px 5px;}.jimu-widget-ERG-setting .symbology-tab .align-selector .top{background: url("../../images/top.svg") center center no-repeat; border: none;}.jimu-widget-ERG-setting .symbology-tab .align-selector .top.selected{background: url("../../images/top_selected.svg") center center no-repeat; border: 1px #24B5CC solid;}.jimu-widget-ERG-setting .symbology-tab .align-selector .middle{background: url("../../images/middle.svg") center center no-repeat; border: none;}.jimu-widget-ERG-setting .symbology-tab .align-selector .middle.selected{background: url("../../images/middle_selected.svg") center center no-repeat; border: 1px #24B5CC solid;}.jimu-widget-ERG-setting .symbology-tab .jimu-image-chooser{height:30px; width:124px; background: #24B5CC; border: 1px solid #24B5CC;}.jimu-widget-ERG-setting .symbology-tab .file-name{font-size: 12px; line-height: 33px; height: 33px; color: #000000; margin: 0 20px 0 20px;}.jimu-widget-ERG-setting .symbology-tab .types\x3e:first-child{margin-left: 0;}.jimu-rtl .jimu-widget-ERG-setting .symbology-tab .types\x3e:first-child{margin-right: 0;}.jimu-widget-ERG-setting .symbology-tab .fillstype{margin: 10px 20px 0 20px;}.jimu-widget-ERG-setting .symbology-tab .buttonText{width: 290px; margin-bottom: 10px;}.jimu-widget-ERG-setting .instruction span{color: #596679;}.jimu-widget-ERG-setting .editor-container{position: absolute; top: 34px; bottom: 165px; left: 0; right: 0; border: 1px solid #d2dae2; background-color: #fafafc;}.jimu-widget-ERG-setting .editor-container .dijitEditorIFrameContainer{position: relative; width: 100%; overflow: hidden;}.jimu-widget-ERG-setting .editor-container .dijitEditorIFrameContainer {padding-top: 0;}.jimu-widget-ERG-setting .editor-container .uploaderInsideNode embed {display: none;}.jimu-widget-ERG-setting .splash-footer{color: #596679; height: 155px; margin-top: 20px;}.jimu-widget-ERG-setting .splash-footer .require-continue{position: absolute; top: 0;}.jimu-widget-ERG-setting .splash-footer .require-item{margin-bottom: 10px;}.jimu-widget-ERG-setting .splash-footer .option-text{display: none; margin: 10px 0 15px 23px;}.jimu-widget-ERG-setting .splash-footer .confirm-container{display: none; margin-left: 20px; margin-bottom: 10px;}.jimu-widget-ERG-setting .splash-footer .confirm-text,.jimu-widget-ERG-setting .splash-footer .confirm-option{width: 100%; margin-top: 10px;}.jimu-widget-ERG-setting .splash-footer .spinner-label{line-height: 30px; margin-right: 10px; display: inline-block;}.jimu-widget-ERG-setting .splash-footer .set-background,.jimu-widget-ERG-setting .splash-footer .set-background *{vertical-align: middle;}.jimu-widget-ERG-setting .splash-footer input{width: 755px; color: #7989a0;}.jimu-widget-ERG-setting .dojoxEditorUploadNorm.dijitButtonDisabled {background: #ccc url(../../css/images/uploadImageIcon_disabled.gif) no-repeat 2px 2px;}.jimu-widget-ERG-setting .style-selector .jimu-widget-ERG-settingearFix {*overflow: hidden; *zoom: 1}.jimu-widget-ERG-setting .style-selector .jimu-widget-ERG-settingearFix:after {display: table; content: ""; width: 0; clear: both}.jimu-widget-ERG-setting .style-selector .hide {display: none}.jimu-widget-ERG-setting .settings-container {}.jimu-widget-ERG-setting .settings-container .title {font-size: 14px; color: #000000; letter-spacing: 0.39px; margin-bottom: 20px;}.jimu-widget-ERG-setting .settings-container .label {font-size: 12px; color: #282828; letter-spacing: 0.33px; line-height: 30px;}.jimu-widget-ERG-setting .style-selector .label {margin: 0 0; max-width: 160px; line-height: 30px; font-size: 12px; vertical-align: middle; overflow: hidden; text-overflow: ellipsis;}.jimu-widget-ERG-setting .style-selector .dijitTextBox,.jimu-widget-ERG-setting .style-selector .dijitSelect {width: 100%; height: 30px; border: 1px solid #D7D7D7;}.jimu-widget-ERG-setting .style-selector .jimu-color-picker {width: 40px !important; height: 30px !important; border: 1px solid #D7D7D7 !important;}.jimu-widget-ERG-setting .style-selector .dijitSelect .dijitArrowButtonContainer {border: none;}.jimu-widget-ERG-setting .style-selector .dijitDownArrowButton .dijitButtonContents,.jimu-widget-ERG-setting .style-selector .dijitComboBox .dijitDownArrowButton {border: none;}.jimu-widget-ERG-setting .style-selector .dijitTextBox .dijitInputInner {padding: 1px 0 0 0 !important; font-size: 12px; font-style: normal !important; height: 28px; line-height: 28px !important;}.jimu-widget-ERG-setting .style-selector .dijitSelectLabel {font-size: 12px;}.jimu-widget-ERG-setting .style-selector .dijitSelect,.jimu-widget-ERG-setting .style-selector .dijitSelect .dijitButtonContents,.jimu-widget-ERG-setting .style-selector .dijitTextBox,.jimu-widget-ERG-setting .style-selector .dijitTextBox .dijitButtonNode {background-color: transparent;}.jimu-widget-ERG-setting .style-selector .dijitSelect .dijitArrowButton {background-color: transparent;}.jimu-widget-ERG-setting .style-selector .dijitSelect .dijitInputField {padding: 0px 10px;}.jimu-widget-ERG-setting .jimu-image-chooser .display-text {width: 100%; font-size: 12px; color: #4A4A4A; letter-spacing: 0.33px; background-color: #FFF; text-align: center;}.jimu-image-chooser:hover .hint .display-text {color: #FFF;}.jimu-widget-ERG-setting .dijitTextBoxFocused {border: 1px solid #D7D7D7 !important; box-shadow: 0 0 0 0 !important;}.jimu-widget-ERG-setting .dijitTextBox .dijitInputField {padding: 0px 10px;}.jimu-widget-ERG-setting .dijitSelectFocused .dijitArrowButton .dijitArrowButtonInner {background-position: -35px 53%;}.jimu-widget-ERG-setting .text-size .text-size-group\x3e.dijitComboBox.dijitValidationTextBox {width: 80px;}.jimu-widget-ERG-setting .text-size .text-size-group\x3etable {width: 140px;}.jimu-widget-ERG-setting .halo-size .halo-size-group\x3e.dijitComboBox.dijitValidationTextBox {width: 80px;}.jimu-widget-ERG-setting .text-size .text-size-group\x3etable {width: 140px;}.jimu-widget-ERG-setting .style-selector .setting-items {height: 30px; width: 100%; margin: 10px 0; vertical-align: middle; white-space: nowrap;}.jimu-widget-ERG-setting .style-selector .setting-wapper {width: 230px;}.jimu-widget-ERG-setting .style-selector .background-btn,.jimu-widget-ERG-setting .style-selector .text-color-btn {width: 40px; height: 30px; overflow: hidden;}.jimu-widget-ERG-setting .style-selector .halo-color-btn {width: 50px; height: 30px; overflow: hidden; padding-left: 5px; padding-right: 5px;}.jimu-widget-ERG-setting .style-selector .align-group {margin-right: 8px; margin-left: -3px;}.jimu-rtl .jimu-widget-ERG-setting .style-selector .align-group {margin-right: -3px; margin-left: 8px;}.jimu-widget-ERG-setting .style-selector .font-group-btns {margin-left: 6px; margin-right: 6px;}.jimu-widget-ERG-setting .style-selector .align-btn,.jimu-widget-ERG-setting .style-selector .font-btn {height: 30px; margin: 0 3px;}.jimu-widget-ERG-setting .style-selector .font-btn {width: 30px;}.jimu-widget-ERG-setting .style-selector .align-btn {width: 30px;}.jimu-widget-ERG-setting .style-selector .image-btn {width: 120px; height: 30px; border: 1px solid #D7D7D7;}.jimu-widget-ERG-setting .style-selector .bold {background: url("../../images/B.svg") no-repeat;}.jimu-widget-ERG-setting .style-selector .bold.selected {background: url("../../images/B_selected.svg") no-repeat;}.jimu-widget-ERG-setting .style-selector .italic {background: url("../../images/I.svg") no-repeat;}.jimu-widget-ERG-setting .style-selector .italic.selected {background: url("../../images/I_selected.svg") no-repeat;}.jimu-widget-ERG-setting .style-selector .underline {background: url("../../images/U.svg") no-repeat;}.jimu-widget-ERG-setting .style-selector .underline.selected {background: url("../../images/U_selected.svg") no-repeat;}.jimu-widget-ERG-setting .switch-toggle-group {padding: 5px;}.jimu-widget-ERG-setting .switch-toggle-group .checkbox-inline {padding-left: 36px; vertical-align: top;}.jimu-widget-ERG-setting .switch-toggle-group .switch-toggle.dijitCheckBox {margin-left: -36px;}.jimu-widget-ERG-setting .switch-toggle.dijitCheckBox {height: 16px; width: 28px; border: 0 none; background: #e04f1d; position: relative; display: inline-block; cursor: pointer; -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px;}.jimu-widget-ERG-setting .switch-toggle.dijitCheckBox:before {content: ""; background: #f8f8f8; position: absolute; padding: 0; height: 12px; width: 12px; left: auto; right: 2px; top: 2px; z-index: 1; -webkit-transition: right 0.3s; -moz-transition: right 0.3s; -o-transition: right 0.3s; transition: right 0.3s; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%;}.jimu-widget-ERG-setting .switch-toggle.dijitCheckBox input {width: 100%; height: 100%; position: absolute; left: 0; z-index: 2;}.jimu-widget-ERG-setting .switch-toggle.dijitCheckBox.dijitCheckBoxChecked {background: #50ad4e;}.jimu-widget-ERG-setting .switch-toggle.dijitCheckBox.dijitCheckBoxChecked:before {right: 14px;}.jimu-widget-ERG-setting .halo-toggle-group {padding: 5px;}.jimu-widget-ERG-setting .halo-toggle-group .checkbox-inline {padding-left: 36px; vertical-align: top;}.jimu-widget-ERG-setting .halo-toggle-group .halo-toggle.dijitCheckBox {margin-left: -36px;}.jimu-widget-ERG-setting .halo-toggle.dijitCheckBox {height: 16px; width: 28px; border: 0 none; background: #e04f1d; position: relative; display: inline-block; cursor: pointer; -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px; margin-top: 6px; margin-left: 5px;}.jimu-widget-ERG-setting .halo-toggle.dijitCheckBox:before {content: ""; background: #f8f8f8; position: absolute; padding: 0; height: 12px; width: 12px; left: auto; right: 2px; top: 2px; z-index: 1; -webkit-transition: right 0.3s; -moz-transition: right 0.3s; -o-transition: right 0.3s; transition: right 0.3s; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%;}.jimu-widget-ERG-setting .halo-toggle.dijitCheckBox input {width: 100%; height: 100%; position: absolute; left: 0; z-index: 2;}.jimu-widget-ERG-setting .halo-toggle.dijitCheckBox.dijitCheckBoxChecked {background: #50ad4e;}.jimu-widget-ERG-setting .halo-toggle.dijitCheckBox.dijitCheckBoxChecked:before {right: 14px;}.claro .dijitSelectLabel {font-size: 9pt;}.jimu-widget-ERG-setting .btn-add-section {display: inline-block; overflow: hidden; height: 24px; margin-left: 1px; margin-bottom: 3px; cursor: pointer; font-size: 13px; color: #538ec8; margin-top: 8px;}.jimu-widget-ERG-setting .btn-add-section .btn-add-icon {height: 100%; width: 14px; background-repeat: no-repeat; background-position: center center; background-image: url(images/add.png); display: inline-block; vertical-align: top;}.jimu-widget-ERG-setting .btn-add-section .btn-add-label {height: 100%; line-height: 24px; margin-left: 7px; text-decoration: underline; display: inline-block; vertical-align: top;}',
"*now":function(h){h(['dojo/i18n!*preload*widgets/EmergencyResponseGuide/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/html dojo/on dojo/query dojo/dom-construct dijit/form/Select dijit/_WidgetsInTemplateMixin dijit/focus jimu/utils jimu/BaseWidgetSetting ./symbologySettings".split(" "),function(h,g,f,d,e,m,n,q,c,r,p,b,k){return h([b,c],{baseClass:"jimu-widget-ERG-setting",_SettingsInstance:null,_currentSettings:null,postMixInProperties:function(){this.nls=f.mixin(this.nls,window.jimuNls.common)},postCreate:function(){this.inherited(arguments)},
startup:function(){this.inherited(arguments);this.config.erg||(this.config.erg={});this._createSettings()},setConfig:function(a){this.config=a},getConfig:function(){this._SettingsInstance.onSettingsChanged();for(var a in this._currentSettings)this.config.erg.symbology[a]=this._currentSettings[a];return this.config},destroy:function(){this.inherited(arguments)},_createSettings:function(){this._SettingsInstance=new k({nls:this.nls,config:this.config,appConfig:this.appConfig},n.create("div",{},this.SettingsNode));
this.own(this._SettingsInstance.on("settingsChanged",f.hitch(this,function(a){this._currentSettings=a})));this._SettingsInstance.startup()}})});