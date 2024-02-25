function autoCarousel() {
  const carrosselBolo = document.getElementById('carrosel-bolo');
  const imagens = carrosselBolo.getElementsByTagName('img');
  let index = 0;

  setInterval(() => {
    imagens[index].style.opacity = 0; // Reduz a opacidade da imagem atual
    imagens[index].style.display = 'none'; // Oculta a imagem atual
    index = (index + 1) % imagens.length;
    imagens[index].style.display = 'block'; // Exibe a próxima imagem
    imagens[index].style.opacity = 1; // Aumenta a opacidade da próxima imagem
  }, 3000); // Altere o intervalo conforme necessário
}

// Chamar a função quando a página carrega
window.addEventListener('load', autoCarousel);
