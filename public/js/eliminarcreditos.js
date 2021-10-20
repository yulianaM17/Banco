$(document).ready(function(){
    //alert("esto es jquery")
    $('.btnelit').on('click',function(){
    //alert("click")
    let btn=$('.btnelit').index(this)
    let docc=$('.docc').eq(btn);



  let r=docc.val();

 
  alert("datos"+r)

$.ajax({
type:"POST",
url:'/eliminarcreditos',
data:{
    rr:r
}


});

});
});