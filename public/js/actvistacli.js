$(document).ready(function(){
    //alert("esto es jquery")
    $('.btnact').on('click',function(){
    //alert("click")
    let btn=$('.btnact').index(this)
    let docc=$('.docc').eq(btn);
    let nomm=$('.nomm').eq(btn);
   let ve=$('.ve').eq(btn);
   let rl=$('.rl').eq(btn);
  let td=$('.td').eq(btn);
  let mg=$('.mg').eq(btn);


  let rr=docc.val();
  let ll=nomm.val();
  let mm=ve.val();
  let pp=rl.val();
  let qq=td.val();
  let vv=mg.val();
 
  alert("datos"+rr+ll+mm+pp+qq+vv);

$.ajax({
type:"POST",
url:'/actvistacli',
data:{
    dd:rr,uu:ll,cc:mm,rr:pp,ee:qq,ii:vv
}


});

});
});