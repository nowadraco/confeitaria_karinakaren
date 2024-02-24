document.addEventListener("DOMContentLoaded", function() {
    // Selecionar todas as imagens com a classe "marca-d'água"
    const imagensMarcaDagua = document.querySelectorAll('.marca-dagua');
  
    // Iterar sobre cada imagem e adicionar a marca d'água
    imagensMarcaDagua.forEach(function(imagem) {
      // Criar elemento de marca d'água como uma imagem
      const marcaDagua = new Image();
      marcaDagua.src = './src/img/confeitaria_karina_karen.png'; // Coloque o caminho para a sua imagem aqui
      marcaDagua.alt = 'Marca d\'água'; // Texto alternativo para acessibilidade
      marcaDagua.style.position = 'absolute';
      marcaDagua.style.bottom = '10px';
      marcaDagua.style.right = '10px';
      marcaDagua.style.width = '100px'; // Defina o tamanho da imagem conforme necessário
      marcaDagua.style.height = 'auto'; // Mantenha a proporção da imagem
  
      // Adicionar a marca d'água à imagem
      imagem.parentNode.insertBefore(marcaDagua, imagem.nextSibling);
    });
  });