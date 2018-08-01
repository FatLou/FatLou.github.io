// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["jimu/utils","esri/lang"],function(f,h){return{tryLocaleNumber:function(a){var c=a;if(h.isDefined(a)&&isFinite(a))try{var b=f.localizeNumber(a);"string"===typeof b&&(c=b)}catch(g){console.error(g)}return c+""},isAxisChart:function(a){return"column"===a.type||"bar"===a.type||"line"===a.type},getAxisZeroPosition:function(a){if(!this.chart)return!1;var c={},b=0,g=0;if((f.isNotEmptyObject(a.dataZoom,!0)||a.scale)&&a.series&&a.series[0]&&a.series[0].data){var d=a.series[0].data;f.isNotEmptyObject(d,
!0)&&("bar"!==a.type?g=f.getMinOfArray(d):b=f.getMinOfArray(d))}if(a=this.chart.convertToPixel({xAxisIndex:0,yAxisIndex:0},[b,g]))b=a[1]-5,c.left=a[0]-5,c.top=b;return f.isNotEmptyObject(c)?c:!1},_getDisplayValue:function(a,c){"number"===typeof Number(a)&&(a=c?f.convertNumberToPercentage(a):this.tryLocaleNumber(a));return a},generateToolTip:function(a,c,b,g,d){var e="",e=b?'\x3cdiv class\x3d"tooltip-tr reverse"\x3e':'\x3cdiv class\x3d"tooltip-tr"\x3e';b='\x3cdiv class\x3d"colorEl marginRight5" style\x3d"background-color:'+
f.encodeHTML(a.color)+'"\x3e\x3c/div\x3e';e+=b;b="";"radar"!==a.seriesType&&this._isVaildValue(a.seriesName)?b=a.seriesName:this._isVaildValue(d)&&(b=d);e=""===b?e+("\x3cdiv\x3e"+b+"\x3c/div\x3e"):e+("\x3cdiv\x3e"+b+"\x3c/div\x3e\x3cdiv\x3e : \x3c/div\x3e");d="null";this._isNotZeroBoolean(c)?d=c:this._isVaildValue(a.value)&&(d=a.value);e+="\x3cdiv\x3e"+this._getDisplayValue(d,g)+"\x3c/div\x3e";"pie"===a.seriesType&&(a=a.percent,a=this._isVaildValue(a)?a/100:0,e+='\x3cdiv class\x3d"space-left"\x3e('+
f.convertNumberToPercentage(a)+")\x3c/div\x3e");return e+"\x3c/div\x3e"},handleToolTip:function(a,c,b,g,d){var e='\x3cdiv class\x3d"tooltip-div"\x3e';Array.isArray(a)||(a=[a]);this._isVaildValue(a[0].name)&&(e+='\x3cdiv class\x3d"tr"\x3e'+a[0].name+"\x3c/div\x3e");a.forEach(function(a){e="radar"!==a.seriesType?e+this.generateToolTip(a,c,b,g,d):e+this._handleRadarTooltip(a,b,g,d)}.bind(this));return e+="\x3c/div\x3e"},_handleRadarTooltip:function(a,c,b,g){var d="";(a.value||[]).forEach(function(e,
f){d+=this.generateToolTip(a,e,c,b,g[f])}.bind(this));return d},_isVaildValue:function(a){return"%00-"===encodeURI(a)?!1:this._isNotZeroBoolean(a)},_isNotZeroBoolean:function(a){return 0===a?!0:!!a}}});