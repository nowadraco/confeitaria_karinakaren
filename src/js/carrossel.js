function autoCarousel(carouselId) {
  const carrossel = document.getElementById(carouselId);
  const imagens = carrossel.getElementsByTagName('img');
  let index = 0;
  
  for (let i = 1; i < imagens.length; i++) {
    imagens[i].style.display = 'none';
  }

  setInterval(() => {
    imagens[index].style.display = 'none';
    index = (index + 1) % imagens.length;
    imagens[index].style.display = 'block';
  }, 5000);
}

window.addEventListener('load', () => {
  autoCarousel('carrossel-bolo');
  autoCarousel('carrossel-doces');
  autoCarousel('carrossel-cupcakes');
  autoCarousel('carrossel-cookies');
  autoCarousel('carrossel-tortas');
  autoCarousel('carrossel-destaques');
});
