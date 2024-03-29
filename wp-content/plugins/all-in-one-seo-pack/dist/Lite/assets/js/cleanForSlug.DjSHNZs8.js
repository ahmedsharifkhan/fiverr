import{t as c,b as d}from"./toString.24fN1xMd.js";import{b as i}from"./_baseTrim.BYZhh0MR.js";import{s as a,c as s}from"./_stringToArray.DnK4tKcY.js";function l(u,e,n,r){for(var x=u.length,t=n+(r?1:-1);r?t--:++t<x;)if(e(u[t],t,u))return t;return-1}function b(u){return u!==u}function p(u,e,n){for(var r=n-1,x=u.length;++r<x;)if(u[r]===e)return r;return-1}function o(u,e,n){return e===e?p(u,e,n):l(u,b,n)}function g(u){return function(e){return u==null?void 0:u[e]}}var m={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},I=g(m);const h=I;var A=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,O="\\u0300-\\u036f",C="\\ufe20-\\ufe2f",L="\\u20d0-\\u20ff",_=O+C+L,E="["+_+"]",U=RegExp(E,"g");function S(u){return u=c(u),u&&u.replace(A,h).replace(U,"")}function y(u,e){for(var n=u.length;n--&&o(e,u[n],0)>-1;);return n}function v(u,e){for(var n=-1,r=u.length;++n<r&&o(e,u[n],0)>-1;);return n}function R(u,e,n){if(u=c(u),u&&(n||e===void 0))return i(u);if(!u||!(e=d(e)))return u;var r=a(u),x=a(e),t=v(r,x),f=y(r,x)+1;return s(r,t,f).join("")}function k(u){return u?R(S(u).replace(/[\s./]+/g,"-").replace(/[^\w-]+/g,"").replace(/-+/g,"-").toLowerCase(),"-"):""}export{l as a,o as b,k as c,S as d};
