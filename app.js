//********************************************* */

const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  //Kullanıcıdan numaraları bir array içinde tutma işlemi
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  let kullanıcı_girdi = document.querySelectorAll(".girdi");
  let girilen_numaralar = [];
  for (let i = 0; i < kullanıcı_girdi.length; i++) {
    girilen_numaralar.push(parseInt(kullanıcı_girdi[i].value));
  }
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Şanslı numaraların atama işlemini gerçekleştirmek için döngü kuruldu.
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  let şanslı_numaralar = document.querySelectorAll(".numara");
  let şanslı_numaralar_array = [];
  for (let i = 0; i < 8; i++) {
    let numRandom = Math.floor(Math.random() * 99) + 1;
    if (şanslı_numaralar_array.includes(numRandom)) {
      şanslı_numaralar_array.push(Math.floor(Math.random() * 99) + 1);
    } else {
      şanslı_numaralar_array.push(numRandom);
    }
  }
  şanslı_numaralar_array = şanslı_numaralar_array.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < şanslı_numaralar.length; i++) {
    şanslı_numaralar[i].textContent = şanslı_numaralar_array[i];
  }
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  //*****Eşleşen sayıları bulmak için kurulan döngü */
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  let bulunen_sayılar = [];
  for (let i = 0; i < girilen_numaralar.length; i++) {
    if (şanslı_numaralar_array.includes(girilen_numaralar[i])) {
      bulunen_sayılar.push(girilen_numaralar[i]);
    }
  }
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  //girilen para değerinin hesaplanması ile ilgili işlemler yapıldı
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  let para_giriş = document.getElementById("para");
  let kazanç = para_giriş.value * bulunen_sayılar.length;
  // kazanç tablosuna kazanılan para miktarının yazdırılması ile ilgili işlemler.
  let li = document.createElement("li");
  let ul = document.getElementById("finans_tablosu_ul");
  li.setAttribute("id", "finans_tablosu_ul_li");

  if (kazanç != 0) {
    li.style.color = "green";
    li.style.fontSize = "20px";
    li.innerHTML = `Tebrikler ${kazanç}₺ Kazandınız`;
    para_giriş.value = kazanç;
  } else {
    li.style.color = "red";
    li.style.fontSize = "20px";
    li.innerHTML = `Kaybettiniz!!!`;
    setTimeout((event) => {
      window.location.reload(false);
    }, 800);
  }

  ul.appendChild(li);

  event.preventDefault();
});
