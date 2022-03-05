


document.addEventListener('DOMContentLoaded', function (){
    const inputMaxLengthOnLoad = document.getElementById("inputNamaPanggilan").maxLength;
    document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;
    document.getElementById("notifikasiSisaKarakter").style.visibility = "hidden";
});

document.getElementById("inputNamaPanggilan").addEventListener("input", function(){
    const jumlahKarakterDiketik = document.getElementById("inputNamaPanggilan").value.length;
    const jumlahKarakterMaksimal = document.getElementById("inputNamaPanggilan").maxLength;
    console.info(jumlahKarakterDiketik, jumlahKarakterMaksimal);

    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById("sisaKarakter").innerText = sisaKarakterUpdate;

    if(sisaKarakterUpdate == 0){
        document.getElementById("sisaKarakter").innerText = "batas maksimal tercapai!";
    }else if(sisaKarakterUpdate <= 5){
        document.getElementById("notifikasiSisaKarakter").style.color = "red";
    }else{
        document.getElementById("notifikasiSisaKarakter").style.color = "black";
    }
});

document.getElementById("inputNamaPanggilan").addEventListener("focus", function(){
    document.getElementById("notifikasiSisaKarakter").style.visibility = null;
});

document.getElementById("inputNamaPanggilan").addEventListener("blur", function(){
    document.getElementById("notifikasiSisaKarakter").style.visibility = "hidden";
});