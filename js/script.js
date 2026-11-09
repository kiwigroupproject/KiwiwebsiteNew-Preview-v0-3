/* ==========================================================================
   KiWi Technologies - site script
   Edit CONFIG below with real contact details and the enquiry endpoint.
   ========================================================================== */
var CONFIG = {
  whatsapp: '917798848995',            // country code + number, digits only
  whatsappMessage: 'Hello KiWi Technologies, I would like to discuss a project.',
  email: 'kiwigroupconnect@gmail.com',
  formEndpoint: ''                     // e.g. a Formspree / Web3Forms URL. Empty = demo mode (nothing sent)
};
(function(){
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* header, progress, drawer */
  var hd=document.getElementById('hd'),pg=document.getElementById('prog');
  function sc(){if(!hd||!pg)return;var y=scrollY,h=document.documentElement.scrollHeight-innerHeight;hd.classList.toggle('sc',y>30);pg.style.width=(h>0?y/h*100:0)+'%'}
  addEventListener('scroll',sc,{passive:true});sc();
  var bg=document.getElementById('bg'),dr=document.getElementById('dr');
  function tog(o){bg.classList.toggle('o',o);dr.classList.toggle('o',o);bg.setAttribute('aria-expanded',o)}
  if(bg&&dr){bg.addEventListener('click',function(){tog(!dr.classList.contains('o'))});
  dr.querySelectorAll('a').forEach(function(l){l.addEventListener('click',function(){tog(false)})})}

  /* reveal + counters */
  var els=document.querySelectorAll('.rv');
  function cnt(el){var t=+el.dataset.c,s=el.dataset.s,sup=el.querySelector('sup'),st=performance.now();
    (function f(n){var k=Math.min((n-st)/1400,1),v=Math.round(t*(1-Math.pow(1-k,3)));
      if(sup){el.firstChild.nodeValue=v}else{el.textContent=v+(s||'')}
      if(k<1)requestAnimationFrame(f)})(st)}
  if('IntersectionObserver' in window&&!reduce){
    var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
    els.forEach(function(el,k){el.style.transitionDelay=(k%4)*70+'ms';io.observe(el)});
    var ic=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){cnt(x.target);ic.unobserve(x.target)}})},{threshold:.6});
    document.querySelectorAll('[data-c]').forEach(function(el){ic.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}

  /* bento glow */
  document.querySelectorAll('.bt').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.setProperty('--mx',(e.clientX-r.left)+'px');b.style.setProperty('--my',(e.clientY-r.top)+'px')})});

  /* filter */
  document.querySelectorAll('.fl button').forEach(function(b){b.addEventListener('click',function(){
    document.querySelectorAll('.fl button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
    document.querySelectorAll('.pj,.bc').forEach(function(p){p.hidden=b.dataset.f!=='all'&&p.dataset.k!==b.dataset.f})})});

  /* testimonials */
  var sl=document.querySelectorAll('.sl'),dots=document.getElementById('dots'),cur=0,tm;
  if(sl.length&&dots){
  sl.forEach(function(_,k){var d=document.createElement('button');d.setAttribute('aria-label','Testimonial '+(k+1));d.onclick=function(){go(k,true)};dots.appendChild(d)});
  function go(k,u){cur=k;sl.forEach(function(s,j){s.classList.toggle('on',j===k)});dots.childNodes.forEach(function(d,j){d.classList.toggle('on',j===k)});if(u){clearInterval(tm);if(!reduce)tm=setInterval(function(){go((cur+1)%sl.length)},7000)}}
  go(0,true);
  }

  
  /* enquiry form */
  var form=document.getElementById('f'),ok=document.getElementById('ok');
  if(form)form.addEventListener('submit',function(e){
    e.preventDefault();
    var btn=form.querySelector('button[type=submit]');
    if(!CONFIG.formEndpoint){ok.textContent='Demo mode: set CONFIG.formEndpoint in js/script.js to receive enquiries.';ok.hidden=false;return}
    btn.disabled=true;
    fetch(CONFIG.formEndpoint,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)})
      .then(function(r){if(!r.ok)throw 0;form.reset();ok.textContent='Thank you. We will reply within one working day.';ok.hidden=false})
      .catch(function(){ok.textContent='Something went wrong. Please email '+CONFIG.email+' instead.';ok.hidden=false})
      .then(function(){btn.disabled=false});
  });
  var wa=document.querySelector('.fab .wa');
  if(wa)wa.href='https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(CONFIG.whatsappMessage);

  /* network canvas */
  var cv=document.getElementById('net'),cx=cv&&cv.getContext('2d'),W,H,N=[],mx=-999,my=-999,dpr=Math.min(devicePixelRatio||1,2);
  function size(){var r=cv.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);
    var n=Math.round(W*H/17000);N=[];for(var k=0;k<n;k++)N.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,g:Math.random()<.12})}
  function draw(){cx.clearRect(0,0,W,H);var L=150,k,j,p,q,dx,dy,d;
    for(k=0;k<N.length;k++){p=N[k];
      if(!reduce){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
        dx=p.x-mx;dy=p.y-my;d=dx*dx+dy*dy;if(d<22000){p.x+=dx*.0016;p.y+=dy*.0016}}
      for(j=k+1;j<N.length;j++){q=N[j];dx=p.x-q.x;dy=p.y-q.y;d=Math.sqrt(dx*dx+dy*dy);
        if(d<L){cx.strokeStyle=(p.g||q.g)?'rgba(210,173,92,'+(1-d/L)*.45+')':'rgba(140,198,63,'+(1-d/L)*.3+')';cx.lineWidth=.8;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}
      cx.fillStyle=p.g?'#f2dc92':'#8cc63f';cx.beginPath();cx.arc(p.x,p.y,p.g?2.6:1.8,0,6.283);cx.fill()}
    if(!reduce)requestAnimationFrame(draw)}
  if(cv){size();draw();
  addEventListener('resize',function(){size();if(reduce)draw()});
  cv.parentNode.addEventListener('pointermove',function(e){var r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top})}
})();
