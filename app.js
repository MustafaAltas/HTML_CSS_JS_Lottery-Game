//********************************************* */

const btn = document.getElementById("btn");

btn.addEventListener("click",(event) => {

    //Kullanıcıdan numaraları bir array içinde tutma işlemi
    let kullanıcı_girdi = document.querySelectorAll(".girdi");
    let girilen_numaralar = [];
    for (let i = 0; i < kullanıcı_girdi.length; i++) {
        girilen_numaralar.push(parseInt(kullanıcı_girdi[i].value));
        
    }



    // Şanslı numaraların atama işlemini gerçekleştirmek için döngü kuruldu.
    let şanslı_numaralar = document.querySelectorAll(".numara");
    console.log(şanslı_numaralar);
    let şanslı_numaralar_array = [];
    for (let i = 0; i < şanslı_numaralar.length; i++) {
        let numRandom = Math.floor(Math.random() * 99) + 1;
        şanslı_numaralar[i].innerHTML = numRandom;
        şanslı_numaralar_array.push(numRandom);
        
    }


    let bilinen_sayılar = [];
    for (let i = 0; i < girilen_numaralar.length; i++) {
        if (şanslı_numaralar_array.includes(girilen_numaralar[i])){
            bilinen_sayılar.push(girilen_numaralar[i])
        }
    }
    console.log(bilinen_sayılar);
    console.log(girilen_numaralar);
    console.log(şanslı_numaralar_array);


})