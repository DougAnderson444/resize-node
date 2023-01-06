import{S as F,i as U,s as q,e as R,b as y,B as b,h,k as g,l as E,m as w,n as f,I as $,a as S,q as I,J as te,c as z,r as D,K as ie,G as _,L as O,M as se}from"../../chunks/index-4d0dc8ab.js";class P{constructor(e){this.id=-1,this.nativePointer=e,this.pageX=e.pageX,this.pageY=e.pageY,this.clientX=e.clientX,this.clientY=e.clientY,self.Touch&&e instanceof Touch?this.id=e.identifier:T(e)&&(this.id=e.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const e=this.nativePointer.getCoalescedEvents().map(t=>new P(t));if(e.length>0)return e}return[this]}}const T=r=>"pointerId"in r,B=r=>"changedTouches"in r,Q=()=>{};class ne{constructor(e,{start:t=()=>!0,move:i=Q,end:o=Q,rawUpdates:l=!1,avoidPointerEvents:c=!1,eventListenerOptions:n={capture:!1,passive:!1,once:!1}}={}){this._element=e,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=s=>{if(T(s)&&s.buttons===0)this._excludeFromButtonsCheck.add(s.pointerId);else if(!(s.buttons&1))return;const a=new P(s);this.currentPointers.some(p=>p.id===a.id)||!this._triggerPointerStart(a,s)||(T(s)?((s.target&&"setPointerCapture"in s.target?s.target:this._element).setPointerCapture(s.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move,this._eventListenerOptions),this._element.addEventListener("pointerup",this._pointerEnd,this._eventListenerOptions),this._element.addEventListener("pointercancel",this._pointerEnd,this._eventListenerOptions)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=s=>{for(const a of Array.from(s.changedTouches))this._triggerPointerStart(new P(a),s)},this._move=s=>{if(!B(s)&&(!T(s)||!this._excludeFromButtonsCheck.has(s.pointerId))&&s.buttons===0){this._pointerEnd(s);return}const a=this.currentPointers.slice(),p=B(s)?Array.from(s.changedTouches).map(m=>new P(m)):[new P(s)],u=[];for(const m of p){const x=this.currentPointers.findIndex(v=>v.id===m.id);x!==-1&&(u.push(m),this.currentPointers[x]=m)}u.length!==0&&this._moveCallback(a,u,s)},this._triggerPointerEnd=(s,a)=>{if(!B(a)&&a.buttons&1)return!1;const p=this.currentPointers.findIndex(m=>m.id===s.id);if(p===-1)return!1;this.currentPointers.splice(p,1),this.startPointers.splice(p,1),this._excludeFromButtonsCheck.delete(s.id);const u=!(a.type==="mouseup"||a.type==="touchend"||a.type==="pointerup");return this._endCallback(s,a,u),!0},this._pointerEnd=s=>{if(!!this._triggerPointerEnd(new P(s),s))if(T(s)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=s=>{for(const a of Array.from(s.changedTouches))this._triggerPointerEnd(new P(a),s)},this._startCallback=t,this._moveCallback=i,this._endCallback=o,this._rawUpdates=l&&"onpointerrawupdate"in window,this._eventListenerOptions=n,self.PointerEvent&&!c?this._element.addEventListener("pointerdown",this._pointerStart,this._eventListenerOptions):(this._element.addEventListener("mousedown",this._pointerStart,this._eventListenerOptions),this._element.addEventListener("touchstart",this._touchStart,this._eventListenerOptions),this._element.addEventListener("touchmove",this._move,this._eventListenerOptions),this._element.addEventListener("touchend",this._touchEnd,this._eventListenerOptions),this._element.addEventListener("touchcancel",this._touchEnd,this._eventListenerOptions))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(e,t){return this._startCallback(e,t)?(this.currentPointers.push(e),this.startPointers.push(e),!0):!1}}function A(r,{Resizer:e=ae,show:t=!0}={}){const i=r.style.position;i!=="relative"&&i!=="absolute"&&(r.style.position="relative");let o=new e({target:r,props:{trigger:l=>re(l),show:t}});return{update(l){t=l.show,o.$set({show:t})},destroy(){}}}function re(r){let e,t,i,o,l=new ne(r,{avoidPointerEvents:!0,start:(c,n)=>l.currentPointers.length===1?!1:(n.preventDefault(),n.stopPropagation(),e=(e||getComputedStyle(r.parentNode).width.replace("px","")||0)*1,t=(t||getComputedStyle(r.parentNode).height.replace("px","")||0)*1,!0),move:(c,n,s)=>{s.preventDefault(),s.stopPropagation(),i=l.currentPointers[0].pageX-c[0].pageX,o=l.currentPointers[0].pageY-c[0].pageY,e=e+i,t=t+o,r.parentNode.style.width=e+"px",r.parentNode.style.height=t+1+"px"},end:(c,n,s)=>{console.log("Drag ended")}})}function W(r){let e;return{c(){e=g("div"),this.h()},l(t){e=E(t,"DIV",{class:!0}),w(e).forEach(h),this.h()},h(){f(e,"class","svlt-resizer svelte-1rosfc7")},m(t,i){y(t,e,i),r[3](e)},p:b,d(t){t&&h(e),r[3](null)}}}function oe(r){let e,t=r[1]&&W(r);return{c(){t&&t.c(),e=R()},l(i){t&&t.l(i),e=R()},m(i,o){t&&t.m(i,o),y(i,e,o)},p(i,[o]){i[1]?t?t.p(i,o):(t=W(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:b,o:b,d(i){t&&t.d(i),i&&h(e)}}}function le(r,e,t){let{handle:i}=e,{trigger:o}=e,{show:l}=e;function c(n){$[n?"unshift":"push"](()=>{i=n,t(0,i)})}return r.$$set=n=>{"handle"in n&&t(0,i=n.handle),"trigger"in n&&t(2,o=n.trigger),"show"in n&&t(1,l=n.show)},r.$$.update=()=>{r.$$.dirty&5&&i&&o(i)},[i,l,o,c]}class ae extends F{constructor(e){super(),U(this,e,le,oe,q,{handle:0,trigger:2,show:1})}}function Z(r){let e;return{c(){e=g("div"),this.h()},l(t){e=E(t,"DIV",{class:!0}),w(e).forEach(h),this.h()},h(){f(e,"class","svlt-resizer svelte-cmef2e")},m(t,i){y(t,e,i),r[3](e)},p:b,d(t){t&&h(e),r[3](null)}}}function he(r){let e,t=r[1]&&Z(r);return{c(){t&&t.c(),e=R()},l(i){t&&t.l(i),e=R()},m(i,o){t&&t.m(i,o),y(i,e,o)},p(i,[o]){i[1]?t?t.p(i,o):(t=Z(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:b,o:b,d(i){t&&t.d(i),i&&h(e)}}}function ce(r,e,t){let{handle:i}=e,{trigger:o}=e,{show:l}=e;function c(n){$[n?"unshift":"push"](()=>{i=n,t(0,i)})}return r.$$set=n=>{"handle"in n&&t(0,i=n.handle),"trigger"in n&&t(2,o=n.trigger),"show"in n&&t(1,l=n.show)},r.$$.update=()=>{r.$$.dirty&5&&i&&o(i)},[i,l,o,c]}class de extends F{constructor(e){super(),U(this,e,ce,he,q,{handle:0,trigger:2,show:1})}}function ue(r){let e,t,i,o,l,c,n,s,a,p,u,m,x,v,V,N,k,X,Y,G;return{c(){e=g("script"),i=S(),o=g("a"),l=I("https://github.com/DougAnderson444/svelte-resizable"),c=S(),n=g("div"),s=g("div"),a=I("1"),p=S(),u=g("div"),m=I("2"),x=S(),v=g("div"),V=I("3"),N=S(),k=g("div"),X=I("\u{1F4A9}"),this.h()},l(d){const C=te("svelte-dxrrbz",document.head);e=E(C,"SCRIPT",{src:!0});var ee=w(e);ee.forEach(h),C.forEach(h),i=z(d),o=E(d,"A",{href:!0});var H=w(o);l=D(H,"https://github.com/DougAnderson444/svelte-resizable"),H.forEach(h),c=z(d),n=E(d,"DIV",{class:!0});var L=w(n);s=E(L,"DIV",{class:!0,id:!0});var J=w(s);a=D(J,"1"),J.forEach(h),p=z(L),u=E(L,"DIV",{class:!0});var K=w(u);m=D(K,"2"),K.forEach(h),x=z(L),v=E(L,"DIV",{class:!0});var M=w(v);V=D(M,"3"),M.forEach(h),N=z(L),k=E(L,"DIV",{class:!0});var j=w(k);X=D(j,"\u{1F4A9}"),j.forEach(h),L.forEach(h),this.h()},h(){ie(e.src,t="https://cdn.tailwindcss.com")||f(e,"src",t),f(o,"href","https://github.com/DougAnderson444/svelte-resizable"),f(s,"class","basis-auto w-1/3 h-1/3 bg-green-100 m-2 p-2"),f(s,"id","number1"),f(u,"class","basis-auto w-1/4 h-1/3 bg-purple-100 m-2 p-2"),f(v,"class","basis-auto w-1/4 h-1/3 bg-blue-100 m-2 p-2 text-3xl"),f(k,"class","basis-auto w-1/2 h-1/4 bg-amber-800 m-2 p-2 text-4xl"),f(n,"class","flex flex-wrap content-start bg-red-100 p-2 h-screen ")},m(d,C){_(document.head,e),y(d,i,C),y(d,o,C),_(o,l),y(d,c,C),y(d,n,C),_(n,s),_(s,a),_(n,p),_(n,u),_(u,m),_(n,x),_(n,v),_(v,V),_(n,N),_(n,k),_(k,X),Y||(G=[O(A.call(null,s)),O(A.call(null,u)),O(A.call(null,v)),O(A.call(null,k,{Resizer:de}))],Y=!0)},p:b,i:b,o:b,d(d){h(e),d&&h(i),d&&h(o),d&&h(c),d&&h(n),Y=!1,se(G)}}}class pe extends F{constructor(e){super(),U(this,e,null,ue,q,{})}}export{pe as default};
