const imageBig = document.querySelector('#image-watch img');
const productTitle = document.querySelector('h1');
const nameSelectedColor = document.querySelector('#selected-color');
const smallImage0 = document.querySelector('[for="0-image"] img');
const smallImage1 = document.querySelector('[for="1-image"] img');
const smallImage2 = document.querySelector('[for="2-image"] img');

const optionsSize = ['41mm', '45mm']; // array com as opções de tamanho
const optionsColor = ['Verde-cipreste', 'Azul-inverno', 'Meia-noite', 'Estelar', 'Rosa-claro', ]; 

let numImageSelected = 1; // variável para armazenar o número da imagem selecionada
let numSizeSelected = 1;
let numColorSelected = 1;

//função para mudar a cor do relógio
function changeColor(){
    const selectedColor = document.querySelector('input[name="color-option"]:checked').id.charAt(0);

    numColorSelected = selectedColor;

    const colorName = optionsColor[numColorSelected];

    productTitle.innerText = `Pulseira loop esportiva ${colorName.toLowerCase()} para caixa de ${optionsSize[numSizeSelected]}`; // altera o título do produto com a cor e tamanho selecionados

    nameSelectedColor.innerText = `Cor - ${colorName}`;

    imageBig.src = `imagens/opcoes-cores/imagens-${colorName.toLowerCase()}/imagem-${numImageSelected}.jpeg`;

    smallImage0.src = `imagens/opcoes-cores/imagens-${colorName.toLowerCase()}/imagem-0.jpeg`;
    smallImage1.src = `imagens/opcoes-cores/imagens-${colorName.toLowerCase()}/imagem-1.jpeg`;
    smallImage2.src = `imagens/opcoes-cores/imagens-${colorName.toLowerCase()}/imagem-2.jpeg`;
}

//função para mudar o tamanho da caixa do relógio
function changeSize(){
    const selectedSize = document.querySelector('input[name="size"]:checked').id.charAt(0); // seleciona o id do input marcado e pega o primeiro caractere (número do tamanho)

    numSizeSelected = selectedSize; // atualiza a variável com o número do tamanho selecionado

    const watchSize = optionsSize[numSizeSelected];

    productTitle.innerText = `Pulseira loop esportiva ${optionsColor[numColorSelected].toLowerCase()} para caixa de ${watchSize}`; // altera o título do produto com o tamanho e cor selecionado

    if(watchSize === "41mm"){
        imageBig.classList.add('small-box'); 
    } else{
        imageBig.classList.remove('small-box');
    }
}

// função para mudar a imagem grande e exibir a imagem correspondente ao modelo clicado
function changeImageBig() {
    const selectedOption = document.querySelector('input[name="option-image"]:checked').id; // seleciona o id do input marcado

    numImageSelected = selectedOption.charAt(0); // pega o primeiro caractere do id (número da imagem)

    imageBig.src = `imagens/opcoes-cores/imagens-${optionsColor[numColorSelected].toLowerCase()}/imagem-${numImageSelected}.jpeg`; // altera o atributo src da imagem
}