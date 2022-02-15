//********************************************* */

const btn = document.getElementById("btn");

btn.addEventListener("click",(event) => {
    let kullanıcı_girdi = document.querySelectorAll(".girdi");
    let girilen_numaralar = [];
    for (let i = 0; i < kullanıcı_girdi.length; i++) {
        girilen_numaralar.push(kullanıcı_girdi[i].value);
        
    }
    console.log(girilen_numaralar);
})