// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang","jimu/shared/basePortalUrlUtils"],function(c,d){var a=c.clone(d);a.declaredClass="jimu.portalUrlUtils";a.getPortalUrlFromLocation=function(){return a.getPortalServerFromLocation()+a.getDeployContextFromLocation()};a.getPortalSignInUrlFromLocation=function(){var e=a.getPortalUrlFromLocation();return a.setHttpsProtocol(e+"home/signin.html")};a.getPortalServerFromLocation=function(){return window.location.protocol+"//"+window.location.host};a.getDeployContextFromLocation=function(){var a=
window.location.href.split("?")[0],b=a.indexOf("/home");0>b&&(b=a.indexOf("/apps"));a=a.substring(a.indexOf(window.location.host)+window.location.host.length+1,b);"/"!==a&&(a="/"+a+"/");return a};a.getRestBaseUrlFromLocation=function(){return window.location.protocol+"//"+window.location.host+a.getDeployContextFromLocation()+"sharing/rest/"};return a});