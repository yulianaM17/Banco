$(document).ready(function(){
    
    $('.btnelit').on('click',function(){
    //alert("click")
    let btn=$('.btnelit').index(this)
    let doc=$('.doc').eq(btn);
 


   let d=doc.val();

   alert("borrado"+d); 
   $.ajax({
    type:"POST",
    url:'/eliminar',
    data:{
        dd:d
}


});

});
});