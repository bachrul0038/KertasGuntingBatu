function tekan() {
  swal(
    {
      title: "Silahkan cuy coba sendiri😎😎",
      text: " coba pilih kesukaan lu ❤❤ :",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top",
      inputPlaceholder: "Pilih Antara Kertas, Gunting dan Batu",
    },
    function (inputValue) {
      var comp = Math.floor(Math.random() * 3 + 1);

      if (comp === 1) {
        comp = "kertas";
      } else if (comp === 2) {
        comp = "batu";
      } else {
        comp = "gunting";
      }
      if (inputValue === false) return false;

      if (inputValue === "") {
        swal.showInputError("Pilihan pilihan lu kosong 😒😒");
        return false;
      } else if (inputValue === "batu") {
        hasil = comp === "kertas" ? "lu kalah makanya di sekolah jangan tidur 🤣🤣" : "asik lu menang cuy 🎁 ✨";
      } else if (inputValue === comp) {
        hasil = "Seri!!!🙉🙉🙉";
      } else if (inputValue === "kertas") {
        hasil = comp === "gunting" ? "lu kalah makanya di sekolah jangan tidur 🤣🤣" : "asik lu menang cuy 🎁 ✨";
      } else if (inputValue === "gunting") {
        hasil = inputValue === "batu" ? "Anda Kalah🤣🤣🤣" : "Anda Menang😎😎😎";
      } else {
        swal("masukin yang sesuai aja ya antara gunting.batu dan kertas 😘 😘");
      }

      swal("Hasilnya " + hasil + ", Komputer memilih " + comp + " Dan Anda Memilih " + inputValue);
    }
  );
}
