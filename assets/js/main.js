var IMN={u0:'solar-tanque',u1:'acumuladores-terraza',u2:'paneles-cubierta',u3:'despacho-grua',u4:'equipos-embalados',u5:'hidroneumatico-tablero',u6:'montaje-obra',u7:'estructura-camioneta',u8:'termotanque-pared',u9:'termotanque-embalado'};
function IMG(k,alt,sz){var n=IMN[k];return'<img src="assets/img/'+n+'-900.webp" srcset="assets/img/'+n+'-480.webp 480w, assets/img/'+n+'-900.webp 900w" sizes="'+sz+'" alt="'+alt+'" loading="lazy" decoding="async">'}
var $=function(i){return document.getElementById(i)},RM=matchMedia('(prefers-reduced-motion:reduce)').matches,MOB=innerWidth<700;
var PH="593982376649",WL="https://wa.me/"+PH+"?text=";document.querySelectorAll('.wl').forEach(function(a){a.href=WL+encodeURIComponent(a.dataset.m||'Hola Hidrotanque, quisiera más información.')});$('y').textContent=new Date().getFullYear();
/* video */
var hv=$('hv');(function(){var sd=navigator.connection&&navigator.connection.saveData;if(RM||sd){hv.removeAttribute('autoplay');hv.pause();return}hv.preload='auto';var p=hv.play();if(p&&p.catch)p.catch(function(){});document.addEventListener('pointerdown',function(){if(hv.paused)hv.play().catch(function(){})},{once:true});document.addEventListener('visibilitychange',function(){document.hidden?hv.pause():hv.play().catch(function(){})})})();
/* products */
var P=[['Termotanques','Agua caliente a temperatura constante, en acero inoxidable.','u8'],['Paneles solares','Energía del sol para calentar agua y reducir tu consumo.','u0'],['Tanques acumuladores','Almacenan agua para asegurar disponibilidad constante.','u1'],['Tanques calentadores','Calentamiento integrado para distintos volúmenes de uso.','u9'],['Hidroneumáticos','Presión constante en toda tu red de agua.','u5']];
$('pg').innerHTML=P.map(function(p){return'<a class="pc rv" target="_blank" rel="noopener" href="'+WL+encodeURIComponent('Hola, quisiera cotizar: '+p[0])+'"><div class="pm"><b class="rd"></b><b class="rd"></b><b class="rd"></b>'+IMG(p[2],p[0],'(max-width:560px) 100vw,(max-width:900px) 50vw,33vw')+'</div><div class="pt"><h3>'+p[0]+'</h3><p>'+p[1]+'</p><span class="pl">Cotizar <span>→</span></span></div></a>'}).join('');
document.querySelectorAll('.pm').forEach(function(m){var im=m.querySelector('img');m.addEventListener('pointermove',function(e){var r=m.getBoundingClientRect();im.style.transform='translate('+((e.clientX-r.left)/r.width-.5)*-14+'px,'+((e.clientY-r.top)/r.height-.5)*-10+'px) scale(1.07)'});m.addEventListener('pointerleave',function(){im.style.transform=''})});
/* projects */
var J=[['u1','Acumuladores','Tanques acumuladores en terraza','p1'],['u0','Solar','Sistema solar con tanque','p2'],['u3','Logística','Despacho con grúa','p3'],['u2','Solar','Paneles en cubierta','p4'],['u4','Producción','Equipos listos para entrega','p5'],['u5','Presión','Hidroneumático con tablero de control','p6']];
$('pj').innerHTML=J.map(function(j){return'<div class="pr '+j[3]+'">'+IMG(j[0],j[2],'(max-width:800px) 50vw,33vw')+'<i></i><div><small>'+j[1]+'</small><h3>'+j[2]+'</h3></div></div>'}).join('');
document.querySelectorAll('.pr').forEach(function(p){p.addEventListener('pointermove',function(e){var r=p.getBoundingClientRect();p.style.setProperty('--mx',(e.clientX-r.left)+'px');p.style.setProperty('--my',(e.clientY-r.top)+'px')})});
/* forms */
$('fc').onsubmit=function(e){e.preventDefault();var m='Hola Hidrotanque, escribo de la constructora '+$('c1').value+'. Soy '+$('c2').value+' ('+$('c3').value+'). Proyecto: '+$('c4').value+($('c5').value?' · '+$('c5').value+' unidades/pisos':'')+'. Necesitamos: '+$('c6').value+'.'+($('c7').value?' '+$('c7').value:'');window.open(WL+encodeURIComponent(m),'_blank')};
/* nav */
$('bgr').onclick=function(){var o=$('mp').classList.toggle('o');this.classList.toggle('o',o);document.body.style.overflow=o?'hidden':''};
$('mp').querySelectorAll('a').forEach(function(a){a.onclick=function(){$('mp').classList.remove('o');$('bgr').classList.remove('o');document.body.style.overflow=''}});
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.rv,.bz').forEach(function(e){io.observe(e)});
/* flow */
var fl=$('flow'),FL={},nds=[];
function ic(k,x,y){var s={sun:'<circle cx="'+x+'" cy="'+y+'" r="7"/><path d="M'+x+' '+(y-16)+'v4M'+x+' '+(y+12)+'v4M'+(x-16)+' '+y+'h4M'+(x+12)+' '+y+'h4M'+(x-11)+' '+(y-11)+'l3 3M'+(x+8)+' '+(y+8)+'l3 3M'+(x+11)+' '+(y-11)+'l-3 3M'+(x-8)+' '+(y+8)+'l-3 3"/>',panel:'<path d="M'+(x-16)+' '+(y+10)+'l6-20h22l-6 20zM'+(x-12)+' '+y+'h22M'+x+' '+(y-10)+'l-3 20"/>',heat:'<path d="M'+(x-14)+' '+(y-6)+'q4-6 7 0t7 0 7 0M'+(x-14)+' '+(y+6)+'q4-6 7 0t7 0 7 0"/>',tank:'<rect x="'+(x-10)+'" y="'+(y-16)+'" width="20" height="32" rx="6"/><path d="M'+(x-10)+' '+(y-6)+'h20"/>',water:'<path d="M'+x+' '+(y-16)+'q14 16 14 24a14 14 0 0 1-28 0q0-8 14-24z"/>'};return'<g class="ic">'+s[k]+'</g>'}
function build(){var m=innerWidth<760,W=m?320:1000,H=m?760:300;fl.setAttribute('viewBox','0 0 '+W+' '+H);var N=[['sun','Sol','Energía solar',0],['panel','Panel solar','Capta la radiación',0],['heat','Calentamiento','Transfiere el calor',0],['tank','Tanque','Acumula el agua',1],['water','Agua caliente','Lista para usar',1]];
var pts=m?[[60,70],[60,225],[60,380],[60,535],[60,690]]:[[90,70],[290,170],[500,170],[710,170],[910,170]];
var d=m?'M60 70L60 690':'M90 70C190 70 190 170 290 170L910 170';
var h='<defs><linearGradient id="gr" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="'+(m?0:W)+'" y2="'+(m?H:0)+'"><stop offset="0" stop-color="#F6C445"/><stop offset=".45" stop-color="#FFE9A8"/><stop offset=".6" stop-color="#6FD3FF"/><stop offset="1" stop-color="#C6EEFF"/></linearGradient></defs><path d="'+d+'" stroke="rgba(255,255,255,.12)" stroke-width="3" fill="none" stroke-linecap="round"/><path id="fp" d="'+d+'" stroke="url(#gr)" stroke-width="3" fill="none" stroke-linecap="round"/>';
N.forEach(function(n,i){var p=pts[i];h+='<g class="nd '+(n[3]?'w':'')+'"><circle class="cr" cx="'+p[0]+'" cy="'+p[1]+'" r="34"/>'+ic(n[0],p[0],p[1])+(m?'<text x="'+(p[0]+56)+'" y="'+(p[1]-2)+'" style="text-anchor:start">'+n[1]+'</text><text class="sub" x="'+(p[0]+56)+'" y="'+(p[1]+16)+'" style="text-anchor:start">'+n[2]+'</text>':'<text x="'+p[0]+'" y="'+(p[1]+64)+'">'+n[1]+'</text><text class="sub" x="'+p[0]+'" y="'+(p[1]+82)+'">'+n[2]+'</text>')+'</g>'});
fl.innerHTML=h;var f=$('fp');FL.len=f.getTotalLength();f.style.strokeDasharray=FL.len;f.style.strokeDashoffset=FL.len;nds=[].slice.call(fl.querySelectorAll('.nd'));FL.path=f;FL.pts=[0,.25,.5,.75,1]}
build();addEventListener('resize',function(){build();upd()});
var FP=0;function upd(){var r=fl.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.75-r.top)/(r.height+innerHeight*.2)));FP=p;FL.path.style.strokeDashoffset=FL.len*(1-p);nds.forEach(function(n,i){n.classList.toggle('on',p>=FL.pts[i]-.02)})}
var fps=[];for(var i=0;i<(MOB?14:26);i++)fps.push({t:Math.random()});
var nav=$('nav'),mb=$('mb'),heroEl=$('top');
function sc(){var y=scrollY;nav.classList.toggle('s',y>40);mb.classList.toggle('on',y>500);upd()}addEventListener('scroll',sc,{passive:true});sc();
/* ===== 3D tank (three.js: photo wrapped on a real cylinder) ===== */
var T3={on:0,mx:0,my:0,rx:0,ry:0};
(function(){var c=$('t3');if(!window.THREE||RM){$('tf').style.display='block';c.style.display='none';return}
try{var R=new THREE.WebGLRenderer({canvas:c,alpha:true,antialias:true});R.setPixelRatio(Math.min(devicePixelRatio||1,MOB?1.5:2));R.outputEncoding=THREE.sRGBEncoding;
var sc3=new THREE.Scene(),cam=new THREE.PerspectiveCamera(26,1,.1,50);cam.position.set(0,.9,9.2);cam.lookAt(0,.1,0);
var tex=new THREE.TextureLoader().load('assets/img/tank.webp',function(){T3.on=1},undefined,function(){$('tf').style.display='block';c.style.display='none';T3.draw=null});tex.encoding=THREE.sRGBEncoding;tex.anisotropy=8;
var Hh=3.5,Wd=Hh*366/838,Rr=Wd/2,g=new THREE.Group();sc3.add(g);
var mat=new THREE.MeshStandardMaterial({map:tex,transparent:true,alphaTest:.04,roughness:.3,metalness:.6,emissive:0xffffff,emissiveMap:tex,emissiveIntensity:.62});
var fr=new THREE.Mesh(new THREE.CylinderGeometry(Rr,Rr,Hh,72,1,true,-Math.PI/2,Math.PI),mat);g.add(fr);
var bk=new THREE.Mesh(new THREE.CylinderGeometry(Rr,Rr,Hh,72,1,true,Math.PI/2,Math.PI),mat);g.add(bk);
var capM=new THREE.MeshStandardMaterial({color:0xdfe2f2,metalness:.9,roughness:.22});var cap=new THREE.Mesh(new THREE.CircleGeometry(Rr*.985,72),capM);cap.rotation.x=-Math.PI/2;cap.position.y=Hh/2-.03;g.add(cap);
var rim=new THREE.Mesh(new THREE.TorusGeometry(Rr,.025,12,72),new THREE.MeshStandardMaterial({color:0xf2f4ff,metalness:1,roughness:.15}));rim.rotation.x=Math.PI/2;rim.position.y=Hh/2-.02;g.add(rim);
sc3.add(new THREE.AmbientLight(0xffffff,.55));var key=new THREE.DirectionalLight(0xd6ecff,1.1);key.position.set(3,4,6);sc3.add(key);var sun=new THREE.PointLight(0xF6C445,1.6,14);sun.position.set(-3.5,2,-1);sc3.add(sun);var aq=new THREE.PointLight(0x6FD3FF,1.2,14);aq.position.set(3.5,-1,3);sc3.add(aq);
function fit(){var s=$('stage');R.setSize(s.clientWidth,s.clientHeight,false);cam.aspect=s.clientWidth/s.clientHeight;cam.updateProjectionMatrix()}fit();addEventListener('resize',fit);
addEventListener('pointermove',function(e){T3.mx=e.clientX/innerWidth-.5;T3.my=e.clientY/innerHeight-.5});
T3.draw=function(t){var sy=Math.min(scrollY,innerHeight)/innerHeight;var ty=-.3+T3.mx*.9+sy*1.1+Math.sin(t*.0007)*.14,tx=T3.my*.18-sy*.12;T3.ry+=(ty-T3.ry)*.08;T3.rx+=(tx-T3.rx)*.08;g.rotation.y=T3.ry;g.rotation.x=T3.rx;g.position.y=Math.sin(t*.0012)*.07-sy*.6;sun.position.x=-3.5+Math.sin(t*.0008)*1.2;sun.intensity=1.4+Math.sin(t*.002)*.4;R.render(sc3,cam)}}catch(e){$('tf').style.display='block';c.style.display='none';T3.draw=null}})();
/* ===== FX canvas: realistic drops ===== */
var cv=$('fx'),cx=cv.getContext('2d'),W,H,DPR=Math.min(devicePixelRatio||1,MOB?1.5:2),drops=[],sp=[],dust=[],LD=[],lensT=1500;
function rs(){W=innerWidth;H=innerHeight;cv.width=W*DPR;cv.height=H*DPR;cx.setTransform(DPR,0,0,DPR,0,0);initLD()}
function vm(x,y){if(hv.readyState<2||!hv.videoWidth)return null;var r=hv.getBoundingClientRect();if(x<r.left||x>r.right||y<r.top||y>r.bottom)return null;var k=Math.max(r.width/hv.videoWidth,r.height/hv.videoHeight);return{sx:(x-(r.left+(r.width-hv.videoWidth*k)/2))/k,sy:(y-(r.top+(r.height-hv.videoHeight*k)/2))/k,k:k}}
function dpath(x,y,r,st){cx.beginPath();if(st<=1.03){cx.arc(x,y,r,0,7);return}var tp=y-r*(1+st*1.15);cx.moveTo(x,tp);cx.bezierCurveTo(x+r*.15,y-r*1.5,x+r,y-r*.8,x+r,y);cx.arc(x,y,r,0,Math.PI,false);cx.bezierCurveTo(x-r,y-r*.8,x-r*.15,y-r*1.5,x,tp);cx.closePath()}
function paint(x,y,r,st,ref,al){al=al==null?1:al;cx.save();cx.globalAlpha=al;dpath(x,y,r,st);cx.save();cx.clip();var m=ref?vm(x,y):null;
if(m){var s=r*1.9/m.k;cx.translate(x,y);cx.rotate(Math.PI);cx.globalAlpha=al*.8;cx.drawImage(hv,m.sx-s,m.sy-s,2*s,2*s,-r,-r,2*r,2*r);cx.setTransform(DPR,0,0,DPR,0,0)}else{cx.fillStyle='rgba(170,215,255,.10)';cx.fillRect(x-r,y-r*3,r*2,r*5)}
var g=cx.createRadialGradient(x,y-r*.1,r*.3,x,y,r*1.05);g.addColorStop(0,'rgba(20,19,46,.06)');g.addColorStop(.72,'rgba(30,50,110,.18)');g.addColorStop(1,'rgba(8,14,40,.62)');cx.fillStyle=g;cx.fillRect(x-r*2,y-r*4,r*4,r*7);
var c=cx.createRadialGradient(x+r*.35,y+r*.5,0,x+r*.35,y+r*.5,r*.9);c.addColorStop(0,'rgba(255,255,255,.55)');c.addColorStop(1,'rgba(255,255,255,0)');cx.globalCompositeOperation='lighter';cx.fillStyle=c;cx.fillRect(x-r,y-r,r*2,r*2.4);cx.restore();
dpath(x,y,r,st);cx.strokeStyle='rgba(255,255,255,.4)';cx.lineWidth=Math.max(.8,r*.07);cx.stroke();
cx.fillStyle='rgba(255,255,255,.95)';cx.beginPath();cx.ellipse(x-r*.38,y-r*.38,r*.24,r*.14,-.6,0,7);cx.fill();cx.fillStyle='rgba(255,255,255,.55)';cx.beginPath();cx.arc(x+r*.45,y+r*.5,Math.max(.6,r*.09),0,7);cx.fill();cx.restore()}
function initLD(){LD=[];var hh=heroEl.offsetHeight,n=MOB?8:13;for(var i=0;i<n;i++){var r=(MOB?4:5)+Math.pow(Math.random(),2.2)*(MOB?11:22);LD.push({x:.04*W+Math.random()*W*.92,y:Math.random()*hh,r:r,sl:0,tr:[],ta:0,v:0,p:0,dist:0,max:0})}}
rs();addEventListener('resize',rs);
for(var i=0;i<(MOB?14:30);i++)dust.push({x:Math.random(),y:Math.random(),r:.6+Math.random()*1.6,s:.00012+Math.random()*.0003,p:Math.random()*7});
function spawn(gold){if(RM)return;drops.push({x:W*(MOB?.2+Math.random()*.6:.1+Math.random()*.8),y:-40,v:.1,r:MOB?5.5:7+Math.random()*3.5,hit:H*(.42+Math.random()*.3),st:0,t:0,gold:gold,sp:0})}
var last=0,vis=true;document.addEventListener('visibilitychange',function(){vis=!document.hidden});
function loop(t){requestAnimationFrame(loop);if(!vis)return;var dt=Math.min(40,t-last||16);last=t;
if(T3.draw&&scrollY<innerHeight*1.3)T3.draw(t);
if(RM)return;var hh=heroEl.offsetHeight,sy=scrollY;if(sy>=hh&&!drops.length&&!sp.length&&!(FP>0&&FP<1.01)){if(!window.__c){cx.clearRect(0,0,W,H);window.__c=1}return}window.__c=0;cx.clearRect(0,0,W,H);
if(sy<hh){cx.globalCompositeOperation='lighter';dust.forEach(function(p){p.y-=p.s*dt;if(p.y<-.02){p.y=1.02;p.x=Math.random()}var x=(p.x+Math.sin(t/1800+p.p)*.01)*W,a=.35+.35*Math.sin(t/900+p.p);cx.fillStyle='rgba(255,214,110,'+a*.55+')';cx.beginPath();cx.arc(x,p.y*H,p.r,0,7);cx.fill()});cx.globalCompositeOperation='source-over';
lensT-=dt;if(lensT<=0){lensT=2200+Math.random()*2800;var c=LD.filter(function(d){return!d.sl&&d.r>8});if(c.length){var d=c[Math.floor(Math.random()*c.length)];d.sl=1;d.tr=[{x:d.x,y:d.y}];d.ta=1;d.dist=0;d.max=130+Math.random()*300;d.p=0;d.v=0}}
LD.forEach(function(d){if(d.sl){d.p-=dt;if(d.p<=0){d.v=.04+Math.random()*.1;d.p=260+Math.random()*420}d.v*=Math.pow(.994,dt);var dy=d.v*dt;d.y+=dy;d.x+=Math.sin(t/400+d.r)*.04;d.dist+=dy;d.r=Math.max(d.r*.9996,5);var l=d.tr[d.tr.length-1];if(d.y-l.y>5)d.tr.push({x:d.x,y:d.y});if(d.dist>d.max){d.sl=0}}else if(d.ta>0){d.ta-=dt/6000;if(d.ta<=0)d.tr=[]}
if(d.y>hh+30){d.y=-10-Math.random()*60;d.x=.04*W+Math.random()*W*.92;d.sl=0;d.tr=[];d.ta=0}
var a=d.sl?1:d.ta;if(d.tr.length>1&&a>0){cx.strokeStyle='rgba(190,225,255,'+.13*Math.min(1,a)+')';cx.lineWidth=d.r*.55;cx.lineCap='round';cx.beginPath();d.tr.forEach(function(q,i){var yy=q.y-sy;i?cx.lineTo(q.x,yy):cx.moveTo(q.x,yy)});cx.stroke()}
var yy=d.y-sy;if(yy>-40&&yy<H+40)paint(d.x,yy,d.r,d.sl?1.25:1,1,1)})}
for(var i=drops.length-1;i>=0;i--){var d=drops[i];if(d.st==0){d.v+=.0022*dt;d.y+=d.v*dt;var stv=1+Math.min(.9,d.v*.55);if(d.y>=d.hit){d.y=d.hit;d.st=1;d.t=0;for(var k=0;k<(MOB?5:9);k++){var an=-Math.PI/2+(Math.random()-.5)*2.2;sp.push({x:d.x,y:d.y,vx:Math.cos(an)*(.08+Math.random()*.2),vy:Math.sin(an)*(.18+Math.random()*.3),r:1.2+Math.random()*2.4,l:1})}}else{var g=cx.createLinearGradient(d.x,d.y-d.r*(2+stv*7),d.x,d.y-d.r*2);g.addColorStop(0,'rgba(190,225,255,0)');g.addColorStop(1,'rgba(190,225,255,.22)');cx.fillStyle=g;cx.fillRect(d.x-d.r*.45,d.y-d.r*(2+stv*7),d.r*.9,d.r*(stv*7));paint(d.x,d.y,d.r,stv,0,1)}}
else{d.t+=dt;var k=d.t/1900;if(k>=1){drops.splice(i,1);continue}
for(var j=0;j<3;j++){var kk=k-j*.13;if(kk<=0)continue;var rr=kk*(MOB?120:200),al=(1-kk);cx.lineWidth=2.2*(1-kk)+.6;cx.strokeStyle='rgba(198,238,255,'+.55*al+')';cx.beginPath();cx.ellipse(d.x,d.y,rr,rr*.27,0,0,7);cx.stroke();cx.lineWidth=1;cx.strokeStyle='rgba(111,211,255,'+.35*al+')';cx.beginPath();cx.ellipse(d.x,d.y,rr*.96,rr*.25,0,0,7);cx.stroke()}
if(k<.2){cx.fillStyle='rgba(255,255,255,'+.5*(1-k*5)+')';cx.beginPath();cx.ellipse(d.x,d.y,d.r*(1+k*8),d.r*.3*(1+k*8),0,0,7);cx.fill()}
if(d.gold){var gk=Math.max(0,(k-.22)/.78),gr=(MOB?170:300)*Math.sin(Math.min(1,gk)*Math.PI*.9+.1);cx.globalCompositeOperation='lighter';var gg=cx.createRadialGradient(d.x,d.y,0,d.x,d.y,gr);gg.addColorStop(0,'rgba(255,214,110,'+.5*(1-gk)+')');gg.addColorStop(1,'rgba(255,214,110,0)');cx.fillStyle=gg;cx.beginPath();cx.ellipse(d.x,d.y,gr,gr*.6,0,0,7);cx.fill();cx.globalCompositeOperation='source-over'}}}
for(var i=sp.length-1;i>=0;i--){var s=sp[i];s.vy+=.0009*dt;s.x+=s.vx*dt;s.y+=s.vy*dt;s.l-=dt/700;if(s.l<=0){sp.splice(i,1);continue}paint(s.x,s.y,s.r,1.2,0,s.l)}
if(FP>0&&FP<1.01){var r=fl.getBoundingClientRect();if(r.bottom>0&&r.top<H){var sx=r.width/fl.viewBox.baseVal.width;fps.forEach(function(p){p.t=(p.t+dt*.00009)%1;if(p.t>FP)return;var pt=FL.path.getPointAtLength(FL.len*p.t);cx.fillStyle=p.t<.5?'rgba(255,214,110,.9)':'rgba(120,210,255,.9)';cx.beginPath();cx.arc(r.left+pt.x*sx,r.top+pt.y*sx,2.4,0,7);cx.fill()})}}}
requestAnimationFrame(loop);
/* transitions: drop lands on each section cut */
var seen=new Set(),sio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&!seen.has(e.target)&&scrollY>40){seen.add(e.target);spawn(e.target.dataset.gold==='1'||e.target.id==='constructoras');if(!MOB)setTimeout(function(){spawn(false)},450)}})},{rootMargin:'0px 0px -55% 0px',threshold:0});
document.querySelectorAll('section.sc').forEach(function(s){sio.observe(s)});
