// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
  e.preventDefault(); // cegah scroll ke atas
};

//klik di luar sidebar untuk ngilangin nav
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});
function tampilKhasiat(jenis) {
  const khasiatText = {
    sumrah:
      "Madu Sumrah memiliki kandungan antioksidan tinggi yang baik untuk kesehatan jantung.",
    marai:
      "Madu Marai membantu meningkatkan daya tahan tubuh dan mempercepat penyembuhan luka.",
    randu:
      "Madu Randu berfungsi untuk menambah energi dan membantu memperbaiki pencernaan.",
  };

  const isiKhasiat = document.getElementById("isi-khasiat");
  isiKhasiat.innerText =
    khasiatText[jenis] || "Informasi khasiat belum tersedia.";
  document.getElementById("popup-khasiat").style.display = "flex";
}
