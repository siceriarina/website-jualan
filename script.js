function pesan(namaProduk){

  let nama = prompt("Masukkan nama kamu:");

  if(nama){

    let email = "maryamsyasmin@gmail.com";

    let subject = "Pesanan Ganci";

    let body =
`Halo, saya ${nama}
Mau pesan:
${namaProduk}`;

    window.location.href =
`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
