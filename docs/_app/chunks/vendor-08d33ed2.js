function p(){}function H(t,e){for(const i in e)t[i]=e[i];return t}function M(t){return t()}function I(){return Object.create(null)}function b(t){t.forEach(M)}function q(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function J(t){return Object.keys(t).length===0}function at(t,e,i,s){if(t){const o=z(t,e,i,s);return t[0](o)}}function z(t,e,i,s){return t[1]&&s?H(i.ctx.slice(),t[1](s(e))):i.ctx}function ft(t,e,i,s){if(t[2]&&s){const o=t[2](s(i));if(e.dirty===void 0)return o;if(typeof o=="object"){const l=[],c=Math.max(e.dirty.length,o.length);for(let u=0;u<c;u+=1)l[u]=e.dirty[u]|o[u];return l}return e.dirty|o}return e.dirty}function ht(t,e,i,s,o,l){if(o){const c=z(e,i,s,l);t.p(c,o)}}function dt(t){if(t.ctx.length>32){const e=[],i=t.ctx.length/32;for(let s=0;s<i;s++)e[s]=-1;return e}return-1}function _t(t){return t&&q(t.destroy)?t.destroy:p}let C=!1;function K(){C=!0}function W(){C=!1}function Q(t,e,i,s){for(;t<e;){const o=t+(e-t>>1);i(o)<=s?t=o+1:e=o}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const n=[];for(let r=0;r<e.length;r++){const a=e[r];a.claim_order!==void 0&&n.push(a)}e=n}const i=new Int32Array(e.length+1),s=new Int32Array(e.length);i[0]=-1;let o=0;for(let n=0;n<e.length;n++){const r=e[n].claim_order,a=(o>0&&e[i[o]].claim_order<=r?o+1:Q(1,o,h=>e[i[h]].claim_order,r))-1;s[n]=i[a]+1;const f=a+1;i[f]=n,o=Math.max(f,o)}const l=[],c=[];let u=e.length-1;for(let n=i[o]+1;n!=0;n=s[n-1]){for(l.push(e[n-1]);u>=n;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);l.reverse(),c.sort((n,r)=>n.claim_order-r.claim_order);for(let n=0,r=0;n<c.length;n++){for(;r<l.length&&c[n].claim_order>=l[r].claim_order;)r++;const a=r<l.length?l[r]:null;t.insertBefore(c[n],a)}}function V(t,e){if(C){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,i){C&&!i?V(t,e):(e.parentNode!==t||e.nextSibling!=i)&&t.insertBefore(e,i||null)}function Z(t){t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function pt(){return T(" ")}function gt(){return T("")}function Et(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function et(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,e,i,s,o=!1){nt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const n=i(u);return n===void 0?t.splice(c,1):t[c]=n,o||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const n=i(u);return n===void 0?t.splice(c,1):t[c]=n,o?n===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return s()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function it(t,e,i,s){return U(t,o=>o.nodeName===e,o=>{const l=[];for(let c=0;c<o.attributes.length;c++){const u=o.attributes[c];i[u.name]||l.push(u.name)}l.forEach(c=>o.removeAttribute(c))},()=>s(e))}function yt(t,e,i){return it(t,e,i,tt)}function rt(t,e){return U(t,i=>i.nodeType===3,i=>{const s=""+e;if(i.data.startsWith(s)){if(i.data.length!==s.length)return i.splitText(s.length)}else i.data=s},()=>T(e),!0)}function vt(t){return rt(t," ")}function wt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function bt(t,e,i,s){i===null?t.style.removeProperty(e):t.style.setProperty(e,i,s?"important":"")}let w;function v(t){w=t}function j(){if(!w)throw new Error("Function called outside component initialization");return w}function xt(t){j().$$.on_mount.push(t)}function Lt(t){j().$$.after_update.push(t)}function Pt(t,e){j().$$.context.set(t,e)}const E=[],N=[],P=[],B=[],X=Promise.resolve();let O=!1;function Y(){O||(O=!0,X.then(D))}function kt(){return Y(),X}function A(t){P.push(t)}const S=new Set;let L=0;function D(){const t=w;do{for(;L<E.length;){const e=E[L];L++,v(e),st(e.$$)}for(v(null),E.length=0,L=0;N.length;)N.pop()();for(let e=0;e<P.length;e+=1){const i=P[e];S.has(i)||(S.add(i),i())}P.length=0}while(E.length);for(;B.length;)B.pop()();O=!1,S.clear(),v(t)}function st(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const k=new Set;let _;function Ct(){_={r:0,c:[],p:_}}function St(){_.r||b(_.c),_=_.p}function ot(t,e){t&&t.i&&(k.delete(t),t.i(e))}function $t(t,e,i,s){if(t&&t.o){if(k.has(t))return;k.add(t),_.c.push(()=>{k.delete(t),s&&(i&&t.d(1),s())}),t.o(e)}}function Ot(t,e){const i={},s={},o={$$scope:1};let l=t.length;for(;l--;){const c=t[l],u=e[l];if(u){for(const n in c)n in u||(s[n]=1);for(const n in u)o[n]||(i[n]=u[n],o[n]=1);t[l]=u}else for(const n in c)o[n]=1}for(const c in s)c in i||(i[c]=void 0);return i}function At(t){return typeof t=="object"&&t!==null?t:{}}function Tt(t){t&&t.c()}function jt(t,e){t&&t.l(e)}function ct(t,e,i,s){const{fragment:o,on_mount:l,on_destroy:c,after_update:u}=t.$$;o&&o.m(e,i),s||A(()=>{const n=l.map(M).filter(q);c?c.push(...n):b(n),t.$$.on_mount=[]}),u.forEach(A)}function ut(t,e){const i=t.$$;i.fragment!==null&&(b(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(E.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function It(t,e,i,s,o,l,c,u=[-1]){const n=w;v(t);const r=t.$$={fragment:null,ctx:null,props:l,update:p,not_equal:o,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(n?n.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:e.target||n.$$.root};c&&c(r.root);let a=!1;if(r.ctx=i?i(t,e.props||{},(f,h,...g)=>{const x=g.length?g[0]:h;return r.ctx&&o(r.ctx[f],r.ctx[f]=x)&&(!r.skip_bound&&r.bound[f]&&r.bound[f](x),a&&lt(t,f)),h}):[],r.update(),a=!0,b(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){K();const f=et(e.target);r.fragment&&r.fragment.l(f),f.forEach(Z)}else r.fragment&&r.fragment.c();e.intro&&ot(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),W(),D()}v(n)}class Nt{$destroy(){ut(this,1),this.$destroy=p}$on(e,i){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(i),()=>{const o=s.indexOf(i);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const m=[];function Bt(t,e=p){let i;const s=new Set;function o(u){if(G(t,u)&&(t=u,i)){const n=!m.length;for(const r of s)r[1](),m.push(r,t);if(n){for(let r=0;r<m.length;r+=2)m[r][0](m[r+1]);m.length=0}}}function l(u){o(u(t))}function c(u,n=p){const r=[u,n];return s.add(r),s.size===1&&(i=e(o)||p),u(t),()=>{s.delete(r),s.size===0&&(i(),i=null)}}return{set:o,update:l,subscribe:c}}class d{constructor(e){this.id=-1,this.nativePointer=e,this.pageX=e.pageX,this.pageY=e.pageY,this.clientX=e.clientX,this.clientY=e.clientY,self.Touch&&e instanceof Touch?this.id=e.identifier:y(e)&&(this.id=e.pointerId)}getCoalesced(){if("getCoalescedEvents"in this.nativePointer){const e=this.nativePointer.getCoalescedEvents().map(i=>new d(i));if(e.length>0)return e}return[this]}}const y=t=>"pointerId"in t,$=t=>"changedTouches"in t,F=()=>{};class Ft{constructor(e,{start:i=()=>!0,move:s=F,end:o=F,rawUpdates:l=!1,avoidPointerEvents:c=!1,eventListenerOptions:u={capture:!1,passive:!1,once:!1}}={}){this._element=e,this.startPointers=[],this.currentPointers=[],this._excludeFromButtonsCheck=new Set,this._pointerStart=n=>{if(y(n)&&n.buttons===0)this._excludeFromButtonsCheck.add(n.pointerId);else if(!(n.buttons&1))return;const r=new d(n);this.currentPointers.some(a=>a.id===r.id)||!this._triggerPointerStart(r,n)||(y(n)?((n.target&&"setPointerCapture"in n.target?n.target:this._element).setPointerCapture(n.pointerId),this._element.addEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move,this._eventListenerOptions),this._element.addEventListener("pointerup",this._pointerEnd,this._eventListenerOptions),this._element.addEventListener("pointercancel",this._pointerEnd,this._eventListenerOptions)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))},this._touchStart=n=>{for(const r of Array.from(n.changedTouches))this._triggerPointerStart(new d(r),n)},this._move=n=>{if(!$(n)&&(!y(n)||!this._excludeFromButtonsCheck.has(n.pointerId))&&n.buttons===0){this._pointerEnd(n);return}const r=this.currentPointers.slice(),a=$(n)?Array.from(n.changedTouches).map(h=>new d(h)):[new d(n)],f=[];for(const h of a){const g=this.currentPointers.findIndex(x=>x.id===h.id);g!==-1&&(f.push(h),this.currentPointers[g]=h)}f.length!==0&&this._moveCallback(r,f,n)},this._triggerPointerEnd=(n,r)=>{if(!$(r)&&r.buttons&1)return!1;const a=this.currentPointers.findIndex(h=>h.id===n.id);if(a===-1)return!1;this.currentPointers.splice(a,1),this.startPointers.splice(a,1),this._excludeFromButtonsCheck.delete(n.id);const f=!(r.type==="mouseup"||r.type==="touchend"||r.type==="pointerup");return this._endCallback(n,r,f),!0},this._pointerEnd=n=>{if(!!this._triggerPointerEnd(new d(n),n))if(y(n)){if(this.currentPointers.length)return;this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)},this._touchEnd=n=>{for(const r of Array.from(n.changedTouches))this._triggerPointerEnd(new d(r),n)},this._startCallback=i,this._moveCallback=s,this._endCallback=o,this._rawUpdates=l&&"onpointerrawupdate"in window,this._eventListenerOptions=u,self.PointerEvent&&!c?this._element.addEventListener("pointerdown",this._pointerStart,this._eventListenerOptions):(this._element.addEventListener("mousedown",this._pointerStart,this._eventListenerOptions),this._element.addEventListener("touchstart",this._touchStart,this._eventListenerOptions),this._element.addEventListener("touchmove",this._move,this._eventListenerOptions),this._element.addEventListener("touchend",this._touchEnd,this._eventListenerOptions),this._element.addEventListener("touchcancel",this._touchEnd,this._eventListenerOptions))}stop(){this._element.removeEventListener("pointerdown",this._pointerStart),this._element.removeEventListener("mousedown",this._pointerStart),this._element.removeEventListener("touchstart",this._touchStart),this._element.removeEventListener("touchmove",this._move),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),this._element.removeEventListener(this._rawUpdates?"pointerrawupdate":"pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd),this._element.removeEventListener("pointercancel",this._pointerEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_triggerPointerStart(e,i){return this._startCallback(e,i)?(this.currentPointers.push(e),this.startPointers.push(e),!0):!1}}export{At as A,ut as B,H as C,Bt as D,kt as E,at as F,ht as G,dt as H,ft as I,V as J,p as K,_t as L,Ft as P,Nt as S,et as a,Et as b,yt as c,Z as d,tt as e,bt as f,mt as g,rt as h,It as i,wt as j,pt as k,gt as l,vt as m,Ct as n,$t as o,St as p,ot as q,Pt as r,G as s,T as t,Lt as u,xt as v,Tt as w,jt as x,ct as y,Ot as z};