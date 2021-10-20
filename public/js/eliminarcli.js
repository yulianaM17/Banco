$(document).ready(function(){
    //alert("esto es jquery")
    $('.btnelit').on('click',function(){
    //alert("click")
    let btn=$('.btnelit').index(this)
    let docli=$('.docli').eq(btn);



  let w=docli.val();

  alert("datos"+w);

$.ajax({
type:"POST",
url:'/eliminarcli',
data:{
    ww:w
}


});

});
});