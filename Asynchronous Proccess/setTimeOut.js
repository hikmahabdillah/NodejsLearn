// Fungsi setTimeout() merupakan cara paling dasar untuk membuat baris kode berjalan secara asynchronous.
console.log("Selamat datang!");

setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);

console.log("Ada yang bisa dibantu?");

//  nyatanya setTimeout() tidak akan menghentikan JavaScript untuk mengeksekusi kode pada baris berikutnya. Jadi, urutannya seperti ini.

// Mencetak →  Selamat datang!
// Mencetak → Ada yang bisa dibantu?
// Menunggu selama tiga detik.
// Mencetak → Terima kasih sudah mampir, silakan datang kembali!
