/** @format */

const judul = document.getElementById("judul");

// judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Pemuda Teknologi";

const a = document.getElementsByTagName("p");
for (let i = 0; i < a.length; i++) {
  a[i].style.backgroundColor = "lightblue";
}
