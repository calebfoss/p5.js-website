/* p5js.org */
!function(a,b){var c=b.getElementById("search_form"),d=b.getElementById("search_field"),e=function(){c.className="form__open",d.focus()},f=function(a){"focusout"===a.type?c.className="":""===d.value&&(c.className="")};c.addEventListener?(c.addEventListener("mouseover",e,!1),c.addEventListener("mouseout",f,!1),c.addEventListener("focusout",f,!1)):(c.attachEvent("onmouseover",e),c.attachEvent("onmouseout",f),c.attachEvent("onfocusout",f))}(window,document),function(a,b,c){var d=function(a){var b="p5js";try{return a.localStorage.setItem(b,b),a.localStorage.removeItem(b),!0}catch(a){return!1}},e=d(a),f=function(a){var b=a.navigator.languages&&a.navigator.languages[0]||a.navigator.language||a.navigator.userLanguage;b=b.split("-")[0];for(var d=0,e=c;d<e;d++)if(b==c[d])return c[d];return"en"},g=f(a),h=function(a){if("/"==a.location.pathname==!1)for(var b=0,d=c.length;b<d;b++)if(a.location.pathname.indexOf("/"+c[b]+"/")!==-1)return c[b];return"en"},i=String(a.location.pathname),j=h(a),k="/"==a.location.pathname,l="en";if(e)if(null!==a.localStorage.getItem("lang")){var m=a.localStorage.getItem("lang");m!==j?(i="en"==m?"/"+i.replace("/"+j+"/",""):"/"+m+i,a.location=i):l=m}else k&&g!=j&&(i="/"+g,a.location=i);else l=h();a.lang=l;var n=b.getElementsByClassName("js-lang"),o=null;if("en"!=a.lang)for(var p=0,q=n.length;p<q;p++)o=n[p],o.innerHTML=o.getAttribute("data-"+a.lang);for(var r=b.getElementById("i18n-btn").getElementsByTagName("button"),s="undefined"!=typeof b.addEventListener?"click":"onclick",t=function(b){var d=this.getAttribute("data-lang");if("en"==d)for(var f=0,g=c.length;f<g;f++)"en"!=c[f]&&(i="/"+i.replace("/"+c[f]+"/",""));else i="/"+d+i;e&&a.localStorage.setItem("lang",d),a.location=i},p=0,q=r.length;p<q;p++){var u=r[p].getAttribute("data-lang");j==u?r[p].setAttribute("disabled","disabled"):"click"===s?r[p].addEventListener(s,t,!1):r[p].attachEvent(s,t)}}(window,document,["en","es"]),function(a,b,c,d,e){var f=a.location.pathname.split("/").filter(function(a){return""!==a}),g=function(a){for(var c=0,d=a.length;c<d;c++){var e=b.createElement("script");e.setAttribute("src",a[c]),e.setAttribute("type","text/javascript"),b.getElementsByTagName("body")[0].appendChild(e)}},h=function(){g(d),a.addEventListener("load",function(){g(e)},!0)};if(f.length>1)h();else if(1==f.length)for(var i=0,j=c.length;i<j;i++)if("en"!=c[i]&&f[0]!=c[i]){h();break}}(window,document,["en","es"],["/assets/js/p5.all.js"],["/assets/js/all.js"]),window.addEventListener("load",function(){!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-53383000-1","auto"),ga("send","pageview");var a,b=window.location.pathname;if(a="/"===b?"":b.indexOf("download")!==-1?"Processing fun times JavaScript quirkiness":b.indexOf("get")!==-1?"Processing simplicity times JavaScript flexibility":b.indexOf("reference")!==-1||b.indexOf("libraries")!==-1?"Processing intuition times JavaScript power":b.indexOf("learn")!==-1?"Processing creativity times JavaScript dynamism":b.indexOf("community")!==-1?"Processing community times JavaScript community":"the power of Processing times the reach of JavaScript"){var c=document.getElementById("tagline");c.innerHTML=a}if("p5js.org"===window.location.hostname){var d=document.getElementById("i18n-btn");d.parentNode.removeChild(d)}});
//# sourceMappingURL=maps/init.js.map