(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3Djf":function(t,e,r){"use strict";r.d(e,"a",function(){return _});var o=r("mrSG"),i=r("AytR"),s=r("fXoL"),n=r("TEn/"),a=r("L8EE"),h=r("DPnb"),c=r("ofXK");function l(t,e){if(1&t){const t=s.Qb();s.Pb(0,"ion-button",7),s.Xb("click",function(){return s.mc(t),s.bc().closeModal()}),s.rc(1," Cancelar "),s.Ob()}}let u=(()=>{class t{constructor(t,e,r){this.ngZone=t,this._modal=e,this._comp=r,this.buttonConfim="",this.textTitle="",this.subtitle="",this.type=""}ngOnInit(){}animationCreated(t){this.animationItem=t,setTimeout(()=>{this.pause()},1500)}stop(){this.ngZone.runOutsideAngular(()=>this.animationItem.stop())}play(){this.ngZone.runOutsideAngular(()=>this.animationItem.play())}pause(){this.ngZone.runOutsideAngular(()=>this.animationItem.pause())}closeModal(){this._modal.dismiss()}confirm(){this._modal.dismiss({confirm:!0})}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(s.B),s.Kb(n.H),s.Kb(a.a))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-alert"]],decls:11,vars:5,consts:[["id","svg",1,"svg","hide"],[3,"options","animationCreated","complete"],[2,"text-align","center","position","absolute","top","45%","width","100%"],[2,"font-size","25px","color","#595959","font-weight","600","margin-bottom","0"],[2,"margin-top","5px","color","#5f5f5f","font-size","16px","margin-left","20px","margin-right","20px"],[1,"button-02",2,"--border-radius","5px","font-size","14px","--background","#2778c4","height","40px","text-transform","initial","font-weight","500",3,"click"],["class","button-02","style","--border-radius: 5px;font-size: 14px;--background: rgb(221, 51, 51);height: 40px;font-weight: 500;",3,"click",4,"ngIf"],[1,"button-02",2,"--border-radius","5px","font-size","14px","--background","rgb(221, 51, 51)","height","40px","font-weight","500",3,"click"]],template:function(t,e){1&t&&(s.Pb(0,"ion-content"),s.Pb(1,"div",0),s.Pb(2,"ng-lottie",1),s.Xb("animationCreated",function(t){return e.animationCreated(t)})("complete",function(){return e.stop()}),s.Ob(),s.Ob(),s.Pb(3,"div",2),s.Pb(4,"p",3),s.rc(5),s.Ob(),s.Pb(6,"p",4),s.rc(7),s.Ob(),s.Pb(8,"ion-button",5),s.Xb("click",function(){return"alert"!=e.type?e.closeModal():e.confirm()}),s.rc(9),s.Ob(),s.qc(10,l,2,0,"ion-button",6),s.Ob(),s.Ob()),2&t&&(s.zb(2),s.hc("options",e.options),s.zb(3),s.sc(e.textTitle),s.zb(2),s.sc(e.subtitle),s.zb(2),s.tc(" ",e.buttonConfim," "),s.zb(1),s.hc("ngIf","alert"==e.type))},directives:[n.h,h.a,n.e,c.l],styles:[".svg[_ngcontent-%COMP%]{width:18%;margin:40px auto 20px}"]}),t})();var d=r("3Pt+"),f=r("bCcq"),p=r("GtMO");let _=(()=>{class t{constructor(t,e,r){this._apiMongo=t,this._modal=e,this._comp=r,this.months=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],this.configInput={name:{long:32}},this.validatorkey=d.o.compose([d.o.pattern("^[a-zA-Z_][a-zA-Z0-9_]+$"),d.o.maxLength(this.configInput.name.long),d.o.required])}alert(t,e,r,i,s){return Object(o.a)(this,void 0,void 0,function*(){if(!this.isUndefined(s))return!0;let n={path:"/assets/json/"+t+".json",loop:!0,autoplay:!0};return new Promise(s=>Object(o.a)(this,void 0,void 0,function*(){const a=yield this._modal.create({component:u,cssClass:"style-alert",componentProps:{type:t,textTitle:r,subtitle:i,buttonConfim:e,options:n}});return a.onDidDismiss().then(t=>Object(o.a)(this,void 0,void 0,function*(){s(t.data)})),yield a.present()}))})}getTime(t){let e=Math.floor(t%1e3/100),r=Math.floor(t/1e3%60),o=Math.floor(t/6e4%60),i=Math.floor(t/36e5%24);return i=i>1?i+" horas":1==i?i+" hora":"",o=o>1?o+" minutos":1==o?o+" minuto":"",r=r>1?r+" segundos":1==r?r+" segundo":"",{hours:i,minutes:o,seconds:r,milliseconds:e}}alertError(t){return Object(o.a)(this,void 0,void 0,function*(){let e=t;this.isVarInvalid(t.message)||(e=t.message),yield this.alert(i.a.MSG.TYPE_ERROR,"ok",i.a.MSG.ERROR_TITLE,e)})}alertGen(t,e){return Object(o.a)(this,void 0,void 0,function*(){return yield this.alert(i.a.MSG.TYPE_ALERT,t,i.a.MSG.ALERT_TITLE,e)})}alertChangStatus(t){return Object(o.a)(this,void 0,void 0,function*(){let e="Si, deshabilitar",r=i.a.MSG.ALERT_DISABLED;return t&&(e="Si, habilitar",r=i.a.MSG.ALERT_ENABLED),yield this.alert(i.a.MSG.TYPE_ALERT,e,i.a.MSG.ALERT_TITLE,r)})}timeStamp(){return(new Date).getTime()}alertChangMaster(t,e){return Object(o.a)(this,void 0,void 0,function*(){let r="Si, quitar",o=i.a.MSG.ALERT_REMOVE_MASTER;return t||(r="Si, habilitar",o=i.a.MSG.ALERT_ENABLED_MASTER),yield this.alert(i.a.MSG.TYPE_ALERT,r,i.a.MSG.ALERT_TITLE,o+e)})}alertDelete(){return Object(o.a)(this,void 0,void 0,function*(){return yield this.alert(i.a.MSG.TYPE_ALERT,"Si, eliminar",i.a.MSG.ALERT_TITLE,i.a.MSG.ALERT_DELETE)})}alertSave(t){return Object(o.a)(this,void 0,void 0,function*(){let e="Si, crear",r=i.a.MSG.ALERT_CREATE;return t&&(e="Si, actualizar",r=i.a.MSG.ALERT_UPDATE),yield this.alert(i.a.MSG.TYPE_ALERT,e,i.a.MSG.ALERT_TITLE,r)})}alertSucc(t){return Object(o.a)(this,void 0,void 0,function*(){return yield this.alert(i.a.MSG.TYPE_SUC," Ok ",i.a.MSG.ALERT_TITLE,t)})}isUndefined(t){return null==t}isVarInvalid(t){return("string"==typeof t||t instanceof String)&&(t=t.trim()),null==t||null==t||"undefined"==t||"null"==t||""==t}isInvalidResApi(t){return 200!=t&&"200"!=t}isEmpty(...t){let e=!0;for(let r=0;r<t.length;r++){if(Array.isArray(t[r])){0!=t[r].length&&(e=!1);break}if(this.isVarInvalid(t[r])){e=!1;break}}return e}strToJson(t){try{return this.isVarInvalid(t)?{}:JSON.parse(t)}catch(e){return this.alertError(e),null}}validJson(t){try{return this.isVarInvalid(t)?"":JSON.parse(t)}catch(e){return this.alertError(e),null}}enum(t){return i.a.enum[t]}codeToenum(t){return parseInt(t.replaceAll("C",""))}closeMenu(){return Object(o.a)(this,void 0,void 0,function*(){return new Promise(t=>Object(o.a)(this,void 0,void 0,function*(){}))})}sortJSON(t,e,r){return t.sort(function(t,o){var i=t[e],s=o[e];return("string"==typeof i||i instanceof String)&&(i=i.toLowerCase()),("string"==typeof s||s instanceof String)&&(s=s.toLowerCase()),r?i<s?-1:i>s?1:0:r?void 0:i>s?-1:i<s?1:0})}getParmas(t){return Object(o.a)(this,void 0,void 0,function*(){return(yield this._apiMongo.get(i.a.COLLECTION.general,t,"items")).result[0][t]})}patchValueJson(t,e){return Object.keys(t).forEach(r=>{t[r]=this.valueKeyJSON(e,r)}),t}valueKeyJSON(t,e){var r=null;return Object.keys(t).forEach(o=>{o==e&&(r=t[o])}),r}tmspToStr(t){var e=new Date(t),r=e.getFullYear(),o=this.months[e.getMonth()];return e.getDate()+" "+o+" "+r+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}dateStrtoTms(t,e){let r=new Date,o=r.toDateString(),i=r.getTime()-new Date(o).getTime();var s=t.split("-");let n=new Date(s[0],s[1]-1,s[2]).getTime();return e&&(n+=i),Math.floor(n/1e3)}datelocal(){let t=(new Date).getTime();return Math.floor(t/1e3)}dateTmsToStr(t){let e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())}makeid(t){for(var e="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=r.length,i=0;i<t;i++)e+=r.charAt(Math.floor(Math.random()*o));return e}makeDigit(t){for(var e="",r="0123456789",o=r.length,i=0;i<t;i++)e+=r.charAt(Math.floor(Math.random()*o));return e}genCodeId(){let t=new Date,e=Math.floor(t.getTime()/1e3)+"";return e=e.substr(e.length-7,e.length-1),e+"-"+this.makeid2(2)}makeid2(t){for(var e="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",o=r.length,i=0;i<t;i++)e+=r.charAt(Math.floor(Math.random()*o));return e}makeCode(){let t=(new Date).getTime(),e=this.makeid(20);return Object(f.sha256)(Object(f.sha256)(e+t.toString()))}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(p.a),s.Tb(n.H),s.Tb(a.a))},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},GtMO:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var o=r("tk/3"),i=r("AytR"),s=r("bCcq"),n=r("fXoL");let a=(()=>{class t{constructor(t){this._http=t,this.dominio=i.a.url,this.headers=new o.c({"Content-Type":"application/json",Authorization:`Bearer ${i.a.auth_token}`})}delete(t,e,r){const o=this.dominio.concat(`db/${t}/${e}/${r}`);return this._http.delete(o).toPromise()}getkey(t,e,r){const o=this.dominio.concat(`db/${t}/${e}/${r}`);return this._http.get(o).toPromise()}changeStatus(t,e,r,o){const i=this.dominio.concat(`db/${t}/${e}/${r}?status=${o}`);return this._http.post(i,{}).toPromise()}create(t,e,r,o,i){const s=this.dominio.concat(`db/${t}/${e}/${r}/?upsert=${i}`);return console.log("URL",s),console.log("collection",t),console.log("table",e),console.log("key",r),console.log("upsert",i),console.log("body",o),this._http.post(s,o).toPromise()}get(t,e,r){const o=this.dominio.concat(`db/${t}/${e}/${r}`);return console.log("URL",o),this._http.get(o).toPromise()}postGenerate(t,e){const r=this.dominio.concat(`${t}`);return console.log("URL",r),console.log("body",e),this._http.post(r,e,{headers:this.headers}).toPromise()}filter(t,e,r){const o=this.dominio.concat(`db/${t}/${e}/filter`);return console.log("URL",o),this._http.post(o,r).toPromise()}uploadFile(t,e){const r={hash:Object(s.sha256)(t),ext:e,type:"base64",content:t},o=this.dominio.concat("upload");return this._http.post(o,r,{headers:this.headers})}_filter(t,e,r){const o=this.dominio.concat(`db/${t}/${e}/filter`);return console.log("URL",o),this._http.post(o,r)}_get(t,e,r){const o=this.dominio.concat(`db/${t}/${e}/${r}`);return this._http.get(o)}_create(t,e,r,o,i){const s=this.dominio.concat(`db/${t}/${e}/${r}/?upsert=${i}`);return console.log("URL",s),console.log("collection",t),console.log("table",e),console.log("key",r),console.log("upsert",i),console.log("body",o),this._http.post(s,o)}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(o.a))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},L8EE:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var o=r("mrSG"),i=r("fXoL"),s=r("TEn/");let n=(()=>{class t{constructor(t,e,r){this.loadingController=t,this.actionSheetController=e,this.toastController=r}presentLoading(){return Object(o.a)(this,void 0,void 0,function*(){return new Promise((t,e)=>Object(o.a)(this,void 0,void 0,function*(){const e=yield this.loadingController.create({message:"Por favor espere...",backdropDismiss:!1,showBackdrop:!0,spinner:"bubbles"});yield e.present(),t(e)}))})}presentToast(t,e,r){return Object(o.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:r,color:e})).present()})}resizeImage(t,e=180,r=150){return new Promise(o=>{let i=new Image;i.src=t,i.onload=()=>{let t=document.createElement("canvas"),s=i.width,n=i.height;s>n?s>e&&(n*=e/s,s=e):n>r&&(s*=r/n,n=r),t.width=s,t.height=n,t.getContext("2d").drawImage(i,0,0,s,n),o(t.toDataURL())}})}}return t.\u0275fac=function(e){return new(e||t)(i.Tb(s.F),i.Tb(s.a),i.Tb(s.N))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},PDX0:function(t,e){(function(e){t.exports=e}).call(this,{})},bCcq:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&"object"==typeof module&&module.exports,AMD=__webpack_require__("PDX0"),ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t,e){return function(r){return new Sha256(e,!0).update(r)[t]()}},createMethod=function(t){var e=createOutputMethod("hex",t);NODE_JS&&(e=nodeWrap(e,t)),e.create=function(){return new Sha256(t)},e.update=function(t){return e.create().update(t)};for(var r=0;r<OUTPUT_TYPES.length;++r){var o=OUTPUT_TYPES[r];e[o]=createOutputMethod(o,t)}return e},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(t){if("string"==typeof t)return crypto.createHash(algorithm).update(t,"utf8").digest("hex");if(null==t)throw new Error(ERROR);return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod},createHmacOutputMethod=function(t,e){return function(r,o){return new HmacSha256(r,e,!0).update(o)[t]()}},createHmacMethod=function(t){var e=createHmacOutputMethod("hex",t);e.create=function(e){return new HmacSha256(e,t)},e.update=function(t,r){return e.create(t).update(r)};for(var r=0;r<OUTPUT_TYPES.length;++r){var o=OUTPUT_TYPES[r];e[o]=createHmacOutputMethod(o,t)}return e};function Sha256(t,e){e?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function HmacSha256(t,e,r){var o,i=typeof t;if("string"===i){var s,n=[],a=t.length,h=0;for(o=0;o<a;++o)(s=t.charCodeAt(o))<128?n[h++]=s:s<2048?(n[h++]=192|s>>6,n[h++]=128|63&s):s<55296||s>=57344?(n[h++]=224|s>>12,n[h++]=128|s>>6&63,n[h++]=128|63&s):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++o)),n[h++]=240|s>>18,n[h++]=128|s>>12&63,n[h++]=128|s>>6&63,n[h++]=128|63&s);t=n}else{if("object"!==i)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw new Error(ERROR)}t.length>64&&(t=new Sha256(e,!0).update(t).array());var c=[],l=[];for(o=0;o<64;++o){var u=t[o]||0;c[o]=92^u,l[o]=54^u}Sha256.call(this,e,r),this.update(l),this.oKeyPad=c,this.inner=!0,this.sharedMemory=r}Sha256.prototype.update=function(t){if(!this.finalized){var e,r=typeof t;if("string"!==r){if("object"!==r)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw new Error(ERROR);e=!0}for(var o,i,s=0,n=t.length,a=this.blocks;s<n;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),e)for(i=this.start;s<n&&i<64;++s)a[i>>2]|=t[s]<<SHIFT[3&i++];else for(i=this.start;s<n&&i<64;++s)(o=t.charCodeAt(s))<128?a[i>>2]|=o<<SHIFT[3&i++]:o<2048?(a[i>>2]|=(192|o>>6)<<SHIFT[3&i++],a[i>>2]|=(128|63&o)<<SHIFT[3&i++]):o<55296||o>=57344?(a[i>>2]|=(224|o>>12)<<SHIFT[3&i++],a[i>>2]|=(128|o>>6&63)<<SHIFT[3&i++],a[i>>2]|=(128|63&o)<<SHIFT[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),a[i>>2]|=(240|o>>18)<<SHIFT[3&i++],a[i>>2]|=(128|o>>12&63)<<SHIFT[3&i++],a[i>>2]|=(128|o>>6&63)<<SHIFT[3&i++],a[i>>2]|=(128|63&o)<<SHIFT[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.block=a[16],this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[16]=this.block,t[e>>2]|=EXTRA[3&e],this.block=t[16],e>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var t,e,r,o,i,s,n=this.h0,a=this.h1,h=this.h2,c=this.h3,l=this.h4,u=this.h5,d=this.h6,f=this.h7,p=this.blocks;for(t=16;t<64;++t)p[t]=p[t-16]+(((e=p[t-15])>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)+p[t-7]+(((e=p[t-2])>>>17|e<<15)^(e>>>19|e<<13)^e>>>10)<<0;for(s=a&h,t=0;t<64;t+=4)this.first?(this.is224?(r=300032,f=(e=p[0]-1413257819)-150054599<<0,c=e+24177077<<0):(r=704751109,f=(e=p[0]-210244248)-1521486534<<0,c=e+143694565<<0),this.first=!1):(f=c+(e=f+((l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7))+(l&u^~l&d)+K[t]+p[t])<<0,c=e+(((n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10))+((r=n&a)^n&h^s))<<0),d=h+(e=d+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+(f&l^~f&u)+K[t+1]+p[t+1])<<0,h=e+(((c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10))+((o=c&n)^c&a^r))<<0,u=a+(e=u+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&f^~d&l)+K[t+2]+p[t+2])<<0,a=e+(((h>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10))+((i=h&c)^h&n^o))<<0,l=n+(e=l+((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(u&d^~u&f)+K[t+3]+p[t+3])<<0,n=e+(((a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10))+((s=a&h)^a&c^i))<<0;this.h0=this.h0+n<<0,this.h1=this.h1+a<<0,this.h2=this.h2+h<<0,this.h3=this.h3+c<<0,this.h4=this.h4+l<<0,this.h5=this.h5+u<<0,this.h6=this.h6+d<<0,this.h7=this.h7+f<<0},Sha256.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,o=this.h3,i=this.h4,s=this.h5,n=this.h6,a=this.h7,h=HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n];return this.is224||(h+=HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]),h},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,o=this.h3,i=this.h4,s=this.h5,n=this.h6,a=this.h7,h=[t>>24&255,t>>16&255,t>>8&255,255&t,e>>24&255,e>>16&255,e>>8&255,255&e,r>>24&255,r>>16&255,r>>8&255,255&r,o>>24&255,o>>16&255,o>>8&255,255&o,i>>24&255,i>>16&255,i>>8&255,255&i,s>>24&255,s>>16&255,s>>8&255,255&s,n>>24&255,n>>16&255,n>>8&255,255&n];return this.is224||h.push(a>>24&255,a>>16&255,a>>8&255,255&a),h},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),e=new DataView(t);return e.setUint32(0,this.h0),e.setUint32(4,this.h1),e.setUint32(8,this.h2),e.setUint32(12,this.h3),e.setUint32(16,this.h4),e.setUint32(20,this.h5),e.setUint32(24,this.h6),this.is224||e.setUint32(28,this.h7),t},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return exports}).call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()},lGQG:function(t,e,r){"use strict";r.d(e,"a",function(){return u});var o=r("mrSG"),i=r("2Vo4"),s=r("AytR"),n=r("fXoL"),a=r("n90K"),h=r("3Djf"),c=r("GtMO"),l=r("tyNb");let u=(()=>{class t{constructor(t,e,r,o){this._storage=t,this._fun=e,this._apiMongo=r,this.router=o,this.currentUser=new i.a(null),this.dataSend=new i.a(null)}loadUser(){return new Promise((t,e)=>Object(o.a)(this,void 0,void 0,function*(){try{let e=yield this._storage.get(s.a.TOKEN_KEY);if(console.log("RESPUESTA DE LOADUSER",e),e){const r=yield this._apiMongo.get(s.a.COLLECTION.party,s.a.TABLE_SIS.employee,e);console.log("res_u",r),this._fun.isEmpty(r.result)&&(yield this._fun.alertError("Error con permisos de acceso al sistema"),this.router.navigate(["login"]));let o=r.result[0][s.a.TABLE_SIS.employee][0];console.log("user00000001",o);const i=yield this._apiMongo.get(s.a.COLLECTION.general,s.a.TABLE_SIS.role,o.data.role.key);this._fun.isEmpty(i.result)&&(yield this._fun.alertError("Error con permisos de acceso al sistema"),this.router.navigate(["login"]));let n=i.result[0][s.a.TABLE_SIS.role][0];t(n),n.data.acc_web?(this.currentUser.next(o),this._storage.set(s.a.TOKEN_KEY,o.key)):yield this._fun.alertError("El usuario no tiene permisos de acceso al sistema WEB")}else this.currentUser.next(!1)}catch(e){yield this._fun.alertError(e)}}))}signIn(t){return Object(o.a)(this,void 0,void 0,function*(){try{const e=yield this._apiMongo.filter(s.a.COLLECTION.party,s.a.TABLE_SIS.employee,{"data.email":t.username.trim(),"data.password":t.pass});if(console.log("RES",e),this._fun.isEmpty(e.result))return void(yield this._fun.alertError("No se encontro registro con usuario y contrase\xf1a ingresados"));let r=e.result[0].employee[0];const o=yield this._apiMongo.get(s.a.COLLECTION.general,s.a.TABLE_SIS.role,r.data.role.key);if(this._fun.isEmpty(o.result))return;console.log("res",o);let i=o.result[0][s.a.TABLE_SIS.role][0];console.log(i),console.log("USUARIO",r),i.data.acc_web?(this.currentUser.next(r),yield this._storage.set(s.a.TOKEN_KEY,r.key),this.router.navigate(["users"])):yield this._fun.alertError("El usuario no tiene permisos de acceso al sistema WEB")}catch(e){yield this._fun.alertError(e)}})}getUser(){return this.currentUser.asObservable()}getData(){return this.dataSend.asObservable()}validarAuth(){return Object(o.a)(this,void 0,void 0,function*(){return new Promise((t,e)=>{this.getUser().subscribe(e=>{console.log("RESPUSTAAAZAAAA",e),e&&t(!0),t(!1)})})})}logout(){return Object(o.a)(this,void 0,void 0,function*(){yield this._storage.remove(s.a.TOKEN_KEY),this.currentUser.next(!1),this.router.navigate(["/login"])})}hasPermission(t){for(const e of t)if(!this.currentUser.value||!this.currentUser.value.permissions.includes(e))return!1;return!0}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(a.a),n.Tb(h.a),n.Tb(c.a),n.Tb(l.g))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);