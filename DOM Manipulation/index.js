/** @format */

// /** @format */

// const body = document.body;
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   body.classList.toggle("biruMuda");
//   body.style.color = "white";
//   body.style.border = "2px solid white";
// });

// const h1 = document.querySelector("h1");

// h1.setAttribute("id", "judul");

// // cara membuat element

// const pBaru = document.createElement("p");
// const textP = document.createTextNode("Paragraf Baru");
// pBaru.appendChild(textP);

// const sectionA = document.querySelector("section#a");
// sectionA.appendChild(pBaru);

// const liBaru = document.createElement("li");
// const textLi = document.createTextNode("Item Baru");
// liBaru.appendChild(textLi);

// const section = document.querySelector("section#b ul");
// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// section.insertBefore(liBaru, li2);

// const item3 = document.querySelector("section#b ul li:nth-child(4)");

// section.removeChild(item3);

// const link = document.getElementsByTagName("a")[0];
// sectionA.removeChild(link);

// const p4 = section.querySelector("p");

// const h2 = document.createElement("h2");
// const h2Text = document.createTextNode("Judul Baru");
// h2.appendChild(h2Text);
// section.replaceChild(h2, p4);

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.getElementsByTagName("ul")[0];

  const liBaru = document.createElement("li");
  const liBaruText = document.createTextNode("Item Baru");

  liBaru.appendChild(liBaruText);
  ul.appendChild(liBaru);
});
