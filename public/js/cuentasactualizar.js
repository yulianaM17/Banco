$(document).ready(function(){
    //alert("esto es jquery")
    $('.btnact').on('click',function(){
   // alert("click")
    let btn=$('.btnact').index(this)
    let docc=$('.docc').eq(btn);
    let nomm=$('.nomm').eq(btn);
   let ve=$('.ve').eq(btn);

let rl=$('.rl').eq(btn);

  let d=docc.val();
  let u=nomm.val();
  let c=ve.val();
  let v=rl.val();

  alert("datos"+d+u+c+v);

$.ajax({
type:"POST",
url:'/cuentasactualizar',
data:{
    dd:d,uu:u,cc:c,vv:v
  }


});

});
});