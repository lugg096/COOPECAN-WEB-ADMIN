(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"ct+p":function(t,o,n){"use strict";n.r(o),n.d(o,"HomePageModule",function(){return P});var e=n("ofXK"),i=n("TEn/"),r=n("3Pt+"),a=n("tyNb"),s=n("mrSG"),c=n("fXoL"),b=n("lGQG"),l=n("GtMO"),p=n("n90K"),d=n("3Djf");function g(t,o){1&t&&(c.Pb(0,"p",19),c.rc(1," Usuario es requerido "),c.Ob())}function m(t,o){1&t&&c.Lb(0,"ion-icon",20)}function h(t,o){1&t&&c.Lb(0,"ion-icon",21)}function u(t,o){1&t&&(c.Pb(0,"p",19),c.rc(1," Contrase\xf1a requerida "),c.Ob())}const f=[{path:"",component:(()=>{class t{constructor(t,o,n,e,i,a,s){this.authService=t,this._apiMongo=o,this._storage=n,this.router=e,this.formBuilder=i,this._fun=a,this.menu=s,this.submitAttempt=!1,this.load=!0,this.viewPass=!1,this.tipo="password",this.loginForm=i.group({username:["",r.o.compose([r.o.pattern("[^@]+@[^@]+.[^@]+$"),r.o.required])],pass:["",r.o.required]})}ngOnInit(){console.log("typeof data",typeof{})}login(){return Object(s.a)(this,void 0,void 0,function*(){this.submitAttempt=!0,this.loginForm.valid&&this.authService.signIn(this.loginForm.value)})}mostrar(){this.viewPass?(this.tipo="password",this.viewPass=!1):(this.tipo="text",this.viewPass=!0)}}return t.\u0275fac=function(o){return new(o||t)(c.Kb(b.a),c.Kb(l.a),c.Kb(p.a),c.Kb(a.g),c.Kb(r.b),c.Kb(d.a),c.Kb(i.G))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-home"]],decls:32,vars:6,consts:[[2,"--background","#F5F6FF"],[1,"menu-header-bg","img-left"],["src","../../../assets/images/coopecan-letras-blancas-transparente.png","alt",""],["src","../../../assets/images/login.png","alt","",1,"bg"],[1,"slides01",2,"box-shadow","var(--shadow-black-300)","padding","0 60px"],[2,"margin-top","10%"],[1,"title"],[1,"subtitle"],[3,"formGroup"],["position","stacked",2,"--color","#999999"],["formControlName","username","type","text","placeholder","Usuario de acceso",2,"color","#666666"],["style","font-size: 11px;color: #eb445a;text-align: left;margin-top: 5px;",4,"ngIf"],[2,"margin-top","18px"],["placeholder","Contrase\xf1a","formControlName","pass",2,"color","#666666",3,"type"],[1,"btn-view",3,"click"],["name","eye","style","font-size: 23px;color: #625DEb",4,"ngIf"],["name","eye-off","style","font-size: 23px;color: var(--main-color)",4,"ngIf"],[2,"text-align","center"],["href","javascript:void(0)",1,"btn","btn-2",2,"position","relative","top","50px",3,"click"],[2,"font-size","11px","color","#eb445a","text-align","left","margin-top","5px"],["name","eye",2,"font-size","23px","color","#625DEb"],["name","eye-off",2,"font-size","23px","color","var(--main-color)"]],template:function(t,o){1&t&&(c.Pb(0,"ion-content",0),c.Pb(1,"div",1),c.Pb(2,"div"),c.Lb(3,"img",2),c.Ob(),c.Ob(),c.Lb(4,"img",3),c.Pb(5,"div",4),c.Pb(6,"div",5),c.Pb(7,"p",6),c.rc(8," Administraci\xf3n "),c.Lb(9,"br"),c.rc(10," Coopecan "),c.Ob(),c.Pb(11,"p",7),c.rc(12,"Sistema de administraci\xf3n para la trazabilidad del lote de producci\xf3n."),c.Ob(),c.Lb(13,"div"),c.Pb(14,"div"),c.Pb(15,"form",8),c.Pb(16,"ion-item",5),c.Pb(17,"ion-label",9),c.rc(18,"Usuario"),c.Ob(),c.Lb(19,"ion-input",10),c.Ob(),c.qc(20,g,2,0,"p",11),c.Pb(21,"ion-item",12),c.Pb(22,"ion-label",9),c.rc(23,"Contrase\xf1a"),c.Ob(),c.Lb(24,"ion-input",13),c.Pb(25,"span",14),c.Xb("click",function(){return o.mostrar()}),c.qc(26,m,1,0,"ion-icon",15),c.qc(27,h,1,0,"ion-icon",16),c.Ob(),c.Ob(),c.qc(28,u,2,0,"p",11),c.Ob(),c.Pb(29,"div",17),c.Pb(30,"a",18),c.Xb("click",function(){return o.login()}),c.rc(31,"Iniciar sesi\xf3n"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.zb(15),c.hc("formGroup",o.loginForm),c.zb(5),c.hc("ngIf",!o.loginForm.controls.username.valid&&(o.loginForm.controls.username.dirty||o.submitAttempt)),c.zb(4),c.hc("type",o.tipo),c.zb(2),c.hc("ngIf",o.viewPass),c.zb(1),c.hc("ngIf",!o.viewPass),c.zb(1),c.hc("ngIf",!o.loginForm.controls.pass.valid&&(o.loginForm.controls.pass.dirty||o.submitAttempt)))},directives:[i.h,r.p,r.l,r.f,i.l,i.m,i.k,i.M,r.k,r.d,e.l,i.j],styles:[".slide[_ngcontent-%COMP%]{padding:40px 40px 10px;border-radius:10px;color:#fff;border:4px solid var(--bfirma-fondo)}.scroll[_ngcontent-%COMP%]{overflow-y:scroll;display:block}.title[_ngcontent-%COMP%]{font-size:32px;color:#303038;margin-bottom:0;font-weight:800;margin-top:60px;line-height:1}.subtitle[_ngcontent-%COMP%]{font-size:13px;color:#b3b0b0;margin-top:10px;font-weight:600}.imagen-slides[_ngcontent-%COMP%]{height:70px;width:auto}.bg[_ngcontent-%COMP%]{position:absolute;top:0;right:0;max-height:100%;object-fit:cover}[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:rgba(35,63,92,.23137254901960785)}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:rgba(19,70,121,.363)}.slides01[_ngcontent-%COMP%]{height:600px;max-height:80%;width:400px;min-width:25%;background:#fff;margin-top:5%;border-radius:30px;position:absolute;left:10%}.menu-header-bg[_ngcontent-%COMP%]{top:30%;position:absolute;height:50%;width:480px;background:#625deb;box-shadow:0 1px 10px rgba(98,140,255,.5);transform:rotate(-40deg);border-radius:16%;margin-left:-320px;margin-bottom:25px;z-index:1}.menu-header-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;height:100%}.menu-header-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%;position:absolute;right:10px;bottom:60px;transform:rotate(40deg)}.btn-2[_ngcontent-%COMP%]{text-decoration:none;background-color:var(--main-color);padding:15px 70px;border:none;border-radius:30px;color:hsla(0,0%,100%,.8627450980392157);font-size:13px;box-shadow:var(--shadow-black-300);font-weight:500}.cancel[_ngcontent-%COMP%]{font-size:13px;color:#000;cursor:pointer;position:relative;top:60px}.btn-2[_ngcontent-%COMP%]:hover{background-color:#625deb}.cancel[_ngcontent-%COMP%]:hover{color:#625deb}.btn-view[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:5px;z-index:10}.btn-view[_ngcontent-%COMP%]:hover{color:#625deb}@media screen and (max-width:1200px){.slides01[_ngcontent-%COMP%]{left:20%}}@media screen and (max-width:600px){.title[_ngcontent-%COMP%]{font-size:25px}.subtitle[_ngcontent-%COMP%]{font-weight:500}.slides01[_ngcontent-%COMP%]{height:100%;width:100%;margin:0;left:0;border-radius:0;max-height:100%}.img-left[_ngcontent-%COMP%]{display:none!important}}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({imports:[[a.j.forChild(f)],a.j]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({imports:[[r.n,e.b,r.h,i.D,x]]}),t})()}}]);