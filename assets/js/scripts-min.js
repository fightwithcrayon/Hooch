!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),window.paceOptions={restartOnRequestAfter:!1,restartOnPushState:!1,eventLag:!1},function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(a){return d=a,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(!(a=document.querySelector(D.target)))throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e;e=[];for(c in b.prototype)try{d=b.prototype[c],e.push(null==a[c]&&"function"!=typeof d?a[c]=d:void 0)}catch(a){a}return e},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(a){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(a){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(a){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if("string"==typeof(b=e[c])){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i;if("socket"===f?e.readyState<2:0<(g=e.readyState)&&4>g){for(j.restart(),h=j.sources,i=[],b=0,c=h.length;c>b;b++){if((K=h[b])instanceof a){K.watch.apply(K,d);break}i.push(void 0)}return i}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g=this;if(this.progress=0,null!=window.ProgressEvent)for(null,a.addEventListener("progress",function(a){return g.progress=a.lengthComputable?100*a.loaded/a.total:g.progress+(100-g.progress)/2},!1),f=["load","abort","timeout","error"],c=0,d=f.length;d>c;c++)b=f[c],a.addEventListener(b,function(){return g.progress=100},!1);else e=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?g.progress=100:3===a.readyState&&(g.progress=50),"function"==typeof e?e.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=3/(a+3)*100},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return Pace.trigger("update"),null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v;for(100-r.progress,e=o=0,f=!0,i=p=0,t=L.length;t>p;i=++p)for(K=L[i],n=null!=H[i]?H[i]:H[i]=[],h=null!=(v=K.elements)?v:[K],k=q=0,u=h.length;u>q;k=++q)g=h[k],l=null!=n[k]?n[k]:n[k]=new m(g),f&=l.done,l.done||(e++,o+=l.tick(b));return d=o/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(a){i=a}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}.call(this);var _extends=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(a,b){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.LazyLoad=b()}(this,function(){"use strict";var a={elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"original",data_srcset:"originalSet",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null},b=!("onscroll"in window)||/glebot/.test(navigator.userAgent),c=function(a,b){a&&a(b)},d=function(a){return a.getBoundingClientRect().top+window.pageYOffset-a.ownerDocument.documentElement.clientTop},e=function(a,b,c){return(b===window?window.innerHeight+window.pageYOffset:d(b)+b.offsetHeight)<=d(a)-c},f=function(a){return a.getBoundingClientRect().left+window.pageXOffset-a.ownerDocument.documentElement.clientLeft},g=function(a,b,c){var d=window.innerWidth;return(b===window?d+window.pageXOffset:f(b)+d)<=f(a)-c},h=function(a,b,c){return(b===window?window.pageYOffset:d(b))>=d(a)+c+a.offsetHeight},i=function(a,b,c){return(b===window?window.pageXOffset:f(b))>=f(a)+c+a.offsetWidth},j=function(a,b,c){return!(e(a,b,c)||h(a,b,c)||g(a,b,c)||i(a,b,c))},k=function(a,b){var c=new a(b),d=new CustomEvent("LazyLoad::Initialized",{detail:{instance:c}});window.dispatchEvent(d)},l=function(a,b){var c=a.parentElement;if("PICTURE"===c.tagName)for(var d=0;d<c.children.length;d++){var e=c.children[d];if("SOURCE"===e.tagName){var f=e.dataset[b];f&&e.setAttribute("srcset",f)}}},m=function(a,b,c){var d=a.tagName,e=a.dataset[c];if("IMG"===d){l(a,b);var f=a.dataset[b];return f&&a.setAttribute("srcset",f),void(e&&a.setAttribute("src",e))}if("IFRAME"===d)return void(e&&a.setAttribute("src",e));e&&(a.style.backgroundImage="url("+e+")")},n=function(b){this._settings=_extends({},a,b),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};n.prototype={_reveal:function(a){var b=this._settings,d=function d(){b&&(a.removeEventListener("load",e),a.removeEventListener("error",d),a.classList.remove(b.class_loading),a.classList.add(b.class_error),c(b.callback_error,a))},e=function e(){b&&(a.classList.remove(b.class_loading),a.classList.add(b.class_loaded),a.removeEventListener("load",e),a.removeEventListener("error",d),c(b.callback_load,a))};"IMG"!==a.tagName&&"IFRAME"!==a.tagName||(a.addEventListener("load",e),a.addEventListener("error",d),a.classList.add(b.class_loading)),m(a,b.data_srcset,b.data_src),c(b.callback_set,a)},_loopThroughElements:function(){var a=this._settings,d=this._elements,e=d?d.length:0,f=void 0,g=[],h=this._isFirstLoop;for(f=0;f<e;f++){var i=d[f];a.skip_invisible&&null===i.offsetParent||(b||j(i,a.container,a.threshold))&&(h&&i.classList.add(a.class_initial),this._reveal(i),g.push(f),i.dataset.wasProcessed=!0)}for(;g.length>0;)d.splice(g.pop(),1),c(a.callback_processed,d.length);0===e&&this._stopScrollHandler(),h&&(this._isFirstLoop=!1)},_purgeElements:function(){var a=this._elements,b=a.length,c=void 0,d=[];for(c=0;c<b;c++)a[c].dataset.wasProcessed&&d.push(c);for(;d.length>0;)a.splice(d.pop(),1)},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},handleScroll:function(){var a=this._settings.throttle;if(0!==a){var b=function(){(new Date).getTime()},c=b(),d=a-(c-this._previousLoopTime);d<=0||d>a?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=c,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=b(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),d))}else this._loopThroughElements()},update:function(){this._elements=Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null}};var o=window.lazyLoadOptions;return o&&function(a,b){var c=b.length;if(c)for(var d=0;d<c;d++)k(a,b[d]);else k(a,b)}(n,o),n}),function(a,b){function c(c){if(void 0===c)throw new Error('Pathformer [constructor]: "element" parameter is required');if(c.constructor===String&&!(c=b.getElementById(c)))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(c.constructor instanceof a.SVGElement||/^svg$/i.test(c.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=c,this.scan(c)}function d(a,b,c){this.isReady=!1,this.setElement(a,b),this.setOptions(b),this.setCallback(c),this.isReady&&this.init()}c.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],c.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],c.prototype.scan=function(a){for(var b,c,d,e,f=a.querySelectorAll(this.TYPES.join(",")),g=0;g<f.length;g++)c=f[g],b=this[c.tagName.toLowerCase()+"ToPath"],d=b(this.parseAttr(c.attributes)),e=this.pathMaker(c,d),c.parentNode.replaceChild(e,c)},c.prototype.lineToPath=function(a){var b={},c=a.x1||0,d=a.y1||0,e=a.x2||0,f=a.y2||0;return b.d="M"+c+","+d+"L"+e+","+f,b},c.prototype.rectToPath=function(a){var b={},c=parseFloat(a.x)||0,d=parseFloat(a.y)||0,e=parseFloat(a.width)||0,f=parseFloat(a.height)||0;return b.d="M"+c+" "+d+" ",b.d+="L"+(c+e)+" "+d+" ",b.d+="L"+(c+e)+" "+(d+f)+" ",b.d+="L"+c+" "+(d+f)+" Z",b},c.prototype.polylineToPath=function(a){var b,c,d={},e=a.points.trim().split(" ");if(-1===a.points.indexOf(",")){var f=[];for(b=0;b<e.length;b+=2)f.push(e[b]+","+e[b+1]);e=f}for(c="M"+e[0],b=1;b<e.length;b++)-1!==e[b].indexOf(",")&&(c+="L"+e[b]);return d.d=c,d},c.prototype.polygonToPath=function(a){var b=c.prototype.polylineToPath(a);return b.d+="Z",b},c.prototype.ellipseToPath=function(a){var b={},c=parseFloat(a.rx)||0,d=parseFloat(a.ry)||0,e=parseFloat(a.cx)||0,f=parseFloat(a.cy)||0,g=e-c,h=f,i=parseFloat(e)+parseFloat(c),j=f;return b.d="M"+g+","+h+"A"+c+","+d+" 0,1,1 "+i+","+j+"A"+c+","+d+" 0,1,1 "+g+","+j,b},c.prototype.circleToPath=function(a){var b={},c=parseFloat(a.r)||0,d=parseFloat(a.cx)||0,e=parseFloat(a.cy)||0,f=d-c,g=e,h=parseFloat(d)+parseFloat(c),i=e;return b.d="M"+f+","+g+"A"+c+","+c+" 0,1,1 "+h+","+i+"A"+c+","+c+" 0,1,1 "+f+","+i,b},c.prototype.pathMaker=function(a,c){var d,e,f=b.createElementNS("http://www.w3.org/2000/svg","path");for(d=0;d<a.attributes.length;d++)e=a.attributes[d],-1===this.ATTR_WATCH.indexOf(e.name)&&f.setAttribute(e.name,e.value);for(d in c)f.setAttribute(d,c[d]);return f},c.prototype.parseAttr=function(a){for(var b,c={},d=0;d<a.length;d++){if(b=a[d],-1!==this.ATTR_WATCH.indexOf(b.name)&&-1!==b.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");c[b.name]=b.value}return c};var e,f,g;d.LINEAR=function(a){return a},d.EASE=function(a){return-Math.cos(a*Math.PI)/2+.5},d.EASE_OUT=function(a){return 1-Math.pow(1-a,3)},d.EASE_IN=function(a){return Math.pow(a,3)},d.EASE_OUT_BOUNCE=function(a){var b=1-Math.cos(.5*a*Math.PI),c=Math.pow(b,1.5),d=Math.pow(1-a,2);return 1-d+(1-Math.abs(Math.cos(2.5*c*Math.PI)))*d},d.prototype.setElement=function(c,d){if(void 0===c)throw new Error('Vivus [constructor]: "element" parameter is required');if(c.constructor===String&&!(c=b.getElementById(c)))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=c,d&&d.file){var e=b.createElement("object");e.setAttribute("type","image/svg+xml"),e.setAttribute("data",d.file),e.setAttribute("built-by-vivus","true"),c.appendChild(e),c=e}switch(c.constructor){case a.SVGSVGElement:case a.SVGElement:this.el=c,this.isReady=!0;break;case a.HTMLObjectElement:var f,g;g=this,(f=function(a){if(!g.isReady){if(g.el=c.contentDocument&&c.contentDocument.querySelector("svg"),!g.el&&a)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");return g.el?(c.getAttribute("built-by-vivus")&&(g.parentEl.insertBefore(g.el,c),g.parentEl.removeChild(c),g.el.setAttribute("width","100%"),g.el.setAttribute("height","100%")),g.isReady=!0,g.init(),!0):void 0}})()||c.addEventListener("load",f);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},d.prototype.setOptions=function(b){var c=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],e=["inViewport","manual","autostart"];if(void 0!==b&&b.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(b=b||{},b.type&&-1===c.indexOf(b.type))throw new Error("Vivus [constructor]: "+b.type+" is not an existing animation `type`");if(this.type=b.type||c[0],b.start&&-1===e.indexOf(b.start))throw new Error("Vivus [constructor]: "+b.start+" is not an existing `start` option");if(this.start=b.start||e[0],this.isIE=-1!==a.navigator.userAgent.indexOf("MSIE")||-1!==a.navigator.userAgent.indexOf("Trident/")||-1!==a.navigator.userAgent.indexOf("Edge/"),this.duration=g(b.duration,120),this.delay=g(b.delay,null),this.dashGap=g(b.dashGap,1),this.forceRender=b.hasOwnProperty("forceRender")?!!b.forceRender:this.isIE,this.reverseStack=!!b.reverseStack,this.selfDestroy=!!b.selfDestroy,this.onReady=b.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=!!b.hasOwnProperty("ignoreInvisible")&&!!b.ignoreInvisible,this.animTimingFunction=b.animTimingFunction||d.LINEAR,this.pathTimingFunction=b.pathTimingFunction||d.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},d.prototype.setCallback=function(a){if(a&&a.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=a||function(){}},d.prototype.mapping=function(){var b,c,d,e,f,h,i,j;for(j=h=i=0,c=this.el.querySelectorAll("path"),b=0;b<c.length;b++)d=c[b],this.isInvisible(d)||(f={el:d,length:Math.ceil(d.getTotalLength())},isNaN(f.length)?a.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",d):(this.map.push(f),d.style.strokeDasharray=f.length+" "+(f.length+2*this.dashGap),d.style.strokeDashoffset=f.length+this.dashGap,f.length+=this.dashGap,h+=f.length,this.renderPath(b)));for(h=0===h?1:h,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(c.length>1?c.length-1:1),this.reverseStack&&this.map.reverse(),b=0;b<this.map.length;b++){switch(f=this.map[b],this.type){case"delayed":f.startAt=this.delayUnit*b,f.duration=this.duration-this.delay;break;case"oneByOne":f.startAt=i/h*this.duration,f.duration=f.length/h*this.duration;break;case"sync":case"async":case"nsync":f.startAt=0,f.duration=this.duration;break;case"scenario-sync":d=f.el,e=this.parseAttr(d),f.startAt=j+(g(e["data-delay"],this.delayUnit)||0),f.duration=g(e["data-duration"],this.duration),j=void 0!==e["data-async"]?f.startAt:f.startAt+f.duration,this.frameLength=Math.max(this.frameLength,f.startAt+f.duration);break;case"scenario":d=f.el,e=this.parseAttr(d),f.startAt=g(e["data-start"],this.delayUnit)||0,f.duration=g(e["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,f.startAt+f.duration)}i+=f.length,this.frameLength=this.frameLength||this.duration}},d.prototype.drawer=function(){var a=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),void(this.handle=e(function(){a.drawer()}));this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},d.prototype.trace=function(){var a,b,c,d;for(d=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,a=0;a<this.map.length;a++)c=this.map[a],b=(d-c.startAt)/c.duration,b=this.pathTimingFunction(Math.max(0,Math.min(1,b))),c.progress!==b&&(c.progress=b,c.el.style.strokeDashoffset=Math.floor(c.length*(1-b)),this.renderPath(a))},d.prototype.renderPath=function(a){if(this.forceRender&&this.map&&this.map[a]){var b=this.map[a],c=b.el.cloneNode(!0);b.el.parentNode.replaceChild(c,b.el),b.el=c}},d.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new c(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},d.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var b=this,c=function(){b.isInViewport(b.parentEl,1)&&(b.play(),a.removeEventListener("scroll",c))};a.addEventListener("scroll",c),c()}},d.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},d.prototype.reset=function(){return this.setFrameProgress(0)},d.prototype.finish=function(){return this.setFrameProgress(1)},d.prototype.setFrameProgress=function(a){return a=Math.min(1,Math.max(0,a)),this.currentFrame=Math.round(this.frameLength*a),this.trace(),this},d.prototype.play=function(a,b){if(this.instanceCallback=null,a&&"function"==typeof a)this.instanceCallback=a,a=null;else if(a&&"number"!=typeof a)throw new Error("Vivus [play]: invalid speed");return b&&"function"==typeof b&&!this.instanceCallback&&(this.instanceCallback=b),this.speed=a||1,this.handle||this.drawer(),this},d.prototype.stop=function(){return this.handle&&(f(this.handle),this.handle=null),this},d.prototype.destroy=function(){this.stop();var a,b;for(a=0;a<this.map.length;a++)b=this.map[a],b.el.style.strokeDashoffset=null,b.el.style.strokeDasharray=null,this.renderPath(a)},d.prototype.isInvisible=function(a){var b,c=a.getAttribute("data-ignore");return null!==c?"false"!==c:!!this.ignoreInvisible&&(b=a.getBoundingClientRect(),!b.width&&!b.height)},d.prototype.parseAttr=function(a){var b,c={};if(a&&a.attributes)for(var d=0;d<a.attributes.length;d++)b=a.attributes[d],c[b.name]=b.value;return c},d.prototype.isInViewport=function(a,b){var c=this.scrollY(),d=c+this.getViewportH(),e=a.getBoundingClientRect(),f=e.height,g=c+e.top,h=g+f;return b=b||0,d>=g+f*b&&h>=c},d.prototype.docElem=a.document.documentElement,d.prototype.getViewportH=function(){var b=this.docElem.clientHeight,c=a.innerHeight;return c>b?c:b},d.prototype.scrollY=function(){return a.pageYOffset||this.docElem.scrollTop},e=function(){return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(b){return a.setTimeout(b,1e3/60)}}(),f=function(){return a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||function(b){return a.clearTimeout(b)}}(),g=function(a,b){var c=parseInt(a,10);return c>=0?c:b},"function"==typeof define&&define.amd?define([],function(){return d}):"object"==typeof exports?module.exports=d:a.Vivus=d}(window,document);var VivusHoola,myLazyLoad=new LazyLoad;!function(a){function b(){var b=a(window).scrollTop();2===h&&b>=g.three||3===h&&b<=g.three?(console.log("Triggered section "+h),a("#lemon-bg path").each(function(b){a(this).css({"transition-delay":.5+.01*b+"s"})}),lemon_slot.addClass("animate"),h=2===h?3:2,console.log("Now on section "+h)):3===h&&b>=g.four||4===h&&b<=g.four?(console.log("Triggered section "+h),hoochlife_bg.toggle(),VivusHoola.play(),hoola_slot.addClass("animate"),h=3===h?4:3,console.log("Now on section "+h)):(4===h&&b>=g.five||5===h&&b<=g.five)&&(console.log("Triggered section "+h),a(f).toggleClass("fixed"),h=4===h?5:4,console.log("Now on section "+h))}function c(){d=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,hoochlife_bg=a("#hoochlife").children(".fixed-backdrop"),liquidgold=a("#liquidgold"),f=a("#whatson"),lemon_slot=a("#lemon-slot"),hoola_slot=a("#hoola-slot"),g={two:liquidgold.offset().top,three:hoola_slot.offset().top-1.5*e,four:f.offset().top-1.5*e,five:f.offset().top+f.outerHeight(!0)-e},h=2,console.log(g)}var d,e,f,g,h;if(d=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,console.log("What"),d>=768){var i=document.querySelectorAll("video.background-video source"),j=document.querySelector("video.background-video");console.log("run");for(var k=0;k<i.length;k++)console.log("Touch video "+k),i[k].setAttribute("src",i[k].getAttribute("data-src"));j.load()}VivusHoola=new Vivus("hoola-bg",{duration:100,file:"/wp-content/themes/hooch/assets/svg/Hoola-bg.svg",pathTimingFunction:Vivus.EASE_OUT_BOUNCE},function(a){a.parentEl.classList.add("finished")}),a('.finder input[type="submit"]').on("click",function(){alert("Error: awaiting database")}),document.addEventListener("touchmove",b,{capture:!0}),document.addEventListener("scroll",b,{capture:!0}),a(".mobile-menu").click(function(){return a("#mobile-nav").toggleClass("active"),!1}),a("#mobile-nav a:not(.mobile-menu)").click(function(){a("#mobile-nav").toggleClass("active")}),Pace.on("done",function(){document.documentElement.className=document.documentElement.className.replace(/\bintro\b/,""),c()})}(jQuery);