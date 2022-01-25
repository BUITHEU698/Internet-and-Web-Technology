

function inthongtin(){
  
    hoten = document.getElementById("hoten").value;
    tieude = document.getElementById("tieude").value;
   
    email = document.getElementById("email").value;
    noidung = document.getElementById("noidung").value;
   
    confirm("Họ và tên: " + hoten +  "\nE-mail: "+ email +"\nTiêu đề: "+ tieude + "\nNội dung góp ý: " +"\n" + noidung   )
  }  
  document.getElementById("button").onclick=function(){inthongtin();};