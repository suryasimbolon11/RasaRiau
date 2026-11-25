// ===== script.js : interaksi halaman =====
// 1) memunculkan elemen saat di-scroll  2) garis progres di atas  3) teks berjalan di strip oranye

(function(){
  var els=document.querySelectorAll('.rv,.wipe');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
    },{threshold:.15,rootMargin:'0px 0px -6% 0px'});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
  var bar=document.getElementById('bar'),mq=document.getElementById('mq');
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var tick=false;
  function update(){
    var h=document.documentElement.scrollHeight-window.innerHeight,y=window.scrollY||0;
    bar.style.transform='scaleX('+(h>0?Math.min(y/h,1):0)+')';
    if(!reduce)mq.style.transform='translateX('+(-y*0.5)+'px)';
    tick=false;
  }
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(update)}},{passive:true});
  update();
})();
