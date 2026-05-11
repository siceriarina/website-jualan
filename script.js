let keranjang = [];

function tambah(namaProduk){
  keranjang.push(namaProduk);
  tampilkan();
}

function tampilkan(){
  let list = document.getElementById("list");
  list.innerHTML = "";

  keranjang.forEach((item, i) => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function checkout(){

  if(keranjang.length === 0){
    alert("Keranjang masih kosong!");
    return;
  }

  let email = "maryamsyasmin@gmail.com";

  let isi = "Halo, saya mau pesan:\n\n";

  keranjang.forEach(item => {
    isi += "- " + item + "\n";
  });

  window.location.href =
  `mailto:${email}?subject=Pesanan Ganci&body=${encodeURIComponent(isi)}`;

  keranjang = [];
  tampilkan();
}
