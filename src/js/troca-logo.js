
// Seletor para a imagem da logo
const logo = document.querySelector('.logo-img');


// Função para trocar a logo com base na largura da tela
function trocarLogoComBaseNaResolucao() {
    // Largura atual da tela
    const larguraTela = window.innerWidth;

    // Verificar se a largura da tela é menor que 768 pixels
    if (larguraTela < 768) {
        // Caminho da nova logo para telas pequenas
        const novoCaminhoLogo = './src/img/logo-m.png';
        
        // Alterando o atributo src da imagem da logo
        logo.src = novoCaminhoLogo;
    }
}

// Chamar a função quando a página carrega e sempre que a tela é redimensionada
window.addEventListener('load', trocarLogoComBaseNaResolucao);
window.addEventListener('resize', trocarLogoComBaseNaResolucao);
