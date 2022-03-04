function welcome(){
    alert("Sim Salabbim muncullah elemen-elemen HTML !!!");
    const contents = document.querySelector(".contents");
    contents.removeAttribute("hidden");
}


function increment(){
    document.getElementById("count").innerText++;

    if(document.getElementById("count").innerText == 7){
        const hiddenMessage = document.createElement("h4");
        hiddenMessage.innerText = "Selamat Anda Telah Menekan Tombol Sebanyak 7 kali!";
        const image = document.createElement("img");
        image.setAttribute("src","https://i.ibb.co/0V49VRZ/catto.jpg");

        const content = document.querySelector(".contents");
        content.appendChild(hiddenMessage).appendChild(image);

    }
}


// document.body.onload = welcome;
// document.getElementById("incrementButton").onclick = increment;