


const submitAction = document.getElementById("formDataDiri");
submitAction.addEventListener("submit", function(){
    const inputNama = document.getElementById("nama").value;
    const inputDomisili = document.getElementById("domisili").value;
    const hiddenMessage = `Hallo ${inputNama}, bagaimana cuacanya di ${inputDomisili} ?`;
    document.getElementById("messageAfterSubmit").innerText = hiddenMessage;
    event.preventDefault();
});


// NB: Pada saat kita menekan tombol submit, halaman website biasanya akan melakukan proses refresh. Kode event.preventDefault() itu berfungsi untuk mencegah proses refresh tersebut.