function autoCarousel() {
  const carrosselBolo = document.getElementById('carrosel-bolo');
  const imagens = carrosselBolo.getElementsByTagName('img');
  let index = 0;

  setInterval(() => {
    imagens[index].style.display = 'none';
    index = (index + 1) % imagens.length;
    imagens[index].style.display = 'block';
  }, 3000); // Altere o intervalo conforme necessário
}

window.addEventListener('load', autoCarousel);