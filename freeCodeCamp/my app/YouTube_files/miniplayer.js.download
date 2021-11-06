(function(g){var window=this;'use strict';var A6=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.qe=!1;this.player=a;this.S(a,"minimized",this.Cg);this.S(a,"onStateChange",this.vF)},B6=function(a){g.iN.call(this,a);
this.i=new A6(this.player);this.i.hide();g.XM(this.player,this.i.element,4);a.Ie()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(A6,g.W);g.k=A6.prototype;
g.k.DD=function(){this.tooltip=new g.FQ(this.player,this);g.J(this,this.tooltip);g.XM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.tc=new g.bO(this.player);g.J(this,this.tc);this.Hg=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.J(this,this.Hg);this.Hg.Ea(this.element);this.S(this.Hg.element,"click",this.Dz);var a=new g.W({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},T:[g.hL()]});g.J(this,a);a.Ea(this.Hg.element);this.S(a.element,"click",this.Di);
a=new g.T1(this.player,this);g.J(this,a);a.Ea(this.Hg.element);this.np=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.J(this,this.np);this.np.Ea(this.Hg.element);this.S(this.np.element,"click",this.Dz);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.J(this,b);b.Ea(this.np.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ea(this.np.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.J(this,c);c.Ea(this.np.element);this.aM=new g.zP(this.player,
this,!1);g.J(this,this.aM);this.aM.Ea(b.element);b=new g.xP(this.player,this);g.J(this,b);b.Ea(a.element);this.nextButton=new g.zP(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ea(c.element);this.Jg=new g.rQ(this.player,this);g.J(this,this.Jg);this.Jg.Ea(this.Hg.element);this.Nc=new g.FP(this.player,this);g.J(this,this.Nc);g.XM(this.player,this.Nc.element,4);this.pz=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.J(this,this.pz);g.XM(this.player,this.pz.element,4);a=new g.W({G:"button",
Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},T:[g.hL()]});g.J(this,a);a.Ea(this.pz.element);this.S(a.element,"click",this.Di);a=new g.W({G:"button",Ia:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Close"},T:[g.mL()]});g.J(this,a);a.Ea(this.pz.element);this.S(a.element,"click",this.RU);this.S(this.player,"presentingplayerstatechange",this.Lc);this.S(this.player,"appresize",this.yb);this.S(this.player,"fullscreentoggled",this.yb);this.yb()};
g.k.show=function(){this.Ed=new g.Eq(this.bq,null,this);this.Ed.start();this.qe||(this.DD(),this.qe=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Nc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ed&&(this.Ed.dispose(),this.Ed=void 0);g.W.prototype.hide.call(this);this.player.Ie()||(this.qe&&this.Nc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Ed&&(this.Ed.dispose(),this.Ed=void 0);g.W.prototype.ya.call(this)};
g.k.Di=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.RU=function(){this.player.playVideo()};
g.k.Dz=function(a){if(a.target===this.Hg.element||a.target===this.np.element)this.player.V().experiments.Ga("kevlar_miniplayer_play_pause_on_scrim")?g.jK(this.player.wb())?this.player.pauseVideo():this.player.playVideo():this.player.Na("onExpandMiniplayer")};
g.k.Cg=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.Ie())};
g.k.md=function(){this.Nc.Qb();this.Jg.Qb()};
g.k.bq=function(){this.md();this.Ed&&this.Ed.start()};
g.k.Lc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.yb=function(){g.RP(this.Nc,0,this.player.gb().getPlayerSize().width,!1);g.GP(this.Nc)};
g.k.vF=function(a){this.player.Ie()&&(0===a?this.hide():this.show())};
g.k.kc=function(){return this.tooltip};
g.k.Qe=function(){return!1};
g.k.qf=function(){return!1};
g.k.xi=function(){return!1};
g.k.kA=function(){};
g.k.cn=function(){};
g.k.Jr=function(){};
g.k.Dn=function(){return null};
g.k.jj=function(){return new g.Jl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.kq=function(a,b,c,d,e){var f=0,h=d=0,l=g.em(a);if(b){c=g.Oq(b,"ytp-prev-button")||g.Oq(b,"ytp-next-button");var m=g.Oq(b,"ytp-play-button"),n=g.Oq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.cm(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Oq(b,"ytp-miniplayer-button-top-left"),f=g.cm(b,this.element),b=g.em(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.gb().getPlayerSize().width;e=f+(e||0);l=g.Vf(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Wk=function(){};
g.k.yk=function(){return!1};g.w(B6,g.iN);B6.prototype.create=function(){};
B6.prototype.Li=function(){return!1};
B6.prototype.load=function(){this.player.hideControls();this.i.show()};
B6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.hN("miniplayer",B6);})(_yt_player);
