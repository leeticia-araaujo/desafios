const playPauseBtn = document.querySelector('.play-pause');
const audio = document.getElementById('audio');
const backward = document.getElementById('backward');
const forward = document.getElementById('forward');
const title = document.getElementById('title');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const chapters = 10;

let isPlaying = false;
let currentChapter = 1;

function playAudio(){
    audio.play();
    isPlaying = true;
    playPauseBtn.classList.add('on');

    updateTime()
}

function pauseAudio(){
    audio.pause();
    isPlaying = false;
    playPauseBtn.classList.remove('on');

    updateTime()
}

function nextChapter(){
    pauseAudio();

    if(currentChapter  < chapters){
        currentChapter++;
    } else {
        currentChapter = 1;
    }

    audio.src = `audios/${currentChapter}.mp3`;
    title.innerText = `Capítulo ${currentChapter}`;
}

function backChapter(){
    pauseAudio();

    if(currentChapter === 1){
        currentChapter = chapters;
    } else{
        currentChapter--;
    }

    audio.src = `audios/${currentChapter}.mp3`;
    title.innerText = `Capítulo ${currentChapter}`;
}

playPauseBtn.addEventListener('click', () => {
    isPlaying ? pauseAudio() : playAudio();
});

forward.addEventListener('click', nextChapter);
backward.addEventListener('click', backChapter);

//barra de progresso 

const formatZero = (n) => (n < 10 ? "0" + n : n); //formata o número garantindo que números de 0 a 9 tenham um zero na frente

const updateTime = () => {
    const currentMinutes = Math.floor(audio.currentTime / 60); //calcula os minutos atuais do audio, arredondando para baixo
    const currentSeconds = Math.floor(audio.currentTime % 60); //calcula os segundos atuais do audio, arredondando para baixo
    currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds); //altera o texto de currentTime com os minutos + segundos formatados

    const durationFormatted = isNaN(audio.duration) ? 0 : audio.duration;  //verifica a duração total do audio

    const durationMinutes = Math.floor(durationFormatted / 60); //calcula os minutos totais
    const durationSeconds = Math.floor(durationFormatted % 60); //calcula os segundos totais
    duration.textContent = durationMinutes + ':' + formatZero(durationSeconds); //altera o texto da duração final com os minutos + segundos formatados
    
    const progressWidth = durationFormatted ? (audio.currentTime / durationFormatted) * 100 : 0; //calcula a % do progresso do audio se durationFormatted for diferente de 0, senão o progresso é 0%

    progress.style.width = progressWidth + '%'; //define a largura do elemento progress de acordo com a %
};

audio.ontimeupdate = () => updateTime(); //chama a função enquanto o audio está sendo reproduzido 

progressBar.onclick = (e) => { 
    const newTime = (e.offsetX / progressBar.offsetWidth) * audio.duration; //calcula o novo tempo de reprodução com base no clique do úsuario 
    audio.currentTime = newTime; //altera a reprodução do audio para o novo ponto 
}