$(document).ready(function(){
    alert("esto es jquery")
    $('.btnact').on('click',function(){
    alert("click")
    let btn=$('.btnact').index(this)
    let nomm=$('.nomm').eq(btn);
    let ve=$('.ve').eq(btn);
    let rl=$('.rl').eq(btn);



  let d=nomm.val();
  let u=ve.val();
  let c=rl.val();

  alert("datos"+d+u+c);

$.ajax({
type:"POST",
url:'/transaccionesact',
data:{
    dd:d,uu:u,cc:c
}


});

});
});