 
 
 (function(){'use strict';var e={"class":"className",contenteditable:"contentEditable","for":"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function aa(a,b){try{return a(b)}catch(c){return b}}var k=document,m=window,ba=k.documentElement,n=k.createElement.bind(k),ca=n("div"),p=n("table"),da=n("tbody"),ea=n("tr"),q=Array.isArray,r=Array.prototype,fa=r.concat,t=r.filter,ha=r.indexOf,ia=r.map,ja=r.push,ka=r.slice,u=r.some,la=r.splice,ma=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,na=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,oa=/<.+>/,pa=/^\w+$/;function v(a,b){return a&&(w(b)||x(b))?na.test(a)?b.getElementsByClassName(a.slice(1)):pa.test(a)?b.getElementsByTagName(a):b.querySelectorAll(a):[]}var B=function(){function a(a,c){if(a){if(a instanceof B)return a;var b=a;if(C(a)){if(b=(c instanceof B?c[0]:c)||k,b=ma.test(a)?b.getElementById(a.slice(1)):oa.test(a)?qa(a):v(a,b),!b)return}else if(D(a))return this.ready(a);if(b.nodeType||b===m)b=[b];this.length=b.length;a=0;for(c=this.length;a<c;a++)this[a]=b[a]}}a.prototype.init=function(b,c){return new a(b,c)};return a}(),E=B.prototype,F=E.init;F.fn=F.prototype=E;E.length=0;E.splice=la;"function"===typeof Symbol&&(E[Symbol.iterator]=r[Symbol.iterator]);E.map=function(a){return F(fa.apply([],ia.call(this,function(b,c){return a.call(b,c,b)})))};E.slice=function(a,b){return F(ka.call(this,a,b))};var ra=/-([a-z])/g;function G(a){return a.replace(ra,function(a,c){return c.toUpperCase()})}F.guid=1;function sa(a,b){var c=a&&(a.matches||a.webkitMatchesSelector||a.msMatchesSelector);return!!c&&!!b&&c.call(a,b)}function H(a){return!!a&&a===a.window}function w(a){return!!a&&9===a.nodeType}function x(a){return!!a&&1===a.nodeType}function D(a){return"function"===typeof a}function C(a){return"string"===typeof a}function ta(a){return!isNaN(parseFloat(a))&&isFinite(a)}function I(a){if("object"!==typeof a||null===a)return!1;a=Object.getPrototypeOf(a);return null===a||a===Object.prototype}F.isWindow=H;F.isFunction=D;F.isArray=q;F.isNumeric=ta;F.isPlainObject=I;E.get=function(a){if(void 0===a)return ka.call(this);a=Number(a);return this[0>a?a+this.length:a]};E.eq=function(a){return F(this.get(a))};E.first=function(){return this.eq(0)};E.last=function(){return this.eq(-1)};function J(a,b,c){if(c)for(c=a.length;c--&&!1!==b.call(a[c],c,a[c]););else if(I(a)){var d=Object.keys(a);c=0;for(var h=d.length;c<h;c++){var f=d[c];if(!1===b.call(a[f],f,a[f]))break}}else for(c=0,h=a.length;c<h&&!1!==b.call(a[c],c,a[c]);c++);return a}F.each=J;E.each=function(a){return J(this,a)};E.prop=function(a,b){if(a){if(C(a))return a=e[a]||a,2>arguments.length?this[0]&&this[0][a]:this.each(function(c,h){h[a]=b});for(var c in a)this.prop(c,a[c]);return this}};E.removeProp=function(a){return this.each(function(b,c){delete c[e[a]||a]})};function K(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];b="boolean"===typeof a[0]?a.shift():!1;var c=a.shift(),d=a.length;if(!c)return{};if(!d)return K(b,F,c);for(var h=0;h<d;h++){var f=a[h],g;for(g in f)b&&(q(f[g])||I(f[g]))?(c[g]&&c[g].constructor===f[g].constructor||(c[g]=new f[g].constructor),K(b,c[g],f[g])):c[g]=f[g]}return c}F.extend=K;E.extend=function(a){return K(E,a)};function L(a){return C(a)?function(b,c){return sa(c,a)}:D(a)?a:a instanceof B?function(b,c){return a.is(c)}:a?function(b,c){return c===a}:function(){return!1}}E.filter=function(a){var b=L(a);return F(t.call(this,function(a,d){return b.call(a,d,a)}))};function M(a,b){return b?a.filter(b):a}var ua=/\S+/g;function N(a){return C(a)?a.match(ua)||[]:[]}E.hasClass=function(a){return!!a&&u.call(this,function(b){return x(b)&&b.classList.contains(a)})};E.removeAttr=function(a){var b=N(a);return this.each(function(a,d){x(d)&&J(b,function(a,b){d.removeAttribute(b)})})};E.attr=function(a,b){if(a){if(C(a)){if(2>arguments.length){if(!this[0]||!x(this[0]))return;var c=this[0].getAttribute(a);return null===c?void 0:c}return void 0===b?this:null===b?this.removeAttr(a):this.each(function(c,h){x(h)&&h.setAttribute(a,b)})}for(c in a)this.attr(c,a[c]);return this}};E.toggleClass=function(a,b){var c=N(a),d=void 0!==b;return this.each(function(a,f){x(f)&&J(c,function(a,c){d?b?f.classList.add(c):f.classList.remove(c):f.classList.toggle(c)})})};E.addClass=function(a){return this.toggleClass(a,!0)};E.removeClass=function(a){return arguments.length?this.toggleClass(a,!1):this.attr("class","")};function O(a,b,c,d){for(var h=[],f=D(b),g=d&&L(d),y=0,z=a.length;y<z;y++)if(f){var l=b(a[y]);l.length&&ja.apply(h,l)}else for(l=a[y][b];!(null==l||d&&g(-1,l));)h.push(l),l=c?l[b]:null;return h}function P(a){return 1<a.length?t.call(a,function(a,c,d){return ha.call(d,a)===c}):a}F.unique=P;E.add=function(a,b){return F(P(this.get().concat(F(a,b).get())))};function Q(a,b,c){if(x(a)){var d=m.getComputedStyle(a,null);return c?d.getPropertyValue(b)||void 0:d[b]||a.style[b]}}function R(a,b){return parseInt(Q(a,b),10)||0}var S=/^--/,T={},va=ca.style,wa=["webkit","moz","ms"];function xa(a,b){void 0===b&&(b=S.test(a));if(b)return a;if(!T[a]){b=G(a);var c=""+b[0].toUpperCase()+b.slice(1);b=(b+" "+wa.join(c+" ")+c).split(" ");J(b,function(b,c){if(c in va)return T[a]=c,!1})}return T[a]}var ya={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function za(a,b,c){void 0===c&&(c=S.test(a));return c||ya[a]||!ta(b)?b:b+"px"}E.css=function(a,b){if(C(a)){var c=S.test(a);a=xa(a,c);if(2>arguments.length)return this[0]&&Q(this[0],a,c);if(!a)return this;b=za(a,b,c);return this.each(function(d,f){x(f)&&(c?f.style.setProperty(a,b):f.style[a]=b)})}for(var d in a)this.css(d,a[d]);return this};var Aa=/^\s+|\s+$/;function Ba(a,b){a=a.dataset[b]||a.dataset[G(b)];return Aa.test(a)?a:aa(JSON.parse,a)}E.data=function(a,b){if(!a){if(!this[0])return;var c={},d;for(d in this[0].dataset)c[d]=Ba(this[0],d);return c}if(C(a))return 2>arguments.length?this[0]&&Ba(this[0],a):void 0===b?this:this.each(function(c,d){c=b;c=aa(JSON.stringify,c);d.dataset[G(a)]=c});for(d in a)this.data(d,a[d]);return this};function Ca(a,b){var c=a.documentElement;return Math.max(a.body["scroll"+b],c["scroll"+b],a.body["offset"+b],c["offset"+b],c["client"+b])}function Da(a,b){return R(a,"border"+(b?"Left":"Top")+"Width")+R(a,"padding"+(b?"Left":"Top"))+R(a,"padding"+(b?"Right":"Bottom"))+R(a,"border"+(b?"Right":"Bottom")+"Width")}J([!0,!1],function(a,b){J(["Width","Height"],function(a,d){E[(b?"outer":"inner")+d]=function(c){if(this[0])return H(this[0])?b?this[0]["inner"+d]:this[0].document.documentElement["client"+d]:w(this[0])?Ca(this[0],d):this[0][(b?"offset":"client")+d]+(c&&b?R(this[0],"margin"+(a?"Top":"Left"))+R(this[0],"margin"+(a?"Bottom":"Right")):0)}})});J(["Width","Height"],function(a,b){var c=b.toLowerCase();E[c]=function(d){if(!this[0])return void 0===d?void 0:this;if(!arguments.length)return H(this[0])?this[0].document.documentElement["client"+b]:w(this[0])?Ca(this[0],b):this[0].getBoundingClientRect()[c]-Da(this[0],!a);var h=parseInt(d,10);return this.each(function(b,d){x(d)&&(b=Q(d,"boxSizing"),d.style[c]=za(c,h+("border-box"===b?Da(d,!a):0)))})}});var U={};E.toggle=function(a){return this.each(function(b,c){if(x(c))if(void 0===a?"none"===Q(c,"display"):a){if(c.style.display=c.___cd||"","none"===Q(c,"display")){b=c.style;c=c.tagName;if(U[c])c=U[c];else{var d=n(c);k.body.insertBefore(d,null);var h=Q(d,"display");k.body.removeChild(d);c=U[c]="none"!==h?h:"block"}b.display=c}}else c.___cd=Q(c,"display"),c.style.display="none"})};E.hide=function(){return this.toggle(!1)};E.show=function(){return this.toggle(!0)};function Ea(a,b){return!b||!u.call(b,function(b){return 0>a.indexOf(b)})}var V={focus:"focusin",blur:"focusout"},W={mouseenter:"mouseover",mouseleave:"mouseout"},Fa=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function Ga(a,b,c,d,h){var f=a.___ce=a.___ce||{};f[b]=f[b]||[];f[b].push([c,d,h]);a.addEventListener(b,h)}function X(a){a=a.split(".");return[a[0],a.slice(1).sort()]}function Y(a,b,c,d,h){var f=a.___ce=a.___ce||{};if(b)f[b]&&(f[b]=f[b].filter(function(f){var g=f[0],z=f[1];f=f[2];if(h&&f.guid!==h.guid||!Ea(g,c)||d&&d!==z)return!0;a.removeEventListener(b,f)}));else for(b in f)Y(a,b,c,d,h)}E.off=function(a,b,c){var d=this;if(void 0===a)this.each(function(a,b){(x(b)||w(b)||H(b))&&Y(b)});else if(C(a))D(b)&&(c=b,b=""),J(N(a),function(a,h){a=X(h);h=a[0];var f=a[1],g=W[h]||V[h]||h;d.each(function(a,d){(x(d)||w(d)||H(d))&&Y(d,g,f,b,c)})});else for(var h in a)this.off(h,a[h]);return this};E.on=function(a,b,c,d,h){var f=this;if(!C(a)){for(var g in a)this.on(g,b,c,a[g],h);return this}C(b)||(void 0!==b&&null!==b&&(void 0!==c&&(d=c),c=b),b="");D(d)||(d=c,c=void 0);if(!d)return this;J(N(a),function(a,g){a=X(g);g=a[0];var l=a[1],z=W[g]||V[g]||g,y=g in W,Ka=g in V;z&&f.each(function(a,f){if(x(f)||w(f)||H(f))a=function La(a){if(a.target["___i"+a.type])return a.stopImmediatePropagation();if(!a.namespace||Ea(l,a.namespace.split(".")))if(b||!(Ka&&(a.target!==f||a.___ot===z)||y&&a.relatedTarget&& f.contains(a.relatedTarget))){var g=f;if(b){for(var A=a.target;!sa(A,b);){if(A===f)return;A=A.parentNode;if(!A)return}g=A;a.___cd=!0}a.___cd&&Object.defineProperty(a,"currentTarget",{configurable:!0,get:function(){return g}});Object.defineProperty(a,"data",{configurable:!0,get:function(){return c}});A=d.call(g,a,a.___td);h&&Y(f,z,l,b,La);!1===A&&(a.preventDefault(),a.stopPropagation())}},a.guid=d.guid=d.guid||F.guid++,Ga(f,z,l,b,a)})});return this};E.one=function(a,b,c,d){return this.on(a,b,c,d,!0)};E.ready=function(a){function b(){return setTimeout(a,0,F)}"loading"!==k.readyState?b():k.addEventListener("DOMContentLoaded",b);return this};E.trigger=function(a,b){if(C(a)){var c=X(a),d=c[0];c=c[1];var h=W[d]||V[d]||d;if(!h)return this;var f=Fa.test(h)?"MouseEvents":"HTMLEvents";a=k.createEvent(f);a.initEvent(h,!0,!0);a.namespace=c.join(".");a.___ot=d}a.___td=b;var g=a.___ot in V;return this.each(function(b,c){g&&D(c[a.___ot])&&(c["___i"+a.type]=!0,c[a.___ot](),c["___i"+a.type]=!1);c.dispatchEvent(a)})};function Ha(a){return a.multiple&&a.options?O(t.call(a.options,function(a){return a.selected&&!a.disabled&&!a.parentNode.disabled}),"value"):a.value||""}var Ia=/%20/g,Ja=/\r?\n/g,Ma=/file|reset|submit|button|image/i,Na=/radio|checkbox/i;E.serialize=function(){var a="";this.each(function(b,c){J(c.elements||[c],function(b,c){c.disabled||!c.name||"FIELDSET"===c.tagName||Ma.test(c.type)||Na.test(c.type)&&!c.checked||(b=Ha(c),void 0!==b&&(b=q(b)?b:[b],J(b,function(b,d){b=a;d="&"+encodeURIComponent(c.name)+"="+encodeURIComponent(d.replace(Ja,"\r\n")).replace(Ia,"+");a=b+d})))})});return a.slice(1)};E.val=function(a){return arguments.length?this.each(function(b,c){if((b=c.multiple&&c.options)||Na.test(c.type)){var d=q(a)?ia.call(a,String):null===a?[]:[String(a)];b?J(c.options,function(a,b){b.selected=0<=d.indexOf(b.value)},!0):c.checked=0<=d.indexOf(c.value)}else c.value=void 0===a||null===a?"":a}):this[0]&&Ha(this[0])};E.clone=function(){return this.map(function(a,b){return b.cloneNode(!0)})};E.detach=function(a){M(this,a).each(function(a,c){c.parentNode&&c.parentNode.removeChild(c)});return this};var Oa=/^\s*<(\w+)[^>]*>/,Pa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,Qa={"*":ca,tr:da,td:ea,th:ea,thead:p,tbody:p,tfoot:p};function qa(a){if(!C(a))return[];if(Pa.test(a))return[n(RegExp.$1)];var b=Oa.test(a)&&RegExp.$1;b=Qa[b]||Qa["*"];b.innerHTML=a;return F(b.childNodes).detach().get()}F.parseHTML=qa;E.empty=function(){return this.each(function(a,b){for(;b.firstChild;)b.removeChild(b.firstChild)})};E.html=function(a){return arguments.length?void 0===a?this:this.each(function(b,c){x(c)&&(c.innerHTML=a)}):this[0]&&this[0].innerHTML};E.remove=function(a){M(this,a).detach().off();return this};E.text=function(a){return void 0===a?this[0]?this[0].textContent:"":this.each(function(b,c){x(c)&&(c.textContent=a)})};E.unwrap=function(){this.parent().each(function(a,b){"BODY"!==b.tagName&&(a=F(b),a.replaceWith(a.children()))});return this};E.offset=function(){var a=this[0];if(a)return a=a.getBoundingClientRect(),{top:a.top+m.pageYOffset,left:a.left+m.pageXOffset}};E.offsetParent=function(){return this.map(function(a,b){for(a=b.offsetParent;a&&"static"===Q(a,"position");)a=a.offsetParent;return a||ba})};E.position=function(){var a=this[0];if(a){var b="fixed"===Q(a,"position"),c=b?a.getBoundingClientRect():this.offset();if(!b){var d=a.ownerDocument;for(b=a.offsetParent||d.documentElement;(b===d.body||b===d.documentElement)&&"static"===Q(b,"position");)b=b.parentNode;b!==a&&x(b)&&(d=F(b).offset(),c.top-=d.top+R(b,"borderTopWidth"),c.left-=d.left+R(b,"borderLeftWidth"))}return{top:c.top-R(a,"marginTop"),left:c.left-R(a,"marginLeft")}}};E.children=function(a){return M(F(P(O(this,function(a){return a.children}))),a)};E.contents=function(){return F(P(O(this,function(a){return"IFRAME"===a.tagName?[a.contentDocument]:"TEMPLATE"===a.tagName?a.content.childNodes:a.childNodes})))};E.find=function(a){return F(P(O(this,function(b){return v(a,b)})))};var Ra=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Sa=/^$|^module$|\/(java|ecma)script/i,Ta=["type","src","nonce","noModule"];function Ua(a,b){a=F(a);a.filter("script").add(a.find("script")).each(function(a,d){if(Sa.test(d.type)&&ba.contains(d)){var c=n("script");c.text=d.textContent.replace(Ra,"");J(Ta,function(a,b){d[b]&&(c[b]=d[b])});b.head.insertBefore(c,null);b.head.removeChild(c)}})}function Z(a,b,c,d,h,f,g,y){J(a,function(a,f){J(F(f),function(a,f){J(F(b),function(b,g){var l=c?g:f;b=c?a:b;g=c?f:g;l=b?l.cloneNode(!0):l;b=!b;h?g.insertBefore(l,d?g.firstChild:null):g.parentNode.insertBefore(l,d?g:g.nextSibling);b&&Ua(l,g.ownerDocument)},y)},g)},f);return b}E.after=function(){return Z(arguments,this,!1,!1,!1,!0,!0)};E.append=function(){return Z(arguments,this,!1,!1,!0)};E.appendTo=function(a){return Z(arguments,this,!0,!1,!0)};E.before=function(){return Z(arguments,this,!1,!0)};E.insertAfter=function(a){return Z(arguments,this,!0,!1,!1,!1,!1,!0)};E.insertBefore=function(a){return Z(arguments,this,!0,!0)};E.prepend=function(){return Z(arguments,this,!1,!0,!0,!0,!0)};E.prependTo=function(a){return Z(arguments,this,!0,!0,!0,!1,!1,!0)};E.replaceWith=function(a){return this.before(a).remove()};E.replaceAll=function(a){F(a).replaceWith(this);return this};E.wrapAll=function(a){a=F(a);for(var b=a[0];b.children.length;)b=b.firstElementChild;this.first().before(a);return this.appendTo(b)};E.wrap=function(a){return this.each(function(b,c){var d=F(a)[0];F(c).wrapAll(b?d.cloneNode(!0):d)})};E.wrapInner=function(a){return this.each(function(b,c){b=F(c);c=b.contents();c.length?c.wrapAll(a):b.append(a)})};E.has=function(a){var b=C(a)?function(b,d){return v(a,d).length}:function(b,d){return d.contains(a)};return this.filter(b)};E.is=function(a){var b=L(a);return u.call(this,function(a,d){return b.call(a,d,a)})};E.next=function(a,b,c){return M(F(P(O(this,"nextElementSibling",b,c))),a)};E.nextAll=function(a){return this.next(a,!0)};E.nextUntil=function(a,b){return this.next(b,!0,a)};E.not=function(a){var b=L(a);return this.filter(function(c,d){return(!C(a)||x(d))&&!b.call(d,c,d)})};E.parent=function(a){return M(F(P(O(this,"parentNode"))),a)};E.index=function(a){var b=a?F(a)[0]:this[0];a=a?this:F(b).parent().children();return ha.call(a,b)};E.closest=function(a){var b=this.filter(a);if(b.length)return b;var c=this.parent();return c.length?c.closest(a):b};E.parents=function(a,b){return M(F(P(O(this,"parentElement",!0,b))),a)};E.parentsUntil=function(a,b){return this.parents(b,a)};E.prev=function(a,b,c){return M(F(P(O(this,"previousElementSibling",b,c))),a)};E.prevAll=function(a){return this.prev(a,!0)};E.prevUntil=function(a,b){return this.prev(b,!0,a)};E.siblings=function(a){return M(F(P(O(this,function(a){return F(a).parent().children().not(a)}))),a)};"undefined"!==typeof exports?module.exports=F:m.cash=m.$=F;})();
 
 var elementos_css ={};
 var blocos_posicao ={};
 var elementos_posicao ={};
 var elementos_popup ={};
 var elementos_botoes_evento ={};
 var pagina_controle ={
 'classe_bloco':'gpc-b',
 'classe_elemento':'gpc-e',
 'classe_elemento_antigo':'gpc-elemento',
 'classe_elemento_interno':'c',
 'classe_elemento_interno_antigo':'conteudo',
 'elementos_timer':{}
};
 var largura_tela, altura_tela, timeout_resize;
 
 function GreatResize(){
 let tamanho_tela = $(window).width();
 let zoom_default = 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no';
 
 function iOS(){return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)}
 if(tamanho_tela <= 1200){
 let controle = 1200;
 if(tamanho_tela > 360 && tamanho_tela <= 800){
 $('.gpc-b').each(function(){if($(this).css('background-attachment') == 'fixed'){$(this).css('background-position','');}});
 if(iOS()){$('meta[name="viewport"]').attr('content',zoom_default);}
 else{$('body').css('zoom','');}
 return;
}else if(tamanho_tela <= 360){controle = 360;}
 let proporcao = (((tamanho_tela*100)/controle)).toFixed(5), novo_tamanho;
 novo_tamanho = (tamanho_tela-(tamanho_tela*(proporcao/100)));
 if(novo_tamanho != 0){
 $('.gpc-b').each(function(i,bloco){
 if($(bloco).css('background-attachment') == 'fixed'){
 if(iOS()){$(bloco).css('background-attachment','initial');}
 if($(bloco).position().top >= $(window).height()){$(bloco).css('background-position',$(bloco).css('background-position-x')+' 100%');}
 else{$(bloco).css('background-position',$(bloco).css('background-position-x')+' 0%');}
}
});
 if(iOS()){
 $('meta[name="viewport"]').attr('content','width='+novo_tamanho+', initial-scale='+(proporcao/100)+', maximum-scale='+(proporcao/100)+', minimum-scale='+(proporcao/100)+', user-scalable=no, shrink-to-fit=no');
}else{$('body').css({'zoom':proporcao+'%'});}
}else{
 if(iOS()){
 $('.gpc-b').each(function(i,bloco){
 if($(bloco).css('background-attachment') == 'fixed'){
 $(bloco).css('background-attachment','initial');
 if($(bloco).position().top >= $(window).height()){$(bloco).css('background-position',$(bloco).css('background-position-x')+' 100%');}
 else{$(bloco).css('background-position',$(bloco).css('background-position-x')+' 0%');}
}
});
}
}
}else{
 $('.gpc-b').each(function(i,bloco){if($(bloco).css('background-attachment') == 'fixed'){$(bloco).css('background-position','');}});
 if(iOS()){$('meta[name="viewport"]').attr('content',zoom_default);}
 else{$('body').css('zoom','');}
}
}
 GreatResize();
 $(function(){GreatResize();});
 window.addEventListener('resize', function(e){
 e.preventDefault();
 e.stopPropagation();
 if(timeout_resize){clearTimeout(timeout_resize);timeout_resize = null;}
 largura_tela = $(window).width();
 altura_tela = $(window).height();
 timeout_resize = setTimeout(function(){
 if($(window).width() == largura_tela && $(window).height() == altura_tela){GreatResize();}
},50);
},{passive:true});
 
 function GreatFontes(modal){
 if(modal == undefined){modal = false;}
 if((navigator.userAgent.match(/Android/i) && (navigator.userAgent.match(/Instagram/i) || navigator.userAgent.match(/FBAN/i) || navigator.userAgent.match(/FBAV/i))) || (navigator.userAgent.match(/iPhone/i) && $(window).width() < 360)){
 
 $((modal ? '.gm ':'')+'.gpc-e').each(function(){
 
 var elemento = $(this);
 var elemento_id = elemento.attr('id');
 
 if (elementos_css.hasOwnProperty(elemento_id)){
 
 var elemento_conteudo = (elemento.hasClass('e_formulario') ? elemento.find('.gpc_botao') :elemento.children('.c'));
 var fs_aumento = fs_novo = 0;
 
 if (parseFloat(elemento_conteudo.css('font-size')) != elementos_css[elemento_id]['fs']){
 
 fs_aumento = (elementos_css[elemento_id]['fs']*100)/parseFloat(elemento_conteudo.css('font-size'));
 fs_novo = elementos_css[elemento_id]['fs']-((100-fs_aumento)*(elementos_css[elemento_id]['fs']/100));
 
 elemento_conteudo.css('font-size',fs_novo+'px');
 elemento_conteudo.children().each(function(){$(this).css('font-size',fs_novo+'px');});
 
 if (elementos_css[elemento_id]['lh']){
 
 elemento_conteudo.css('line-height',elementos_css[elemento_id]['lh']);
 elemento_conteudo.children().each(function(){$(this).css('line-height',elementos_css[elemento_id]['lh']);});
}
 
 if (elemento.hasClass('e_timer')){
 
 if (parseFloat(elemento_conteudo.css('font-size')) != elementos_css[elemento_id]['fs']){
 elemento_conteudo.find('.contador_titulos').css('line-height','1');
 elemento_conteudo.find('.contador_itens').children('span').css('line-height','1.2');
}
}else if (elemento.hasClass('e_formulario')){
 
 var fs_aumento_form = fs_novo_form = 0;
 fs_aumento_form = (14*100)/parseFloat(elemento_conteudo.find('.gpc_campos-titulo').css('font-size'));
 fs_novo_form = 14-((100-fs_aumento_form)*(14/100));
 elemento_conteudo.find('.gpc_campos-titulo').css({'font-size':fs_novo_form+'px', 'line-height':'1.4'});
 
 fs_aumento_form = (12*100)/parseFloat(elemento_conteudo.find('.gpc_campos-texto').css('font-size'));
 fs_novo_form = 12-((100-fs_aumento_form)*(12/100));
 elemento_conteudo.find('.gpc_campos-texto').css({'font-size':fs_novo_form+'px', 'line-height':'1.4'});
 
 elemento_conteudo.find('.gpc_botao').css({'font-size':fs_novo+'px', 'line-height':elementos_css[elemento_id]['lh']});
}
}
}
});
}
}
 $(function(){
 
 GreatFontes();
});
 
 
 $(function(){GreatLoader('iniciar');});
 
 var gle_fontes ={}, gle_css ={}, gle_scripts ={};
 
 function GreatLoader(acao){
 
 
 gle_fontes['elementos'] = $('.gle_fontes');
 gle_fontes['encontrados'] = gle_fontes['elementos'].length;
 gle_fontes['carregados'] = 0;
 
 if (gle_fontes['encontrados'] != 0){
 if(!window.getCrawler()){
 InserirFontes(acao);
 setTimeout(function(){CarregarFontes();},4500);
}else{CarregarFontes();}
}else{CarregarFontes();}
 
 setTimeout(function(){
 
 gle_scripts['elementos'] = $('.gle_scripts');
 gle_scripts['encontrados'] = gle_scripts['elementos'].length;
 gle_scripts['carregados'] = 0;
 
 if (gle_scripts['encontrados'] != 0){
 InserirScripts(acao);
}else{if (acao == 'iniciar'){if (window.InserirScriptsInline != undefined){InserirScriptsInline();}}}
},20);
 
 setTimeout(function(){
 
 gle_css = $('.gle_css');
 
 InserirCss(acao);
},30);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.e_animacoes',
 'antecipacao' :0,
 'executar' :function(elemento){
 (function(elemento){
 var elemento_carregando = setInterval(function(){
 if (!$(elemento).hasClass('se_imagem') && !$(elemento).hasClass('se_video') && !$(elemento).hasClass('se_caixa') && !$(elemento).find('.c').hasClass('se_fonte') && !$(elemento).hasClass('se_slider')){
 
 clearInterval(elemento_carregando);
 
 var elemento_id = $(elemento).attr('id').replace('_d', '').replace('_m', '');
 var elemento_informacoes = ($(elemento).hasClass('e_video') && $(elemento).find('.carregando').length ? $(elemento).find('.carregando') :$(elemento).find('.c'));
 var animacao_nome = $(elemento_informacoes).attr('data-animation-nome');
 var animacao_duration = ($(elemento_informacoes).attr('data-animation-duration') ? $(elemento_informacoes).attr('data-animation-duration')+'ms' :'1000ms');
 var animacao_delay = ($(elemento_informacoes).attr('data-animation-delay') ? $(elemento_informacoes).attr('data-animation-delay')+'ms' :'0ms');
 var animacao_repeat = ($(elemento_informacoes).attr('data-animation-repeat') == 'loop' ? 'infinite' :'');
 
 if (animacao_nome == 'slide' || animacao_nome == 'zoom' || animacao_nome == 'flip'){var animacao_tipo = 'cubic-bezier(.25,.46,.45,.94)';}
 else if (animacao_nome == 'fade'){var animacao_tipo = 'cubic-bezier(0.390, 0.575, 0.565, 1.000)';}
 else if (animacao_nome == 'roll'){var animacao_tipo = 'ease-out';}
 else if (animacao_nome == 'fold'){var animacao_tipo = 'cubic-bezier(.175,.885,.32,1.275)';}
 else{var animacao_tipo = '';}
 
 $(elemento).removeClass('e_animacoes');
 if(!window.getCrawler()){
 if($(elemento).hasClass('e_faq')){
 var itens = $(elemento).find('.gac-item');
 for (var i = 0;i < itens.length;i++){
 $(itens[i]).css({
 'animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+(parseInt(animacao_delay)+(500*i))+'ms '+animacao_repeat+' both',
 '-webkit-animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+(parseInt(animacao_delay)+(500*i))+'ms '+animacao_repeat+' both',
 'transform':'translate3d(0,0,0)',
 '-webkit-transform':'translate3d(0,0,0)',
 'perspective':'500px'});
 }
}else{
 $(elemento).find('.c').css({
 'animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+animacao_delay+' '+animacao_repeat+' both',
 '-webkit-animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+animacao_delay+' '+animacao_repeat+' both',
 'transform':'translate3d(0,0,0)',
 '-webkit-transform':'translate3d(0,0,0)',
 'perspective':'500px'});
}
}
 
 $(elemento_informacoes).removeAttr('data-animation-nome data-animation-duration data-animation-delay data-animation-repeat');
 }
}, 50);
})(elemento);
}
});
},30);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_imagem',
 'antecipacao' :600,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var imagem_download = new Image();
 imagem_download.src = ((dispositivo == 'mobile' && elemento.getAttribute('ll_src_mobile')) ? elemento.getAttribute('ll_src_mobile') :elemento.getAttribute('ll_src'));
 imagem_download.onload = function(e){
 
 let img_mobile = elemento.getAttribute('ll_src_mobile'), img_desktop = elemento.getAttribute('ll_src'), html = '<div class="imagem_fundo"></div>';
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.querySelector('.'+pagina_controle['classe_elemento_interno']).removeAttribute('gpc_nome_imagem');
 elemento.classList.remove('se_imagem');
 elemento.children[0].innerHTML = html;
};
 imagem_download.onerror = function(e){
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.querySelector('.'+pagina_controle['classe_elemento_interno']).removeAttribute('gpc_nome_imagem');
 elemento.classList.remove('se_imagem');
 elemento.children[0].innerHTML = '<div class="imagem_fundo fallback_background"></div>';
};
}
});
},40);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_caixa',
 'antecipacao' :500,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var elemento_carregando_src = '';
 if (dispositivo == 'mobile' && elemento.getAttribute('ll_src_mobile')){elemento_carregando_src = elemento.getAttribute('ll_src_mobile');}
 else if (dispositivo == 'desktop' && elemento.getAttribute('ll_src')){elemento_carregando_src = elemento.getAttribute('ll_src');}
 if (elemento_carregando_src){
 
 var imagem_download = new Image();
 imagem_download.src = elemento_carregando_src;
 imagem_download.onload = function(e){
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('se_caixa');
};
 imagem_download.onerror = function(e){
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('se_caixa');
 elemento.children[0].classList.add('fallback_background');
};
}else{
 elemento.classList.remove('se_caixa');
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
}
}
});
},40);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_slider',
 'antecipacao' :500,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}
 else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var imagens = $(elemento).find('.imagem');
 if(imagens.length){
 imagens.each(function(i,imagem){
 var elemento_carregando_src = '';
 if (dispositivo == 'mobile' && imagem.getAttribute('ll_src_mobile')){elemento_carregando_src = imagem.getAttribute('ll_src_mobile');}
 else if (dispositivo == 'desktop' && imagem.getAttribute('ll_src')){elemento_carregando_src = imagem.getAttribute('ll_src');}
 if (elemento_carregando_src){
 
 var imagem_download = new Image();
 imagem_download.src = elemento_carregando_src;
 imagem_download.onload = function(e){
 
 imagem.removeAttribute('ll_src');
 imagem.removeAttribute('ll_src_mobile');
 imagem.closest('.'+pagina_controle['classe_elemento']).classList.remove('se_slider');
 if(imagem.classList.contains('gsi_clone')){imagem.style.backgroundImage = 'url('+elemento_carregando_src+')';}
};
 imagem_download.onerror = function(e){
 
 imagem.removeAttribute('ll_src');
 imagem.removeAttribute('ll_src_mobile');
 try{
 imagem.closest('.'+pagina_controle['classe_elemento']).classList.remove('se_slider');
 imagem.closest('.'+pagina_controle['classe_elemento']).children[0].classList.add('fallback_background');
 let id_slider = `gsi_${elemento.closest('.'+pagina_controle['classe_elemento']).getAttribute('id')}`;
 if(gsi_intervalo.hasOwnProperty(id_slider)){
 GSlideImage.destruir(id_slider);
 GSlideImage.iniciar(elemento.closest('.'+pagina_controle['classe_elemento']).getAttribute('id'));
 }else{
 GSlideImage.iniciar(elemento.closest('.'+pagina_controle['classe_elemento']).getAttribute('id'));
 }
}catch (error){
}
};
 }else{
 imagem.closest('.'+pagina_controle['classe_elemento']).classList.remove('se_slider');
 imagem.removeAttribute('ll_src');
 imagem.removeAttribute('ll_src_mobile');
 }
});
}
}
});
},400);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.ll_background',
 'antecipacao' :500,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}
 else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var elemento_carregando_src = '';
 if (dispositivo == 'mobile' && elemento.getAttribute('ll_src_mobile')){elemento_carregando_src = elemento.getAttribute('ll_src_mobile');}
 else if (dispositivo == 'desktop' && elemento.getAttribute('ll_src')){elemento_carregando_src = elemento.getAttribute('ll_src');}
 if (elemento_carregando_src){
 
 var background_download = new Image();
 background_download.src = elemento_carregando_src;
 background_download.onload = function(e){
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('ll_background');
};
 background_download.onerror = function(e){
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('ll_background');
 elemento.classList.add('fallback_background');
};
}else{
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('ll_background');
 elemento.classList.add('fallback_background');
}
}
});
},50);
 
 if(!window.getCrawler()){
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_video',
 'antecipacao' :0,
 'executar' :function(elemento){
 
 if(document.getElementById(elemento.getAttribute('id')).getElementsByTagName('iframe').length == 0){
 
 var animacao_nome = (elemento.querySelector('.carregando').getAttribute('data-animation-nome') ? elemento.querySelector('.carregando').getAttribute('data-animation-nome') :'none');
 var animacao_duration = (elemento.querySelector('.carregando').getAttribute('data-animation-duration') ? elemento.querySelector('.carregando').getAttribute('data-animation-duration') :1000);
 var animacao_delay = (elemento.querySelector('.carregando').getAttribute('data-animation-delay') ? elemento.querySelector('.carregando').getAttribute('data-animation-delay') :0);
 var animacao_repeat = (elemento.querySelector('.carregando').getAttribute('data-animation-repeat') == 'loop' ? 'infinite' :'show');
 
 var video_download = document.createElement("iframe");
 console.log(elemento.getAttribute('ll_src'));
 video_download.setAttribute('src', elemento.getAttribute('ll_src'));
 video_download.setAttribute('frameborder', 0);
 video_download.setAttribute('allowfullscreen', '');
 video_download.setAttribute('mozallowfullscreen', '');
 video_download.setAttribute('webkitallowfullscreen', '');
 video_download.setAttribute('allow', 'accelerometer;autoplay;picture-in-picture');
 video_download.setAttribute('class', 'c e_video');
 video_download.setAttribute('data-animation-nome', animacao_nome);
 video_download.setAttribute('data-animation-duration', animacao_duration);
 video_download.setAttribute('data-animation-delay', animacao_delay);
 video_download.setAttribute('data-animation-repeat', animacao_repeat);
 video_download.onload = function(){
 if(document.getElementById(elemento.getAttribute('id')).querySelector('.carregando')){
 document.getElementById(elemento.getAttribute('id')).querySelector('.carregando').remove();
}
 elemento.removeAttribute('ll_src');
 elemento.classList.remove('se_video');
 };
 video_download.onreadystatechange = function(){
 if(document.getElementById(elemento.getAttribute('id')).querySelector('.carregando')){
 document.getElementById(elemento.getAttribute('id')).querySelector('.carregando').remove();
}
 if (this.readyState == 'complete'){
 elemento.removeAttribute('ll_src');
 elemento.classList.remove('se_video');
}
 };
 
 document.getElementById(elemento.getAttribute('id')).appendChild(video_download);
}
}
});
},400);
}
}
 
 function InserirFontes(acao){
 if (gle_fontes['elementos'].length){
 for(var i = 0;i < gle_fontes['elementos'].length;i++){
 
 (function(index){
 
 var elemento = $(gle_fontes['elementos'][index]);
 
 gle_fontes['elementos'].splice(index, 1);
 
 var fonte = document.createElement('link');
 fonte.href = elemento.attr('gle_href');
 fonte.rel = 'stylesheet';
 fonte.media = 'all';
 fonte.onload = function(){
 
 elemento.remove();
 
 gle_fontes['carregados']++;
 
 CarregarFontes();
 
 InserirFontes(acao);
};
 fonte.onerror = function(){
 
 elemento.remove();
 
 gle_fontes['carregados']++;
 
 CarregarFontes();
 
 InserirFontes(acao);
};
 fonte.onreadystatechange = function(){if (this.readyState == 'complete'){
 
 elemento.remove();
 
 gle_fontes['carregados']++;
 
 CarregarFontes();
 
 InserirFontes(acao);
}};
 document.head.appendChild(fonte);
})(i, acao);
 
 break;
}
}
}
 function CarregarFontes(){
 var fontes_carregar = $('.se_fonte, .se_contador');
 if (fontes_carregar.length){
 for(var i = 0;i < fontes_carregar.length;i++){
 
 if ($(fontes_carregar[i]).hasClass('se_fonte')){$(fontes_carregar[i]).removeClass('se_fonte');}
 else{$(fontes_carregar[i]).removeClass('se_contador');}
}
}
}
 
 function InserirCss(acao){
 if (gle_css.length){
 for(var i = 0;i < gle_css.length;i++){
 
 (function(index){
 
 var elemento = $(gle_css[index]);
 
 gle_css.splice(index, 1);
 
 var fonte = document.createElement('link');
 
 for (var x = 0;x < elemento[0].attributes.length;x++){
 if(elemento[0].attributes[x].nodeName != 'rel'){fonte.setAttribute(elemento[0].attributes[x].nodeName.replace('gle_',''),elemento[0].attributes[x].nodeValue.replace('gle_css',''));}
}
 
 fonte.onload = function(){
 
 elemento.remove();
 
 InserirCss(acao);
};
 fonte.onerror = function(){
 
 elemento.remove();
 
 InserirCss(acao);
};
 fonte.onreadystatechange = function(){if (this.readyState == 'complete'){
 
 elemento.remove();
 
 InserirCss(acao);
}};
 document.body.appendChild(fonte);
})(i, acao);
 
 break;
}
}
}
 
 function InserirScripts(acao){
 if (gle_scripts['elementos'].length){
 for(var i = 0;i < gle_scripts['elementos'].length;i++){
 
 (function(index){
 
 var elemento = $(gle_scripts['elementos'][index]);
 if((elemento.attr('href').indexOf('gtag') || elemento.attr('href').indexOf('fbevents')) && window.getCrawler()){
 
 elemento.remove();
 
 InserirScripts(acao);
 
 return;
}
 
 gle_scripts['elementos'].splice(index, 1);
 
 var script = document.createElement('script');
 
 for (var x = 0;x < elemento[0].attributes.length;x++){
 let valor = elemento[0].attributes[x].nodeValue;
 if(elemento[0].attributes[x].nodeName != 'href'){
 valor = valor.replace(/dns-prefetch\s+?/gm,'');
 valor = valor.replace(/\s+?dns-prefetch/gm,'');
 valor = valor.replace(/preconnect\s+?/gm,'');
 valor = valor.replace(/\s+?preconnect/gm,'');
 valor = valor.replace('dns-prefetch','');
 valor = valor.replace('preconnect','');
 valor = valor.replace('gle_scripts','');
 if(elemento[0].attributes[x].nodeName != 'async'){script.setAttribute(elemento[0].attributes[x].nodeName,valor);}
}
}
 script.src = elemento.attr('href');
 script.type = 'text/javascript';
 script.defer = true;
 script.onload = function(){
 
 elemento.remove();
 
 gle_scripts['carregados']++;
 
 if (gle_scripts['encontrados'] == gle_scripts['carregados'] && acao == 'iniciar'){
 if (window.InserirScriptsInline != undefined){InserirScriptsInline();}
}
 
 InserirScripts(acao);
};
 script.onerror = function(){
 
 elemento.remove();
 
 gle_scripts['carregados']++;
 
 if (gle_scripts['encontrados'] == gle_scripts['carregados'] && acao == 'iniciar'){
 if (window.InserirScriptsInline != undefined){InserirScriptsInline();}
}
 
 InserirScripts(acao);
};
 script.onreadystatechange = function(){if (this.readyState == 'complete'){
 
 elemento.remove();
 
 gle_scripts['carregados']++;
 
 if (gle_scripts['encontrados'] == gle_scripts['carregados'] && acao == 'iniciar'){
 if (window.InserirScriptsInline != undefined){InserirScriptsInline();}
}
 
 InserirScripts(acao);
}};
 document.body.appendChild(script);
})(i, acao);
 
 break;
}
}
}
 
 
 
(function(factory){
 if (typeof module === 'object' && module.exports){
  module.exports = factory();
 }else{
  window.intlTelInput = factory();
 }
}(() =>{
 return function(){
  return {
   getSelectedCountryData:function(){return {dialCode:''};}
  };
 };
}));

 
 var elementos_formulario_redirecionamento ={};
 function ValidacaoFormularios (formulario){
 var formulario_passos = formulario.find("fieldset");
 var formulario_validado = true;
 $(formulario_passos).each(function(formulario_passos_total){if (!ValidacaoPasso($(this))){formulario_validado = false;}});
 return formulario_validado;
}
 function ValidacaoPasso (passo){
 var passo_campo = passo.find(".gpc_campos");
 var passo_validado = true;
 if(passo_campo.length){
 $(passo_campo).each(function(passo_campo_total){
 if($(this).find(".gpc_campos-campo-opcao").length){if (!ValidacaoCampos($(this))){passo_validado = false;}}
 else{if (!ValidacaoCampos($(this).find(".gpc_campo"))){passo_validado = false;}}
});
}else{
 var caixa = passo.closest('.gm');
 var passo_campo = passo.find(".admin_campos");
 $(passo_campo).each(function(passo_campo_total){
 if (!ValidacaoCampos($(this).find(".admin_campo"))){
 passo_validado = false;
 
 if (caixa.length){
 if (passo.hasClass('passo_fechado')){
 
 var caixa_andamento = caixa.children('.gmf-andamento');
 var caixa_rodape = caixa.children('.gmf-rodape');
 var formulario = caixa.find('#formulario').find("fieldset.passo");
 var passos_atual = parseInt(passo.attr('passo'));
 var passos_quantidade = parseInt(caixa_andamento.attr('caixa_passos_quantidade'));
 
 $(formulario).each(function(formulario_passos_total){if ($(this).hasClass('passo_aberto')){$(this).removeClass('passo_aberto').addClass('passo_fechado');}});
 
 passo.removeClass('passo_fechado').addClass('passo_aberto');
 
 PosicionarGM(caixa.attr('id'), false);
 
 caixa_andamento.attr('caixa_passos_atual', passos_atual);
 caixa_andamento.children('.gmf-andamento-barra').css({'width':((100/passos_quantidade)*passos_atual)+'%'});
 
 if (passos_quantidade == (passos_atual+1)){
 if (!caixa_rodape.find('.passo_proximo').hasClass('esconder')){caixa_rodape.find('.passo_proximo').addClass('esconder');}
 if (caixa_rodape.find('#enviar_formulario_ajax').hasClass('esconder')){caixa_rodape.find('#enviar_formulario_ajax').removeClass('esconder');}
 }else{
 if (caixa_rodape.find('.passo_proximo').hasClass('esconder')){caixa_rodape.find('.passo_proximo').removeClass('esconder');}
 if (!caixa_rodape.find('#enviar_formulario_ajax').hasClass('esconder')){caixa_rodape.find('#enviar_formulario_ajax').addClass('esconder');}
 }
 if (passos_atual == 0){
 if (!caixa_rodape.find('.passo_anterior').hasClass('esconder')){caixa_rodape.find('.passo_anterior').addClass('esconder');}
 if (caixa_rodape.find('#cancelar_formulario_ajax').hasClass('esconder')){caixa_rodape.find('#cancelar_formulario_ajax').removeClass('esconder');}
 }else{
 if (caixa_rodape.find('.passo_anterior').hasClass('esconder')){caixa_rodape.find('.passo_anterior').removeClass('esconder');}
 if (!caixa_rodape.find('#cancelar_formulario_ajax').hasClass('esconder')){caixa_rodape.find('#cancelar_formulario_ajax').addClass('esconder');}
 }
}
}
}
});
}
 if(passo_validado){return true;}
 else{return false;}
}
 function ValidacaoCampos (campo){
 
 if($(campo).hasClass('admin_campo')){
 
 var campo_validado = true;
 var campo_auxiliar = campo.closest('.admin_campos').children('.admin_auxiliar');
 var campo_valor = campo.val();
 var campo_area = campo.closest('.admin_campos');
 if(campo_valor){
 if(campo_valor.substr(0,1) == ' '){
 campo.val(campo_valor.substr(1));
 campo_valor = campo_valor.substr(1);
}
 if(campo_valor.substr(-1) == ' '){
 campo.val(campo_valor.substr(0,(campo_valor.length-1)));
 campo_valor = campo_valor.substr(0,(campo_valor.length-1));
}
}
 
 if (campo_auxiliar.attr('html_original') == '' && campo_auxiliar.html() != ''){campo_auxiliar.attr('html_original',campo_auxiliar.html());}
 
 if (campo.hasClass('required') && campo_valor == ''){
 campo_validado = false;
 if (campo_auxiliar.html() != 'Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.' && campo_auxiliar.html() != ''){campo_auxiliar.attr('html_original',campo_auxiliar.html());}
 campo_auxiliar.html('Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.');
}else{if (campo_auxiliar.html() == 'Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.'){campo_auxiliar.html('');}}
 if ((campo.hasClass('email') || campo.hasClass('email_multiplo') || campo.hasClass('cemail')) && campo_validado && campo_valor != ''){
 campo_valor = campo_valor.replace(/ /g, '');
 campo.val(campo_valor);
 var filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 if(campo.hasClass('email_multiplo')){
 var emails = campo_valor.split(',');
 for (var i = 0;i < emails.length;i++){
 if(!filtro.test(emails[i])){
 campo_validado = false;
 campo_auxiliar.html('Informe um endereÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§o de e-mail vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.');
 break;
}
}
}else{
 if(!filtro.test(campo_valor)){
 campo_validado = false;
 campo_auxiliar.html('Informe um endereÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§o de e-mail vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.');
}
}
}
 if(campo.attr('maxlength') != undefined && campo.hasClass('required_max_length') && campo_validado ){
 var total_caracteres = campo_valor.length, tamanho_maximo = campo.attr('maxlength');
 if(tamanho_maximo < total_caracteres){
 campo_validado = false;
 campo_auxiliar.html("Informe no mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ximo "+tamanho_maximo+" caracteres.");
}else{campo_validado = true;}
 if (campo_validado){
 campo_auxiliar.html('');
 if(campo_auxiliar.attr('html_original') == "Informe no mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ximo "+tamanho_maximo+" caracteres."){campo_auxiliar.attr('html_original','');}
}
}
 if((campo.attr('min') != undefined || campo.attr('max') != undefined) && campo.hasClass('required') && campo_validado ){
 campo_valor = parseInt(campo_valor);
 if(campo.attr('min') != undefined && campo.attr('max') != undefined){
 var minimo = parseInt(campo.attr('min')), maximo = parseInt(campo.attr('max'));
 if(campo_valor >= minimo && campo_valor <= maximo){campo_validado = true;}
 else{
 campo_validado = false;
 campo_auxiliar.html("Informe um valor entre "+minimo+" e "+maximo+".");
}
}else if(campo.attr('min') != undefined){
 var minimo = parseInt(campo.attr('min'));
 if(campo_valor >= minimo){campo_validado = true;}
 else{
 campo_validado = false;
 campo_auxiliar.html("Informe um valor maior ou igual a "+minimo+".");
}
}else if(campo.attr('max') != undefined){
 var maximo = parseInt(campo.attr('max'));
 if(campo_valor <= minimo){campo_validado = true;}
 else{
 campo_validado = false;
 campo_auxiliar.html("Informe um valor menor ou igual a "+minimo+".");
}
}
 if (campo_validado){
 campo_auxiliar.html('');
 if(campo_auxiliar.attr('html_original') == "Informe um valor menor ou igual a "+minimo+"." || campo_auxiliar.attr('html_original') == "Informe um valor maior ou igual a "+minimo+"."|| campo_auxiliar.attr('html_original') == "Informe um valor entre "+minimo+" e "+maximo+"."){campo_auxiliar.attr('html_original','');}
}
}
 if (campo.hasClass('required_travar_zero') && (campo_valor == 0 || campo_valor == '') && campo_validado){campo_validado = false;campo_auxiliar.html('Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.');}
 if (campo.hasClass('required_telefone_validar') && campo.hasClass('required') && campo_validado){
 campo_validado = ValidarTelefone(campo_valor);
 if(campo_validado == false){campo_auxiliar.html('Informe um nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºmero de telefone vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.');}
 else{campo_auxiliar.html('');}
}
 if (campo.hasClass('required_cpf_validar') && campo.hasClass('required') && campo_validado){
 campo_validado = ValidarCpf(campo_valor);
 if(campo_validado == false){campo_auxiliar.html('Informe um CPF vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.');}
 else{campo_auxiliar.html('');}
}
 if (campo.hasClass('required_cnpj_validar') && campo.hasClass('required') && campo_validado){
 campo_validado = ValidarCnpj(campo_valor);
 if(campo_validado == false){campo_auxiliar.html('Informe um CNPJ vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.');}
 else{campo_auxiliar.html('');}
}
 
 if (campo_validado){
 if (campo_auxiliar.attr('html_original') == 'Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.' || campo_auxiliar.attr('html_original') == 'Link da pÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡gina informado nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.' || campo_auxiliar.attr('html_original') == 'Informe seu domÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­nio no formato do exemplo abaixo.' || campo_auxiliar.attr('html_original') == 'Informe um endereÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§o de e-mail vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.' || campo_auxiliar.attr('html_original') == 'CartÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o informado estÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ expirado.' || campo_auxiliar.attr('html_original') == 'Informe um nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºmero de telefone vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.' || campo_auxiliar.attr('html_original') == 'Informe um CPF vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.' || campo_auxiliar.attr('html_original') == 'Informe um CNPJ vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.' || campo_auxiliar.attr('html_original') == 'Bandeiras aceitas Visa, MasterCard, Elo e Diners' || campo_auxiliar.attr('html_original') == 'NÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºmero do cartÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o invÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido' || campo_auxiliar.attr('html_original') == 'Informe um nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºmero de cartÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o' || campo_auxiliar.attr('html_original') == 'Senha informada nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o confere com a utilizada.' || campo_auxiliar.attr('html_original') == 'Link de acesso em uso, tente outro.' || campo_auxiliar.attr('html_original') == 'JÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ cadastrado' || campo_auxiliar.attr('html_original') == 'Informe seu domÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­nio no formato do exemplo abaixo.' || campo_auxiliar.attr('html_original') == 'SubdomÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­nio informado jÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ foi cadastrado.'){campo_auxiliar.attr({'html_original':''});}
 if (campo_area.hasClass('admin_campos-error')){campo_area.removeClass('admin_campos-error');}
 if (campo_auxiliar.attr('html_original') != undefined && campo_auxiliar.attr('html_original') != ''){campo_auxiliar.html(campo_auxiliar.attr('html_original'));bindEvents();}
 else{campo_auxiliar.html('');}
 return true;
}else{
 if (!campo_area.hasClass('admin_campos-error')){campo_area.addClass('admin_campos-error');}
 return false;
}
}else{
 var campo_validado = true;
 var campo_valor = '';
 if($(campo).hasClass('gpc_campos-check') || $(campo).hasClass('gpc_campos-radio') || $(campo).hasClass('gpc_campos-consentimento_lgpd')){
 if(campo.find('.gpc_campos-erro').length == 0){campo.append('<div class="gpc_campos-erro icone_bold-aviso gtt-esquerda" data-gtt=""></div>');bindEvents();}
 var campo_auxiliar = campo.find('.gpc_campos-erro');
 $(campo).find('input').each(function(campo_atual){if($(this).prop('checked')){campo_valor = $(this).val();}});
}else{
 if(campo.closest('.gpc_campos-campo').find('.gpc_campos-erro').length == 0){campo.after('<div class="gpc_campos-erro icone_bold-aviso gtt-esquerda" data-gtt=""></div>');bindEvents();}
 var campo_auxiliar = campo.closest('.gpc_campos').find('.gpc_campos-erro');
 campo_valor = campo.val();
 if($(campo).closest('.gpc_campos').hasClass('gpc_campos-select')){let opcoes = $(campo).find('option');for (var i = 0;i < opcoes.length;i++){if(campo_valor == opcoes[i].value && opcoes[i].disabled){campo_valor = '';}}}
}
 if(campo_valor == null){campo_valor = '';}
 var campo_area = campo.closest('.gpc_campos');
 if(campo_valor && !$(campo).hasClass('gpc_campos-check') && !$(campo).hasClass('gpc_campos-radio') && !$(campo).hasClass('gpc_campos-consentimento_lgpd') && !$(campo).hasClass('gpc_campos-select')){
 campo_valor = campo_valor.trim(true);
}
 
 if ((campo_auxiliar.attr('data-gtt') == '' || campo_auxiliar.attr('data-gtt') == undefined) && campo_auxiliar.html() != ''){campo_auxiliar.attr('data-gtt','');}
 
 if($(campo).hasClass('gpc_campos-check') || $(campo).hasClass('gpc_campos-radio') || $(campo).hasClass('gpc_campos-consentimento_lgpd')){
 if (campo.find('em').length && campo_valor == ''){
 campo_validado = false;
 if (campo_auxiliar.attr('data-gtt') != 'Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.' && campo_auxiliar.attr('data-gtt') != '' && campo_auxiliar.attr('data-gtt') != undefined){campo_auxiliar.attr({'data-gtt':''});}
 campo_auxiliar.attr({'data-gtt':'Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.'});
}else{if (campo_auxiliar.attr('data-gtt') == 'Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.'){campo_auxiliar.attr({'data-gtt':''});}}
}else{
 if (campo.hasClass('obrigatorio') && campo_valor == ''){
 campo_validado = false;
 if (campo_auxiliar.attr('data-gtt') != 'Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.' && campo_auxiliar.attr('data-gtt') != '' && campo_auxiliar.attr('data-gtt') != undefined){campo_auxiliar.attr({'data-gtt':''});}
 campo_auxiliar.attr({'data-gtt':'Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.'});
}else{if (campo_auxiliar.attr('data-gtt') == 'Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.'){campo_auxiliar.attr({'data-gtt':''});}}
 if ((campo.hasClass('email') || campo.hasClass('email_multiplo') || campo.hasClass('cemail')) && campo_validado && campo_valor != ''){
 campo_valor = campo_valor.replace(/ /g, '');
 campo.val(campo_valor);
 var filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 if(campo.hasClass('email_multiplo')){
 var emails = campo_valor.split(',');
 for (var i = 0;i < emails.length;i++){
 if(!filtro.test(emails[i])){
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':'Informe um endereÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§o de e-mail vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.'});
 break;
 }
}
}else{
 if(!filtro.test(campo_valor)){
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':'Informe um endereÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§o de e-mail vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.'});
}
}
}
 if(campo.attr('maxlength') != undefined && campo.hasClass('required_max_length') && campo_validado ){
 var total_caracteres = campo_valor.length, tamanho_maximo = campo.attr('maxlength');
 if(tamanho_maximo < total_caracteres){
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':"Informe no mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ximo "+tamanho_maximo+" caracteres."});
}else{campo_validado = true;}
}
 if((campo.attr('min') != undefined || campo.attr('max') != undefined) && campo.hasClass('required') && campo_validado ){
 campo_valor = parseInt(campo_valor);
 if(campo.attr('min') != undefined && campo.attr('max') != undefined){
 var minimo = parseInt(campo.attr('min')), maximo = parseInt(campo.attr('max'));
 if(campo_valor >= minimo && campo_valor <= maximo){campo_validado = true;}
 else{
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':"Informe um valor entre "+minimo+" e "+maximo+"."});
}
}else if(campo.attr('min') != undefined){
 var minimo = parseInt(campo.attr('min'));
 if(campo_valor >= minimo){campo_validado = true;}
 else{
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':"Informe um valor maior ou igual a "+minimo+"."});
}
}else if(campo.attr('max') != undefined){
 var maximo = parseInt(campo.attr('max'));
 if(campo_valor <= minimo){campo_validado = true;}
 else{
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':"Informe um valor menor ou igual a "+minimo+"."});
}
}
}
 if (campo.hasClass('required_travar_zero') && (campo_valor == 0 || campo_valor == '') && campo_validado){
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':'Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.'});
}
 if (campo.hasClass('telefone') && (campo.hasClass('obrigatorio') || campo_valor != '') && campo_validado){
 campo_validado = ValidarTelefone(campo,campo_valor);
 if(campo_validado == false){campo_auxiliar.attr({'data-gtt':'Informe um nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºmero de telefone vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.'});}
 else{campo_auxiliar.attr({'data-gtt':''});}
}
 if (campo.hasClass('telefone_ddi') && (campo.hasClass('obrigatorio') || campo_valor != '') && campo_validado){
 campo_validado = ValidarTelefone(campo,campo_valor);
 if(campo_validado == false){campo_auxiliar.attr({'data-gtt':'Informe um nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºmero de telefone vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.'});}
 else{campo_auxiliar.attr({'data-gtt':''});}
}
 if (campo.hasClass('required_cpf_validar') && campo.hasClass('required') && campo_validado){
 campo_validado = ValidarCpf(campo_valor);
 if(campo_validado == false){campo_auxiliar.attr({'data-gtt':'Informe um CPF vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.'});}
 else{campo_auxiliar.attr({'data-gtt':''});}
}
 if (campo.hasClass('required_cnpj_validar') && campo.hasClass('required') && campo_validado){
 campo_validado = ValidarCnpj(campo_valor);
 if(campo_validado == false){campo_auxiliar.attr({'data-gtt':'Informe um CNPJ vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.'});}
 else{campo_auxiliar.attr({'data-gtt':''});}
}
 if (campo.hasClass('personalized_error')){campo_validado = false;}
}
 
 if (campo_validado){
 if (
 campo_auxiliar.attr('data-gtt') == 'Campo obrigatÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³rio.' ||
 campo_auxiliar.attr('data-gtt') == 'Informe um endereÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§o de e-mail vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.' ||
 campo_auxiliar.attr('data-gtt') == 'Informe um nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºmero de telefone vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.' ||
 campo_auxiliar.attr('data-gtt') == 'Informe um CPF vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.' ||
 campo_auxiliar.attr('data-gtt') == 'Informe um CNPJ vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡lido.' ||
 campo_auxiliar.attr('data-gtt') == 'JÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ cadastrado'
 ){campo_auxiliar.attr({'data-gtt':''});}
 if (campo_area.hasClass('gpc_campos-error')){campo_area.removeClass('gpc_campos-error');}
 campo_auxiliar.attr({'data-gtt':''});
 return true;
}else{
 if (!campo_area.hasClass('gpc_campos-error')){campo_area.addClass('gpc_campos-error');}
 return false;
}
}
}
 function ValidarTelefone(campo, campo_valor){
 let valor = campo_valor.replace(/\D/g, '');
 if(valor.replace(/9/g,'') == '' || valor.replace(/8/g,'') == '' || valor.replace(/7/g,'') == '' || valor.replace(/6/g,'') == '' || valor.replace(/5/g,'') == '' || valor.replace(/4/g,'') == '' || valor.replace(/3/g,'') == '' || valor.replace(/2/g,'') == '' || valor.replace(/1/g,'') == '' || valor.replace(/0/g,'') == ''){return false;}
 return phoneMaskGreat['#'+$(campo).closest('.gpc-e').attr('id')+'#'+$(campo).attr('id')].isValidNumber();
}
 function ValidarCpf(cpf){
 
 cpf = cpf.replace('-', "").replace('.', "").replace('.', "").trim();
 
 var numeros, digitos, soma, i, resultado, digitos_iguais;
 digitos_iguais = 1;
 
 if (cpf.length < 11){return false;}
 
 for (i = 0;i < cpf.length - 1;i++){
 if (cpf.charAt(i) != cpf.charAt(i + 1)){
 digitos_iguais = 0;
 break;
}
}
 if (!digitos_iguais){
 
 numeros = cpf.substring(0,9);
 
 digitos = cpf.substring(9);
 
 soma = 0;
 for (i = 10;i > 1;i--){soma += numeros.charAt(10 - i) * i;}
 resultado = soma % 11 < 2 ? 0 :11 - soma % 11;
 
 if (resultado != digitos.charAt(0)){return false;}
 numeros = cpf.substring(0,10);
 soma = 0;
 for (i = 11;i > 1;i--){soma += numeros.charAt(11 - i) * i;}
 resultado = soma % 11 < 2 ? 0 :11 - soma % 11;
 if (resultado != digitos.charAt(1)){return false;}
 return true;
}else{return false;}
}
 function ValidarCnpj(cnpj){
 
 cnpj = cnpj.replace(/[^\d]+/g,'');
 
 if (cnpj == ''){return false;}
 if (cnpj.length != 14){return false;}
 
 if (cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" || cnpj == "33333333333333" || cnpj == "44444444444444" || cnpj == "55555555555555" || cnpj == "66666666666666" || cnpj == "77777777777777" || cnpj == "88888888888888" || cnpj == "99999999999999"){return false;}
 
 tamanho = cnpj.length - 2;
 numeros = cnpj.substring(0,tamanho);
 digitos = cnpj.substring(tamanho);
 soma = 0;
 pos = tamanho - 7;
 for (i = tamanho;i >= 1;i--){
 soma += numeros.charAt(tamanho - i) * pos--;
 if (pos < 2){pos = 9;}
}
 resultado = soma % 11 < 2 ? 0 :11 - soma % 11;
 if (resultado != digitos.charAt(0)){return false;}
 tamanho = tamanho + 1;
 numeros = cnpj.substring(0,tamanho);
 soma = 0;
 pos = tamanho - 7;
 for (i = tamanho;i >= 1;i--){
 soma += numeros.charAt(tamanho - i) * pos--;
 if (pos < 2){pos = 9;}
}
 resultado = soma % 11 < 2 ? 0 :11 - soma % 11;
 if (resultado != digitos.charAt(1)){return false;}
 return true;
}
window.tempo_tela_obrigado = 500;
const pulseLeadApiUrl = '/api/lead';
function hash(string){
 const utf8 = new TextEncoder().encode(string);
 return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) =>{
 return Array.from(new Uint8Array(hashBuffer)).map((bytes) => bytes.toString(16).padStart(2, '0')).join('');
});
}
function PulseNormalizarTituloFormulario(texto){
 return (texto || '')
 .toString()
 .normalize('NFD')
 .replace(/[\u0300-\u036f]/g, '')
 .replace(/\u00a0/g, ' ')
 .replace(/\*/g, '')
 .replace(/\s+/g, ' ')
 .trim()
 .toLowerCase();
}
function PulseNormalizarValorFormulario(valor){
 if (valor == undefined || valor == null){return '';}
 if (typeof valor == 'string'){return valor.trim();}
 if (Array.isArray(valor)){return valor.filter(item => item != undefined && item != null && item !== '').join(', ');}
 if (typeof valor == 'object'){
 var valores = Object.keys(valor)
 .sort(function(a,b){return Number(a) - Number(b);})
 .map(function(chave){return valor[chave];})
 .filter(function(item){return item != undefined && item != null && item !== '';});
 return valores.join(', ');
 }
 return String(valor).trim();
}
function PulseExtrairLeadFormulario(post){
 var lead = {'nomeCompleto':'', 'email':'', 'telefone':'', 'cidade':''};
 if (!post || !post['campos']){return lead;}
 Object.keys(post['campos']).forEach(function(indice){
 var campo = post['campos'][indice];
 if (!campo || campo['titulo'] == undefined){return;}
 var titulo = PulseNormalizarTituloFormulario(campo['titulo']);
 var valor = PulseNormalizarValorFormulario(campo['valor']);
 if (valor === ''){return;}
 if (titulo == 'nome completo'){lead['nomeCompleto'] = valor;}
 else if (titulo == 'email'){lead['email'] = valor;}
 else if (titulo == 'telefone'){lead['telefone'] = valor;}
 else if (titulo == 'cidades' || titulo == 'cidade'){lead['cidade'] = valor;}
 });
 return lead;
}
async function PulseEnviarLeadParaPlanilha(post){
 if (!pulseLeadApiUrl){return false;}
 var lead = PulseExtrairLeadFormulario(post);
 if (!lead['nomeCompleto'] || !lead['email'] || !lead['telefone'] || !lead['cidade']){return false;}
 try{
 var response = await fetch(pulseLeadApiUrl, {
 'method':'POST',
 'headers':{
 'Content-Type':'application/json'
 },
 'body':JSON.stringify({
 'nomeCompleto':lead['nomeCompleto'],
 'email':lead['email'],
 'telefone':lead['telefone'],
 'cidade':lead['cidade'],
 'origem':'LP Pulse'
 })
 });
 if (!response.ok){
 console.error('Erro ao enviar lead para API local:', response.status);
 return false;
 }
 var responseJson = await response.json();
 return responseJson && responseJson.ok === true;
 }catch (error){
 console.error('Erro ao enviar lead para planilha:', error);
 return false;
 }
}
async function PulseAtualizarConversoesFormulario(post){
 let phone = '';
 let email = '';
 try{
 let regex = /((?:[a-z0-9!#$%&\'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))/m;
 let regex_resultado;
 for (let index in post['campos']){
 let valor_campo = JSON.stringify(post['campos'][index].valor).toLowerCase();
 if ((regex_resultado = regex.exec(valor_campo)) !== null && email == ''){email = await hash(regex_resultado[0]);}
 if (post['campos'][index]?.tipo == 'telefone' && phone == ''){phone = await hash(post['campos'][index].valor);}
 if (email != '' && phone != '') break;
 }
 document.cookie = 'gpages_conversions=' + JSON.stringify({em:email, ph:phone}) + ';path=/;max-age=' + (6 * 30 * 24 * 60 * 60) + ';secure;samesite=Lax';
 }catch (error){console.error('Erro ao processar campos para email/telefone:', error);}
}
function PulseTratarSucessoFormulario(elemento, post, total_campos){
 PulseAtualizarConversoesFormulario(post);
 if(elementos_botoes_evento.hasOwnProperty(elemento.closest('.gpc-e').attr('id'))){elementos_botoes_evento[elemento.closest('.gpc-e').attr('id')]['conteudo']();}
 setTimeout(function(){
 elemento.find('.gpc_campos').each(function(){
 if(!$(this).hasClass('gpc_campos-hidden')){
 if($(this).hasClass('gpc_campos-check') || $(this).hasClass('gpc_campos-radio') || $(this).hasClass('gpc_campos-consentimento_lgpd')){
 $(this).find('input').each(function(campo_atual){
 if($(this).prop('checked')){$(this).prop({'checked':false});}
 });
 }else{$(this).find('.gpc_campo').val('');}
 }
 });
 },800);
 $('.aviso_texto').html((elemento.find('.gpc_botao').attr('gpc-mensagem_parabens') != undefined && elemento.find('.gpc_botao').attr('gpc-mensagem_parabens') != '' ? elemento.find('.gpc_botao').attr('gpc-mensagem_parabens') :"Obrigado!!!"));
 let link_botao = '';
 if(elemento.find('.gpc_botao').attr('gpc-link') != undefined && elemento.find('.gpc_botao').attr('gpc-link') != ''){
 link_botao = (elemento.find('.gpc_botao').attr('gpc-link').substr(0,7) == 'http://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,8) == 'https://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,6) == 'sms://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,6) == 'ftp://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,6) == 'tel://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,7) == 'mailto:' ? elemento.find('.gpc_botao').attr('gpc-link') :'https://'+elemento.find('.gpc_botao').attr('gpc-link'));
 if(tempo_tela_obrigado == 500){
 if(link_botao != '' && link_botao != undefined){tempo_tela_obrigado = 1000;}
 }
 }
 setTimeout(function(){
 $('body').removeClass('body_bloquear');
 $('.aviso_fundo, .aviso_texto').removeClass('mostrar_aviso');
 setTimeout(function(){$('.aviso_fundo, .aviso_texto').remove();},100);
 if(elemento.find('.gpc_botao').attr('gpc-link') != undefined && elemento.find('.gpc_botao').attr('gpc-link') != ''){
 let id_elemento = elemento.closest('.gpc-e').attr('id');
 let link_usar = '';
 try{
 let link_new = new URL(link_botao);
 if(elementos_formulario_redirecionamento.hasOwnProperty(id_elemento)){
 for (var i = 0;i < total_campos;i++){
 let id = post['campos'][i].id;
 if(elementos_formulario_redirecionamento[id_elemento]['conteudo'].hasOwnProperty(id)){
 if(typeof post['campos'][i].valor == 'string'){if(post['campos'][i].valor.substr(0,1) == '"' && post['campos'][i].valor.substr(-1) == '"'){post['campos'][i].valor = post['campos'][i].valor.substr(1,post['campos'][i].valor.length-2);}}
 link_new.searchParams.set(elementos_formulario_redirecionamento[id_elemento]['conteudo'][id],post['campos'][i].valor);
 }
 }
 }
 link_usar = link_new.href;
 }catch (e){
 var link = '';
 if(elementos_formulario_redirecionamento.hasOwnProperty(id_elemento)){
 for (var i = 0;i < total_campos;i++){
 let id = post['campos'][i].id;
 if(elementos_formulario_redirecionamento[id_elemento]['conteudo'][id] != undefined){
 link += elementos_formulario_redirecionamento[id_elemento]['conteudo'][id]+'='+post['campos'][i].valor+'&';
 }
 }
 if(link){link = link.substr(0,(link.length-1));}
 }
 let concatenar = elemento.find('.gpc_botao').attr('gpc-link').indexOf('?') ? '&' :'?';
 link_usar = (elemento.find('.gpc_botao').attr('gpc-link').substr(0,7) == 'http://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,8) == 'https://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,6) == 'sms://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,6) == 'ftp://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,6) == 'tel://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,7) == 'mailto:' ? elemento.find('.gpc_botao').attr('gpc-link') :'https://'+elemento.find('.gpc_botao').attr('gpc-link'))+concatenar+link;
 }
 setTimeout(function(){
 GLoading.carregar({'ativar':false});
 window.location.href = link_usar;
 },150);
 }
 elemento.find('.gpc_botao').css({'pointer-events':''});
 },tempo_tela_obrigado);
}
function PulseTratarErroFormulario(elemento){
 if($('.aviso_fundo').length){
 var html_aviso = 'NÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o foi possÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­vel fazer seu cadastro, tente novamente.';
 $('.aviso_texto').html(html_aviso);
 }else{
 var html_aviso = '<div class="aviso_fundo"></div><div class="aviso_texto">NÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o foi possÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­vel fazer seu cadastro, tente novamente.</div>';
 $('body').addClass('body_bloquear').append(html_aviso);
 $('.aviso_fundo, .aviso_texto').addClass('mostrar_aviso');
 }
 setTimeout(function(){
 $('body').removeClass('body_bloquear');
 $('.aviso_fundo, .aviso_texto').removeClass('mostrar_aviso');
 setTimeout(function(){$('.aviso_fundo, .aviso_texto').remove();},100);
 elemento.find('.gpc_botao').css({'pointer-events':''});
 },4000);
}
function PulseIrParaFormulario(){
 var formulario = document.querySelector('.gpc-e.e_formulario .c.e_formulario');
 if (formulario){
  formulario.scrollIntoView({behavior:'smooth', block:'center'});
 }
}
function PulseConfigurarFaq(){
 document.querySelectorAll('.gpc-e.e_faq .gac-item').forEach(function(item){
  var cabecalho = item.querySelector('.gac-item_cabecalho');
  var conteudo = item.querySelector('.gac-item_conteudo');
  if (!cabecalho || !conteudo || cabecalho.dataset.pulseFaqBound === 'true'){return;}
  cabecalho.dataset.pulseFaqBound = 'true';
  conteudo.style.overflow = 'hidden';
  if (!item.classList.contains('gac-aberto')){conteudo.style.height = '0px';}
  cabecalho.addEventListener('click', function(){
   var aberto = item.classList.contains('gac-aberto');
   if (aberto){
    item.classList.remove('gac-aberto');
    conteudo.style.height = '0px';
   }else{
    item.classList.add('gac-aberto');
    conteudo.style.height = conteudo.scrollHeight + 'px';
   }
  });
 });
}
function PulseConfigurarFormulario(){
 if (document.body.dataset.pulseFormBound === 'true'){return;}
 document.body.dataset.pulseFormBound = 'true';
 document.body.addEventListener('click', function(e){
  var botao = e.target.closest('.gpc-e.e_formulario .gpc_botao.e_formulario');
  if (!botao){return;}
  e.preventDefault();
  var container = botao.closest('.gpc-e.e_formulario');
  var form = (container ? container.querySelector('form.c.e_formulario') : null);
  if (form){EnviarFormulario($(form));}
 });
 document.body.addEventListener('submit', function(e){
  var form = e.target.closest('.gpc-e.e_formulario form.c.e_formulario');
  if (!form){return;}
  e.preventDefault();
  EnviarFormulario($(form));
 }, true);
}
function PulseConfigurarBotoesAssinar(){
 document.querySelectorAll('.gpc-e.e_botao a').forEach(function(link){
  var texto = (link.textContent || '').trim().toLowerCase();
  if (texto === 'assinar' && !link.getAttribute('href') && !link.dataset.pulseBound){
   link.dataset.pulseBound = 'true';
   link.setAttribute('href', '#');
   link.addEventListener('click', function(e){
    e.preventDefault();
    PulseIrParaFormulario();
   });
  }
 });
}
function PulseConfigurarInteracoes(){
 PulseConfigurarFormulario();
 PulseConfigurarFaq();
 PulseConfigurarBotoesAssinar();
}

function PulseValidarLeadFormulario(elemento){
 var nome = ((elemento.find('input[type="text"]').first().val()) || '').trim();
 var email = ((elemento.find('input[type="email"]').first().val()) || '').trim();
 var telefone = '';
 elemento.find('.gpc_campo').each(function(){
  if (!telefone && (($(this).attr('type') == 'text') || $(this).hasClass('telefone') || $(this).hasClass('telefone_ddi'))){
   var valor = ($(this).val() || '').trim();
   if (valor !== '' && valor !== nome){telefone = valor;}
  }
 });
 var cidade = ((elemento.find('select').first().val()) || '').trim();
 if (!nome || !email || !telefone || !cidade){return false;}
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){return false;}
 return true;
}

function EnviarFormulario(elemento){
GLoading.carregar({'ativar':true});

var formulario_validado = PulseValidarLeadFormulario(elemento);

if (formulario_validado){

var html_aviso = '<div class="aviso_fundo"></div><div class="aviso_texto"><div class="aviso_texto_carregando"></div></div>';
$('body').addClass('body_bloquear').append(html_aviso);
$('.aviso_fundo, .aviso_texto').addClass('mostrar_aviso');

elemento.find('.gpc_botao').css({'pointer-events':'none'});
GLoading.carregar({'ativar':false});
var campos = $(elemento).find('.gpc_campos');
var elemento_envio = elemento.closest('.'+pagina_controle['classe_elemento']).attr('id');
if(elemento_envio == undefined || elemento_envio == ''){elemento_envio = elemento.closest('.'+pagina_controle['classe_elemento_antigo']).attr('id');}
var total_campos = 0;
var post ={'campos':{},'elemento':elemento_envio};
campos.each(function(i){
var id = $(this).find('.gpc_campos-titulo label').attr('for');
var titulo = $(this).find('.gpc_campos-titulo label').text();
if(titulo.substr(0,1) == '*'){titulo = titulo.substr(1);}
if($(this).hasClass('gpc_campos-check') || $(this).hasClass('gpc_campos-radio') || $(this).hasClass('gpc_campos-consentimento_lgpd')){
var valor ={};
var posicao = 0;
if($(this).hasClass('gpc_campos-consentimento_lgpd')){
valor = false;
$(this).find('input').each(function(x, campo_atual){valor = $(campo_atual).prop('checked');});
}else if($(this).hasClass('gpc_campos-radio')){
$(this).find('input').each(function(x, campo_atual){if($(campo_atual).prop('checked')){valor = $(this).val().replace(/\*/g, '');}});
}else{
$(this).find('input').each(function(x, campo_atual){
if($(campo_atual).prop('checked')){
valor[posicao] = $(this).val().replace(/\*/g, '');
posicao++;
}
});
}
post['campos'][i] ={'id':id, 'titulo':titulo, 'valor':valor};
}else{
if($(this).find('.gpc_campo').hasClass('telefone')){
post['campos'][i] ={'id':id, 'titulo':titulo, 'valor':$(this).find('.gpc_campo').val(), 'tipo':'telefone'};
}else if($(this).find('.gpc_campo').hasClass('telefone_ddi')){
const countryData = phoneMaskGreat['#'+elemento_envio+'#'+id].getSelectedCountryData();
post['campos'][i] ={'id':id, 'titulo':titulo, 'valor':`+${countryData.dialCode}${$(this).find('.gpc_campo').val()}`, 'tipo':'telefone'};
}else{
post['campos'][i] ={'id':id, 'titulo':titulo, 'valor':$(this).find('.gpc_campo').val()};
}
}
total_campos = i;
});
total_campos +=1;
post['campos'][total_campos] ={'id':'input_referral_source', 'titulo':'Referral source', 'valor':(document.referrer == '' ? 'Acesso direto' :document.referrer)};
total_campos +=1;
post['campos'][total_campos] ={'id':'input_mobile', 'titulo':'Dispositivo', 'valor':(Mobile() ? 'Mobile' :'Desktop')};
total_campos +=1;
post['campos'][total_campos] ={'id':'input_uri', 'titulo':'URL', 'valor':window.location.href};

let random = Math.random().toString();
let IdConversion = 'GPages.'+random.substr(random.length-4)+(new Date()).getTime();
post['eid'] = IdConversion;
post['enav'] = typeof c == 'undefined' ? '' :c;
post['eclid'] = typeof fbclid == 'undefined' ? '' :fbclid;
post['euser'] = typeof u == 'undefined' ? '' :u;

(async function(){
let planilhaEnviada = await PulseEnviarLeadParaPlanilha(post);
if (planilhaEnviada){
PulseTratarSucessoFormulario(elemento, post, total_campos);
}else{
PulseTratarErroFormulario(elemento);
}
})();

return true;
}else{
GLoading.carregar({'ativar':false});
PulseTratarErroFormulario(elemento);
window.scroll({top:0, behavior:'smooth'});
return false;
}
}
$(function(){
 PulseConfigurarInteracoes();
 GSlideImage.iniciar();
 window.addEventListener('resize', function(e){
 
 e.preventDefault();
 e.stopPropagation();
 
 var altura = window.innerHeight, largura = window.innerWidth;
 if(timeout_resize_slider){clearTimeout(timeout_resize_slider);timeout_resize_slider = null;}
 timeout_resize_slider = setTimeout(function(){
 if(altura == window.innerHeight && largura == window.innerWidth){
 let instancias = document.querySelectorAll(".gsi");
 if(instancias){
 for (let i = 0;i < instancias.length;i++){
 if(instancias[i].getAttribute('id') != '' && instancias[i].getAttribute('id') != null && instancias[i].getAttribute('id') != undefined){GSlideImage.imagens(instancias[i].getAttribute('id'),true);}
 else{GSlideImage.iniciar(instancias[i].closest('.c, .conteudo').getAttribute('id'));}
}
}
}
},500);
});
});
var gqa_status = false;
var gqa_fila = [];
var gqa_executando = false;

function ControlarFilaGQA(){
 
 if (gqa_executando){clearTimeout(gqa_executando);}
 
 gqa_executando = setInterval(function(){ExecutarFilaGQA();}, (document.hidden) ? 8000 :100);
}



function AdicionarFilaGQA(parametros){
 
 if (parametros.hasOwnProperty('verbo') == false){parametros.verbo = 'POST';}
 if (parametros.hasOwnProperty('url') == false){return false;}
 if (parametros.hasOwnProperty('uri') == false){parametros.uri = '';}
 else{
 if(typeof parametros.uri == 'object' || typeof parametros.uri == 'array'){
 parametros.uri = FormatarUriGQA(parametros.uri);
}
}
 if (parametros.hasOwnProperty('extensao') == false){parametros.extensao = 'json';}
 if (parametros.hasOwnProperty('prioridade') == false){parametros.prioridade = 'baixa';}
 if (parametros.hasOwnProperty('carregar') == false){parametros.carregar = false;}
 if (parametros.hasOwnProperty('timeout') == false){parametros.timeout = 10000;}
 
 if (parametros.prioridade == 'alta'){
 
 EnviarAjaxGQA(parametros);
}else if (parametros.prioridade == 'media'){
 
 gqa_fila.unshift([parametros]);
}else if (parametros.prioridade == 'baixa'){
 
 gqa_fila.push([parametros]);
}
}
function ExecutarFilaGQA(){
 if (gqa_status == false && gqa_fila.length){
 
 var proximo = gqa_fila.shift();
 
 gqa_status = true;
 
 EnviarAjaxGQA(proximo[0])
}
}
function EnviarAjaxGQA(parametros){
 
 if (parametros.hasOwnProperty('verbo') == false){parametros.verbo = 'POST';}
 if (parametros.hasOwnProperty('url') == false){return false;}
 if (parametros.hasOwnProperty('uri') == false){parametros.uri = '';}
 if (parametros.hasOwnProperty('extensao') == false){parametros.extensao = 'json';}
 if (parametros.hasOwnProperty('prioridade') == false){parametros.prioridade = 'baixa';}
 if (parametros.hasOwnProperty('carregar') == false){parametros.carregar = false;}
 if (parametros.hasOwnProperty('timeout') == false){parametros.timeout = 10000;}
 if (parametros.hasOwnProperty('externo') == false){parametros.externo = false;}
 if (parametros.hasOwnProperty('funcao_erro') == false){parametros.funcao_erro = '';}
 if (parametros.hasOwnProperty('funcao_sucesso') == false){parametros.funcao_sucesso = '';}
 
 if (parametros.carregar == true){GLoading.carregar({'ativar':true});}
 
 if (parametros.verbo == 'POST'){
 var url = parametros.url;
 var dados = parametros.uri;
}else{
 if (parametros.uri){
 var url = parametros.url+'?'+parametros.uri;
}else{var url = parametros.url;}
 var dados = '';
}
 
 var requisicao = new XMLHttpRequest();
 requisicao.open(parametros.verbo, url, true);
 requisicao.timeout = parametros.timeout;
 if (parametros.extensao){requisicao.responseType = parametros.extensao;}
 requisicao.withCredentials = true;
 requisicao.overrideMimeType("application/"+parametros.extensao);
 if (parametros.verbo == 'POST'){
 requisicao.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
}
 if (parametros.externo){
 requisicao.withCredentials = false;
 requisicao.setRequestHeader('Content-Type', "application/json");
 requisicao.setRequestHeader('Access-Control-Allow-Origin', '*');
 requisicao.setRequestHeader('Access-Control-Allow-Headers', "*");
 requisicao.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
}
 requisicao.onreadystatechange = function(){
 if (this.readyState == 4){
 if (this.status >= 200 && this.status < 400){
 
 if (this.responseType == 'json'){
 var resposta = this.response;
}else if (this.responseType == 'text' || this.responseType == ''){
 var resposta = this.responseText;
}else{
 var resposta = this.response;
}
 
 if (parametros.funcao_sucesso){parametros.funcao_sucesso(resposta);}
 
 GLoading.carregar({'ativar':false});
 
 gqa_status = false;
}else{
 
 if (parametros.funcao_erro){parametros.funcao_erro(this);}
 
 GLoading.carregar({'ativar':false});
 
 
 
 gqa_status = false;
}
}
};
 requisicao.send(dados);
 requisicao = null;

 

 
}
function FormatarUriGQA(post, prefixo){
 var retorno = [], post_chave, post_valor;
 for(var p in post){
 if (!post.hasOwnProperty(p)){continue;}
 if (~p.indexOf('[')){post_chave = prefixo ? prefixo + "[" + p.substring(0, p.indexOf('[')) + "]" + p.substring(p.indexOf('[')) :p;}
 else{post_chave = prefixo ? prefixo + "[" + p + "]" :p;}
 post_valor = post[p];
 retorno.push(typeof post_valor == "object" ? FormatarUriGQA(post_valor, post_chave) :encodeURIComponent(post_chave) + "=" + encodeURIComponent(post_valor));
}
 return retorno.join("&");
}
$(function(){
 
 if(document.addEventListener){document.addEventListener("visibilitychange", ControlarFilaGQA);}
 
 ControlarFilaGQA();
});'use strict';

var go_elementos = [];

var GObserver = function(){
 return{
 iniciar :function (){
 
 window.addEventListener('resize', function(){GObserver.observar(true);}, false);
 window.addEventListener('scroll', function(){GObserver.observar(true);}, false);
},
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('elemento') == false){configuracao.elemento = '';}
 if (configuracao.hasOwnProperty('antecipacao') == false){configuracao.antecipacao = 0;}
 if (configuracao.hasOwnProperty('executar') == false){configuracao.executar = '';}
 
 if (configuracao.elemento != ''){
 
 var elementos = document.querySelectorAll(configuracao.elemento);
 
 if (elementos.length){
 for (var i = 0;i < elementos.length;i++){
 if (elementos[i].id){
 
 var instalar ={
 'elemento' :'#'+elementos[i].id,
 'antecipacao' :configuracao.antecipacao,
 'executar' :configuracao.executar
};
 
 go_elementos.push(instalar);
}
}
 
 GObserver.observar(false);
}
}
},
 observar :function(antecipacao){
 
 if (go_elementos.length){
 
 var janela_top = window.scrollY || window.pageYOffset;
 var janela_bottom = janela_top+window.innerHeight;
 for(var i = 0;i < go_elementos.length;i++){
 
 var antecipar = (antecipacao == true ? go_elementos[i].antecipacao :0);
 var elemento = document.querySelector(go_elementos[i].elemento);
 if (elemento !== null && elemento !== undefined){
 var elemento_estilo = window.getComputedStyle(elemento);
 if (elemento_estilo.display !== 'none'){
 var elemento_top = elemento.getBoundingClientRect().top+janela_top;
 var elemento_bottom = elemento_top+elemento.clientHeight;
 
 if (elemento_bottom >= janela_top && (elemento_top-antecipar) <= janela_bottom){
 
 (function(index){go_elementos[index].executar(document.querySelector(go_elementos[index].elemento));})(i);
 
 go_elementos.splice(i, 1);
 
 this.observar(antecipacao);break;
}
}
}
}
}
}
};
}();


GObserver.iniciar();

 elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710679321':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710679321':{'desktop':0, 'mobile':17}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710614872':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710614872':{'desktop':0, 'mobile':17}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710814804':{'fs':'12', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710814804':{'desktop':0, 'mobile':54}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710972759':{'desktop':0, 'mobile':17}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711045097':{'desktop':20, 'mobile':0}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711016805':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711016805':{'desktop':25, 'mobile':0}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711080408':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711080408':{'desktop':25, 'mobile':0}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_72203':{'desktop':29.581, 'mobile':20.3599}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_09632':{'desktop':31.081, 'mobile':20.412}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711025869':{'fs':'16', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711025869':{'desktop':33, 'mobile':0}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710613627':{'fs':'16', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710613627':{'desktop':0, 'mobile':194}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710601243':{'fs':'35', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710601243':{'desktop':0, 'mobile':35}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711035456':{'fs':'22', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711035456':{'desktop':54, 'mobile':355.422}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711044385':{'fs':'35', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711044385':{'desktop':72, 'mobile':-90}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_177211589783226407_d':{'desktop':228, 'mobile':715}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711069407':{'fs':'16', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711069407':{'desktop':264, 'mobile':-90}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710899533':{'fs':'29', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710899533':{'desktop':0, 'mobile':82}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710876421':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710876421':{'desktop':0, 'mobile':244}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710845514':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710845514':{'desktop':0, 'mobile':333}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710839459':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710839459':{'desktop':0, 'mobile':158}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710816851':{'fs':'8', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710816851':{'desktop':0, 'mobile':196}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710910721':{'fs':'10', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710910721':{'desktop':0, 'mobile':678}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711050526':{'fs':'21', 'lh':'1.6761904761905'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711050526':{'desktop':78, 'mobile':-851}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711055668':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711055668':{'desktop':129, 'mobile':-851}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711019266':{'fs':'8', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711019266':{'desktop':205, 'mobile':-851}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_177211589783226407_m':{'desktop':228, 'mobile':715}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711105712':{'desktop':244, 'mobile':372}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711136718':{'fs':'18', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711136718':{'desktop':248.703, 'mobile':274}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711190212':{'fs':'28', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711190212':{'desktop':248.703, 'mobile':380}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711012833':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711012833':{'desktop':265, 'mobile':-851}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711005221':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711005221':{'desktop':301, 'mobile':-851}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711173858':{'desktop':301, 'mobile':266}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711130372':{'fs':'18', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711130372':{'desktop':309, 'mobile':380}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711131841':{'fs':'28', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711131841':{'desktop':309, 'mobile':274}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711199512':{'fs':'8', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711199512':{'desktop':367, 'mobile':-851}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710336478':{'desktop':0, 'mobile':1886}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710913534':{'fs':'10', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710913534':{'desktop':0, 'mobile':2373}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710872553':{'fs':'14', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710872553':{'desktop':0, 'mobile':1015.5}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710896846':{'fs':'23', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710896846':{'desktop':0, 'mobile':892.328}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710846732':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710846732':{'desktop':0, 'mobile':826}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710833526':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710833526':{'desktop':0, 'mobile':806}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710861585':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710861585':{'desktop':0, 'mobile':781}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710883164':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710883164':{'desktop':0, 'mobile':691}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710832768':{'fs':'30', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710832768':{'desktop':0, 'mobile':726}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710808595':{'fs':'14', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710808595':{'desktop':0, 'mobile':602.5}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710836658':{'fs':'23', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710836658':{'desktop':0, 'mobile':481.328}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710837132':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710837132':{'desktop':0, 'mobile':413}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710892784':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710892784':{'desktop':0, 'mobile':393}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710892628':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710892628':{'desktop':0, 'mobile':368}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710817532':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710817532':{'desktop':0, 'mobile':278}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710851598':{'fs':'30', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710851598':{'desktop':0, 'mobile':313}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710986921':{'desktop':0, 'mobile':1071}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710721538':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710721538':{'desktop':0, 'mobile':1194}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710975826':{'desktop':0, 'mobile':1945}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710963592':{'desktop':0, 'mobile':245}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710910614':{'desktop':0, 'mobile':658}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710943248':{'desktop':0, 'mobile':1484}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710905222':{'desktop':0, 'mobile':2205.328125}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710933021':{'desktop':0, 'mobile':872.328125}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710992243':{'desktop':0, 'mobile':2046}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710923737':{'desktop':0, 'mobile':1585}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710922463':{'desktop':0, 'mobile':1744}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710988645':{'desktop':0, 'mobile':1172}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710908088':{'desktop':0, 'mobile':459.328125}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710915928':{'desktop':0, 'mobile':346}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710902948':{'desktop':0, 'mobile':1285.328125}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711089717':{'desktop':0, 'mobile':759}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710884791':{'fs':'30', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710884791':{'desktop':0, 'mobile':1139}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710809883':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710809883':{'desktop':0, 'mobile':1104}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710720167':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710720167':{'desktop':0, 'mobile':1219}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710613381':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710613381':{'desktop':0, 'mobile':2269}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710706311':{'fs':'17', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710706311':{'desktop':0, 'mobile':118}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710775965':{'fs':'30', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710775965':{'desktop':0, 'mobile':36.007}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710688926':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710688926':{'desktop':0, 'mobile':525.328}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710637834':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710637834':{'desktop':0, 'mobile':934.328}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710641363':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710641363':{'desktop':0, 'mobile':1347}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710619689':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710619689':{'desktop':0, 'mobile':1808}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710405544':{'desktop':0, 'mobile':206}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710773847':{'fs':'30', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710773847':{'desktop':0, 'mobile':2013}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710495605':{'desktop':0, 'mobile':599}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710446786':{'desktop':0, 'mobile':599}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710445105':{'desktop':0, 'mobile':1012}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710450738':{'desktop':0, 'mobile':1012}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710434236':{'desktop':0, 'mobile':1425}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710472372':{'desktop':0, 'mobile':1425}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710750685':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710750685':{'desktop':0, 'mobile':1239}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710745094':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710745094':{'desktop':0, 'mobile':1978}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710715331':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710715331':{'desktop':0, 'mobile':2062}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710725795':{'fs':'23', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710725795':{'desktop':0, 'mobile':1763}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710742925':{'fs':'23', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710742925':{'desktop':0, 'mobile':1306}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710792157':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710792157':{'desktop':0, 'mobile':1639}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710736184':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710736184':{'desktop':0, 'mobile':1620}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710735494':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710735494':{'desktop':0, 'mobile':1601}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710787658':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710787658':{'desktop':0, 'mobile':2081}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710748984':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710748984':{'desktop':0, 'mobile':1693}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710764069':{'fs':'14', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710764069':{'desktop':0, 'mobile':1428.5}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710793983':{'fs':'30', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710793983':{'desktop':0, 'mobile':1552}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710717476':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710717476':{'desktop':0, 'mobile':1517}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710741564':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710741564':{'desktop':0, 'mobile':2100}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710758879':{'fs':'14', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710758879':{'desktop':0, 'mobile':1889.5}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710780541':{'fs':'17', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710780541':{'desktop':0, 'mobile':2224}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710707161':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710707161':{'desktop':0, 'mobile':2154}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710326406':{'desktop':0, 'mobile':1886}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_89176':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_89176':{'desktop':20, 'mobile':521.638}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_95011':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_95011':{'desktop':20, 'mobile':1806.01}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_87374':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_87374':{'desktop':20, 'mobile':1346}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_39965':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_39965':{'desktop':20, 'mobile':935.396}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_67581':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_67581':{'desktop':20, 'mobile':2268}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711142537':{'fs':'25', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711142537':{'desktop':45, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711188352':{'fs':'10', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711188352':{'desktop':179, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711374334':{'desktop':264, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711504469':{'desktop':264, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711449323':{'fs':'14', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711449323':{'desktop':267.5, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711554203':{'fs':'14', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711554203':{'desktop':267.5, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711172178':{'desktop':272, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711288072':{'desktop':272, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711463536':{'desktop':272, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711298385':{'desktop':321, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711326624':{'desktop':321, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711461041':{'desktop':321, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711253755':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711253755':{'desktop':356.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711345706':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711345706':{'desktop':356.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711457724':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711457724':{'desktop':356.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711279921':{'fs':'30', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711279921':{'desktop':391.981, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711354974':{'fs':'30', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711354974':{'desktop':391.981, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711432994':{'fs':'30', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711432994':{'desktop':391.932, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711245985':{'desktop':429.875, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711374343':{'desktop':429.875, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711468822':{'desktop':429.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711227327':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711227327':{'desktop':444.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711379356':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711379356':{'desktop':444.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711484477':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711484477':{'desktop':444.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711233382':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711233382':{'desktop':470.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711351626':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711351626':{'desktop':470.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711487123':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711487123':{'desktop':470.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711262209':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711262209':{'desktop':492.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711308173':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711308173':{'desktop':492.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711447138':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711447138':{'desktop':492.875, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711298419':{'desktop':538.875, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711331089':{'desktop':538.875, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711468442':{'desktop':538.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711371625':{'fs':'17', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711371625':{'desktop':562.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711534909':{'fs':'17', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711534909':{'desktop':562.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711204301':{'fs':'17', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711204301':{'desktop':563.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_32582':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_32582':{'desktop':609.875, 'mobile':-1546}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_05688':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_05688':{'desktop':610.037, 'mobile':-1546}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711324322':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711324322':{'desktop':610, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_75206':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_75206':{'desktop':611.875, 'mobile':-1486}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711257542':{'desktop':693, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711435523':{'desktop':693, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711230039':{'fs':'14', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711230039':{'desktop':696.5, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711435641':{'fs':'14', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711435641':{'desktop':696.5, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711262868':{'desktop':701, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711433353':{'desktop':701, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711270847':{'desktop':750, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711450666':{'desktop':750, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711446457':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711446457':{'desktop':785.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711227999':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711227999':{'desktop':786.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711425386':{'fs':'30', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711425386':{'desktop':823.382, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711236276':{'fs':'30', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711236276':{'desktop':824.44, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711234197':{'desktop':858.875, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711433333':{'desktop':858.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711297654':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711297654':{'desktop':882.219, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711469605':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711469605':{'desktop':882.109, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711205157':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711205157':{'desktop':903.219, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711471668':{'fs':'14', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711471668':{'desktop':903.109, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711223084':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711223084':{'desktop':924.219, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711465399':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711465399':{'desktop':924.109, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711234271':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711234271':{'desktop':980.219, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711417215':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711417215':{'desktop':980.109, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711236402':{'desktop':1031.875, 'mobile':-1566}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711445871':{'desktop':1032.875, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711239997':{'fs':'17', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711239997':{'desktop':1054.88, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711426592':{'fs':'17', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711426592':{'desktop':1056.88, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_04676':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_04676':{'desktop':1104.46, 'mobile':-1526}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_26932':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_26932':{'desktop':1107.13, 'mobile':-1506}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711290896':{'fs':'5', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711290896':{'desktop':1227, 'mobile':-1566}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710614418':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710614418':{'desktop':0, 'mobile':188}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710708905':{'fs':'31', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710708905':{'desktop':0, 'mobile':35}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710782885':{'fs':'15', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710782885':{'desktop':0, 'mobile':139}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710869306':{'fs':'15', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710869306':{'desktop':0, 'mobile':108}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711536163':{'fs':'29', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711536163':{'desktop':99, 'mobile':-4004}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711573431':{'fs':'15', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711573431':{'desktop':202, 'mobile':-4004}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711510269':{'fs':'15', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711510269':{'desktop':245, 'mobile':-4004}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711591506':{'fs':'22', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711591506':{'desktop':312, 'mobile':-4004}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710424035':{'desktop':0, 'mobile':109}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710852444':{'fs':'18', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710852444':{'desktop':0, 'mobile':208}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710441828':{'desktop':0, 'mobile':275}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711082313':{'desktop':0, 'mobile':198.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711040864':{'desktop':0, 'mobile':364.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710911246':{'desktop':0, 'mobile':281.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710985723':{'desktop':0, 'mobile':115.5}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710845199':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710845199':{'desktop':0, 'mobile':374}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710875843':{'fs':'18', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710875843':{'desktop':0, 'mobile':291}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710863098':{'fs':'18', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710863098':{'desktop':0, 'mobile':125}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710717606':{'fs':'30', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710717606':{'desktop':0, 'mobile':35}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710528303':{'desktop':0, 'mobile':192}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710474659':{'desktop':0, 'mobile':358}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711507875':{'fs':'24', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711507875':{'desktop':32, 'mobile':-4604}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711540743':{'desktop':121, 'mobile':-4604}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711572594':{'desktop':121, 'mobile':-4604}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711579412':{'desktop':127.5, 'mobile':-4604}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711598667':{'desktop':127.5, 'mobile':-4604}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711558816':{'fs':'18', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711558816':{'desktop':137, 'mobile':-4604}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711524792':{'fs':'18', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711524792':{'desktop':137, 'mobile':-4604}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711552477':{'desktop':207.875, 'mobile':-4604}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711559302':{'desktop':207, 'mobile':-4604}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711555113':{'desktop':213.5, 'mobile':-4604}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711522417':{'desktop':214.375, 'mobile':-4604}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711545566':{'fs':'18', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711545566':{'desktop':223.875, 'mobile':-4604}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711527118':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711527118':{'desktop':223, 'mobile':-4604}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710519732':{'desktop':0, 'mobile':7}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710678534':{'desktop':0, 'mobile':7.5}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710887657':{'fs':'19', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710887657':{'desktop':0, 'mobile':138}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710877552':{'fs':'26', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710877552':{'desktop':0, 'mobile':96}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710910804':{'fs':'33', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710910804':{'desktop':0, 'mobile':56}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711587769':{'desktop':46, 'mobile':-5073}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711514055':{'desktop':46, 'mobile':-5073}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711540865':{'fs':'36', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711540865':{'desktop':96, 'mobile':-5073}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711557933':{'fs':'30', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711557933':{'desktop':138, 'mobile':-5073}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711608484':{'fs':'15', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711608484':{'desktop':203, 'mobile':-5073}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710683256':{'fs':'22', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710683256':{'desktop':0, 'mobile':734.391}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710627935':{'fs':'15', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710627935':{'desktop':0, 'mobile':68}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710797793':{'fs':'26', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710797793':{'desktop':0, 'mobile':35}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711686784':{'fs':'30', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711686784':{'desktop':44, 'mobile':-5591}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711663215':{'fs':'10', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711663215':{'desktop':100, 'mobile':-5591}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176434047186222716':{'fs':'16', 'lh':''}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176434047186222716':{'desktop':262.5, 'mobile':188}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711643082':{'fs':'22', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711643082':{'desktop':738.188, 'mobile':-5591}});blocos_posicao = Object.assign(blocos_posicao,{'b_3427138_1_176433947006952441':{'desktop':816, 'mobile':790.96}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710333578':{'desktop':0, 'mobile':-44.6667}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710556703':{'desktop':0, 'mobile':160}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711043868':{'desktop':0, 'mobile':283.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711020538':{'desktop':0, 'mobile':177.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711071096':{'desktop':0, 'mobile':215.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711091866':{'desktop':0, 'mobile':247.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710953445':{'desktop':0, 'mobile':15}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710827291':{'fs':'10', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710827291':{'desktop':0, 'mobile':282}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710846444':{'fs':'10', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710846444':{'desktop':0, 'mobile':247}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710844224':{'fs':'10', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710844224':{'desktop':0, 'mobile':213}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710803693':{'fs':'10', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710803693':{'desktop':0, 'mobile':182}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710648579':{'fs':'15', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710648579':{'desktop':0, 'mobile':76}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710628953':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710628953':{'desktop':0, 'mobile':284}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710619594':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710619594':{'desktop':0, 'mobile':248}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710609126':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710609126':{'desktop':0, 'mobile':215}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710662644':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710662644':{'desktop':0, 'mobile':178}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710627344':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710627344':{'desktop':0, 'mobile':116.67}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949710651981':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710651981':{'desktop':0, 'mobile':116.688}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710506455':{'desktop':0, 'mobile':280}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710573561':{'desktop':0, 'mobile':244}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710525055':{'desktop':0, 'mobile':212}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949710577435':{'desktop':0, 'mobile':174}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711665377':{'desktop':19, 'mobile':-6492}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711652387':{'desktop':19, 'mobile':-6492}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711626427':{'desktop':26, 'mobile':-6492}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711627927':{'desktop':41, 'mobile':-6492}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711691303':{'desktop':44, 'mobile':-6492}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711736558':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711736558':{'desktop':44, 'mobile':-6492}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711671952':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711671952':{'desktop':45, 'mobile':-6492}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711601119':{'desktop':77, 'mobile':-6492}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711624447':{'desktop':80, 'mobile':-6492}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711769068':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711769068':{'desktop':80, 'mobile':-6492}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711643042':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711643042':{'desktop':83, 'mobile':-6492}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711692381':{'fs':'20', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711692381':{'desktop':106, 'mobile':-6492}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711672469':{'desktop':113, 'mobile':-6492}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711642094':{'desktop':116, 'mobile':-6492}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711702473':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711702473':{'desktop':116, 'mobile':-6492}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711651363':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711651363':{'desktop':118, 'mobile':-6492}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711678402':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711678402':{'desktop':145, 'mobile':-6492}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711643858':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711643858':{'desktop':145, 'mobile':-6492}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711661597':{'desktop':149, 'mobile':-6492}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176434115004185917':{'desktop':150.05, 'mobile':1745}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176434113659021833':{'desktop':152.05, 'mobile':1271}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711633356':{'desktop':152, 'mobile':-6492}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711715934':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711715934':{'desktop':152, 'mobile':-6492}});elementos_css = Object.assign(elementos_css,{'e_3427138_1_176433949711757625':{'fs':'20', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176433949711757625':{'desktop':154, 'mobile':-6492}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176434268456901136':{'desktop':303, 'mobile':120.475}});elementos_posicao = Object.assign(elementos_posicao,{'e_3427138_1_176434269033642316':{'desktop':607.792, 'mobile':120.523}});function InserirScriptsInline(){if(!window.getCrawler()){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);if(typeof window.gtag === 'undefined'){window.gtag = function(){window.dataLayer.push(arguments);}}})(window,document,'script','dataLayer','GTM-WQ74SX7');
}if(!window.getCrawler()){



}
}var scripts_estatisticas ={}, scripts_marketing ={};
