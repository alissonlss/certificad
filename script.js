function mudaTema() {
  document.body.classList.toggle("dark");

  if (document.body.classList.valueOf() == "dark") {
    document.getElementById("redes-sociais").innerHTML =
      '<a href="https://codepen.io/alissonleo22"><img class="contato" src="https://cdn.pixabay.com/photo/2022/03/15/18/13/code-7070894__480.png" alt="logo CodePen"></a><a href="https://github.com/alissonlss"><img class="contato" src="https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png" alt="logo GitHub"></a>';
  } else {
    document.getElementById("redes-sociais").innerHTML =
      '<a href="https://codepen.io/alissonleo22"><img class="contato" src="https://cdn-icons-png.flaticon.com/512/2111/2111501.png" alt="logo CodePen"></a><a href="https://github.com/alissonlss"><img class="contato" src="https://cdn.icon-icons.com/icons2/3206/PNG/512/github_icon_195978.png" alt="logo GitHub"></a>';
  }
}