(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{422:function(e,t,a){e.exports=a.p+"static/media/brain-overview.3b0eb74b.jpg"},481:function(e,t,a){e.exports=a(760)},486:function(e,t,a){},487:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},492:function(e,t,a){},760:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),i=a.n(o),c=(a(486),a(40)),l=a(15),s=(a(487),a(55)),u=(a(492),a(493),a(759),a(841)),m=a(856),d=a(442),p=a(851),E=a(411),h=a.n(E),f=a(852),g=a(868),v=a(859),b=a(860),y=a(235),x=a(846),O=a(845),T=a(847),_=a(848),D=a(874),j=a(870),w=a(417),S=a.n(w),k=a(419),A=a.n(k),I=a(416),N=a.n(I),C=a(869),M=Object(u.a)((function(e){return{appBar:{top:"auto",bottom:0},grow:{flexGrow:1},speedDial:{position:"absolute",zIndex:1,bottom:30,left:0,right:0,margin:"0 auto"}}})),R=[{icon:r.a.createElement(N.a,null),name:"Add DataSource"}];function P(e){var t=e.fDialog,a=void 0===t?function(){}:t,n=M(),o=r.a.useState(!1),i=Object(l.a)(o,2),c=i[0],s=i[1],u=function(e){s(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null),r.a.createElement(x.a,{position:"sticky",color:"primary",className:n.appBar},r.a.createElement(T.a,null,r.a.createElement(_.a,{edge:"start",color:"inherit","aria-label":"open drawer"},r.a.createElement(S.a,null)),r.a.createElement(D.a,{FabProps:{color:"secondary",size:"large"},ariaLabel:"add",icon:r.a.createElement(C.a,null),onClose:u,onOpen:function(e){s(!0)},open:c,className:n.speedDial},R.map((function(e){return r.a.createElement(j.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,onClick:function(){u(),a(!0)}})}))),r.a.createElement("div",{className:n.grow}),r.a.createElement(_.a,{edge:"end",color:"inherit"},r.a.createElement(A.a,null)))))}var L=a(157),F=a.n(L),z=a(420),G=a(176),U=a.n(G),B=a(849),H=a(298),W=a.n(H),V=a(37);var X=function(e,t){var a=e.filter((function(e,a,n){return e.name===t}));return a.length>0?a[0]:{}};function K(e){return function(e){return e.reduce((function(e,t){return e+t}))}(e)/e.length}function Y(e){var t=K(e);return Math.sqrt(e.reduce((function(e,a){return e+(a-t)*(a-t)}),0)/e.length)}var J=function(e,t){var a=t||{},n=a.lag||5,r=a.threshold||3.5,o=a.influece||.5;if(void 0===e||e.length<n+2)throw" ## y data array to short(".concat(e.length,") for given lag of ").concat(n);var i=Array(e.length).fill(0),c=e.slice(0),l=e.slice(0,n),s=[];s[n-1]=K(l);var u=[];u[n-1]=Y(l);for(var m=n;m<e.length;m++){Math.abs(e[m]-s[m-1])>r*u[m-1]?(e[m]>s[m-1]?i[m]=1:i[m]=-1,c[m]=o*e[m]+(1-o)*c[m-1]):(i[m]=0,c[m]=e[m]);var d=c.slice(m-n,m);s[m]=K(d),u[m]=Y(d)}return i};var q=Object(s.b)((function(e,t){return{enabled:X(e.emitters,t.name).enabled,synth:X(e.emitters,t.name).synth,panner3D:X(e.emitters,t.name).panner,position:X(e.emitters,t.name).position,id:X(e.emitters,t.name).id,events:X(e.emitters,t.name).data,max_length:e.transport.max_length}}))((function(e){var t=e.name,a=e.onPositionChange,n=e.callback,o=void 0===n?console.log:n,i=e.enabled,c=e.synth,s=e.panner3D,u=e.position,m=e.events,d=e.id,p=e.max_length,E=e.dispatch,h=r.a.useState(!1),f=Object(l.a)(h,2),g=f[0],v=f[1],b=r.a.useState([]),y=Object(l.a)(b,2);return y[0],y[1],r.a.useEffect((function(){var e=function(e){var t=new V.Synth,a=new V.Panner3D;return t.sync(),a.panningModel="HRTF",t.chain(a,V.Master),e(!0),[t,a]}(v),a=Object(l.a)(e,2),n=a[0],r=a[1];E({type:"UPDATE_EMITTER_AUDIO_NODES",name:t,synth:n,panner:r})}),[]),r.a.useEffect((function(){g&&o(c,s,u)}),[c,s]),r.a.useEffect((function(){g&&a(u)}),[u]),r.a.useEffect((function(){if(g){c.triggerRelease();var e=J(m.map((function(e,t){return e.y})),{lag:30,threshold:1.5});E({type:"EMITTER_SIGNAL_DATA",name:t,signal_data:e.map((function(e,t){return e/3+.5}))});var a=m.filter((function(t,a,n){return 0!==e[a]}));new V.Part((function(e,t){t=1e3*t+250,c.triggerAttackRelease(t,.5,e)}),a.map((function(e,t){return[e.x/10,e.y]}))).start(0),a[a.length-1].x/10>p&&E({type:"UPDATE_MAX_LENGTH",max_length:a[a.length-1].x/10})}}),[m,g]),i?r.a.createElement(U.a,{bounds:"parent",grid:[10,10],position:u,onStop:function(e,a){var n=a.x,r=a.y;a.node,E({type:"UPDATE_EMITTER_POS",name:t,position:{x:n,y:r}})}},r.a.createElement(B.a,{color:"secondary",disabled:!g,style:{position:"absolute"}},d.slice(0,3),r.a.createElement(W.a,null))):r.a.createElement(r.a.Fragment,null)})),Z=a(421),$=a.n(Z),Q=Object(u.a)({rhombus:{width:75,height:75,transform:"rotate(45deg)",borderRadius:0},micIcon:{width:45,height:45,transform:"rotate(-45deg)"}});var ee=function(e){var t=e.callback,a=void 0===t?console.log:t,n=e.defaultPos,o=void 0===n?{x:100,y:100}:n,i=Q(),c=r.a.useState({x:o.x,y:o.y}),s=Object(l.a)(c,2),u=s[0],m=s[1],d=r.a.useState({width:0,height:0}),p=Object(l.a)(d,2);return p[0],p[1],r.a.useEffect((function(){a(u)}),[u]),r.a.createElement(U.a,{bounds:"parent",grid:[10,10],position:u,onStop:function(e,t){var a=t.x,n=t.y;t.node,m({x:a,y:n})}},r.a.createElement("div",{style:{position:"absolute"}},r.a.createElement(B.a,{color:"primary",size:"large",variant:"extended",className:i.rhombus},r.a.createElement($.a,{className:i.micIcon}))))},te=a(422),ae=a.n(te),ne=Object(u.a)((function(e){return{container_max:{width:"100%",height:"100%",minHeight:"100%"},max_height:{height:"100vh"},responsive_img:{width:"100%",height:"auto"}}}));var re=Object(s.b)((function(e){return{sources:e.emitters}}))((function(e){var t=e.sources,a=(e.dispatch,ne()),n=r.a.useState(null),o=Object(l.a)(n,2),i=o[0],c=o[1],s=r.a.useState({}),u=Object(l.a)(s,2),m=u[0],d=u[1],E=r.a.useState({x:0,y:0,z:0}),h=Object(l.a)(E,2),g=h[0],v=h[1],b=r.a.useRef();function y(e,t){var a=(t.x-g.x)/b.current.clientWidth,n=(g.y-t.y)/b.current.clientHeight;null!==m[e]&&(m[e].position=t,m[e].panner3D.setPosition(10*a,10*n,0))}return r.a.useEffect((function(){Object(z.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),r.a.useEffect((function(){console.log("new Audio Input")}),[i]),r.a.useEffect((function(){var e=g.x/b.current.clientWidth,t=g.y/b.current.clientHeight;for(var a in V.Listener.setPosition(e,t,0).setOrientation(0,1,0,0,0,1),m)y(a,m[a].position)}),[g]),r.a.createElement(p.a,{className:a.container_max},r.a.createElement("div",{className:a.container_max,style:{backgroundImage:"url("+ae.a+")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},ref:b},t.map((function(e){return r.a.createElement(q,{key:e.name,name:e.name,onPositionChange:function(t){return y(e.name,t)},callback:function(t,a,n){!function(e,t,a,n){var r=m;r[e]={synth:t,panner3D:a,position:n},d(r)}(e.name,t,a,n)}})})),r.a.createElement(ee,{callback:v}),r.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:function(){for(var e in m)m[e].synth.oscillator.stop()},style:{position:"absolute",top:"2vh",left:"2vh"}},"Panic!")))})),oe=a(762),ie=a(439),ce=a.n(ie),le=a(440),se=a.n(le),ue=a(863),me=a(866),de=a(867),pe=a(880),Ee=a(881),he=Object(ue.a)("zoom","cursor");Object(s.b)((function(e){return{index:e.transport.index}}))((function(e){var t=e.width,a=e.height,n=e.heightSm,o=e.lineData,i=void 0===o?[]:o,c=e.index,s=r.a.useState(),u=Object(l.a)(s,2),m=u[0],d=u[1];function p(e){d(e)}return r.a.createElement("div",{style:{width:t}},r.a.createElement(me.a,{width:t,height:a,containerComponent:r.a.createElement(he,{zoomDimension:"x",zoomDomain:m,onZoomDomainChange:p,cursorLabel:function(e){var t=e.datum;return"".concat(Math.round(t.x,0))},cursorDimension:"x",defaultCursorValue:c})},r.a.createElement(de.a,{style:{data:{stroke:"tomato"}},data:i,x:"x",y:"y"})),r.a.createElement(me.a,{padding:{top:0,left:50,right:50,bottom:30},width:t,height:n,containerComponent:r.a.createElement(pe.b,{brushDimension:"x",brushDomain:m,onBrushDomainChange:p})},r.a.createElement(Ee.a,null),r.a.createElement(de.a,{style:{data:{stroke:"tomato"}},data:i,x:"x",y:"y"})))}));var fe=a(65);var ge=Object(s.b)((function(e,t){return{visibility:X(e.emitters,t.name).enabled,id:X(e.emitters,t.name).id,signal_data:X(e.emitters,t.name).signal_data||[],data:X(e.emitters,t.name).data||[]}}))((function(e){var t=e.name,a=e.visibility,n=e.data,o=e.signal_data,i=e.id,c=e.dispatch,s=r.a.useState({}),u=Object(l.a)(s,2),m=u[0],d=u[1];return r.a.useEffect((function(){c({type:"ADD_EMITTER",name:t,position:{x:0,y:100},id:([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))})}),[]),r.a.useEffect((function(){for(var e=[],t=0;t<n.length;t++)e.push({x:t,y:n[t].y,y_s:o[t]});d(e)}),[n,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{variant:"h6"},t),r.a.createElement(y.a,{disableHeight:!0},(function(e){var t=e.width;return r.a.createElement(fe.d,{width:t,height:200,data:m,syncId:"anyId"},r.a.createElement(fe.b,{strokeDasharray:"3 3"}),r.a.createElement(fe.f,{dataKey:"x"}),r.a.createElement(fe.g,{type:"number",domain:[0,1]}),r.a.createElement(fe.e,null),r.a.createElement(fe.c,{type:"step",dot:!1,activeDot:!1,dataKey:"y_s",stroke:"grey"}),r.a.createElement(fe.c,{type:"monotone",dot:!1,activeDot:{stroke:"red"},dataKey:"y",stroke:"lightgreen"}))})),r.a.createElement(f.a,{color:a?"default":"secondary",variant:"outlined",onClick:function(){return c({type:"TOGGLE_EMITTER_ENABLED",name:t})}},a?r.a.createElement(ce.a,null):r.a.createElement(se.a,null)),i?r.a.createElement(oe.a,null,"ID: ",r.a.createElement("strong",null,i.slice(0,3)),r.a.createElement("em",null,i.slice(3))):null)})),ve=a(875),be=a(861),ye=a(876),xe=a(858),Oe=a(877),Te=a(857),_e=a(300),De=a.n(_e),je=a(301),we=a.n(je),Se=a(299),ke=a.n(Se),Ae=a(441),Ie=a.n(Ae),Ne=Object(u.a)((function(e){return{transportControls:{backgroundColor:"#eee",borderRadius:50,position:"absolute",alignItems:"center",maxWidth:"50vw",bottom:25,left:100},controlFab:{position:"relative",margin:"0 5px"},progressBar:{margin:"0 10px"},settingsDialog:{padding:e.spacing(2),minWidth:250,width:"30vw"}}}));var Ce=Object(s.b)((function(e){return{length:e.transport.max_length}}))((function(e){var t=e.length,a=Ne(),n=r.a.useState(!1),o=Object(l.a)(n,2),i=o[0],s=o[1],u=r.a.useState(0),d=Object(l.a)(u,2),p=d[0],E=d[1],h=r.a.useState(!1),g=Object(l.a)(h,2),v=g[0],b=g[1],y=r.a.useState(null),x=Object(l.a)(y,2),O=x[0],T=x[1],_=r.a.useState(1),D=Object(l.a)(_,2),j=D[0],w=D[1],S=r.a.useState(null),k=Object(l.a)(S,2),A=k[0],I=k[1],N=r.a.useState([0,t]),C=Object(l.a)(N,2),M=C[0],R=C[1],P=r.a.useState([0,t]),L=Object(l.a)(P,2),F=L[0],z=L[1];function G(){V.Transport.stop(),V.Transport.seconds=F[0],V.Transport.clear(v),b(!1),E(0),s(!1)}function U(e,t,a){return t+e*(a-t)}r.a.useEffect((function(){V.Transport.loop=!0,V.Transport.setLoopPoints(0,t),V.Transport.bpm.rampTo(120),R([0,t]),z([0,t]),w(1),E(0),I(0)}),[t]),r.a.useEffect((function(){I(U.apply(void 0,[p].concat(Object(c.a)(F))))}),[p]);var H=Boolean(O);return r.a.createElement(m.a,{container:!0,className:a.transportControls,spacing:3},r.a.createElement(m.a,{item:!0,xs:1},r.a.createElement(B.a,{color:"primary",size:"large",className:a.controlFab,onClick:function(){if(i)V.Transport.pause(),s(!1);else if(V.Transport.start(),s(!0),!1===v){var e=V.Transport.scheduleRepeat((function(e){E(V.Transport.progress)}),.2,0);b(e)}}},i?r.a.createElement(ke.a,null):r.a.createElement(De.a,null))),r.a.createElement(m.a,{item:!0},r.a.createElement(B.a,{color:"primary",size:"large",className:a.controlFab,onClick:G},r.a.createElement(we.a,null))),r.a.createElement(m.a,{item:!0,xs:7},r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,xs:10},r.a.createElement(ve.a,{variant:"determinate",value:A,min:0,max:t,step:.1,marks:[{value:F[0],label:"S"},{value:F[1],label:"E"}],style:{width:"100%"},onChange:function(e,t){!function(e){F[0]>e&&(e=F[0]),F[1]<e&&(e=F[1]),V.Transport.seconds=e,I(e)}(t)}})),r.a.createElement(m.a,{item:!0,xs:2},r.a.createElement(oe.a,{variant:"h6",className:a.progressBar},U.apply(void 0,[p].concat(Object(c.a)(F))).toFixed(1),"/",F[1]!==t?F[1].toFixed(1)+"("+t.toFixed(1)+")":t.toFixed(1),"s")))),r.a.createElement(m.a,{item:!0,xs:2},r.a.createElement(f.a,{onClick:function(e){T(e.currentTarget)}},r.a.createElement(Ie.a,null)),r.a.createElement(Te.a,{open:H,onClose:function(){T(null)},anchorEl:O,PaperProps:{className:a.settingsDialog},anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"}},r.a.createElement(m.a,{container:!0,direction:"column",spacing:3},r.a.createElement(m.a,{item:!0},r.a.createElement(xe.a,{style:{width:"100%"}},r.a.createElement(ye.a,{id:"tempo-select"},"Tempo"),r.a.createElement(be.a,{labelId:"tempo-select",value:j,onChange:function(e){return w(e.target.value)}},r.a.createElement(Oe.a,{value:.25},".25x"),r.a.createElement(Oe.a,{value:.5},".5x"),r.a.createElement(Oe.a,{value:1},"1x"),r.a.createElement(Oe.a,{value:2},"2x"),r.a.createElement(Oe.a,{value:3},"3x")))),r.a.createElement(m.a,{item:!0},r.a.createElement(xe.a,{style:{width:"100%"}},r.a.createElement(ye.a,{id:"tempo-select"},"Loop Points"),r.a.createElement(ve.a,{labelId:"tempo-select",value:M,max:t,step:.1,min:0,onChange:function(e,t){return R(t)},valueLabelDisplay:"auto"}))),r.a.createElement(m.a,{item:!0},r.a.createElement(f.a,{onClick:function(){V.Transport.setLoopPoints(M[0],M[1]),z(M),V.Transport.bpm.rampTo(120*j,1),G()}},"Apply"))))))})),Me=[[0,0,0],[6.35156,2.375,1.11719],[5.15625,2.49219,1.03906],[4.17969,2.24219,.74219],[5.36719,1.83594,1.14063],[4.14063,1.84375,1.13281],[4.08594,.5625,1.16406],[2.26563,2.21875,1.07813],[4.53906,1.92188,.92969],[4.32813,1.58594,.70313],[3.53125,3.1875,.98438],[3.35938,2.44531,.64063],[2.39844,2.55469,1.28125],[4.84375,2.01563,1.46094],[5.22656,2.0625,.90625],[2.26563,2.13281,1.22656],[3.92188,2.10156,.89063],[3.28906,2.27344,1.375],[4.60156,2.13281,1.14063],[4.15625,3.25,1.45313],[4.21875,2.00781,.83594],[3.57031,2.27344,1.26563],[5.60156,2.39063,1.07813],[3.39063,1.76563,.9375],[5.17969,2.38281,1.21875],[4,2.07813,1.24219],[3.22656,1.85938,1.19531],[3.20313,2.35156,.89844],[4.75,3.33594,.92188],[5.46094,2.19531,1.27344],[4.32031,1.94531,1.04688],[4.98438,1.74219,1.07031],[2.64063,1.61719,1.30469],[4.51563,1.13281,.91406],[4.11719,2.09375,.95313],[3.53906,1.57813,.88281],[6.29688,1.78125,1.11719],[4.17188,3.0625,.97656],[4.08594,1.64063,1.08594],[3.54688,1.42969,.96875],[2.61719,1.82031,.64063],[6.03906,2.33594,1.39063],[3.92969,1.71875,1.09375],[6.28125,1.27344,1.41406],[5.79688,1.38281,1.09375],[7.25,3.23438,.96094],[1.078125,1.52344,.82031],[3.99219,2.10156,.71094],[2.88281,2.15625,1.11719],[3.75,1.67969,.97656],[3.88281,1.20313,.95313],[1.034375,1.79688,.79688],[5.14063,1.82813,.85938],[4.66406,2.19531,1.21875],[4.66406,2.19531,1.21875],[4.63281,2.15625,1.32813],[4.63281,2.15625,1.32813],[4.64844,1.97656,1.02344],[4.64844,1.97656,1.02344],[5.35938,2.41406,1.26563],[5.35938,2.41406,1.26563],[5.60156,2.57813,1.01563],[5.60156,2.57813,1.01563],[3.38281,1.16406,1.14063],[3.38281,1.16406,1.14063],[4.27344,1.60156,1.00781],[4.27344,1.60156,1.00781],[4.51563,2.02344,.98438],[4.51563,2.02344,.98438],[5.36719,1.69531,.94531],[5.36719,1.69531,.94531],[5.10156,1.82031,1.08594],[5.10156,1.82031,1.08594],[5.46875,2.89063,.95313],[5.46875,2.89063,.95313],[3.05,1.42188,.71094],[3.05,1.42188,.71094],[4.99219,1.96875,1.39063],[4.99219,1.96875,1.39063],[5.98438,1.75781,1.46875],[5.98438,1.75781,1.46875],[6.0625,3.46094,1.27344],[6.0625,3.46094,1.27344],[3.03125,2.21875,1.14063],[3.03125,2.21875,1.14063],[4.28125,1.53906,.94531],[4.28125,1.53906,.94531],[4.32031,2.24219,.99219],[4.32031,2.24219,.99219],[5.84375,2.08594,1.375],[5.84375,2.08594,1.375],[6.97656,1.88281,1.03125],[6.97656,1.88281,1.03125],[3.67188,1.92969,1.13281],[3.67188,1.92969,1.13281],[3.96094,2.32031,1.32813],[3.96094,2.32031,1.32813],[3.05469,2.50781,.88281],[3.05469,2.50781,.88281],[6.07031,1.77344,1.35938],[6.07031,1.77344,1.35938],[5.32813,1.92188,1.07031],[5.32813,1.92188,1.07031],[3.13281,2.80469,1.46875],[3.13281,2.80469,1.46875],[4.64844,1.10938,1.32031],[4.64844,1.10938,1.32031],[3.78125,1.41406,1.14063],[3.78125,1.41406,1.14063],[8.20313,2.25,1.50781],[8.20313,2.25,1.50781],[5.40625,4.42969,1.79688],[5.40625,4.42969,1.79688],[2.55469,3.57813,1.50781],[2.55469,3.57813,1.50781],[4.47656,1.67188,1.07031],[4.47656,1.67188,1.07031],[8.46875,2.05469,1.51563],[8.46875,2.05469,1.51563],[3.67188,2.00781,1.49219],[3.67188,2.00781,1.49219],[3.375,2.25781,1.21094],[3.375,2.25781,1.21094],[3.02344,2.49219,.79688],[3.02344,2.49219,.79688],[6.73438,1.63281,1.15625],[6.73438,1.63281,1.15625],[7.83594,2.11719,1.23438],[7.83594,2.11719,1.23438],[3.46094,1.63281,1.33594],[3.46094,1.63281,1.33594],[5.625,2.67188,1.30469],[5.625,2.67188,1.30469],[6.19531,2.60938,1.25],[6.19531,2.60938,1.25],[3.95313,1.92188,1.0625],[3.95313,1.92188,1.0625],[4.58594,1.41406,1.10938],[4.58594,1.41406,1.10938],[5.57031,1.77344,1.59375],[5.57031,1.77344,1.59375],[4.70313,1.92188,1.32031],[4.70313,1.92188,1.32031],[3.85156,1.88281,1.10156],[3.85156,1.88281,1.10156],[3.14063,2.34375,1.39844],[3.14063,2.34375,1.39844],[2.34375,2.625,.92969],[2.34375,2.625,.92969],[3.61719,2.13281,.78125],[3.61719,2.13281,.78125],[7.10938,1.90625,.77344],[7.10938,1.90625,.77344],[4.59375,2.02344,1.17188],[4.59375,2.02344,1.17188],[5.72656,2.39844,.95313],[5.72656,2.39844,.95313],[2.35156,2.07031,1.39844],[2.35156,2.07031,1.39844],[2.92188,1.54688,.77344],[2.92188,1.54688,.77344],[5.30469,2.10156,1.41406],[5.30469,2.10156,1.41406],[4.91406,1.86719,1.40625],[4.91406,1.86719,1.40625],[4.71094,2.91406,.75781],[4.71094,2.91406,.75781],[4.11719,1.61719,1.08594],[4.11719,1.61719,1.08594],[4.34375,1.85938,1.46094],[4.34375,1.85938,1.46094],[3.60156,1.57031,.78125],[3.60156,1.57031,.78125],[4.48438,2.19531,.96875],[4.48438,2.19531,.96875],[3.59375,1.28125,1.10156],[3.59375,1.28125,1.10156],[3.32031,1.55469,.94531],[3.32031,1.55469,.94531],[7.88281,1.42969,1.11719],[7.88281,1.42969,1.11719],[4.95313,2.25781,1.53906],[4.95313,2.25781,1.53906],[5.60156,1.16406,1.46875],[5.60156,1.16406,1.46875],[4.66406,1.625,1.57031],[4.66406,1.625,1.57031],[3.88281,2.00781,1.10156],[3.88281,2.00781,1.10156],[5.71094,.75,1.26563],[5.71094,.75,1.26563],[5.90625,1.30469,1.90625],[5.90625,1.30469,1.90625],[4.00781,1.25781,1.03906],[4.00781,1.25781,1.03906],[7.40625,2.17188,.90625],[7.40625,2.17188,.90625],[6.125,1.10938,1.04688],[6.125,1.10938,1.04688],[8,2.26563,1.13281],[8,2.26563,1.13281],[5.01563,1.83594,.90625],[5.01563,1.83594,.90625],[4.95313,2.44531,1.17969],[4.95313,2.44531,1.17969],[3.875,1.78906,.78906],[3.875,1.78906,.78906],[5.82031,1.25,1.22656],[5.82031,1.25,1.22656],[2.91406,1.82813,1.36719],[2.91406,1.82813,1.36719],[3.36719,2.19531,1.19531],[3.36719,2.19531,1.19531],[6.09375,2.28906,1.14844],[6.09375,2.28906,1.14844],[5.03906,2.10938,1.28906],[5.03906,2.10938,1.28906],[4.61719,1.94531,1.60156],[4.61719,1.94531,1.60156],[4.41406,2.65625,.84375],[4.41406,2.65625,.84375],[4.0625,2.11719,.875],[4.0625,2.11719,.875],[4.70313,1.71094,1.03125],[4.70313,1.71094,1.03125],[3.34375,1.42969,1.53906],[3.34375,1.42969,1.53906],[2.25,1.48438,.84375],[2.25,1.48438,.84375],[2.85156,1.89063,1.39063],[2.85156,1.89063,1.39063],[7.32031,1.32813,1.75],[7.32031,1.32813,1.75],[2.42188,1.32813,1.52344],[2.42188,1.32813,1.52344],[7.52344,1.22656,1.14063],[7.52344,1.22656,1.14063],[1.058125,2.13281,1.0625],[1.058125,2.13281,1.0625],[3.99219,2.59375,1.09375],[3.99219,2.59375,1.09375],[3.76563,1.84375,1.22656],[3.76563,1.84375,1.22656],[4.09375,2.69531,1.16406],[4.09375,2.69531,1.16406],[4.89844,1.45313,1.41406],[4.89844,1.45313,1.41406],[4.20313,1.96875,1.02344],[4.20313,1.96875,1.02344],[2.67188,1.30469,.96875],[2.67188,1.30469,.96875],[4.14063,3.17969,1.47656],[4.14063,3.17969,1.47656],[5.16406,2.83594,.89844],[5.16406,2.83594,.89844],[5,1.59375,1.32031],[5,1.59375,1.32031],[4.86719,1.67188,.92188],[4.86719,1.67188,.92188],[5.82813,2.07813,1.10156],[5.82813,2.07813,1.10156],[2.39063,1.67188,1.35156],[2.39063,1.67188,1.35156],[4.80469,2.80469,1.10938],[4.80469,2.80469,1.10938],[3.26563,2.25,1.25781],[3.26563,2.25,1.25781],[4.70313,2.03906,1.14063],[4.70313,2.03906,1.14063],[3.13281,1.67188,1.67188],[3.13281,1.67188,1.67188],[1.033125,1.39063,1.41406],[1.033125,1.39063,1.41406],[6.60156,1.82813,.94531],[6.60156,1.82813,.94531],[5.35938,2.14844,1.52344],[5.35938,2.14844,1.52344],[1.038125,1.35156,1.26563],[1.038125,1.35156,1.26563],[5.96875,2.13281,1.07031],[5.96875,2.13281,1.07031],[3.74219,2.42969,1.19531],[3.74219,2.42969,1.19531],[3.82813,1.40625,1.10938],[3.82813,1.40625,1.10938],[8.13281,2.21875,1.75],[8.13281,2.21875,1.75],[3.78906,2.73438,1.74219],[3.78906,2.73438,1.74219],[5.71094,2.70313,4.21094],[5.71094,2.70313,4.21094],[4.74219,1.66406,1.86719],[4.74219,1.66406,1.86719],[4.03906,1.17969,.9375],[4.03906,1.17969,.9375],[6.14844,1.07813,.96094],[6.14844,1.07813,.96094],[4.50781,2.00781,1.25],[4.50781,2.00781,1.25],[4.375,1.83594,1.13281],[4.375,1.83594,1.13281],[3.85156,1.45313,1.01563],[3.85156,1.45313,1.01563],[4.89063,2.17188,.89844],[4.89063,2.17188,.89844],[4.14844,1.83594,.82031],[4.14844,1.83594,.82031],[7.10156,2.41406,1.40625],[7.10156,2.41406,1.40625],[4.54688,2.10156,1.10156],[4.54688,2.10156,1.10156],[5.08594,1.41406,1.22656],[5.08594,1.41406,1.22656],[5.11719,1.80469,1.08594],[5.11719,1.80469,1.08594],[5.20313,2.125,.96875],[5.20313,2.125,.96875],[4.70313,2.10156,1.32813],[4.70313,2.10156,1.32813],[5.72656,1.875,.8125],[5.72656,1.875,.8125],[4.72656,1.80469,1.08594],[4.72656,1.80469,1.08594],[4.17969,1.1875,1.15625],[4.17969,1.1875,1.15625],[4.40625,1.45313,.95313],[4.40625,1.45313,.95313],[3.89844,2.79688,.96875],[3.89844,2.79688,.96875],[4.22656,2.42969,1.42969],[4.22656,2.42969,1.42969],[5.73438,2.23438,1.29688],[5.73438,2.23438,1.29688],[5.39844,1.92969,1.17188],[5.39844,1.92969,1.17188],[5.89844,1.42969,1.60938],[5.89844,1.42969,1.60938],[4.71875,1.71875,1.23438],[4.71875,1.71875,1.23438],[4.46875,1.88281,1.17969],[4.46875,1.88281,1.17969],[4.33594,1.70313,1.55469],[4.33594,1.70313,1.55469],[4.34375,1.92188,1.53906],[4.34375,1.92188,1.53906],[4.17969,2.19531,.90625],[4.17969,2.19531,.90625],[2.71875,1.89063,1.14844],[2.71875,1.89063,1.14844],[3.52344,3.44531,1.17969],[3.52344,3.44531,1.17969],[3.32813,1.54688,1.15625],[3.32813,1.54688,1.15625],[4.67969,2.60938,1.16406],[4.67969,2.60938,1.16406],[5.10156,2.0625,1.05469],[5.10156,2.0625,1.05469],[4.03906,2.54688,1.17969],[4.03906,2.54688,1.17969],[4.01563,1.57813,1.25],[4.01563,1.57813,1.25],[4.42969,2,1.10156],[4.42969,2,1.10156],[5.13281,2.30469,1.26563],[5.13281,2.30469,1.26563],[4.19531,1.97656,1.55469],[4.19531,1.97656,1.55469],[5.76563,2.10938,1.57031],[5.76563,2.10938,1.57031],[6.00781,2.21094,1.27344],[6.00781,2.21094,1.27344],[5.60938,2.13281,1.02344],[5.60938,2.13281,1.02344],[4.98438,2.84375,1.42188],[4.98438,2.84375,1.42188],[2.92969,2.05469,1.10938],[2.92969,2.05469,1.10938],[4.96875,1.67188,1.40625],[4.96875,1.67188,1.40625],[4.60156,1.85156,1.08594],[4.60156,1.85156,1.08594],[5.07813,2.86719,1.17188],[5.07813,2.86719,1.17188],[5.32813,1.92969,.86719],[5.32813,1.92969,.86719],[3.99219,1.82813,1.26563],[3.99219,1.82813,1.26563],[1.625,1.75781,.95313],[1.625,1.75781,.95313],[4.60156,2.48438,1.27344],[4.60156,2.48438,1.27344],[1.048125,1.875,.98438],[1.048125,1.875,.98438],[1.044375,2.05469,1.07813],[1.044375,2.05469,1.07813],[7.15625,1.57813,1.64063],[7.15625,1.57813,1.64063],[2.67188,2.49219,1.51563],[2.67188,2.49219,1.51563],[2.80469,2.30469,1.11719],[2.80469,2.30469,1.11719],[5.99219,1.64844,1.76563],[5.99219,1.64844,1.76563],[5.03125,1.77344,1.14063],[5.03125,1.77344,1.14063],[1.046875,2.14844,1.1875],[1.046875,2.14844,1.1875],[3.24219,1.875,1.08594],[3.24219,1.875,1.08594],[7.03906,2.71094,1.61719],[7.03906,2.71094,1.61719],[5.35938,2.55469,.875],[5.35938,2.55469,.875],[4.875,1.78906,1.14844],[4.875,1.78906,1.14844],[5.14844,1.17188,1.25781],[5.14844,1.17188,1.25781],[3.97656,1.64844,1.07031],[3.97656,1.64844,1.07031],[4.54688,1.35156,.84375],[4.54688,1.35156,.84375],[4.71094,.74219,.99219],[4.71094,.74219,.99219],[6.03906,1.95313,.8125],[6.03906,1.95313,.8125],[4.48438,1.25,1.07031],[4.48438,1.25,1.07031],[2.07813,2.85938,1.24219],[2.07813,2.85938,1.24219],[5.51563,1.83594,.96875],[5.51563,1.83594,.96875],[3.375,2.82031,1.21875],[3.375,2.82031,1.21875],[4.64844,2.30469,.88281],[4.64844,2.30469,.88281],[4.24219,1.92969,.88281],[4.24219,1.92969,.88281],[2.21875,1.26563,.78906],[2.21875,1.26563,.78906],[5.23438,1.92188,1.58594],[5.23438,1.92188,1.58594],[3.97656,1.76563,1.40625],[3.97656,1.76563,1.40625],[2.46094,1.88281,1.28125],[2.46094,1.88281,1.28125],[3.14844,1.44531,1.32031],[3.14844,1.44531,1.32031],[2.625,1.09375,1.32031],[2.625,1.09375,1.32031],[6.41406,3.125,1.27344],[6.41406,3.125,1.27344],[4.50781,3.00781,1.03906],[4.50781,3.00781,1.03906],[4.875,2.67969,1.74219],[4.875,2.67969,1.74219],[4.09375,3.21875,1.17188],[4.09375,3.21875,1.17188],[4.36719,2.45313,1.11719],[4.36719,2.45313,1.11719],[5.25,1.80469,1.38281],[5.25,1.80469,1.38281],[2.14844,2.77344,1.35938],[2.14844,2.77344,1.35938],[2.85156,2.40625,1.29688],[2.85156,2.40625,1.29688],[3.76563,1.85156,1.34375],[3.76563,1.85156,1.34375],[4.09375,.78125,1.36719],[4.09375,.78125,1.36719],[5.13281,1.75,1.69531],[5.13281,1.75,1.69531],[5.58594,2.23438,1.38281],[5.58594,2.23438,1.38281],[4.0625,1.74219,.82813],[4.0625,1.74219,.82813],[5.0625,2.55469,1.1875],[5.0625,2.55469,1.1875],[6.36719,2.10938,.86719],[6.36719,2.10938,.86719],[2.80469,1.84375,1.09375],[2.80469,1.84375,1.09375],[3.64063,1.96094,1.1875],[3.64063,1.96094,1.1875],[5.63281,2.40625,1.04688],[5.63281,2.40625,1.04688],[6.99219,.96094,1.17969],[6.99219,.96094,1.17969],[4.03125,.91406,.875],[4.03125,.91406,.875],[6.14063,2.42969,1.11719],[6.14063,2.42969,1.11719],[5.60938,2.38281,1.26563],[5.60938,2.38281,1.26563],[3.40625,1.78906,.78906],[3.40625,1.78906,.78906],[3.98438,1.64844,1.07031],[3.98438,1.64844,1.07031],[3.19531,1.64844,.94531],[3.19531,1.64844,.94531],[3.60938,2.50781,1.28125],[3.60938,2.50781,1.28125],[6.82031,3.51563,1.53906],[6.82031,3.51563,1.53906]],Re=Object(u.a)((function(e){return{container_max:{width:"100%",height:"100%"},max_height:{height:"100vh",overflowY:"scroll"},responsive_img:{width:"100%",height:"auto"},transportControls:{position:"absolute",bottom:25,left:100},controlFab:{position:"relative",margin:"0 5px"}}}));var Pe=Object(s.b)()((function(e){var t=e.dispatch,a=Re(),n=r.a.useRef(),o=r.a.useState([]),i=Object(l.a)(o,2),s=i[0],u=i[1],E=r.a.useState(!1),x=Object(l.a)(E,2),O=x[0],T=x[1];function _(){T(!1)}function D(e){console.log(">>>LOAD",e);for(var t=[],a=function(){r=(r=e.map((function(e){return e[n]}))).filter((function(e,t,a){return!isNaN(e)}));var a=Math.min.apply(Math,Object(c.a)(r)),o=Math.max.apply(Math,Object(c.a)(r)),i=r.map((function(e,t){return{x:t,y:(e-a)/(o-a)}}));t[n]=i},n=0;n<e[0].length;n++){var r;a()}u(t),_()}return r.a.useEffect((function(){V.Transport.clear();for(var e=0;e<s.length;e++)t({type:"EMITTER_DATA",name:"Channel ".concat(e),data:s[e]})}),[s]),r.a.createElement("div",{style:{width:"100vw",height:"100vh"}},r.a.createElement(m.a,{container:!0,direction:"row"},r.a.createElement(m.a,{item:!0,component:d.a,xs:12,md:8,className:a.max_height},r.a.createElement(re,{sources:[],ref:n}),r.a.createElement(Ce,null)),r.a.createElement("div",{style:{height:"5vh",width:0}}),r.a.createElement(m.a,{item:!0,component:d.a,elevation:3,xs:12,md:4,className:a.max_height,style:{position:"relative"}},r.a.createElement(p.a,{className:a.container_max,style:{overflowY:"scroll"}},r.a.createElement(g.a,{open:O,onClose:_},r.a.createElement(v.a,null,"Load CSV EEG Recording"),r.a.createElement(b.a,null,r.a.createElement(h.a,{onFileLoaded:D,parserOptions:{dynamicTyping:!0,skipEmptyLine:!0}}),r.a.createElement("br",null),r.a.createElement(f.a,{onClick:function(){return D(Me)}},"Load Demo File"),r.a.createElement("div",{style:{minHeight:"50px"}}))),s?r.a.createElement(y.a,{disableHeight:!0,style:{position:"sticky"}},(function(e){var t=e.width;return r.a.createElement(fe.d,{width:t,height:50,data:s[0],syncId:"anyId"},r.a.createElement(fe.a,null),r.a.createElement(fe.f,{dataKey:"x"}))})):null,s?s.map((function(e,t){return r.a.createElement(ge,{key:t,name:"Channel ".concat(t)})})):null),r.a.createElement(P,{fDialog:T}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=a(141),Fe=a(58),ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EMITTER":return[].concat(Object(c.a)(e),[{name:t.name,position:t.position,synth:t.synth,panner:t.panner3D,enabled:!0,id:t.id}]);case"UPDATE_EMITTER_AUDIO_NODES":return e.map((function(e){return e.name===t.name?Object(Fe.a)({},e,{synth:t.synth,panner:t.panner}):e}));case"TOGGLE_EMITTER_ENABLED":return e.map((function(e){return e.name===t.name?Object(Fe.a)({},e,{enabled:!e.enabled}):e}));case"UPDATE_EMITTER_POS":return e.map((function(e){return e.name===t.name?Object(Fe.a)({},e,{position:t.position}):e}));case"EMITTER_SIGNAL_DATA":return e.map((function(e){return e.name===t.name?Object(Fe.a)({},e,{signal_data:t.signal_data}):e}));case"EMITTER_DATA":return e.map((function(e){return e.name===t.name?Object(Fe.a)({},e,{data:t.data}):e}));case"REMOVE EMITTER":return e.filter((function(e,a,n){return e.name!==t.name}));default:return e}},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{events:[],max_length:.01},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY_STATE_CHANGE":return Object(Fe.a)({},e,{playState:t.state});case"INDEX_INC":return Object(Fe.a)({},e,{index:e.index++});case"INDEX_SET":return Object(Fe.a)({},e,{index:t.index});case"INDEX_RESET":return Object(Fe.a)({},e,{index:0});case"UPDATE_MAX_LENGTH":return Object(Fe.a)({},e,{max_length:t.max_length});case"ADD_AUDIO_EVENT":return Object(Fe.a)({},e,{events:[].concat(Object(c.a)(e.events),[{name:t.name,index:t.index,value:t.value}])});default:return e}},Ue=Object(Le.b)({emitters:ze,transport:Ge}),Be=Object(Le.c)(Ue);i.a.render(r.a.createElement(s.a,{store:Be},r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[481,1,2]]]);
//# sourceMappingURL=main.4a746bfc.chunk.js.map