$(document).ready(function(){
   // alert("esto es jquery")
    $('.btnact').on('click',function(){
   // alert("click")
    let btn=$('.btnact').index(this)
    let cli=$('.cli').eq(btn);
    let nommcli=$('.nommcli').eq(btn);
    let ape=$('.ape').eq(btn);
   let correo=$('.correo').eq(btn);
  let cel=$('.cel').eq(btn);
  let gen=$('.gen').eq(btn);
  let fec=$('.fec').eq(btn);

  let s=cli.val();
  let d=nommcli.val();
  let u=ape.val();
  let c=correo.val();
  let r=cel.val();
  let e=gen.val();
  let i=fec.val();
  alert("datos"+s+d+u+c+r+e+i);

$.ajax({
type:"POST",
url:'/actclientes',
data:{
   ss:s,dd:d,uu:u,cc:c,rr:r,ee:e,ii:i
}


});

});
});




/*$(document).ready(function(){
    alert("esto es jquery")
    $('.btnact').on('click',function(){
    alert("click")
    let btn=$('.btnact').index(this)
    let cli=$('.cli').eq(btn);
    let nommcli=$('.nommcli').eq(btn);
   let ape=$('.ape').eq(btn);
  let correo=$('.correo').eq(btn);
  let cel=$('.cel').eq(btn);
  let gen=$('.gen').eq(btn);
  let fec=$('.fec').eq(btn);


  let z=cli.val();
  let o=nommcli.val();
  let t=ape.val();
  let n=correo.val();
  let m=cel.val();
  let p=gen.val();
  let i=fec.val();
  alert("datos"+z+o+t+n+m+p+i);

$.ajax({
type:"POST",
url:'/actclientes',
data:{
    di:z,ui:o,ci:t,ri:n,ei:m,vi:p,in:i
}
});

});
});*/