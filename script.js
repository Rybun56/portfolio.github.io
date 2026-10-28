(function(){
var root=document.documentElement;
try{var sv=localStorage.getItem('theme');if(sv)root.dataset.theme=sv;}catch(e){}
var tb=document.getElementById('theme');
if(tb)tb.addEventListener('click',function(){
  var t=root.dataset.theme||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
  t=t==='dark'?'light':'dark';root.dataset.theme=t;
  try{localStorage.setItem('theme',t)}catch(e){}
});
var fl=document.querySelectorAll('#filters .btn');
fl.forEach(function(b){b.addEventListener('click',function(){
  fl.forEach(function(x){x.classList.remove('active')});b.classList.add('active');
  var f=b.dataset.f;
  document.querySelectorAll('#grid>div').forEach(function(c){
    c.classList.toggle('hide',f!=='all'&&c.dataset.c.split(' ').indexOf(f)<0);
  });
});});
})();
