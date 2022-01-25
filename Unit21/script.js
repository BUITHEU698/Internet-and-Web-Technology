function giai_ptbac1(){
    //doc biem trong html
    a = document.getElementById("a_1").value;
    b = document.getElementById("b_1").value;
    var kq = "";
    //giai phuong trinh ba 1
   
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
   document.getElementById("gptb1").onclick=function(){giai_ptbac1();};



function giai_ptbac2(){
    //doc biem trong html
  
        a = document.getElementById("a_2").value;
        b = document.getElementById("b_2").value;
        c = document.getElementById("c_2").value;
        var kq = "";
    //giai phuong trinh ba 2
        if(a == 0) {
            
            if(b == 0) {
                if (c == 0) {
                    kq='Phuong trinh vo so nghiem';
                    
                } else {
                    kq='Phuong trinh vo nghiem';
                }
            } else {
                kq='Phuong trinh co nghiem duy nhat: '+(-c/b);
            }
        } else {
            var delta = b*b - 4*a*c;
            if(delta > 0) {
                var x1 = (-b+Math.sqrt(delta))/(2*a);
                var x2 = (-b-Math.sqrt(delta))/(2*a);
                kq= 'x1 = '+x1+' / x2 = '+x2;
            } else if ( delta == 0) {
                var x = -b/2*a
                kq='Phuong trinh co nghiem kep: x1 = x2 = ' + x ;
            } else {
                kq= 'Phuong trinh vo nghiem';
            }
        }
        document.getElementById("kq_2").innerHTML = kq;

    }

    document.getElementById("gptb2").onclick=function(){giai_ptbac2();};