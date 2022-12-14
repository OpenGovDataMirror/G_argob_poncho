"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function cleanner(e,t){void 0!==_typeof(t)&&"object"===_typeof(t)||(t=[]);var a=["html","body","div","span","applet","object","iframe","h1","h2","h3","h4","h5","h6","p","blockquote","pre","a","abbr","acronym","address","big","cite","code","del","dfn","em","img","ins","kbd","q","s","samp","small","strike","strong","sub","sup","tt","var","b","u","i","center","dl","dt","dd","ol","ul","li","fieldset","form","label","legend","table","caption","tbody","tfoot","thead","tr","th","td","article","aside","canvas","details","embed","figure","figcaption","footer","header","hgroup","menu","nav","output","ruby","section","summary","time","mark","audio","video","button"],n=(a.forEach(function(e,n){t.includes(e)&&a.splice(n,1)}),new RegExp("<\\/?("+a.join("|")+")(?![a-z])[^>]*>","gmi"));return e.replace(n,"")}var classlist=function(e,n){var t=[];return e&&e[n].split(".").forEach(function(e){e&&t.push(e)}),0<t.length?t.join(" "):""},target=function(e){var n=new RegExp(/(\[(.*?)\]\(((blank):#)([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ]*)\))/,"gmi");return e=e.replace(n,'<a href="$5" target="_$4">$2</a>')};showdown&&(showdown.extension("bootstrap-tables",function(){return[{type:"output",filter:function(e,n,t){e=jQuery("<div></div>").html(e);return jQuery("table",e).each(function(){jQuery(this).addClass("table table-bordered").wrap('<div class="class table-responsive"></div>')}),e.html()}}]}),showdown.extension("images",function(){return[{type:"lang",filter:function(e,n,t){var a=/\!\[([^\[\]]{0,255})\]\(([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ\s]{1,255})\)\{([\w\.-]+)\}/,r=new RegExp(a,"gm");return e=e.replace(r,function(e){var e=new RegExp(a,"gm").exec(e),n=document.createElement("img");return n.src=e[2],n.className=classlist(e,3),n.alt=e[1],n.outerHTML})}}]}),showdown.extension("target",function(){return[{type:"lang",filter:function(e,n,t){var a=new RegExp(/(\[(.*?)\]\(((blank):#)([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ]*)\))/,"gmi");return e=e.replace(a,target)}}]}),showdown.extension("button",function(){return[{type:"lang",filter:function(e,n,t){var a=/(\[([^\[\]]+)\]\((blank:#)?([a-zA-Z0-9\_\.\-\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#]+)\)\{([\w_\-.]+?)\})/gm,r=new RegExp(a,"gmi");return e=e.replace(r,function(e){var e=new RegExp(a,"gm").exec(e),n=document.createElement("a");return n.href=e[4],e[3]&&(n.target="_blank"),null!=e[5]&&(n.className=classlist(e,5)),n.textContent=e[2],n.dataset.created="true",n.outerHTML})}}]}),showdown.extension("video",function(){return[{type:"lang",filter:function(e,n,t){var r=/\[\[(youtube|vimeo)-\{(16by9|4by3)\}-\{([a-zA-Z0-9]+)\}\]\]/,a=new RegExp(r,"gm");return e=e.replace(a,function(e){var n,t,a,e=new RegExp(r,"gm").exec(e);return e&&(n=e[2],t=e[3],a="","vimeo"==e[1]?a='<div \n                        class="embed-responsive embed-responsive-'.concat(n,'">\n                      <iframe\n                          width=""\n                          height=""\n                          src="https://player.vimeo.com/video/').concat(t,'"\n                          frameborder="0"\n                          webkitallowfullscreen=""\n                          mozallowfullscreen=""\n                          allowfullscreen=""\n                          data-gtm-yt-inspected-1807370_332="true" \n                          data-gtm-yt-inspected-1807370_380="true" \n                          data-gtm-yt-inspected-1807370_518="true" \n                          data-gtm-yt-inspected-1807370_611="true" \n                          data-gtm-yt-inspected-1807370_618="true">\n                      </iframe>\n                    </div>'):"youtube"==e[1]&&(a='<div \n                        class="embed-responsive embed-responsive-'.concat(n,'">\n                      <iframe\n                          src="https://www.youtube.com/embed/').concat(t,'?enablejsapi=1&amp;origin=https%3A%2F%2Fwww.argentina.gob.ar" \n                          allowfullscreen="" \n                          data-gtm-yt-inspected-1807370_332="true" \n                          id="957974559" \n                          data-gtm-yt-inspected-1807370_380="true" \n                          data-gtm-yt-inspected-1807370_518="true" \n                          data-gtm-yt-inspected-1807370_611="true" \n                          data-gtm-yt-inspected-1807370_618="true">\n                      </iframe>\n                    </div>'))),a})}}]}),showdown.extension("alerts",function(){return[{type:"lang",filter:function(e,r,n){var o=/\[\[alerta-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([\w-\s]*?)\}-\{(warning|danger|info|success)\}\]\]/,t=new RegExp(o,"gm");return e=e.replace(t,function(e){var n,t,a,e=new RegExp(o,"gm").exec(e);return e&&(a=e[4],n=e[3],t=r.makeHtml(e[1]),e=r.makeHtml(e[2]),a='<div class="alert alert-'.concat(a,'">\n                    <div class="media">\n                      <div class="media-left">\n                        <i class="fa ').concat(n,' fa-fw fa-4x"></i>\n                      </div>\n                      <div class="media-body">\n                        <h5></h5>\n                        <h5>').concat(t,'</h5>\n                        <p class="margin-0"></p>\n                        <p>').concat(e,"</p>\n                        <p></p>\n                      </div>\n                    </div>\n                  </div>")),a})}}]}),showdown.extension("ejes",function(){return[{type:"lang",filter:function(e,n,t){var a=/(col([1-4])<<)[\s\S]*?\[\[ejes-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}\]\][\s\S]*?(>>)/,r=new RegExp(a,"gmi");return e=e.replace(r,function(e){var e=new RegExp(a,"gmi").exec(e),n={2:"6",3:"4",4:"3",1:"12"};return'<div class="col-xs-12 col-sm-'.concat(n[e[2]]," col-md-").concat(n[e[2]],'">\n              <div class="icon-item">\n                <i class="').concat(e[5]," ").concat(e[6],'"></i>\n                <p></p>\n                <h3>').concat(e[3],"</h3>\n                <p>").concat(e[4],"</p>\n              </div>\n              </div>")})}}]}),showdown.extension("numbers",function(){return[{type:"lang",filter:function(e,n,t){var a=/(col([1-4])<<)[\s\S]*?\[\[numeros-\{([^\{\}-]*?)-([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}\]\][\s\S]*?(>>)/,r=new RegExp(a,"gmi");return e=e.replace(r,function(e){var e=new RegExp(a,"gmi").exec(e),n={2:"6",3:"4",4:"3",1:"12"};return'<div class="col-xs-12 col-sm-'.concat(n[e[2]]," col-md-").concat(n[e[2]],'">\n                <div class="h2 ').concat(e[7],'">\n                  ').concat(e[3],"<small>").concat(e[4],'</small>\n                </div>\n                <p class="lead">').concat(e[5],'</p>\n                <p class="text-muted">').concat(e[6],"</p>\n              </div>")})}}]}),showdown.extension("details",function(){return[{type:"lang",filter:function(e,r,n){var o=/^\[\[details(-open|-close)?\s?\{\[([\s\S]*?)\]\[([\s\S]*?)\]\}\]\]$/gm,t=new RegExp(o,"gmi");return e=e.replace(t,function(e){var e=new RegExp(o,"gmi").exec(e),n="-open"==e[1]&&"true",t=document.createElement("details"),n=(n&&t.setAttribute("open","true"),document.createElement("summary")),a=(n.innerHTML=cleanner(r.makeHtml(e[2]),["h1","h2","h3","h4","h5","h6","strong","em","i"]),document.createElement("div"));return a.innerHTML=r.makeHtml(e[3]),t.appendChild(n),t.appendChild(a),t.outerHTML})}}]}));