$(document).ready(function(){
    //alert("hola")
    $('.btnelit').on('click',function(){
    //alert("click")
    let btn=$('.btnelit').index(this)
    let docc=$('.docc').eq(btn);
 


   let d=docc.val();

   alert("borrado"+d); 
   $.ajax({
    type:"POST",
    url:'/eliminarcuentas',
    data:{
        dd:d
}


});

});
});