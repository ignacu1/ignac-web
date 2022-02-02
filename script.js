function check(){
    const input = document.getElementById("input");
    const prt1 = "veCC"
    const prt7 = "en"
    const prt8 = "da";
    const prt11 = prt1.charAt(3) + prt1.charAt(2) + prt1.charAt(1) + prt1.charAt(0);
    const prt2 = "PwpiPc"
    if(input.value === prt11 + prt2){
        if(true){
            location.href = prt8 + "ta/libs/ht" + "ml/pages/sites/" + prt7 + "d.html"; 
        } else if(false){
            location.href = "secret.html"; 
        }
    }
}