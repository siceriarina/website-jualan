let cart = JSON.parse(localStorage.getItem("cart")) || [];

function save(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function tambah(nama, harga){
  cart.push({nama, harga});
  save();
  render();
}

function hapus(index){
  cart.splice(index, 1);
  save();
  render();
}

function render(){

  let list = document.getElementById("list");
  let total = document.getElementById("total");

  list.innerHTML = "";

  let sum = 0;

  cart.forEach((item, i) => {

    sum += item.harga;

    let li = document.createElement("li");

    li.innerHTML = `
      ${item.nama} - Rp ${item.harga}
      <button class="delete" onclick="hapus(${i})">X</button>
    `;

    list.appendChild(li);
  });

  total.innerText = sum;
}

function checkout(){

  if(cart.length === 0){
    alert("Keranjang kosong!");
    return;
  }

  let email = "maryamsyasmin@gmail.com";

  let text = "Halo, saya mau pesan:\n\n";

  let total = 0;

  cart.forEach(item => {
    text += - ${item.nama} (Rp ${item.harga})\n;
    total += item.harga;
  });

  text += \nTotal: Rp ${total};

  window.location.href =
  mailto:${email}?subject=Pesanan Ganci&body=${encodeURIComponent(text)};

  cart = [];
  save();
  render();
}

render();
