document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-itens');
  
    menuToggle.addEventListener('click', function() {
      // Alternar a classe 'active' nos itens do menu
      menuItems.classList.toggle('active');
  
      // Alternar entre ícone de hamburger e ícone de "x"
      menuToggle.querySelector('.hamburger').classList.toggle('close');
    });
  });
