import{a as Ve,r as y,j as a,f as se,h as Xe,cN as re,be as Mt,L as We}from"./index-554f52d4.js";import{g as ke}from"./videoMedia-d583c1cf.js";import{T as qe}from"./index.esm-a69f67cb.js";import{I as Ge}from"./Home-68e1f91f.js";import"./Ifram-dae30ffb.js";import"./SatisfiedSection-aec02212.js";import"./slick-theme-8a10486f.js";import"./ApplianceSection-c912a5ed.js";import"./CosmaticCard-273afc6b.js";import"./ProductSlider-c8ea0a40.js";import"./HiwSection-7b5f19da.js";import"./ReviewSection-2b43362f.js";import"./ReviewSlider-05c85717.js";import"./NewsLetterSection-30756a74.js";import"./index-42855a27.js";import"./ProductCard2-407bb906.js";var ne={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(P){(function(u,_,X,c){var g=["","webkit","Moz","MS","ms","o"],O=_.createElement("div"),j="function",I=Math.round,b=Math.abs,F=Date.now;function W(t,e,i){return setTimeout(v(t,i),e)}function p(t,e,i){return Array.isArray(t)?(m(t,i[e],i),!0):!1}function m(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==c)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function S(t,e,i){var r="DEPRECATED METHOD: "+e+`
`+i+` AT 
`;return function(){var s=new Error("get-stack-trace"),n=s&&s.stack?s.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",l=u.console&&(u.console.warn||u.console.log);return l&&l.call(u.console,r,n),t.apply(this,arguments)}}var f;typeof Object.assign!="function"?f=function(e){if(e===c||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),r=1;r<arguments.length;r++){var s=arguments[r];if(s!==c&&s!==null)for(var n in s)s.hasOwnProperty(n)&&(i[n]=s[n])}return i}:f=Object.assign;var w=S(function(e,i,r){for(var s=Object.keys(i),n=0;n<s.length;)(!r||r&&e[s[n]]===c)&&(e[s[n]]=i[s[n]]),n++;return e},"extend","Use `assign`."),q=S(function(e,i){return w(e,i,!0)},"merge","Use `assign`.");function o(t,e,i){var r=e.prototype,s;s=t.prototype=Object.create(r),s.constructor=t,s._super=r,i&&f(s,i)}function v(t,e){return function(){return t.apply(e,arguments)}}function D(t,e){return typeof t==j?t.apply(e&&e[0]||c,e):t}function K(t,e){return t===c?e:t}function ot(t,e,i){m(ct(e),function(r){t.addEventListener(r,i,!1)})}function lt(t,e,i){m(ct(e),function(r){t.removeEventListener(r,i,!1)})}function Lt(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function G(t,e){return t.indexOf(e)>-1}function ct(t){return t.trim().split(/\s+/g)}function J(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var r=0;r<t.length;){if(i&&t[r][i]==e||!i&&t[r]===e)return r;r++}return-1}function ut(t){return Array.prototype.slice.call(t,0)}function Ut(t,e,i){for(var r=[],s=[],n=0;n<t.length;){var l=e?t[n][e]:t[n];J(s,l)<0&&r.push(t[n]),s[n]=l,n++}return i&&(e?r=r.sort(function(T,x){return T[e]>x[e]}):r=r.sort()),r}function ht(t,e){for(var i,r,s=e[0].toUpperCase()+e.slice(1),n=0;n<g.length;){if(i=g[n],r=i?i+s:e,r in t)return r;n++}return c}var ae=1;function oe(){return ae++}function Rt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||u}var le=/mobile|tablet|ip(ad|hone|od)|android/i,jt="ontouchstart"in u,ce=ht(u,"PointerEvent")!==c,ue=jt&&le.test(navigator.userAgent),$="touch",he="pen",It="mouse",fe="kinect",ve=25,E=1,z=2,h=4,N=8,ft=1,tt=2,et=4,it=8,rt=16,L=tt|et,B=it|rt,Ft=L|B,Ht=["x","y"],vt=["clientX","clientY"];function C(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(r){D(t.options.enable,[t])&&i.handler(r)},this.init()}C.prototype={handler:function(){},init:function(){this.evEl&&ot(this.element,this.evEl,this.domHandler),this.evTarget&&ot(this.target,this.evTarget,this.domHandler),this.evWin&&ot(Rt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&lt(this.element,this.evEl,this.domHandler),this.evTarget&&lt(this.target,this.evTarget,this.domHandler),this.evWin&&lt(Rt(this.element),this.evWin,this.domHandler)}};function pe(t){var e,i=t.options.inputClass;return i?e=i:ce?e=_t:ue?e=mt:jt?e=Pt:e=dt,new e(t,de)}function de(t,e,i){var r=i.pointers.length,s=i.changedPointers.length,n=e&E&&r-s===0,l=e&(h|N)&&r-s===0;i.isFirst=!!n,i.isFinal=!!l,n&&(t.session={}),i.eventType=e,me(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function me(t,e){var i=t.session,r=e.pointers,s=r.length;i.firstInput||(i.firstInput=Yt(e)),s>1&&!i.firstMultiple?i.firstMultiple=Yt(e):s===1&&(i.firstMultiple=!1);var n=i.firstInput,l=i.firstMultiple,d=l?l.center:n.center,T=e.center=Vt(r);e.timeStamp=F(),e.deltaTime=e.timeStamp-n.timeStamp,e.angle=Nt(d,T),e.distance=pt(d,T),Te(i,e),e.offsetDirection=Wt(e.deltaX,e.deltaY);var x=Xt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=x.x,e.overallVelocityY=x.y,e.overallVelocity=b(x.x)>b(x.y)?x.x:x.y,e.scale=l?xe(l.pointers,r):1,e.rotation=l?Ee(l.pointers,r):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,ge(i,e);var R=t.element;Lt(e.srcEvent.target,R)&&(R=e.srcEvent.target),e.target=R}function Te(t,e){var i=e.center,r=t.offsetDelta||{},s=t.prevDelta||{},n=t.prevInput||{};(e.eventType===E||n.eventType===h)&&(s=t.prevDelta={x:n.deltaX||0,y:n.deltaY||0},r=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=s.x+(i.x-r.x),e.deltaY=s.y+(i.y-r.y)}function ge(t,e){var i=t.lastInterval||e,r=e.timeStamp-i.timeStamp,s,n,l,d;if(e.eventType!=N&&(r>ve||i.velocity===c)){var T=e.deltaX-i.deltaX,x=e.deltaY-i.deltaY,R=Xt(r,T,x);n=R.x,l=R.y,s=b(R.x)>b(R.y)?R.x:R.y,d=Wt(T,x),t.lastInterval=e}else s=i.velocity,n=i.velocityX,l=i.velocityY,d=i.direction;e.velocity=s,e.velocityX=n,e.velocityY=l,e.direction=d}function Yt(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:I(t.pointers[i].clientX),clientY:I(t.pointers[i].clientY)},i++;return{timeStamp:F(),pointers:e,center:Vt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Vt(t){var e=t.length;if(e===1)return{x:I(t[0].clientX),y:I(t[0].clientY)};for(var i=0,r=0,s=0;s<e;)i+=t[s].clientX,r+=t[s].clientY,s++;return{x:I(i/e),y:I(r/e)}}function Xt(t,e,i){return{x:e/t||0,y:i/t||0}}function Wt(t,e){return t===e?ft:b(t)>=b(e)?t<0?tt:et:e<0?it:rt}function pt(t,e,i){i||(i=Ht);var r=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.sqrt(r*r+s*s)}function Nt(t,e,i){i||(i=Ht);var r=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.atan2(s,r)*180/Math.PI}function Ee(t,e){return Nt(e[1],e[0],vt)+Nt(t[1],t[0],vt)}function xe(t,e){return pt(e[0],e[1],vt)/pt(t[0],t[1],vt)}var ye={mousedown:E,mousemove:z,mouseup:h},Ie="mousedown",Ne="mousemove mouseup";function dt(){this.evEl=Ie,this.evWin=Ne,this.pressed=!1,C.apply(this,arguments)}o(dt,C,{handler:function(e){var i=ye[e.type];i&E&&e.button===0&&(this.pressed=!0),i&z&&e.which!==1&&(i=h),this.pressed&&(i&h&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:It,srcEvent:e}))}});var _e={pointerdown:E,pointermove:z,pointerup:h,pointercancel:N,pointerout:N},Pe={2:$,3:he,4:It,5:fe},kt="pointerdown",qt="pointermove pointerup pointercancel";u.MSPointerEvent&&!u.PointerEvent&&(kt="MSPointerDown",qt="MSPointerMove MSPointerUp MSPointerCancel");function _t(){this.evEl=kt,this.evWin=qt,C.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}o(_t,C,{handler:function(e){var i=this.store,r=!1,s=e.type.toLowerCase().replace("ms",""),n=_e[s],l=Pe[e.pointerType]||e.pointerType,d=l==$,T=J(i,e.pointerId,"pointerId");n&E&&(e.button===0||d)?T<0&&(i.push(e),T=i.length-1):n&(h|N)&&(r=!0),!(T<0)&&(i[T]=e,this.callback(this.manager,n,{pointers:i,changedPointers:[e],pointerType:l,srcEvent:e}),r&&i.splice(T,1))}});var Se={touchstart:E,touchmove:z,touchend:h,touchcancel:N},Ce="touchstart",Ae="touchstart touchmove touchend touchcancel";function Gt(){this.evTarget=Ce,this.evWin=Ae,this.started=!1,C.apply(this,arguments)}o(Gt,C,{handler:function(e){var i=Se[e.type];if(i===E&&(this.started=!0),!!this.started){var r=Oe.call(this,e,i);i&(h|N)&&r[0].length-r[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:$,srcEvent:e})}}});function Oe(t,e){var i=ut(t.touches),r=ut(t.changedTouches);return e&(h|N)&&(i=Ut(i.concat(r),"identifier",!0)),[i,r]}var be={touchstart:E,touchmove:z,touchend:h,touchcancel:N},we="touchstart touchmove touchend touchcancel";function mt(){this.evTarget=we,this.targetIds={},C.apply(this,arguments)}o(mt,C,{handler:function(e){var i=be[e.type],r=De.call(this,e,i);r&&this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:$,srcEvent:e})}});function De(t,e){var i=ut(t.touches),r=this.targetIds;if(e&(E|z)&&i.length===1)return r[i[0].identifier]=!0,[i,i];var s,n,l=ut(t.changedTouches),d=[],T=this.target;if(n=i.filter(function(x){return Lt(x.target,T)}),e===E)for(s=0;s<n.length;)r[n[s].identifier]=!0,s++;for(s=0;s<l.length;)r[l[s].identifier]&&d.push(l[s]),e&(h|N)&&delete r[l[s].identifier],s++;if(d.length)return[Ut(n.concat(d),"identifier",!0),d]}var Me=2500,zt=25;function Pt(){C.apply(this,arguments);var t=v(this.handler,this);this.touch=new mt(this.manager,t),this.mouse=new dt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}o(Pt,C,{handler:function(e,i,r){var s=r.pointerType==$,n=r.pointerType==It;if(!(n&&r.sourceCapabilities&&r.sourceCapabilities.firesTouchEvents)){if(s)Le.call(this,i,r);else if(n&&Ue.call(this,r))return;this.callback(e,i,r)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Le(t,e){t&E?(this.primaryTouch=e.changedPointers[0].identifier,Bt.call(this,e)):t&(h|N)&&Bt.call(this,e)}function Bt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var r=this.lastTouches,s=function(){var n=r.indexOf(i);n>-1&&r.splice(n,1)};setTimeout(s,Me)}}function Ue(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var s=this.lastTouches[r],n=Math.abs(e-s.x),l=Math.abs(i-s.y);if(n<=zt&&l<=zt)return!0}return!1}var Zt=ht(O.style,"touchAction"),Jt=Zt!==c,Qt="compute",Kt="auto",St="manipulation",Z="none",st="pan-x",nt="pan-y",Tt=je();function Ct(t,e){this.manager=t,this.set(e)}Ct.prototype={set:function(t){t==Qt&&(t=this.compute()),Jt&&this.manager.element.style&&Tt[t]&&(this.manager.element.style[Zt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return m(this.manager.recognizers,function(e){D(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Re(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var r=this.actions,s=G(r,Z)&&!Tt[Z],n=G(r,nt)&&!Tt[nt],l=G(r,st)&&!Tt[st];if(s){var d=t.pointers.length===1,T=t.distance<2,x=t.deltaTime<250;if(d&&T&&x)return}if(!(l&&n)&&(s||n&&i&L||l&&i&B))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function Re(t){if(G(t,Z))return Z;var e=G(t,st),i=G(t,nt);return e&&i?Z:e||i?e?st:nt:G(t,St)?St:Kt}function je(){if(!Jt)return!1;var t={},e=u.CSS&&u.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=e?u.CSS.supports("touch-action",i):!0}),t}var gt=1,A=2,Q=4,k=8,H=k,at=16,U=32;function Y(t){this.options=f({},this.defaults,t||{}),this.id=oe(),this.manager=null,this.options.enable=K(this.options.enable,!0),this.state=gt,this.simultaneous={},this.requireFail=[]}Y.prototype={defaults:{},set:function(t){return f(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(p(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=Et(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return p(t,"dropRecognizeWith",this)?this:(t=Et(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(p(t,"requireFailure",this))return this;var e=this.requireFail;return t=Et(t,this),J(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(p(t,"dropRequireFailure",this))return this;t=Et(t,this);var e=J(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function r(s){e.manager.emit(s,t)}i<k&&r(e.options.event+$t(i)),r(e.options.event),t.additionalEvent&&r(t.additionalEvent),i>=k&&r(e.options.event+$t(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=U},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(U|gt)))return!1;t++}return!0},recognize:function(t){var e=f({},t);if(!D(this.options.enable,[this,e])){this.reset(),this.state=U;return}this.state&(H|at|U)&&(this.state=gt),this.state=this.process(e),this.state&(A|Q|k|at)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function $t(t){return t&at?"cancel":t&k?"end":t&Q?"move":t&A?"start":""}function te(t){return t==rt?"down":t==it?"up":t==tt?"left":t==et?"right":""}function Et(t,e){var i=e.manager;return i?i.get(t):t}function M(){Y.apply(this,arguments)}o(M,Y,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,r=e&(A|Q),s=this.attrTest(t);return r&&(i&N||!s)?e|at:r||s?i&h?e|k:e&A?e|Q:A:U}});function xt(){M.apply(this,arguments),this.pX=null,this.pY=null}o(xt,M,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ft},getTouchAction:function(){var t=this.options.direction,e=[];return t&L&&e.push(nt),t&B&&e.push(st),e},directionTest:function(t){var e=this.options,i=!0,r=t.distance,s=t.direction,n=t.deltaX,l=t.deltaY;return s&e.direction||(e.direction&L?(s=n===0?ft:n<0?tt:et,i=n!=this.pX,r=Math.abs(t.deltaX)):(s=l===0?ft:l<0?it:rt,i=l!=this.pY,r=Math.abs(t.deltaY))),t.direction=s,i&&r>e.threshold&&s&e.direction},attrTest:function(t){return M.prototype.attrTest.call(this,t)&&(this.state&A||!(this.state&A)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=te(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function At(){M.apply(this,arguments)}o(At,M,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Z]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&A)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function Ot(){Y.apply(this,arguments),this._timer=null,this._input=null}o(Ot,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Kt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!r||!i||t.eventType&(h|N)&&!s)this.reset();else if(t.eventType&E)this.reset(),this._timer=W(function(){this.state=H,this.tryEmit()},e.time,this);else if(t.eventType&h)return H;return U},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===H&&(t&&t.eventType&h?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=F(),this.manager.emit(this.options.event,this._input)))}});function bt(){M.apply(this,arguments)}o(bt,M,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Z]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&A)}});function wt(){M.apply(this,arguments)}o(wt,M,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:L|B,pointers:1},getTouchAction:function(){return xt.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,i;return e&(L|B)?i=t.overallVelocity:e&L?i=t.overallVelocityX:e&B&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&b(i)>this.options.velocity&&t.eventType&h},emit:function(t){var e=te(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function yt(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}o(yt,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[St]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&E&&this.count===0)return this.failTimeout();if(r&&s&&i){if(t.eventType!=h)return this.failTimeout();var n=this.pTime?t.timeStamp-this.pTime<e.interval:!0,l=!this.pCenter||pt(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!l||!n?this.count=1:this.count+=1,this._input=t;var d=this.count%e.taps;if(d===0)return this.hasRequireFailures()?(this._timer=W(function(){this.state=H,this.tryEmit()},e.interval,this),A):H}return U},failTimeout:function(){return this._timer=W(function(){this.state=U},this.options.interval,this),U},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==H&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function V(t,e){return e=e||{},e.recognizers=K(e.recognizers,V.defaults.preset),new Dt(t,e)}V.VERSION="2.0.7",V.defaults={domEvents:!1,touchAction:Qt,enable:!0,inputTarget:null,inputClass:null,preset:[[bt,{enable:!1}],[At,{enable:!1},["rotate"]],[wt,{direction:L}],[xt,{direction:L},["swipe"]],[yt],[yt,{event:"doubletap",taps:2},["tap"]],[Ot]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Fe=1,ee=2;function Dt(t,e){this.options=f({},V.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=pe(this),this.touchAction=new Ct(this,this.options.touchAction),ie(this,!0),m(this.options.recognizers,function(i){var r=this.add(new i[0](i[1]));i[2]&&r.recognizeWith(i[2]),i[3]&&r.requireFailure(i[3])},this)}Dt.prototype={set:function(t){return f(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?ee:Fe},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,r=this.recognizers,s=e.curRecognizer;(!s||s&&s.state&H)&&(s=e.curRecognizer=null);for(var n=0;n<r.length;)i=r[n],e.stopped!==ee&&(!s||i==s||i.canRecognizeWith(s))?i.recognize(t):i.reset(),!s&&i.state&(A|Q|k)&&(s=e.curRecognizer=i),n++}},get:function(t){if(t instanceof Y)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(p(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(p(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,i=J(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==c&&e!==c){var i=this.handlers;return m(ct(t),function(r){i[r]=i[r]||[],i[r].push(e)}),this}},off:function(t,e){if(t!==c){var i=this.handlers;return m(ct(t),function(r){e?i[r]&&i[r].splice(J(i[r],e),1):delete i[r]}),this}},emit:function(t,e){this.options.domEvents&&He(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var r=0;r<i.length;)i[r](e),r++}},destroy:function(){this.element&&ie(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function ie(t,e){var i=t.element;if(i.style){var r;m(t.options.cssProps,function(s,n){r=ht(i.style,n),e?(t.oldCssProps[r]=i.style[r],i.style[r]=s):i.style[r]=t.oldCssProps[r]||""}),e||(t.oldCssProps={})}}function He(t,e){var i=_.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}f(V,{INPUT_START:E,INPUT_MOVE:z,INPUT_END:h,INPUT_CANCEL:N,STATE_POSSIBLE:gt,STATE_BEGAN:A,STATE_CHANGED:Q,STATE_ENDED:k,STATE_RECOGNIZED:H,STATE_CANCELLED:at,STATE_FAILED:U,DIRECTION_NONE:ft,DIRECTION_LEFT:tt,DIRECTION_RIGHT:et,DIRECTION_UP:it,DIRECTION_DOWN:rt,DIRECTION_HORIZONTAL:L,DIRECTION_VERTICAL:B,DIRECTION_ALL:Ft,Manager:Dt,Input:C,TouchAction:Ct,TouchInput:mt,MouseInput:dt,PointerEventInput:_t,TouchMouseInput:Pt,SingleTouchInput:Gt,Recognizer:Y,AttrRecognizer:M,Tap:yt,Pan:xt,Swipe:wt,Pinch:At,Rotate:bt,Press:Ot,on:ot,off:lt,each:m,merge:q,extend:w,assign:f,inherit:o,bindFn:v,prefixed:ht});var Ye=typeof u<"u"?u:typeof self<"u"?self:{};Ye.Hammer=V,typeof c=="function"&&c.amd?c(function(){return V}):P.exports?P.exports=V:u[X]=V})(window,document,"Hammer")})(ne);var ze=ne.exports;const Be=Ve(ze),Ze=({isIframe:P,setIsIframe:u,parentId:_,child:X,page:c,setPage:g,totalPages:O,video:j,loopVideo:I,setLoopVideo:b,setVideo:F,setGenState:W})=>{y.useEffect(()=>{let o=document.getElementById("id3");m(o)},[]);const[p,m]=y.useState(),S=()=>{c>1?g(c-1):g(1);let o=p.clientWidth;p.scrollLeft=p.scrollLeft-o},f=()=>{c<O&&g(c+1);let o=p.clientWidth;p.scrollLeft=p.scrollLeft+o},w=document.getElementById("id3");if(w){const o=Be(w);o.on("swipeleft",()=>S()),o.on("swiperight",()=>f())}const q=(o,v)=>{o.preventDefault();const D=document.getElementById(_),K=document.getElementById(X);D&&K&&K.remove(),u(!0),F(v)};return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"relative my-8",children:[a.jsx("button",{onClick:S,className:"absolute top-0 -right-10 z-40 h-full",children:a.jsx("div",{className:"hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-1 py-1 rounded-full text-white group",children:a.jsx(se,{className:"text-xl"})})}),a.jsx("button",{onClick:f,className:"absolute top-0 -left-10 z-40 h-full",children:a.jsx("div",{className:"hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-1 py-1 rounded-full text-white group",children:a.jsx(Xe,{className:"text-xl"})})}),a.jsx("div",{id:"id3",className:"flex overflow-x-hidden space-x-3 scroll-smooth",children:I.length>0?I.map((o,v)=>a.jsxs("div",{className:"relative",children:[o.type==="iframe"?a.jsxs("div",{className:"relative xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-44 h-32 ",children:[a.jsx("div",{onClick:D=>q(D,{url:o.url,thumb:o.thumbnail}),className:"absolute bg-black/70 cursor-pointer rounded-xl w-full h-full flex z-[99px] justify-center  items-center",children:j===o.url?a.jsx(re,{className:"text-gray-300 text-4xl"}):a.jsx(Mt,{className:"text-gray-300 text-4xl"})}),a.jsx("img",{src:o.thumbnail,className:"xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-44 h-32  rounded-2xl"})]}):null,o.type!=="iframe"?a.jsxs("div",{className:"relative",children:[a.jsx("div",{onClick:D=>q(D,{url:o.url,thumb:o.thumbnail}),className:"absolute bg-black/70 cursor-pointer rounded-xl w-full h-full flex z-[99px] justify-center  items-center",children:j===o.url?a.jsx(re,{className:"text-gray-300 text-4xl"}):a.jsx(Mt,{className:"text-gray-300 text-4xl"})}),a.jsx("video",{className:"xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 rounded-2xl ",src:o.url})]}):null]})):null})]})})},Je=({isIframe:P,setIsIframe:u,style:_,src:X,title:c,icon:g,frameId:O,divId:j,genState:I,setGenState:b,thumbnail:F,thumbRounded:W})=>{const[p,m]=y.useState(!1),[S,f]=y.useState(!1),w=document.getElementById(O);w&&w.addEventListener("load",function(){f(!1),w.removeAttribute("class"),w.setAttribute("class",`${_}`)});const q=()=>{const o=document.getElementById(O);o&&o.remove(),m(!1),f(!0);var v=document.createElement("iframe");v.title=c,v.src=X,v.setAttribute("class","h-0 w-0"),v.setAttribute("id",O);var D=document.getElementById(j);D.appendChild(v),u(!1),o&&b(!1)};return y.useEffect(()=>{p&&q()},[p,I]),a.jsxs("div",{className:`relative ${_} rounded-2xl`,children:[a.jsx("div",{id:j}),a.jsxs("div",{className:`relative ${P||S?"flex items-center justify-center h-full w-full":"hidden"}`,children:[a.jsx("div",{className:"absolute bg-black/70 rounded-xl w-full h-full flex z-[99px]"}),P?a.jsx(Mt,{onClick:()=>m(!0),className:`${g||"hidden"} absolute cursor-pointer ${g} text-white`}):null,S?a.jsx(qe,{className:`absolute cursor-wait ${g||"hidden"} ${g} text-white animate-spin`}):null,S||P?a.jsx("img",{alt:"thumbnail",title:"thumbnail",src:F,className:`h-full w-full ${W==="false"?null:"rounded-2xl"}`}):null]})]})},vi=()=>{const[P,u]=y.useState([]),[_,X]=y.useState({url:"",thumb:""}),[c,g]=y.useState("");y.useState("");const[O,j]=y.useState(1),[I,b]=y.useState(10),[F,W]=y.useState(0),[p,m]=y.useState(!1);y.useEffect(()=>{(async()=>{const v=await ke({page:O,limit:I},{section:"stay-in-loop-videos"});v.status===200&&(u(v.data.media),X({url:v.data.media[0].url,thumb:v.data.media[0].thumbnail}),g(v.data.media[0].type),W(Math.ceil(v.data.totalCount/I)))})()},[O]);const[S,f]=y.useState(!0);return a.jsxs("div",{className:"flex flex-col mt-10 lg:mt-12 maincontainer",children:[a.jsxs("div",{className:"flex flex-col justify-center space-y-3 items-center w-full",children:[a.jsx("h4",{className:"lg:text-4xl xl:text-4xl text-2xl font-bold text-center",children:"Stay In The Loop"}),a.jsx("p",{className:"xl:text-xl lg:text-xl text-sm font-medium text-center lg:w-7/12 xl:w-[990px] w-11/12",children:"Keep up with our videos about appliances we sell, New stock at our outlet store, product reviews,  sales and much more!"})]}),a.jsxs("div",{className:"py-10 lg:py-16 lg:mb-0",children:[P.length===0?a.jsx(Ge,{style:"col-start-1 col-end-6 object-cover w-full rounded-2xl 2xl:w-full xl:h-[651px] xl:w-full lg:w-full h-72 lg:h-[480px] md:w-full md:h-[400px]"}):null,P.length>0&&c!=="iframe"?a.jsx("video",{controls:!0,className:"col-start-1 col-end-6 object-cover w-full rounded-2xl 2xl:w-full xl:h-[651px] xl:w-full lg:w-full h-72 lg:h-[480px] md:w-full md:h-[400px]",src:_}):null,P.length>0&&c==="iframe"?a.jsx(Je,{isIframe:S,setIsIframe:f,thumbnail:_.thumb,genState:p,setGenState:m,divId:"main-loop-div",frameId:"loop-main-frame",icon:"text-8xl",style:"col-start-1 col-end-6 object-cover w-full rounded-2xl 2xl:w-full xl:h-[651px] xl:w-full lg:w-full h-72 lg:h-[480px] md:w-full md:h-[400px]",src:_.url,title:_.url}):null,a.jsx("div",{children:a.jsx(Ze,{isIframe:S,setIsIframe:f,parentId:"main-loop-div",child:"loop-main-frame",setGenState:m,page:O,setPage:j,totalPages:F,loopVideo:P,setLoopVideo:u,setVideo:X,video:_})}),a.jsx("div",{className:"flex justify-center mt-10 lg:mt-16",children:a.jsxs(We,{to:"/stay-in-loop",className:"flex items-center border-[1px] border-b3 w-fit px-4 py-2 rounded-md text-b3 font-semibold",children:[a.jsx("span",{className:"text-sm",children:"View All Videos"}),a.jsx(se,{className:"text-2xl"})]})})]})]})};export{vi as default};