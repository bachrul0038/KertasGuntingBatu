function tekan() {
  swal(
    {
      title: "Silahkan cuy coba sendiriππ",
      text: " coba pilih kesukaan lu β€β€ :",
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
        swal.showInputError("Pilihan pilihan lu kosong ππ");
        return false;
      } else if (inputValue === "batu") {
        hasil = comp === "kertas" ? "lu kalah makanya di sekolah jangan tidur π€£π€£" : "asik lu menang cuy π β¨";
      } else if (inputValue === comp) {
        hasil = "Seri!!!πππ";
      } else if (inputValue === "kertas") {
        hasil = comp === "gunting" ? "lu kalah makanya di sekolah jangan tidur π€£π€£" : "asik lu menang cuy π β¨";
      } else if (inputValue === "gunting") {
        hasil = inputValue === "batu" ? "Anda Kalahπ€£π€£π€£" : "Anda Menangπππ";
      } else {
        swal("masukin yang sesuai aja ya antara gunting.batu dan kertas π π");
      }

      swal("Hasilnya " + hasil + ", Komputer memilih " + comp + " Dan Anda Memilih " + inputValue);
    }
  );
}
