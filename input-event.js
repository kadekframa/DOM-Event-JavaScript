


document.addEventListener('DOMContentLoaded', function (){
    const inputMaxLengthOnLoad = document.getElementById("inputNamaPanggilan").maxLength;
    document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;
    document.getElementById("notifikasiSisaKarakter").style.visibility = "hidden";
});

// Event onInput.
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


// Event onFocus.
document.getElementById("inputNamaPanggilan").addEventListener("focus", function(){
    document.getElementById("notifikasiSisaKarakter").style.visibility = null;
});


// Event onBlur.
document.getElementById("inputNamaPanggilan").addEventListener("blur", function(){
    document.getElementById("notifikasiSisaKarakter").style.visibility = "hidden";
});


// Event onChange.
document.getElementById("inputCaptcha").addEventListener("change", function(){
    const inputCaptcha = document.getElementById("inputCaptcha").value;
    const submitButtonsStatus = document.getElementById("submitButton");
    if(inputCaptcha == "PRNU"){
        submitButtonsStatus.removeAttribute("disabled");
    }else{
        alert("Captcha Anda belum tepat ! :(");
        submitButtonsStatus.addAttribute("disabled", true);
    }
});


// Event inputCopy.
document.getElementById("inputCopy").addEventListener("copy", function(){
    alert("Anda Telah Men-copy Sesuatu!");
});


// Event inputPaste.
document.getElementById("inputPaste").addEventListener("paste",function(){
    alert("Anda telah men-paste sebuah teks..");
});