$(document).ready(function(){
    //alert("esto es jquery")
    $('.btnact').on('click',function(){
   // alert("click")
    let btn=$('.btnact').index(this)
    let doc=$('.doc').eq(btn);
    let usu=$('.usu').eq(btn);
   let cla=$('.cla').eq(btn);



  let d=doc.val();
  let u=usu.val();
  let c=cla.val();

  alert("datos"+d+u+c);

$.ajax({
type:"POST",
url:'/actdatoscli',
data:{
    dd:d,uu:u,cc:c
  }


});

});
});