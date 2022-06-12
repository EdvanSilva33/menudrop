
/* Quando o usuário clica no botão,
alternar entre ocultar e mostrar o conteúdo suspenso*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  /**Feche a lista suspensa se o usuário clicar fora dela*/
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }