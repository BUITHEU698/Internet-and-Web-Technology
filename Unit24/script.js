function tinhchiso_bmi(){
    //doc biem trong html

    var thongtin = {};
    //giai phuong trinh ba 1
    thongtin.cannang = document.getElementById("can_nang").value;
    thongtin.chieucao = document.getElementById("chieu_cao").value;
    thongtin.tuoi =  document.getElementById("tuoi").value;
  
    var bmi = thongtin.cannang/( thongtin.chieucao * thongtin.chieucao)
    alert(bmi < )
    if(a==0)
    {   if(b==0){
            kq = "phuong trinh vo so nghiem";
         }
         else{
            kq = "phuong trinh vo nghiem";
         }
    
    }else{
        kq =  (-b/a);
    }
    document.getElementById("kq_1").innerHTML = kq;
    
}
  

