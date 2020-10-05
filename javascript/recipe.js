/**
* classe javascript de recipe
*/


//declaration des variables globales associees aux boutons
var googleSearchIframeName 	= "results_016444025208201823482:cdrnkgva6vm";
var googleSearchFormName 	= "searchbox_016444025208201823482:cdrnkgva6vm";
var googleSearchFrameWidth 	= 600;
var googleSearchFrameborder = 0;
var googleSearchDomain 		= "www.google.fr";
var googleSearchPath 		= "/cse";

function myFunction() {
  var al=document.getElementById("nom").value;
  var prix=document.getElementById('prix').value;
  var dif=document.getElementById('dif').value;
  document.getElementById("txt").value = "recette "+ al + " "+ dif + " " + " " + prix;
}

function recherche(){
r.addEventListener('click', run);
}



(function(){var f=null,a=window,j="sitesearch",s=a.googleSearchResizeIframe||a.googleSearchPath&&a.googleSearchPath=="/cse"&&typeof a.googleSearchResizeIframe=="undefined",p,o,k;function t(c,b,l,m){var d={},g=c.split(l);for(var e=0;e<g.length;e++){var h=g[e],n=h.indexOf(b);if(n>0){var i=h.substring(0,n);if(m){i=i.toUpperCase()}else{i=i.toLowerCase()}var w=h.substring(n+1,h.length);d[i]=w}}return d}function x(){var c=document.location.search;if(c.length<1){return""}c=c.substring(1,c.length);var b=t(c,"=","&",false);if(a.googleSearchQueryString!="q"&&b[a.googleSearchQueryString]){b.q=b[a.googleSearchQueryString];delete b[a.googleSearchQueryString]}if(b.cof){var l=t(decodeURIComponent(b.cof),":",";",true),m=l.FORID;if(m){p=parseInt(m,10)}}var d=document.getElementById(a.googleSearchFormName);if(d){if(d.q&&b.q&&(!b.ie||b.ie.toLowerCase()=="utf-8")){d.q.value=decodeURIComponent(b.q.replace(/\+/g," "))}if(d[j]){for(var g=0;g<d[j].length;g++){if(b[j]==f&&d[j][g].value==""){d[j][g].checked=true}else if(d[j][g].value==
b[j]){d[j][g].checked=true}else{d[j][g].checked=false}}}}var e="";for(var h in b){e+="&"+h+"="+b[h]}return e.substring(1,e.length)}function q(c,b){if(b){return"&"+c+"="+encodeURIComponent(b)}else{return""}}function r(c,b){if(c){return Math.max(c,b)}else{return b}}function u(){var c="http://";if(a.googleSearchDomain){c+=a.googleSearchDomain}else{c+="www.google.com"}if(a.googleSearchPath){c+=a.googleSearchPath}else{c+="/custom"}c+="?";if(a.googleSearchQueryString){a.googleSearchQueryString=a.googleSearchQueryString.toLowerCase()}c+=
x();c+=q("ad","w"+o);c+=q("num",k);c+=q("adtest",a.googleAdtest);if(s){var b=a.location.href,l=b.indexOf("#");if(l!=-1){b=b.substring(0,l)}c+=q("rurl",b)}return c}function v(){o=a.googleSearchNumAds;if(!o){o=9}k=a.googleNumSearchResults;if(k){k=Math.min(k,20)}else{k=10}var c={};c[9]=795;c[10]=795;c[11]=500;var b={};b[9]=300+90*k;b[10]=300+50*Math.min(o,4)+90*k;b[11]=300+50*o+90*k;var l=u();if(!a.googleSearchFrameborder){a.googleSearchFrameborder="0"}var m=document.getElementById(a.googleSearchIframeName);
if(m&&c[p]){var d=r(a.googleSearchFrameWidth,c[p]),g=r(a.googleSearchFrameHeight,b[p]),e=document.createElement("iframe"),h={name:"googleSearchFrame",src:l,frameBorder:a.googleSearchFrameborder,width:d,height:g,marginWidth:"0",marginHeight:"0",hspace:"0",vspace:"0",allowTransparency:"true",scrolling:"no"};for(var n in h){e.setAttribute(n,h[n])}m.appendChild(e);if(e.attachEvent){e.attachEvent("onload",function(i){window.scrollTo(0,0)})}else{e.addEventListener("load",function(){window.scrollTo(0,0)},
false)}if(s){a.setInterval(function(){if(a.location.hash&&a.location.hash!="#"){var i=a.location.hash.substring(1)+"px";if(e.height!=i&&i!="0px"){e.height=i}}},10)}}a.googleSearchIframeName=f;a.googleSearchFormName=f;a.googleSearchResizeIframe=f;a.googleSearchQueryString=f;a.googleSearchDomain=f;a.googleSearchPath=f;a.googleSearchFrameborder=f;a.googleSearchFrameWidth=f;a.googleSearchFrameHeight=f;a.googleSearchNumAds=f;a.googleNumSearchResults=f;a.googleAdtest=f}v()})();


//fonction go enregistree comme handler de windows.onload afin de lancer
//l'application
window.onload = go;
