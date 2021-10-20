$(document).ready(function(){
    //alert("esto es jquery")
    $('.btnact').on('click',function(){
    //alert("click")
    let btn=$('.btnact').index(this)
    let docli=$('.docli').eq(btn);
    let nommclii=$('.nommclii').eq(btn);
   let vee=$('.vee').eq(btn);
   let rll=$('.rll').eq(btn);
 


  let d=docli.val();
  let u=nommclii.val();
  let c=vee.val();
  let r=rll.val();
 
  alert("datos"+d+u+c+r);

$.ajax({
type:"POST",
url:'/actlineas',
data:{
    dd:d,uu:u,cc:c,rr:r
}


});

});
});